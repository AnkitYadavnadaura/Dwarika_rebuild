'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const update = (event) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('pointermove', update);
    return () => window.removeEventListener('pointermove', update);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate3d(${point.x - 140}px, ${point.y - 140}px, 0)`,
      }}
      aria-hidden="true"
    />
  );
}
