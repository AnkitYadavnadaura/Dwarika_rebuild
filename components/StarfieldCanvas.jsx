'use client';

import { useEffect, useRef } from 'react';

const STAR_COUNT = 180;

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      size: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.00025 + 0.0001,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.4,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.7,
      );
      gradient.addColorStop(0, 'rgba(81, 144, 255, 0.06)');
      gradient.addColorStop(1, 'rgba(5, 5, 16, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > 1.02) {
          star.y = -0.02;
          star.x = Math.random();
        }

        const flicker = (Math.sin(time * 0.001 + star.x * 12) + 1) * 0.5;
        ctx.beginPath();
        ctx.fillStyle = `rgba(102, 229, 255, ${0.2 + flicker * 0.65})`;
        ctx.shadowBlur = 16;
        ctx.shadowColor = 'rgba(97, 196, 255, 0.8)';
        ctx.arc(star.x * canvas.width, star.y * canvas.height, star.size * star.z, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
