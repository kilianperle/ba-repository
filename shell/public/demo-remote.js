export default function DemoRemote({ tenant }) {
  const React = window.React
  return React.createElement('div', null,
    React.createElement('h3', null, 'Demo‑Modul'),
    React.createElement('p', null, `Hallo ${tenant}!`)
  );
}