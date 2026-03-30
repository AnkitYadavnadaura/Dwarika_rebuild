const roadmap = [
  ['Phase I', 'Constitution Launch', 'Core governance stack, identity rails, and civic onboarding.'],
  ['Phase II', 'Economic Core', 'Treasury automation, labor markets, and grants engine.'],
  ['Phase III', 'AI Civil Services', '24/7 AI public agents for support, compliance, and analytics.'],
  ['Phase IV', 'Inter-Nation Layer', 'Cross-world treaties, diplomacy, and interoperable commerce.'],
];

export default function RoadmapPage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">Nation Roadmap</h1>
      <p className="mt-3 text-slate-300">Long-term execution plan for a resilient digital civilization.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {roadmap.map(([phase, title, text]) => (
          <article key={phase} className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="text-xs font-bold tracking-wider text-neon">{phase}</p>
            <h3 className="mt-2 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
