import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';
import { useLanguage, LANGUAGES, LANG_CYCLE } from '../../context/LanguageContext';
import { getTranslations } from '../../i18n/translations';
import clsx from 'clsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, switchLang } = useLanguage();
  const t = getTranslations(lang);

  const NAV_ITEMS = [
    { label: t.nav.home,     href: '#top' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.machinery,href: '#machinery' },
    { label: t.nav.works,    href: '/works' },
    { label: t.nav.videos,   href: '#videos' },
    { label: t.nav.contact,  href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/')) { navigate(href); return; }
    if (location.pathname !== '/') {
      navigate(href === '#top' ? '/' : '/' + href);
      return;
    }
    if (href === '#top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Cycle to the next language in order: en → ta → kn → en
  const cycleNext = () => {
    const idx = LANG_CYCLE.indexOf(lang);
    const next = LANG_CYCLE[(idx + 1) % LANG_CYCLE.length];
    switchLang(next);
  };

  // Button label shows the NEXT language in the cycle
  const nextLang = LANG_CYCLE[(LANG_CYCLE.indexOf(lang) + 1) % LANG_CYCLE.length];
  const nextLabel = LANGUAGES[nextLang];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white border-b border-gray-100 shadow-sm'
      )}
      role="banner"
    >
      <nav
        className="container-site flex items-center justify-between"
        style={{ height: '68px' }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 flex-shrink-0"
          aria-label="GG Harvester Home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#top'); }}
        >
          <img
            src="/GG_harvester_and_Earth_Movers_Logo_BG.png"
            alt="GG Harvester and Earth Movers Logo"
            className="h-11 w-auto object-contain"
            width={110}
            height={44}
          />
          <div className="leading-tight">
            <p className="brand-header-name">
              <span>GG </span>
              <span className="brand-header-harvester">HARVESTERS</span>
            </p>
            <p className="brand-header-sub">&amp; Earth Movers</p>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="px-3.5 py-2 rounded-lg text-[0.83rem] font-semibold transition-all text-gray-700 hover:text-[#d4a017] hover:bg-[#fdf8e8]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop: language switcher */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={cycleNext}
            className="flex items-center gap-1.5 rounded-full font-bold text-xs tracking-wide transition-all active:scale-95 hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
              color: '#1a1814',
              padding: '0.4rem 0.9rem',
              boxShadow: '0 2px 10px rgba(212,160,23,0.35)',
            }}
            aria-label={`Switch to ${nextLabel}`}
          >
            <Globe size={13} />
            {nextLabel}
          </button>
        </div>

        {/* Mobile: call + whatsapp + lang toggle + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={cycleNext}
            className="flex items-center gap-1 rounded-full font-bold text-[0.65rem] tracking-wide transition-all active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
              color: '#1a1814',
              padding: '0.3rem 0.65rem',
              boxShadow: '0 2px 8px rgba(212,160,23,0.35)',
            }}
            aria-label={`Switch to ${nextLabel}`}
          >
            <Globe size={11} />
            {nextLabel}
          </button>
          <a
            href={callLink(BUSINESS.phones[0])}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e8f5ec] text-[#1a5c2e] hover:bg-[#1a5c2e] hover:text-white transition-colors"
            aria-label={`Call ${BUSINESS.phones[0]}`}
          >
            <Phone size={17} />
          </a>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e8f5ec] text-[#25d366] hover:bg-[#25d366] hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={17} />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="container-site py-4 space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
