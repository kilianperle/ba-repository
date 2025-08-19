export default function Forms({ tenant }: {tenant: string}){
    return (
    <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8 }}>
        <h3>Formular-Modul</h3>
        <p>Hallo <b>{tenant}</b>! Ich bin dynamisch geladen 🎉</p>

        <div style={{ display: 'grid', gap: 8, maxWidth: 320 }}>
        <label>
            Name<br/>
            <input placeholder="Dein Name" style={{ width: '100%' }} />
        </label>
        <label>
            E-Mail<br/>
            <input placeholder="email@beispiel.com" style={{ width: '100%' }} />
        </label>
        <button style={{ marginTop: 8 }}>Absenden</button>
        </div>
    </div>
    );
}