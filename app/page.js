'use client';

import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import DecisionFlow from '../components/DecisionFlow';

const cards = [
  ['Governance', 'Centralized parliament system with AI advisors and judges.'],
  ['Economy', 'Digital currency, marketplace, taxation, and budget visibility.'],
  ['AI Agents', 'BitNet agent fleet for simulation, oversight, and execution.'],
];

const aiRoles = [
  'Policy Strategist Agent',
  'Judiciary Compliance Agent',
  'Treasury Optimizer Agent',
  'Civil Service Support Agent',
];

export default function HomePage() {
  const [booting, setBooting] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-neon" />

      <AnimatePresence>
        {booting && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            className="fixed inset-0 z-[80] grid place-items-center bg-[#050510]"
          >
            <div className="text-center">
              <p className="text-xs tracking-[0.25em] text-neon">INITIALIZING DWARIKA CORE</p>
              <motion.div
                className="mx-auto mt-4 h-1 w-56 overflow-hidden rounded-full bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div className="h-full bg-neon" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.9 }} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-8">
        <HeroSection />

        <section className="glass rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl font-semibold">System Overview</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {cards.map(([title, text], i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-5"
              >
                <h3 className="text-xl font-semibold text-neon">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="glass rounded-3xl p-6 md:p-8">
          <h2 className="text-3xl font-semibold">Governance Visualization</h2>
          <p className="mt-2 text-slate-300">User → AI Advisor → Decision → Execution</p>
          <div className="mt-5">
            <DecisionFlow />
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="glass rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-semibold">Economy System</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ['Treasury Reserve', '3.1B DWR'],
                ['Daily Tx', '1.24M'],
                ['Tax Efficiency', '94.2%'],
                ['GDP Momentum', '+12.8%'],
              ].map(([k, v], i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-white/15 bg-white/5 p-4"
                >
                  <p className="text-xs text-slate-400">{k}</p>
                  <p className="mt-1 text-xl font-semibold text-neon">{v}</p>
                </motion.div>
              ))}
            </div>
          </article>

          <article className="glass rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-semibold">AI Agents</h2>
            <div className="mt-5 grid gap-3">
              {aiRoles.map((role, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {role}
                </motion.div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="glass rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-semibold">Open Source Blueprint</h2>
            <pre className="mt-4 overflow-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-cyan-200">
{`modules/
  governance-engine/
  economy-core/
  ai-agent-runtime/
  civic-ui-kit/`}
            </pre>
            <button className="mt-4 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm hover:border-neon/60">
              View on GitHub
            </button>
          </article>

          <article className="glass rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-semibold">Join Dwarika</h2>
            <form className="mt-4 grid gap-3">
              <input className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-2 focus:border-neon focus:outline-none" placeholder="Username" />
              <select className="rounded-xl border border-white/20 bg-slate-950/60 px-4 py-2 focus:border-neon focus:outline-none">
                <option>Citizen</option>
                <option>Developer</option>
                <option>Researcher</option>
              </select>
              <button type="button" className="w-fit rounded-xl bg-neon px-5 py-2 font-semibold text-slate-900">
                Submit
              </button>
            </form>
          </article>
        </section>
      </div>
    </>
  );
}
