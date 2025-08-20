import express from "express";
import cors from "cors";

type ModuleCfg = { name: string; url: string };
type AppCfg = { tenantId: string; appName: string; modules: ModuleCfg[] };

const store = new Map<string, Map<string, AppCfg>>();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/apps", (req, res) => {
    const { tenantId, appName, modules } = req.body as AppCfg
    if (!tenantId || !appName || !Array.isArray(modules)) {
    return res.status(400).json({ message: "tenantId, appName, modules sind Pflicht" })
    }
    const byTenant = store.get(tenantId) ?? new Map<string, AppCfg>()
    if (byTenant.has(appName.toLowerCase())) {
    return res.status(409).json({ message: "App-Name bereits vergeben (dieser Tenant)" })
    }
    const entry: AppCfg = { tenantId, appName, modules }
    byTenant.set(appName.toLowerCase(), entry)
    store.set(tenantId, byTenant)
    res.status(201).json(entry)
})

app.put("/api/apps/:tenantId/:appName", (req, res) => {
    const { tenantId, appName } = req.params
    const { modules } = req.body as { modules: ModuleCfg[] }
    const byTenant = store.get(tenantId)
    if (!byTenant || !byTenant.has(appName.toLowerCase())) {
    return res.status(404).json({ message: "App nicht gefunden" })
    }
    const prev = byTenant.get(appName.toLowerCase())!
    const next = { ...prev, modules }
    byTenant.set(appName.toLowerCase(), next)
    res.json(next)
})

app.get("/api/apps/:tenantId", (req, res) => {
    const { tenantId } = req.params
    const byTenant = store.get(tenantId)
    res.json(byTenant ? Array.from(byTenant.values()) : [])
})

app.get("/api/apps/:tenantId/:appName", (req, res) => {
    const { tenantId, appName } = req.params
    const byTenant = store.get(tenantId)
    const appCfg = byTenant?.get(appName.toLowerCase())
    if (!appCfg) return res.status(404).json({ message: "App nicht gefunden" })
    res.json(appCfg)
})

const port = 4000
app.listen(port, () => console.log(`API on http://localhost:${port}`))

