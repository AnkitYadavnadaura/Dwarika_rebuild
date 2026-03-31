import Link from 'next/link';

export default function EconomyPage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>Economic Engine</h1>
      <p className="subtitle">
        Blockchain-native finance, AI-driven allocation, and immersive commerce rails across web, VR, and AR layers.
      </p>

      <section className="grid three">
        <article className="panel subpage-panel">
          <h2>Blockchain Treasury</h2>
          <p>Multi-sig civic vaults, programmable grants, and transparent budget streams visible in real time.</p>
        </article>
        <article className="panel subpage-panel">
          <h2>VR Commerce Districts</h2>
          <p>Persistent virtual markets where creators sell assets, services, and experiences to global citizens.</p>
        </article>
        <article className="panel subpage-panel">
          <h2>AR Public Services</h2>
          <p>Geo-context overlays for permits, civic alerts, and tax receipts blending digital policy with real-world life.</p>
        </article>
      </section>

      <section className="panel subpage-panel">
        <h2>Strategic Priorities</h2>
        <ul>
          <li>AI + human co-managed inflation control.</li>
          <li>Cross-chain payment rails with settlement proofs.</li>
          <li>Citizen dividend model tied to national productivity.</li>
          <li>AGI-safe guardrails for autonomous capital allocation.</li>
        </ul>
      </section>
    </main>
  );
}
