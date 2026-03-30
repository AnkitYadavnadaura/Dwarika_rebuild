export const metadata = {
  title: 'Economy System | Dwarika Rebuild',
  description: 'Currency, marketplace, tax logic, and national budget systems.',
};

const systems = [
  ['Digital Currency', 'DWR token powers salaries, grants, welfare, and public service funding.'],
  ['Marketplace', 'A sovereign marketplace for services, assets, and district-level commerce.'],
  ['Tax Engine', 'Programmable tax rules with transparent public spending records.'],
  ['Budget Console', 'Live treasury dashboard with ministry budgets and allocations.'],
];

export default function EconomyPage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">Economy System</h1>
      <p className="mt-3 text-slate-300">A fully digital economy with accountable taxes and real-time budget visibility.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {systems.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <h3 className="font-semibold text-neon">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
