const roadmap = [
  ['Q2 2026', 'Capital District Expansion', 'Add mobility, housing, and trade zones in Unreal simulation.'],
  ['Q3 2026', 'Citizen Assembly v2', 'Launch delegated voting and public amendment cycles.'],
  ['Q4 2026', 'Economic Layer v3', 'Inter-district commerce and sovereign treasury automation.'],
  ['Q1 2027', 'Alliance Program', 'Open diplomatic and interoperability channels with partner worlds.'],
];

export default function RoadmapPage() {
  return (
    <section className="glass section-page">
      <h1>National Roadmap</h1>
      <p>Long-term development milestones for Dwarika Rebiuld.</p>
      <div className="cards-2">
        {roadmap.map(([phase, title, text]) => (
          <article className="mini" key={phase}>
            <span className="phase">{phase}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
