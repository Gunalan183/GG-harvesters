import Header from './Header';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import FloatingCTA from './FloatingCTA';

export default function Layout({ children, serviceSlug }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7fdf9] text-[#1a2e1a] font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#1a5c2e] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        முக்கிய உள்ளடக்கத்திற்கு செல்லுங்கள்
      </a>
      <Header />
      <main
        id="main-content"
        className="flex-1 pt-[68px] mobile-pb"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
      <MobileBottomNav />
      <FloatingCTA serviceSlug={serviceSlug} />
    </div>
  );
}
