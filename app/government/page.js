const ministries = [
  ['Governance Intelligence', 'AI agents simulate policy outcomes before law activation.'],
  ['Public Systems', 'National services dashboard for housing, transport, and digital infrastructure.'],
  ['Justice & Protocol', 'Dispute resolution with constitutional checks and immutable records.'],
];

export default function GovernmentPage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">Government Portal</h1>
      <p className="mt-3 text-slate-300">Human councils and AI advisors co-govern with full transparency.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {ministries.map(([title, desc]) => (
          <article key={title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
            <h3 className="font-semibold text-neon">{title}</h3>
            <p className="mt-1 text-sm text-slate-300">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
