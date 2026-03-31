import Link from 'next/link';

export default function OpenSourcePage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>Open Source Stack</h1>
      <p className="subtitle">Dwarika Rebuild is designed as a transparent protocol for builders, civic designers, and AI engineers.</p>
      <article className="panel subpage-panel">
        <h2>Contribution Paths</h2>
        <ul>
          <li>Frontend UI / data visualization</li>
          <li>Governance simulation models</li>
          <li>AI safety, auditing, and guardrails</li>
          <li>Community docs, charters, and onboarding</li>
        </ul>
        <a className="btn-primary inline-btn" href="https://github.com" target="_blank" rel="noreferrer">View on GitHub</a>
      </article>
    </main>
  );
}
