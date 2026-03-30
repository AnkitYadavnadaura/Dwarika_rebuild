const steps = [
  ['1', 'Citizen Proposal', 'A citizen, party, or ministry submits a governance proposal.'],
  ['2', 'AI Analysis', 'BitNet agents simulate outcomes, risk, cost, and legal impact.'],
  ['3', 'Public Debate', 'Proposal enters transparent public debate and amendment stage.'],
  ['4', 'Parliament Vote', 'Human parliament + delegated councils cast final vote.'],
  ['5', 'On-chain Execution', 'Approved policy is deployed with immutable audit logs.'],
];

export default function DecisionFlow() {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map(([id, title, text]) => (
        <article key={id} className="rounded-xl border border-white/15 bg-white/5 p-4">
          <span className="text-xs font-bold tracking-widest text-neon">STEP {id}</span>
          <h4 className="mt-2 font-semibold">{title}</h4>
          <p className="mt-1 text-xs text-slate-300">{text}</p>
        </article>
      ))}
    </div>
  );
}
