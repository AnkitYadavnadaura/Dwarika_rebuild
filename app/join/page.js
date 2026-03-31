import Link from 'next/link';

export default function JoinPage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>Join Dwarika Rebuild</h1>
      <p className="subtitle">
        Choose your lane: governance, blockchain economy, VR/AR worldbuilding, AI/AGI safety, or protocol engineering.
      </p>

      <form className="panel subpage-panel form-panel" action="#">
        <div className="form-row">
          <input placeholder="Full name" />
          <input placeholder="Email" />
        </div>
        <div className="form-row">
          <select defaultValue="">
            <option value="" disabled>Select primary role</option>
            <option>Governance Designer</option>
            <option>Blockchain Engineer</option>
            <option>VR/AR Experience Architect</option>
            <option>AI / AGI Alignment Researcher</option>
          </select>
          <input placeholder="Timezone" />
        </div>
        <textarea rows={5} placeholder="What will you build for the digital nation?" />
        <button className="btn-primary" type="submit">Submit Application</button>
      </form>

      <section className="grid three">
        <article className="panel subpage-panel"><h2>Builders</h2><p>Create protocol primitives and public infrastructure.</p></article>
        <article className="panel subpage-panel"><h2>Researchers</h2><p>Advance alignment, policy science, and economic modeling.</p></article>
        <article className="panel subpage-panel"><h2>Creators</h2><p>Design VR/AR spaces where citizens work and govern.</p></article>
      </section>
    </main>
  );
}
