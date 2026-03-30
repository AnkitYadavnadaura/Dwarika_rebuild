import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Dwarika Rebiuld | Digital Sovereign Nation',
  description:
    'Official web portal for Dwarika Rebiuld, a futuristic virtual nation powered by Unreal Engine simulation and blockchain governance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="dw-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  );
}
