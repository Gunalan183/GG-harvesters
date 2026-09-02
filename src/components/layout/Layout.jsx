import Header from './Header';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import SplashScreen from './SplashScreen';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations } from '../../i18n/translations';

export default function Layout({ children }) {
  const { lang } = useLanguage();
  const t = getTranslations(lang).layout;

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfaf6] text-[#1a1814] font-sans">
      <SplashScreen />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#d4a017] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        {t.skipLink}
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
    </div>
  );
}
