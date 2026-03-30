'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 22 }).map((_, i) => ({
  id: i,
  size: (i % 4) + 2,
  left: `${(i * 17) % 100}%`,
  delay: (i % 6) * 0.4,
  duration: 5 + (i % 5),
}));

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-panel/60 px-6 py-16 md:px-12">
      <div className="grid-overlay absolute inset-0 opacity-30" />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-neon/60"
          style={{ width: p.size, height: p.size, left: p.left, top: '88%' }}
          animate={{ y: ['0%', '-540%'], opacity: [0, 1, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}

      <div className="relative z-10 max-w-3xl">
        <motion.p
          className="mb-4 text-xs font-bold tracking-[0.2em] text-neon"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          CENTRALIZED VIRTUAL NATION • DWARIKA REBUILD
        </motion.p>
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Rebuilding Dwarika as a Digital Nation
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-slate-300"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A futuristic civilization where humans and AI agents co-govern democracy, policy, economy, and public
          services through transparent digital infrastructure.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button className="rounded-xl bg-neon px-5 py-3 font-semibold text-slate-900 transition hover:scale-[1.02]">
            Enter the Nation
          </button>
          <button className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:border-neon/60">
            View Constitution
          </button>
        </motion.div>
      </div>
    </section>
  );
}
