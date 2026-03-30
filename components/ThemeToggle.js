'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('theme-light', light);
  }, [light]);

  return (
    <button
      type="button"
      onClick={() => setLight((v) => !v)}
      className="rounded-lg border border-white/20 px-3 py-1 text-xs text-slate-200 transition hover:border-neon"
    >
      {light ? 'Dark UI' : 'Light UI'}
    </button>
  );
}
