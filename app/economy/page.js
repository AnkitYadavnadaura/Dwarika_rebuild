const sectors = [
  'Autonomous public treasury and programmable grants',
  'Creator economy and digital property registry',
  'AI-assisted labor market and task routing',
  'Real-time macro dashboard and growth forecast engine',
];

export default function EconomyPage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">Economy Dashboard</h1>
      <p className="mt-3 text-slate-300">A trustable digital economy designed for scale, fairness, and innovation.</p>
      <ul className="mt-6 space-y-2 text-slate-300">
        {sectors.map((item) => (
          <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
