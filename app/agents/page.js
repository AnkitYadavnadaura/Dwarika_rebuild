import Link from 'next/link';

const roles = [
  ['Policy Oracle', 'Forecasts civic outcomes and constitutional side-effects before policy deployment.'],
  ['Treasury Sentinel', 'Protects public funds, flags anomalies, and auto-escalates suspicious flows.'],
  ['VR Urban Designer', 'Builds immersive districts for education, governance halls, and workspaces.'],
  ['AR Interface Agent', 'Projects contextual governance and economic data into mixed-reality environments.'],
  ['AGI Alignment Monitor', 'Tracks model behavior and enforces safety constraints across all autonomous systems.'],
  ['Diplomacy Node', 'Negotiates treaties and interoperability protocols with allied virtual nations.'],
];

export default function AgentsPage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>AI + AGI Agent Corps</h1>
      <p className="subtitle">
        Specialized autonomous teams for governance, economy, infrastructure, immersive environments, and diplomacy.
      </p>
      <section className="grid two">
        {roles.map(([name, text]) => (
          <article key={name} className="panel subpage-panel">
            <h2>{name}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
