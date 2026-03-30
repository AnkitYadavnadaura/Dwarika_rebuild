import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Dwarika Rebuild | Digital Nation',
  description: 'A futuristic virtual country with human + AI co-governance and a digital economy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-8 pt-4 md:px-6">
          <SiteHeader />
          <div className="mt-6">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
