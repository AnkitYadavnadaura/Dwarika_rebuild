import Link from 'next/link';

const highlights = [
  ['Population', '2.4M'],
  ['Districts', '128'],
  ['Public Proposals', '9,841'],
  ['Virtual GDP', '14.7B DWR'],
];

export default function HomePage() {
  return (
    <>
      <section className="hero glass">
        <p className="tag">SOVEREIGN VIRTUAL REPUBLIC</p>
        <h1>Welcome to Dwarika Rebiuld</h1>
        <p>
          A working digital-country portal where you can explore ministries, economy dashboards, citizen onboarding,
          and long-term nation-building programs.
        </p>
        <div className="hero-actions">
          <Link className="btn" href="/citizenship">
            Apply for Citizenship
          </Link>
          <Link className="btn outline" href="/government">
            View Government
          </Link>
        </div>
      </section>

      <section className="kpi-grid">
        {highlights.map(([k, v]) => (
          <article className="glass" key={k}>
            <span>{k}</span>
            <h3>{v}</h3>
          </article>
        ))}
      </section>

      <section className="panel-grid">
        <article className="glass">
          <h2>What you can do</h2>
          <ul>
            <li>Track national development KPIs</li>
            <li>Read policy proposals and vote sessions</li>
            <li>Explore economic initiatives and grants</li>
            <li>Join skills-to-work citizen programs</li>
          </ul>
        </article>
        <article className="glass highlight">
          <h2>Quick Navigation</h2>
          <p>Use these modules to interact with the country systems:</p>
          <div className="quick-links">
            <Link href="/government">Government Portal</Link>
            <Link href="/economy">Economy Dashboard</Link>
            <Link href="/citizenship">Citizenship Center</Link>
            <Link href="/roadmap">Nation Roadmap</Link>
          </div>
        </article>
      </section>
    </>
  );
}
