'use client';

import { useEffect, useState } from 'react';
import Counter from '../components/Counter';
import CursorGlow from '../components/CursorGlow';
import Reveal from '../components/Reveal';
import StarfieldCanvas from '../components/StarfieldCanvas';
import TopNav from '../components/TopNav';

const systems = [
  {
    title: 'Governance',
    description: 'Co-created laws, AI policy simulations, and transparent voting cycles with live constitutional feedback loops.',
    metric: '9,842 Active Proposals',
  },
  {
    title: 'Economy',
    description: 'Programmable fiscal layers, tokenized public services, and intelligent market balancing for digital prosperity.',
    metric: '$14.7B Simulated GDP',
  },
  {
    title: 'AI Agents',
    description: 'Specialized policy, treasury, infrastructure, and diplomacy agents collaborating directly with human councils.',
    metric: '246 Sovereign Agents',
  },
];

const agents = [
  ['Policy Oracle', 'Runs scenario analysis and recommends constitutional amendments.'],
  ['Treasury Sentinel', 'Monitors expenditures and reallocates civic budgets in real time.'],
  ['Infrastructure Architect', 'Optimizes transport, housing, and utility expansions autonomously.'],
  ['Diplomacy Node', 'Negotiates treaties across interoperable virtual nations.'],
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="nation-shell">
      <CursorGlow />
      <StarfieldCanvas />

      <div className={`loading-overlay ${loading ? 'loading-overlay-visible' : ''}`}>
        <div>
          <p>Initializing Dwarika Core</p>
          <div className="loading-line" />
        </div>
      </div>

      <TopNav />

      <section className="hero">
        <Reveal className="hero-content">
          <p className="tag">DIGITAL SOVEREIGNTY PROTOCOL</p>
          <h1>Rebuilding Dwarika as a Digital Nation</h1>
          <p className="subtitle">AI + Humans governing a unified virtual economy.</p>
          <div className="cta-row">
            <button className="btn-primary">Enter the Nation</button>
            <button className="btn-secondary">Read Governance Paper</button>
          </div>
        </Reveal>
        <Reveal className="hero-panel" delay={180}>
          <h2>Nation Core Status</h2>
          <ul>
            <li>
              Citizen Network <strong><Counter end={2450192} /></strong>
            </li>
            <li>
              Governance Uptime <strong><Counter end={99} suffix=".99%" /></strong>
            </li>
            <li>
              Active Districts <strong><Counter end={128} /></strong>
            </li>
          </ul>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <h2>System Overview</h2>
        </Reveal>
        <div className="grid three">
          {systems.map((system, i) => (
            <Reveal key={system.title} delay={i * 110} className="panel interactive">
              <h3>{system.title}</h3>
              <p>{system.description}</p>
              <span>{system.metric}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2>Governance Visualization</h2>
        </Reveal>
        <Reveal className="panel governance-flow">
          {['User', 'AI Advisor', 'Decision', 'Execution'].map((step) => (
            <div key={step} className="flow-node">
              {step}
            </div>
          ))}
          <div className="flow-line" />
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <h2>Economy System</h2>
        </Reveal>
        <div className="grid two">
          <Reveal className="panel">
            <h3>Live Fiscal Indicators</h3>
            <div className="stats-grid">
              <article>
                <p>Treasury Reserve</p>
                <strong>$<Counter end={3280} suffix="M" /></strong>
              </article>
              <article>
                <p>Daily Transactions</p>
                <strong><Counter end={82741} /></strong>
              </article>
              <article>
                <p>Agent-Managed Budgets</p>
                <strong><Counter end={74} suffix="%" /></strong>
              </article>
              <article>
                <p>Citizen Income Index</p>
                <strong><Counter end={93} suffix=".4" /></strong>
              </article>
            </div>
          </Reveal>
          <Reveal delay={120} className="panel graph-panel">
            <h3>Macro Trend Simulation</h3>
            <div className="bars">
              {[48, 62, 58, 74, 70, 88, 92].map((h, i) => (
                <div key={i} className="bar" style={{ height: `${h}%` }} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2>AI Agents</h2>
        </Reveal>
        <div className="grid two">
          {agents.map(([name, description], i) => (
            <Reveal key={name} className="panel agent" delay={i * 90}>
              <h3>{name}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="panel open-source">
          <h2>Open Source Nation Stack</h2>
          <pre>{`git clone github.com/dwarika/rebuild\ncd rebuild && npm run dev`}</pre>
          <button className="btn-primary">View on GitHub</button>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <h2>Join the Rebuild</h2>
        </Reveal>
        <Reveal className="panel form-panel">
          <div className="form-row">
            <input placeholder="Full name" />
            <input placeholder="Email address" />
          </div>
          <div className="form-row">
            <select defaultValue="">
              <option value="" disabled>
                Select your role
              </option>
              <option>Citizen Builder</option>
              <option>Policy Contributor</option>
              <option>AI Agent Engineer</option>
            </select>
            <input placeholder="Country / Timezone" />
          </div>
          <textarea placeholder="Why do you want to help rebuild Dwarika?" rows={5} />
          <button className="btn-primary">Apply for Citizenship</button>
        </Reveal>
      </section>
    </main>
  );
}
