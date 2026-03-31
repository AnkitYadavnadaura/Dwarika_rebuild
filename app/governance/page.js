import Link from 'next/link';

export default function GovernancePage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>Governance Matrix</h1>
      <p className="subtitle">Where humans and AI advisors deliberate, simulate outcomes, and execute civic decisions.</p>
      <section className="grid two">
        <article className="panel subpage-panel">
          <h2>Decision Flow</h2>
          <ol>
            <li>Citizen drafts proposal.</li>
            <li>AI Advisor stress-tests policy outcomes.</li>
            <li>Deliberation council votes with transparent weight.</li>
            <li>Smart execution module activates approved policy.</li>
          </ol>
        </article>
        <article className="panel subpage-panel">
          <h2>Governance Principles</h2>
          <ul>
            <li>Auditability by default</li>
            <li>Anti-sybil civic identity</li>
            <li>Fast emergency amendment protocol</li>
            <li>Public simulation snapshots for every major law</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
