import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import clsx from 'clsx';

const NAV_ITEMS = [
  { label: 'முகப்பு', href: '#top' },
  { label: 'சேவைகள்', href: '#services' },
  { label: 'இயந்திரங்கள்', href: '#machinery' },
  { label: 'எங்கள் பணிகள்', href: '#gallery' },
  { label: 'வீடியோக்கள்', href: '#videos' },
  { label: 'தொடர்புக்கு', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
      {/* Main nav bar */}
      <nav
        className="container-site flex items-center justify-between"
        style={{ height: '68px' }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#top"
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
          <div className="hidden md:block leading-tight">
            <p className="brand-header-name">
              <span>GG </span>
              <span className="brand-header-harvester">HARVESTER</span>
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
              className="px-3.5 py-2 rounded-lg text-[0.83rem] font-semibold transition-all tamil text-gray-700 hover:text-[#d4a017] hover:bg-[#fdf8e8]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden items-center">
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
                className="flex items-center px-4 py-3 rounded-xl text-base font-semibold tamil transition-colors text-gray-700 hover:bg-gray-50"
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
