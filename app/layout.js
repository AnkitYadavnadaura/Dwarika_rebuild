import './globals.css';

export const metadata = {
  title: 'Dwarika Rebuild | Digital Nation Interface',
  description: 'Dwarika Rebuild is an immersive digital nation where humans and AI co-govern democracy and economy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
