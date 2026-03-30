export default function AboutPage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <p className="text-xs font-bold tracking-[0.2em] text-neon">ABOUT DWARIKA REBUILD</p>
      <h1 className="mt-3 text-4xl font-bold">Vision of Dwarika Rebuild</h1>
      <p className="mt-4 text-slate-300">
        Dwarika Rebuild is a centralized virtual country designed to unite human leadership and AI intelligence inside
        one coordinated national system. Our vision is to build a digital civilization that is fast, transparent, and
        participatory—where governance decisions, civic services, and economic growth are measurable in real time.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="text-xl font-semibold text-neon">What is a Virtual Country?</h2>
          <p className="mt-2 text-sm text-slate-300">
            A virtual country is a digitally native nation-state model where citizens interact through online identity,
            governance protocols, and programmable institutions. In Dwarika Rebuild, policy, economy, and civil systems
            are managed through a unified platform rather than fragmented offline processes.
          </p>
        </article>

        <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="text-xl font-semibold text-neon">Centralized Democracy</h2>
          <p className="mt-2 text-sm text-slate-300">
            Centralized democracy in Dwarika Rebuild means a single constitutional core governs all public modules—voting,
            lawmaking, budgeting, and services. Citizens vote and participate from one trusted hub while AI agents assist
            with analysis, execution, and compliance checks under human-approved rules.
          </p>
        </article>
      </div>
    </section>
  );
}
