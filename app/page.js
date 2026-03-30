import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';

export const metadata = {
  title: 'Dwarika Rebuild | Rebuilding Dwarika as a Digital Nation',
  description:
    'Explore Dwarika Rebuild: a futuristic centralized virtual country where humans and AI co-govern democracy, economy, and justice.',
};

const features = [
  {
    title: 'Governance System',
    description: 'Parliament + AI advisors with transparent digital decision pipeline.',
    icon: '🏛️',
  },
  {
    title: 'Digital Economy',
    description: 'Currency, marketplace, taxes, and national budget managed in one core.',
    icon: '💠',
  },
  {
    title: 'AI Civil Agents',
    description: 'BitNet agents for governance analysis, judiciary support, and operations.',
    icon: '🤖',
  },
  {
    title: 'Open Source Nation',
    description: 'Blueprints and public modules open for developers and contributors.',
    icon: '🧩',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </section>
    </div>
  );
}
