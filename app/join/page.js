import Link from 'next/link';

export default function JoinPage() {
  return (
    <main className="subpage-shell">
      <Link href="/" className="back-link">← Back to nation overview</Link>
      <h1>Join Dwarika Rebuild</h1>
      <p className="subtitle">Apply to collaborate with humans and AI on governance, economy, and infrastructure.</p>
      <form className="panel subpage-panel form-panel" action="#">
        <div className="form-row">
          <input placeholder="Full name" />
          <input placeholder="Email" />
        </div>
        <div className="form-row">
          <select defaultValue="">
            <option value="" disabled>Select role</option>
            <option>Citizen Builder</option>
            <option>Policy Researcher</option>
            <option>AI Engineer</option>
          </select>
          <input placeholder="Timezone" />
        </div>
        <textarea rows={5} placeholder="Your mission for Dwarika" />
        <button className="btn-primary" type="submit">Submit Application</button>
      </form>
    </main>
  );
}
