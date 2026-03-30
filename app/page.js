import Link from 'next/link';
import HeroSection from '../components/HeroSection';

const cards = [
  ['AI Governance Core', 'Multi-agent policy analysis and governance execution with public audit trails.'],
  ['National Economy Layer', 'Digital assets, treasury intelligence, and programmable commerce systems.'],
  ['Civic Identity Stack', 'Persistent digital citizenship, reputation, and voting rights infrastructure.'],
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSection />

      <section className="grid gap-4 md:grid-cols-3">
        {cards.map(([title, text]) => (
          <article key={title} className="glass rounded-2xl p-5">
            <h3 className="text-lg font-semibold text-neon">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{text}</p>
          </article>
        ))}
      </section>


      <section className="glass rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold">About Dwarika Rebuild</h2>
        <p className="mt-2 text-slate-300">
          Learn the long-term vision, virtual-country model, and centralized democracy framework behind Dwarika Rebuild.
        </p>
        <Link href="/about" className="mt-4 inline-block rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:border-neon/60">
          Read About Page
        </Link>
      </section>

      <section className="glass rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Explore Nation Modules</h2>
        <p className="mt-2 text-slate-300">Navigate live systems that power Dwarika Rebuild.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <Link href="/government" className="rounded-xl border border-white/15 bg-white/5 p-4 hover:border-neon/60">
            Government
          </Link>
          <Link href="/economy" className="rounded-xl border border-white/15 bg-white/5 p-4 hover:border-neon/60">
            Economy
          </Link>
          <Link href="/citizenship" className="rounded-xl border border-white/15 bg-white/5 p-4 hover:border-neon/60">
            Citizenship
          </Link>
          <Link href="/roadmap" className="rounded-xl border border-white/15 bg-white/5 p-4 hover:border-neon/60">
            Roadmap
          </Link>
        </div>
      </section>
    </div>
  );
}
