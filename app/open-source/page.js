import Link from 'next/link';

export default function OpenSourcePage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>Open Source Stack</h1>
      <p className="subtitle">
        Build the operating system of a digital nation: governance protocols, AI safety, immersive interfaces, and blockchain rails.
      </p>

      <section className="grid two">
        <article className="panel subpage-panel">
          <h2>Core Repositories</h2>
          <ul>
            <li>Governance Kernel (charter + proposal engine)</li>
            <li>Economy Layer (treasury, markets, settlement)</li>
            <li>Agent Framework (AI/AGI policy + orchestration)</li>
            <li>XR Interface (VR/AR citizen interactions)</li>
          </ul>
        </article>
        <article className="panel subpage-panel">
          <h2>Contribution Standards</h2>
          <ul>
            <li>Security-first reviews and threat modeling</li>
            <li>Open audit logs for every merge</li>
            <li>RFC process for major protocol changes</li>
            <li>Community co-ownership and transparent grants</li>
          </ul>
        </article>
      </section>

      <article className="panel subpage-panel">
        <a className="btn-primary inline-btn" href="https://github.com" target="_blank" rel="noreferrer">View on GitHub</a>
      </article>
    </main>
  );
}
