import Link from 'next/link';

export default function EconomyPage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>Economic Engine</h1>
      <p className="subtitle">A programmable economy balancing productivity, public value, and resilient treasury operations.</p>
      <section className="grid three">
        <article className="panel subpage-panel"><h2>Treasury</h2><p>Autonomous rebalancing, grant pools, and emergency reserves.</p></article>
        <article className="panel subpage-panel"><h2>Markets</h2><p>Live service exchanges for creators, workers, and AI agents.</p></article>
        <article className="panel subpage-panel"><h2>Public Works</h2><p>Data-driven infrastructure spending tied to measurable outcomes.</p></article>
      </section>
    </main>
  );
}
