import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import CursorGlow from '../components/CursorGlow';

export const metadata = {
  title: 'Dwarika Rebuild | Digital Nation Platform',
  description: 'Immersive futuristic portal for a centralized virtual country co-governed by humans and AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorGlow />
        <div className="mx-auto min-h-screen w-full max-w-6xl px-4 pb-8 pt-4 md:px-6">
          <SiteHeader />
          <div className="mt-6">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
