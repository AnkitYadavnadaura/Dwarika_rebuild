'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const dot = document.createElement('div');
    dot.className = 'cursor-glow';
    document.body.appendChild(dot);

    const onMove = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      dot.remove();
    };
  }, []);

  return null;
}
