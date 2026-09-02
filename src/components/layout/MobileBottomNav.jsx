import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Wrench, Settings2, Images, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'முகப்பு', type: 'anchor', href: '#top', Icon: Home },
  { label: 'சேவைகள்', type: 'anchor', href: '#services', Icon: Wrench },
  { label: 'இயந்திரங்கள்', type: 'anchor', href: '#machinery', Icon: Settings2 },
  { label: 'பணிகள்', type: 'link', href: '/works', Icon: Images },
  { label: 'தொடர்பு', type: 'anchor', href: '#contact', Icon: Phone },
];

export default function MobileBottomNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    if (pathname !== '/') {
      navigate(href === '#top' ? '/' : '/' + href);
      return;
    }
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="sticky-bottom-nav md:hidden"
      aria-label="Mobile bottom navigation"
    >
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
