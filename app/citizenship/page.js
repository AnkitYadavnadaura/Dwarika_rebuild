const steps = [
  'Create identity wallet and complete civic verification',
  'Choose district and declare your skill profile',
  'Read constitution and sign citizen charter',
  'Join your first community mission or governance vote',
];

export default function CitizenshipPage() {
  return (
    <section className="glass section-page">
      <h1>Citizenship Center</h1>
      <p>Become a verified digital citizen and participate in nation-building from day one.</p>
      <ol className="feature-list">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <button>Start Citizen Onboarding</button>
    </section>
  );
}
