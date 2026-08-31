import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, Images, Phone, Settings2 } from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
  { label: 'முகப்பு', path: '/', Icon: Home },
  { label: 'சேவைகள்', path: '/services', Icon: Wrench },
  { label: 'இயந்திரங்கள்', path: '/machinery', Icon: Settings2 },
  { label: 'பணிகள்', path: '/gallery', Icon: Images },
  { label: 'தொடர்பு', path: '/contact', Icon: Phone },
];

export default function MobileBottomNav() {
  const { pathname } = useLocation();

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <nav
      className="sticky-bottom-nav md:hidden"
      aria-label="Mobile bottom navigation"
    >
      {NAV_ITEMS.map(({ label, path, Icon }) => (
        <Link
          key={path}
          to={path}
          className={clsx('sticky-nav-item', isActive(path) && 'active')}
          aria-current={isActive(path) ? 'page' : undefined}
        >
          <Icon size={20} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
