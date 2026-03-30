const particles = Array.from({ length: 22 }).map((_, i) => ({
  id: i,
  size: (i % 4) + 2,
  left: `${(i * 17) % 100}%`,
  delay: `${(i % 6) * 0.4}s`,
  duration: `${5 + (i % 5)}s`,
}));

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-panel/60 px-6 py-16 md:px-12">
      <div className="grid-overlay absolute inset-0 opacity-30" />

      {particles.map((p) => (
        <span
          key={p.id}
          className="particle absolute rounded-full bg-neon/60"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: '88%',
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl">
        <p className="fade-in mb-4 text-xs font-bold tracking-[0.2em] text-neon">CENTRALIZED VIRTUAL NATION • DWARIKA REBUILD</p>
        <h1 className="fade-in-delay-1 text-4xl font-bold leading-tight md:text-6xl">Rebuilding Dwarika as a Digital Nation</h1>
        <p className="fade-in-delay-2 mt-6 max-w-2xl text-lg text-slate-300">
          A futuristic civilization where humans and AI agents co-govern democracy, policy, economy, and public
          services through transparent digital infrastructure.
        </p>
        <div className="fade-in-delay-3 mt-8 flex flex-wrap gap-3">
          <button className="rounded-xl bg-neon px-5 py-3 font-semibold text-slate-900 transition hover:scale-[1.02]">
            Enter the Nation
          </button>
          <button className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:border-neon/60">
            View Constitution
          </button>
        </div>
      </div>
    </section>
  );
}
