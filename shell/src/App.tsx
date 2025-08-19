import React, { useEffect, useMemo, useState } from "react";

type RemoteComp = React.ComponentType<{ tenant: string }>

interface ModuleConfig {
  name?: string;
  url: string;
}

interface TenantConfig {
  tenant: string;
  modules: ModuleConfig[];
}

declare global {
  interface Window {
    React: typeof React;
  }
}

function base64UrlToJson<T = unknown>(param: string | null): T | null {
  if (!param) return null;
  try {
    const b64 = param.replace(/-/g, '+').replace(/_/g, '/');
    const jsonStr = decodeURIComponent(escape(atob(b64)));
    return JSON.parse(jsonStr) as T;
  } catch {
    return null;
  }
}

function useConfigFromUrl(): TenantConfig {
  return useMemo(() => {
    const url = new URL(window.location.href);
    const cfgParam = url.searchParams.get('cfg');
    const fallbackTenant = url.searchParams.get('tenant') || 'demo';

    const parsed = base64UrlToJson<Partial<TenantConfig>>(cfgParam);
    const tenant = (parsed?.tenant && String(parsed.tenant)) || fallbackTenant;
    const modules = Array.isArray(parsed?.modules) ? parsed!.modules : [];

    return { tenant, modules };
  }, [])
}


export default function App() {
  const {tenant, modules } = useConfigFromUrl();
  
  const [components, setComponents] = useState<Array<{ name: string; Comp: RemoteComp | null}>>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.React = React
  }, []);
  
  useEffect(() => {
    let cancelled = false
    async function loadAll() {
      if (!modules.length) return
      setLoading(true)
      setErrors([])
      const loaded: Array<{ name: string; Comp: RemoteComp | null }> = []

      for (const m of modules) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mod: any = await import(/* @vite-ignore */ m.url)
          const Comp: RemoteComp | null = (mod?.default ?? null) as RemoteComp | null
          loaded.push({ name: m.name || m.url, Comp })
        } catch (e) {
          console.error(e);
          loaded.push({ name: m.name || m.url, Comp: null })
          setErrors(prev => [...prev, `Fehler beim Laden: ${m.name || m.url}`])
        }
      }

      if (!cancelled) {
        setComponents(loaded)
        setLoading(false)
      }
    }
    setComponents([])
    loadAll()

    return () => {
      cancelled = true
    }
  }, [modules]);

  async function loadDemoModule() {
    setLoading(true)
    setErrors([])
    try {
      const url = new URL('/demo-remote.js', window.location.origin).href
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mod: any = await import(/* @vite-ignore */ url)
      const Comp: RemoteComp | null = (mod?.default ?? null) as RemoteComp | null
      setComponents([{ name: 'demo', Comp }])
    } catch (e) {
      setErrors([`Demo-Modul konnte nicht geladen werden: ${String(e)}`])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui', padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ marginBottom: 8 }}>Shell – Mandant: {tenant}</h2>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Diese Shell lädt Module zur Laufzeit über eine URL (Parameter <code>cfg</code>).
      </p>

      {modules.length === 0 && (
        <div style={{ margin: '16px 0', padding: 12, border: '1px dashed #bbb', borderRadius: 8 }}>
          <b>Keine Module in der URL gefunden.</b>
          <div style={{ marginTop: 8 }}>
            <button onClick={loadDemoModule}>Demo‑Modul laden</button>
          </div>
          <small style={{ display: 'block', marginTop: 8, opacity: 0.7 }}>
            Später kommt hier die Konfiguration aus deinem „Shop“ als <code>cfg</code>-Parameter rein.
          </small>
        </div>
      )}

      {loading && <p>Lade Module…</p>}

      {errors.length > 0 && (
        <div style={{ color: 'crimson', margin: '8px 0' }}>
          {errors.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr' }}>
        {components.map(({ name, Comp }) => (
          <section key={name} style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>Modul: {name}</div>
            {Comp ? <Comp tenant={tenant} /> : <i>Modul konnte nicht gerendert werden.</i>}
          </section>
        ))}
      </div>
    </div>
  );

}