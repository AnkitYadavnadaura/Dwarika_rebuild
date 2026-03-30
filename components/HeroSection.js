'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const NationScene = dynamic(() => import('./NationScene'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden rounded-3xl border border-white/20 bg-[#050510]">
      <div className="absolute inset-0 opacity-70">
        <NationScene />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(76,201,255,0.25),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(124,92,255,0.22),transparent_35%)]" />
      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-5xl items-center px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-4 text-xs font-bold tracking-[0.24em] text-neon">DWARIKA REBUILD • DIGITAL NATION CORE</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-7xl">Rebuilding Dwarika as a Digital Nation</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            AI + Humans governing a unified virtual economy through a centralized democracy engine, transparent civic
            systems, and immersive simulation infrastructure.
          </p>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(76,201,255,0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 rounded-xl bg-neon px-6 py-3 font-semibold text-slate-950"
          >
            Enter the Nation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
