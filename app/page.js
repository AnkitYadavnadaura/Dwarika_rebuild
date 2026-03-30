const pillars = [
  {
    title: 'Unreal Engine Living World',
    text: 'A persistent metaverse-scale simulation with city systems, weather, transport, and AI citizens running in Unreal Engine.',
  },
  {
    title: 'Blockchain Trust Layer',
    text: 'Transparent contracts secure identity, treasury, and ownership for a fully trustless civic and economic backbone.',
  },
  {
    title: 'Virtual Democracy',
    text: 'Citizens propose, debate, and vote through on-chain governance with quadratic voting and delegated councils.',
  },
  {
    title: 'Community-Built Future',
    text: 'Open contribution model for builders, creators, and policy designers to shape the nation together.',
  },
];

const economy = [
  'Creator-owned digital property & land zoning',
  'AI-assisted jobs and public works economy',
  'Cross-chain treasury and public budget dashboards',
  'Real-time market index synchronized with simulation',
];

const roadmap = [
  ['Phase 01', 'Genesis Charter', 'Founding constitution, identity mint, and core governance launch.'],
  ['Phase 02', 'Urban Core', 'Unreal-based capital city with transport, districts, and social hubs.'],
  ['Phase 03', 'Open Economy', 'Launch tokens, grants, businesses, and skill-based virtual labor markets.'],
  ['Phase 04', 'Global Alliance', 'Interoperable nations, diplomatic protocols, and metaverse trade routes.'],
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero-grid">
        <div className="hero-card">
          <p className="eyebrow">NEXT-GEN VIRTUAL COUNTRY</p>
          <h1>NEXORA NATION</h1>
          <p className="hero-text">
            A digital civilization where governance, economy, and culture are simulated in Unreal Engine and secured by
            blockchain. Built with Next.js for a massive, global community.
          </p>
          <div className="hero-cta">
            <button>Join Founders Program</button>
            <button className="ghost">Read Whitepaper</button>
          </div>
        </div>

        <aside className="stats-panel">
          <h2>Live Nation Snapshot</h2>
          <ul>
            <li>
              <span>Citizens</span>
              <strong>2,450,192</strong>
            </li>
            <li>
              <span>On-chain Proposals</span>
              <strong>9,841</strong>
            </li>
            <li>
              <span>Virtual GDP</span>
              <strong>$14.7B NVT</strong>
            </li>
            <li>
              <span>Districts Simulated</span>
              <strong>128</strong>
            </li>
          </ul>
        </aside>
      </section>

      <section>
        <h2 className="section-title">Core Pillars</h2>
        <div className="cards-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-card">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-panel">
        <div className="glass-card">
          <h2>Virtual Economy Engine</h2>
          <ul className="feature-list">
            {economy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="glass-card highlight">
          <h2>Democracy Protocol</h2>
          <p>
            Every policy proposal is auditable, debate sessions are archived, and final execution is driven by smart
            contract consensus. Civic trust is programmable.
          </p>
          <p>
            Citizens can form parties, submit constitutional amendments, and vote through secure identity and
            anti-sybil protections.
          </p>
        </div>
      </section>

      <section>
        <h2 className="section-title">Development Roadmap</h2>
        <div className="timeline">
          {roadmap.map(([phase, title, description]) => (
            <article className="timeline-item" key={phase}>
              <span>{phase}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
