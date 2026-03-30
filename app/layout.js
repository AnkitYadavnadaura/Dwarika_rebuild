import './globals.css';

export const metadata = {
  title: 'Dwarika Rebiuld | Digital Sovereign Nation',
  description:
    'Official web portal for Dwarika Rebiuld, a futuristic virtual nation powered by Unreal Engine simulation and blockchain governance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
