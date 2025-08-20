import React, { useEffect, useMemo, useState } from "react"

type RemoteComp = React.ComponentType<{ tenant: string }>

interface ModuleConfig {
  name?: string
  url: string
}
interface TenantConfig {
  tenant: string
  modules: ModuleConfig[]
}

// ---- Globale React-Referenz (für simple Remotes ohne JSX) ----
declare global {
  interface Window {
    React: typeof React
  }
}

// ---- Helpers ----
function base64UrlToJson<T = unknown>(param: string | null): T | null {
  if (!param) return null
  try {
    const b64 = param.replace(/-/g, "+").replace(/_/g, "/")
    const jsonStr = decodeURIComponent(escape(atob(b64)))
    return JSON.parse(jsonStr) as T
  } catch {
    return null
  }
}

function getQuery() {
  const u = new URL(window.location.href)
  return {
    tenant: u.searchParams.get("tenant"),
    app: u.searchParams.get("app"),
    cfg: u.searchParams.get("cfg"),
  }
}

// Eigener Typ fürs dynamisch geladene Modul, damit wir kein "any" brauchen
type RemoteModule = { default?: RemoteComp }

async function loadRemote(url: string): Promise<RemoteComp | null> {
  // Vollqualifizierte URL ist Pflicht
  const full = new URL(url, window.location.origin).href
  const mod = (await import(/* @vite-ignore */ full)) as RemoteModule
  return mod.default ?? null
}

const API_URL = "http://localhost:4000" // <- deine Mini-API aus Phase A

export default function App() {
  const [currentTenant, setCurrentTenant] = useState<string>("demo")
  const [components, setComponents] = useState<Array<{ name: string; Comp: RemoteComp | null }>>([])
  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  // React global bereitstellen (für simple ES-Module, die window.React nutzen)
  useEffect(() => {
    window.React = React
  }, [])

  // cfg aus URL (Fallback, wenn kein tenant/app)
  const cfgFromUrl = useMemo(() => {
    const { cfg } = getQuery()
    return base64UrlToJson<TenantConfig>(cfg)
  }, [])

  // Haupt-Load-Logik: 1) tenant/app -> API, 2) cfg -> direkt, 3) Demo
  useEffect(() => {
    let cancelled = false

    async function loadFromModules(modules: ModuleConfig[], tenantLabel: string) {
      setLoading(true)
      setErrors([])
      const loaded: Array<{ name: string; Comp: RemoteComp | null }> = []
      for (const m of modules) {
        try {
          const Comp = await loadRemote(m.url)
          loaded.push({ name: m.name || m.url, Comp })
        } catch (e) {
          console.error(e)
          loaded.push({ name: m.name || m.url, Comp: null })
          setErrors(prev => [...prev, `Fehler beim Laden: ${m.name || m.url}`])
        }
      }
      if (!cancelled) {
        setComponents(loaded)
        setCurrentTenant(tenantLabel)
        setLoading(false)
      }
    }

    (async () => {
      const { tenant, app } = getQuery()

      // 1) tenant + app: Konfiguration von der API holen
      if (tenant && app) {
        setComponents([])
        setLoading(true)
        setErrors([])
        try {
          const res = await fetch(
            `${API_URL}/api/apps/${encodeURIComponent(tenant)}/${encodeURIComponent(app)}`
          )
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
          }
          const data = (await res.json()) as { tenantId: string; appName: string; modules: ModuleConfig[] }
          await loadFromModules(data.modules, tenant)
          return
        } catch (e) {
          setErrors([`Konfiguration nicht gefunden oder API-Fehler: ${String(e)}`])
          setLoading(false)
          // fällt danach weiter zu 2) / 3) durch
        }
      }

      // 2) Fallback: cfg-Parameter
      if (cfgFromUrl?.modules && cfgFromUrl.modules.length > 0) {
        await loadFromModules(cfgFromUrl.modules, cfgFromUrl.tenant || "demo")
        return
      }

      // 3) Kein tenant/app und kein cfg -> leer lassen (Demo-Button anbieten)
      setComponents([])
      setCurrentTenant("demo")
    })()

    return () => {
      cancelled = true
    }
  }, [cfgFromUrl])

  // Lokales Demo-Modul (aus /public) laden
  async function loadDemoModule() {
    setLoading(true)
    setErrors([])
    try {
      const url = new URL("/demo-remote.js", window.location.origin).href
      const Comp = await loadRemote(url)
      setComponents([{ name: "demo", Comp }])
    } catch (e) {
      setErrors([`Demo-Modul konnte nicht geladen werden: ${String(e)}`])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ fontFamily: "system-ui", padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 8 }}>Shell – Mandant: {currentTenant}</h2>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Lädt Module zur Laufzeit. Priorität: <code>?tenant=&amp;app=</code> → API, sonst <code>?cfg=</code>.
      </p>

      {components.length === 0 && !loading && (
        <div style={{ margin: "16px 0", padding: 12, border: "1px dashed #bbb", borderRadius: 8 }}>
          <b>Keine Module geladen.</b>
          <div style={{ marginTop: 8 }}>
            <button onClick={loadDemoModule}>Demo‑Modul laden</button>
          </div>
          <small style={{ display: "block", marginTop: 8, opacity: 0.7 }}>
            Nutze den Shop zum Speichern oder hänge einen <code>cfg</code>-Parameter an.
          </small>
        </div>
      )}

      {loading && <p>Lade Module…</p>}

      {errors.length > 0 && (
        <div style={{ color: "crimson", margin: "8px 0" }}>
          {errors.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </div>
      )}

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr" }}>
        {components.map(({ name, Comp }) => (
          <section key={name} style={{ padding: 16, border: "1px solid #eee", borderRadius: 8 }}>
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>Modul: {name}</div>
            {Comp ? <Comp tenant={currentTenant} /> : <i>Modul konnte nicht gerendert werden.</i>}
          </section>
        ))}
      </div>
    </div>
  )
}
