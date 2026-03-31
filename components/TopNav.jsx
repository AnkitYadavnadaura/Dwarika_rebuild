'use client';

import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Governance', '/governance'],
  ['Economy', '/economy'],
  ['AI Agents', '/agents'],
  ['Open Source', '/open-source'],
  ['Join', '/join'],
];

export default function TopNav() {
  return (
    <nav className="top-nav panel">
      {links.map(([label, href]) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
