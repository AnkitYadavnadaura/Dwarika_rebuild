'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x: `${(i * 13) % 100}%`,
  d: 4 + (i % 5),
  delay: (i % 6) * 0.2,
}));

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-panel/60 px-6 py-16 md:px-12">
      <div className="grid-overlay absolute inset-0 opacity-30" />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-neon/70"
          style={{ left: p.x, bottom: '8%' }}
          animate={{ y: [0, -420], opacity: [0, 1, 0] }}
          transition={{ duration: p.d, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <div className="relative z-10 max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xs font-bold tracking-[0.2em] text-neon">
          DIGITAL CIVILIZATION PLATFORM
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl font-bold leading-tight md:text-6xl">
          Rebuilding Dwarika as a Digital Nation
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-lg text-slate-300">
          A centralized virtual country where humans and AI agents co-govern democracy, economy, and justice through
          transparent systems.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 rounded-xl bg-neon px-5 py-3 font-semibold text-slate-900"
        >
          Enter the Nation
        </motion.button>
      </div>
    </section>
  );
}
