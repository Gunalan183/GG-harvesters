import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Wrench, Settings2, Images, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations } from '../../i18n/translations';

export default function MobileBottomNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = getTranslations(lang).nav;

  const NAV_ITEMS = [
    { label: t.home,     type: 'anchor', href: '#top',      Icon: Home },
    { label: t.services, type: 'anchor', href: '#services', Icon: Wrench },
    { label: t.machinery,type: 'anchor', href: '#machinery',Icon: Settings2 },
    { label: t.works,    type: 'link',   href: '/works',    Icon: Images },
    { label: t.contact,  type: 'anchor', href: '#contact',  Icon: Phone },
  ];

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    if (pathname !== '/') {
      navigate(href === '#top' ? '/' : '/' + href);
      return;
    }
    if (href === '#top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky-bottom-nav md:hidden" aria-label="Mobile bottom navigation">
      {NAV_ITEMS.map(({ label, type, href, Icon }) => {
        const isActive = type === 'link' ? pathname === href : false;

        if (type === 'link') {
          return (
            <Link
              key={href}
              to={href}
              className={`sticky-nav-item${isActive ? ' active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          );
        }

        return (
          <a
            key={href}
            href={href}
            onClick={(e) => handleAnchorClick(e, href)}
            className="sticky-nav-item"
          >
            <Icon size={20} />
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
