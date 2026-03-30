'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  ['About', '/about'],
  ['Governance', '/governance'],
  ['Economy', '/economy'],
  ['AI Agents', '/ai-agents'],
  ['Open Source', '/open-source'],
  ['Join', '/join'],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass sticky top-4 z-50 rounded-2xl px-4 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold text-neon">
          <span className="h-2.5 w-2.5 rounded-full bg-neon shadow-neon" /> Dwarika Rebuild
        </Link>

        <nav className="hidden items-center gap-4 text-sm text-slate-300 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-neon">
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <button type="button" className="rounded-lg border border-white/20 px-3 py-1 text-sm lg:hidden" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
      </div>

      {open && (
        <nav className="mt-3 grid gap-2 border-t border-white/10 pt-3 text-sm text-slate-300 lg:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-lg px-2 py-1 hover:bg-white/10" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      )}
    </header>
  );
}
