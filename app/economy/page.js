const programs = [
  'Creator Land Registry and licensing marketplace',
  'Public Works Bounties for builders and engineers',
  'National Startup Grants with milestone-based payouts',
  'AI Workforce Matching for demand-based employment',
];

export default function EconomyPage() {
  return (
    <section className="glass section-page">
      <h1>Economy Dashboard</h1>
      <p>Auditable economic systems where every transaction and public budget is transparent.</p>
      <ul className="feature-list">
        {programs.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="stat-line">
        <span>Treasury Reserve</span>
        <strong>3.1B DWR</strong>
      </div>
    </section>
  );
}
