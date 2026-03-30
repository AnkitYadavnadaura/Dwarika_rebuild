export const metadata = {
  title: 'Join Dwarika Rebuild',
  description: 'Signup interface for citizens and contributors.',
};

export default function JoinPage() {
  return (
    <section className="glass rounded-3xl p-7 md:p-10">
      <h1 className="text-4xl font-bold">Join the Nation</h1>
      <p className="mt-3 text-slate-300">Apply as a citizen, developer, policymaker, or research contributor.</p>

      <form className="mt-6 grid gap-4 md:max-w-xl">
        <label className="grid gap-1 text-sm">
          Username
          <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-2 outline-none focus:border-neon" placeholder="enter username" />
        </label>

        <label className="grid gap-1 text-sm">
          Role
          <select className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-2 outline-none focus:border-neon">
            <option>Citizen</option>
            <option>Developer</option>
            <option>Researcher</option>
            <option>Policy Contributor</option>
          </select>
        </label>

        <button type="button" className="mt-2 w-fit rounded-xl bg-neon px-5 py-2 font-semibold text-slate-900">
          Submit Application
        </button>
      </form>
    </section>
  );
}
