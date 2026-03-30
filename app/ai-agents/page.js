export const metadata = {
  title: 'AI Agents | Dwarika Rebuild',
  description: 'BitNet AI agent roles across governance, economy, and judiciary.',
};

const roles = [
  ['Governance Agent', 'Analyzes policy impact and detects systemic risk before votes.'],
  ['Economy Agent', 'Forecasts inflation, treasury drift, and budget optimization scenarios.'],
  ['Judiciary Agent', 'Checks constitutional alignment and supports fair dispute resolution.'],
];

export default function AIAgentsPage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">AI Agents (BitNet)</h1>
      <p className="mt-3 text-slate-300">Core AI layer enabling real-time decision simulation for a stable digital nation.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {roles.map(([title, text]) => (
          <article key={title} className="rounded-xl border border-white/15 bg-white/5 p-4">
            <h3 className="font-semibold text-neon">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
