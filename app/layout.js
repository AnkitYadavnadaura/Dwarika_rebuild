import './globals.css';

export const metadata = {
  title: 'Nexora Nation | Virtual Civilization',
  description:
    'A next-gen virtual nation powered by Unreal Engine simulation, Next.js web, and blockchain governance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
