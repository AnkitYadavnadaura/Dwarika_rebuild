const flow = [
  'Create sovereign digital identity',
  'Pass civic orientation with AI mentor',
  'Select district and governance track',
  'Join votes, missions, and public projects',
];

export default function CitizenshipPage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">Citizenship Center</h1>
      <p className="mt-3 text-slate-300">Onboard as a contributor, voter, builder, and digital citizen of Dwarika Rebuild.</p>
      <ol className="mt-6 space-y-2">
        {flow.map((step, index) => (
          <li key={step} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
            <span className="mr-2 text-neon">{index + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
