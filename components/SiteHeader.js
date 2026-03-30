import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Government', '/government'],
  ['Economy', '/economy'],
  ['Citizenship', '/citizenship'],
  ['Roadmap', '/roadmap'],
];

export default function SiteHeader() {
  return (
    <header className="topbar glass">
      <div className="brand">
        <span className="dot" />
        <strong>Dwarika Rebiuld</strong>
      </div>
      <nav>
        {links.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
