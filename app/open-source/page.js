export const metadata = {
  title: 'Open Source | Dwarika Rebuild',
  description: 'Open-source blueprint and contribution paths for developers.',
};

export default function OpenSourcePage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">Open Source Blueprint</h1>
      <p className="mt-3 text-slate-300">
        Dwarika Rebuild is a community-powered project. Key infrastructure modules are designed as open blueprints so
        developers can audit, improve, and extend national systems.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-white/15 bg-white/5 p-4">
          <h3 className="font-semibold text-neon">Contribution Areas</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
            <li>Governance simulation logic</li>
            <li>Economic dashboard modules</li>
            <li>AI oversight tooling</li>
            <li>UX + civic accessibility</li>
          </ul>
        </article>
        <article className="rounded-xl border border-white/15 bg-white/5 p-4">
          <h3 className="font-semibold text-neon">Developer Path</h3>
          <p className="mt-2 text-sm text-slate-300">
            Fork the repo, pick an issue, propose a module change, and open a review request to the core civic tech
            council.
          </p>
        </article>
      </div>
    </section>
  );
}
