/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#070b16',
        panel: '#0f172a',
        neon: '#4cc9ff',
        violet: '#7c5cff',
      },
      boxShadow: {
        neon: '0 0 30px rgba(76, 201, 255, 0.35)',
      },
      backgroundImage: {
        'mesh-glow':
          'radial-gradient(circle at 10% 10%, rgba(76,201,255,0.28), transparent 35%), radial-gradient(circle at 90% 0%, rgba(124,92,255,0.28), transparent 40%), linear-gradient(180deg, #050816 0%, #0b1230 100%)',
      },
    },
  },
  plugins: [],
};
