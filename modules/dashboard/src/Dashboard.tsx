export default function Dashboard({ tenant }: { tenant: string }) {
    const stats = [
        { label: 'Neue Nutzer', value: 12 },
        { label: 'Formular-Sendungen', value: 37 },
        { label: 'Conversion %', value: 18.4 },
    ]
    return (
        <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8 }}>
        <h3>Dashboard-Modul</h3>
        <p>Mandant: <b>{tenant}</b></p>
        <ul style={{ paddingLeft: 18 }}>
            {stats.map(s => (
            <li key={s.label}><b>{s.value}</b> — {s.label}</li>
            ))}
        </ul>
        </div>
    )
}