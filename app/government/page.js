const ministries = [
  ['Infrastructure', 'Smart transit, zoning, utilities, and district simulation.'],
  ['Economy', 'Treasury policy, taxation, grants, and market oversight.'],
  ['Justice', 'Constitutional rights, arbitration, and legal protocol.'],
  ['Innovation', 'R&D incentives, startup incubation, and public APIs.'],
];

export default function GovernmentPage() {
  return (
    <section className="glass section-page">
      <h1>Government Portal</h1>
      <p>Transparent digital democracy with on-chain accountability and public institutions.</p>
      <div className="cards-2">
        {ministries.map(([name, desc]) => (
          <article className="mini" key={name}>
            <h3>Ministry of {name}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
