import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Government', '/government'],
  ['Economy', '/economy'],
  ['Citizenship', '/citizenship'],
  ['Roadmap', '/roadmap'],
];

export default function SiteHeader() {
  return (
    <header className="glass sticky top-4 z-40 rounded-2xl px-5 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold tracking-wide text-neon">
          <span className="h-2.5 w-2.5 rounded-full bg-neon shadow-neon" />
          Dwarika Rebuild
        </Link>
        <nav className="hidden gap-5 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-neon">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
