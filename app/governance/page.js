import DecisionFlow from '../../components/DecisionFlow';

export const metadata = {
  title: 'Governance System | Dwarika Rebuild',
  description: 'Parliament model, AI advisors/judges, and national decision flow.',
};

export default function GovernancePage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">Governance System</h1>
      <p className="mt-3 text-slate-300">
        Dwarika operates with a centralized parliament system assisted by AI policy advisors and judicial agents.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-white/15 bg-white/5 p-4">
          <h3 className="font-semibold text-neon">Parliament</h3>
          <p className="mt-2 text-sm text-slate-300">Citizen representatives vote on national policies and constitutional updates.</p>
        </article>
        <article className="rounded-xl border border-white/15 bg-white/5 p-4">
          <h3 className="font-semibold text-neon">AI Advisors</h3>
          <p className="mt-2 text-sm text-slate-300">AI agents model outcomes and risk before final public decisions.</p>
        </article>
        <article className="rounded-xl border border-white/15 bg-white/5 p-4">
          <h3 className="font-semibold text-neon">AI Judges</h3>
          <p className="mt-2 text-sm text-slate-300">Judicial agents audit constitutional compliance and conflict resolution.</p>
        </article>
      </div>
      <h2 className="mt-8 text-2xl font-semibold">Decision-Making Flow</h2>
      <div className="mt-4">
        <DecisionFlow />
      </div>
    </section>
  );
}
