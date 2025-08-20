import { useMemo, useState } from "react"

const SHELL_URL = "http://localhost:5174"
const API_URL = "http://localhost:4000"


export default function App() {
  const [tenant, setTenant] = useState("kunde123")
  const [appName, setAppName] = useState("meine-app")
  const [selected, setSelected] = useState<string[]>([])
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const toggle = (name: string) =>
    setSelected((prev) => (prev.includes(name) ? prev.filter((m) => m !== name) : [...prev, name]))

  const modules = useMemo(
    () =>
      selected.map((name) => ({
        name,
        url: `https://kilianperle.github.io/ba-prototype/${name}/${name}.es.js`,
      })),
    [selected]
  )

  const shellLink = `${SHELL_URL}/?tenant=${encodeURIComponent(tenant)}&app=${encodeURIComponent(appName)}`

  async function saveApp() {
    setBusy(true)
    setMessage(null)
    try {
      const res = await fetch(`${API_URL}/api/apps`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tenantId: tenant, appName, modules })
      })
      if (res.status === 201) {
        setMessage("Gespeichert ✅")
      } else if (res.status === 409) {
        setMessage("App-Name existiert bereits für diesen Tenant ❌")
      } else {
        const t = await res.text()
        setMessage(`Fehler: ${res.status} ${t}`)
      }
    } catch (e) {
      setMessage(`Netzwerkfehler: ${String(e)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>App zusammenstellen</h1>

      <div style={{ display: "grid", gap: 10, maxWidth: 500 }}>
        <label>
          Tenant:&nbsp;
          <input value={tenant} onChange={(e) => setTenant(e.target.value)} />
        </label>
        <label>
          App‑Name:&nbsp;
          <input value={appName} onChange={(e) => setAppName(e.target.value)} />
        </label>
        <div style={{ marginTop: 8 }}>
          <div><b>Module</b></div>
          {["forms", "dashboard"].map((m) => (
            <label key={m} style={{ display: "block", marginTop: 6 }}>
              <input type="checkbox" checked={selected.includes(m)} onChange={() => toggle(m)} /> {m}
            </label>
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <button onClick={saveApp} disabled={busy || selected.length === 0}>
            {busy ? "Speichern…" : "App speichern"}
          </button>
          <a href={shellLink} target="_blank" rel="noreferrer" style={{ marginLeft: 12 }}>
            App öffnen
          </a>
        </div>

        {message && <div style={{ marginTop: 8 }}>{message}</div>}

        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
          Shell‑Link: <code>{shellLink}</code>
        </div>
      </div>
    </div>
  )
}
