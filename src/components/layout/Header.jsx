import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { BUSINESS, NAV_LINKS, SERVICES } from '../../data/siteData';
import { callLink } from '../../utils/whatsapp';
import clsx from 'clsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (p) => (p === '/' ? location.pathname === '/' : location.pathname.startsWith(p));

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
      {/* Top info bar */}
      <div className="hidden md:block bg-[#1a5c2e]">
        <div className="container-site flex items-center justify-between py-1.5">
          <p className="tamil text-white/90 text-xs tracking-wide">
            229 Main Road, Pambapadiyur, Kumbakonam Taluk, Thanjavur – 612703
          </p>
          <div className="flex items-center gap-5">
            {BUSINESS.phones.map((p) => (
              <a
                key={p}
                href={callLink(p)}
                className="flex items-center gap-1.5 text-white/90 hover:text-[#f0cc5a] text-xs font-medium transition-colors"
              >
                <Phone size={11} />
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <nav
        className="container-site flex items-center justify-between"
        style={{ height: '68px' }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 flex-shrink-0"
          aria-label="GG Harvester Home"
        >
          <img
            src="/GG_harvester_and_Earth_Movers_Logo.png"
            alt="GG Harvester and Earth Movers Logo"
            className="h-11 w-auto object-contain"
            width={110}
            height={44}
          />
          <div className="hidden md:block leading-tight">
            <p className="font-extrabold text-sm tracking-tight text-[#1a5c2e]">
              GG HARVESTER
            </p>
            <p className="text-[0.65rem] text-gray-500 font-medium tracking-wide uppercase">
              &amp; Earth Movers
            </p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {NAV_LINKS.map((link) => {
            if (link.path === '/services') {
              return (
                <div key={link.path} className="relative group">
                  <button
                    className={clsx(
                      'flex items-center gap-1 px-3.5 py-2 rounded-lg text-[0.83rem] font-semibold transition-all tamil',
                      isActive('/services')
                        ? 'text-[#1a5c2e] bg-[#e8f5ec]'
                        : 'text-gray-700 hover:text-[#1a5c2e] hover:bg-[#e8f5ec]'
                    )}
                  >
                    {link.label}
                    <ChevronDown size={13} className="mt-px opacity-60" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="mx-3 mb-2 pb-2 border-b border-gray-100">
                      <Link
                        to="/services"
                        className="block px-3 py-2 rounded-lg text-sm font-bold text-[#1a5c2e] hover:bg-[#e8f5ec] tamil transition-colors"
                      >
                        அனைத்து சேவைகளும்
                      </Link>
                    </div>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-2.5 mx-3 px-3 py-2 rounded-lg text-[0.82rem] text-gray-600 hover:bg-[#e8f5ec] hover:text-[#1a5c2e] tamil transition-colors"
                      >
                        <span
                          className="w-6 h-6 rounded-md bg-[#1a5c2e] flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                          aria-hidden="true"
                        >
                          {s.nameEnglish.slice(0, 1)}
                        </span>
                        {s.nameTamil}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'px-3.5 py-2 rounded-lg text-[0.83rem] font-semibold transition-all tamil',
                  isActive(link.path)
                    ? 'text-[#1a5c2e] bg-[#e8f5ec]'
                    : 'text-gray-700 hover:text-[#1a5c2e] hover:bg-[#e8f5ec]'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile right buttons — only hamburger */}
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'flex items-center px-4 py-3 rounded-xl text-base font-semibold tamil transition-colors',
                  isActive(link.path)
                    ? 'bg-[#e8f5ec] text-[#1a5c2e]'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Service list */}
            <div className="ml-4 pl-4 mt-1 space-y-0.5 border-l-2 border-[#e8f5ec]">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm tamil text-gray-600 hover:text-[#1a5c2e] hover:bg-[#e8f5ec] transition-colors"
                >
                  <span
                    className="w-5 h-5 rounded-md bg-[#1a5c2e] flex items-center justify-center text-[0.6rem] font-bold text-white flex-shrink-0"
                    aria-hidden="true"
                  >
                    {s.nameEnglish.slice(0, 1)}
                  </span>
                  {s.nameTamil}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100">
              <Link
                to="/book-service"
                className="flex items-center justify-center w-full bg-[#d4a017] text-white font-bold rounded-xl py-3.5 hover:bg-[#b8870f] transition-colors tamil"
              >
                சேவை பதிவு செய்யுங்கள்
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
