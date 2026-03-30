export default function FeatureCard({ title, description, icon }) {
  return (
    <article className="glass rounded-2xl p-5 transition hover:border-neon/60 hover:bg-white/10">
      <p className="text-2xl">{icon}</p>
      <h3 className="mt-3 text-lg font-semibold text-neon">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </article>
  );
}
