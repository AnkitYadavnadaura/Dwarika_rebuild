import Link from 'next/link';

const modules = [
  ['Civic AI Senate', 'Hybrid chamber where citizens and AI delegates co-draft bills with explainable reasoning trails.'],
  ['AGI Ethics Court', 'High-trust tribunal validating AGI proposals against rights, safety, and constitutional boundaries.'],
  ['Policy Simulator', 'Runs millions of social/economic what-if scenarios before any law is executed on-chain.'],
  ['Emergency Override Grid', 'Rapid response framework for disasters, exploits, or adversarial AI incidents.'],
];

export default function GovernancePage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>Governance Matrix</h1>
      <p className="subtitle">
        A constitutional operating layer where humans, AI advisors, and future AGI systems collaborate under transparent law.
      </p>

      <section className="panel subpage-panel">
        <h2>Decision Lifecycle</h2>
        <div className="grid four">
          <article className="mini-card"><strong>01</strong><p>Citizen or guild submits a proposal.</p></article>
          <article className="mini-card"><strong>02</strong><p>AI advisor cluster simulates impact and risk.</p></article>
          <article className="mini-card"><strong>03</strong><p>Public deliberation with evidence-backed debate.</p></article>
          <article className="mini-card"><strong>04</strong><p>On-chain execution + live compliance telemetry.</p></article>
        </div>
      </section>

      <section className="grid two">
        {modules.map(([title, text]) => (
          <article key={title} className="panel subpage-panel">
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
