import Link from 'next/link';

const roles = [
  ['Policy Oracle', 'Scenario forecasting, constitutional suggestion modeling.'],
  ['Treasury Sentinel', 'Budget integrity and fraud-resistant disbursements.'],
  ['Infra Architect', 'District expansion plans and utility optimization.'],
  ['Diplomacy Node', 'Alliance negotiation across virtual nations.'],
];

export default function AgentsPage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>AI Agent Corps</h1>
      <p className="subtitle">Specialized autonomous systems operating with human oversight and transparent logs.</p>
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
