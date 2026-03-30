const ministries = [
  ['Ministry of Infrastructure', 'Smart transport, district planning, and AI city operations.'],
  ['Ministry of Economy', 'Treasury policy, creator markets, and national growth index.'],
  ['Ministry of Civic Systems', 'Voting, public debate, legislation, and citizen protections.'],
];

const initiatives = [
  'National Identity Passport (on-chain citizen profile)',
  'Open Budget Portal with real-time expenditure visibility',
  'Public Services API for builders and startups',
  'Skill-to-income model for virtual workforce opportunities',
];

export default function HomePage() {
  return (
    <main className="dw-shell">
      <header className="topbar glass">
        <div className="brand">
          <span className="dot" />
          <strong>Dwarika Rebiuld</strong>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#government">Government</a>
          <a href="#economy">Economy</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <section className="hero glass" id="about">
        <p className="tag">SOVEREIGN VIRTUAL REPUBLIC</p>
        <h1>Welcome to Dwarika Rebiuld</h1>
        <p>
          Dwarika Rebiuld is a next-generation digital country where Unreal Engine simulates national life and
          blockchain guarantees transparent governance. This is a people-first nation designed for global citizens,
          creators, and builders.
        </p>
        <div className="hero-actions" id="join">
          <button>Apply for Citizenship</button>
          <button className="outline">Explore Constitution</button>
        </div>
      </section>

      <section className="kpi-grid">
        <article className="glass">
          <span>Population</span>
          <h3>2.4M</h3>
        </article>
        <article className="glass">
          <span>Active Districts</span>
          <h3>128</h3>
        </article>
        <article className="glass">
          <span>Public Proposals</span>
          <h3>9,841</h3>
        </article>
        <article className="glass">
          <span>Virtual GDP</span>
          <h3>14.7B DWR</h3>
        </article>
      </section>

      <section className="panel-grid" id="government">
        <article className="glass">
          <h2>Government Structure</h2>
          <p>
            A constitutional digital democracy where citizens submit proposals, debate policy, and vote through
            tamper-proof on-chain systems.
          </p>
          <div className="mini-cards">
            {ministries.map(([name, desc]) => (
              <div className="mini" key={name}>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass highlight" id="economy">
          <h2>National Economy Program</h2>
          <ul>
            {initiatives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Every economic action is auditable. Citizens can own land, launch businesses, access grants, and contribute
            to national development through transparent market systems.
          </p>
        </article>
      </section>

      <footer className="glass footer">
        <p>© 2026 Dwarika Rebiuld — Ministry of Digital Civilization</p>
      </footer>
    </main>
  );
}
