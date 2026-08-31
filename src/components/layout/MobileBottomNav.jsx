import { Home, Wrench, Settings2, Images, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'முகப்பு',     href: '#top',      Icon: Home },
  { label: 'சேவைகள்',    href: '#services',  Icon: Wrench },
  { label: 'இயந்திரங்கள்', href: '#machinery', Icon: Settings2 },
  { label: 'பணிகள்',     href: '#gallery',   Icon: Images },
  { label: 'தொடர்பு',    href: '#contact',   Icon: Phone },
];

export default function MobileBottomNav() {
  const handleClick = (e, href) => {
    e.preventDefault();
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
      {NAV_ITEMS.map(({ label, href, Icon }) => (
        <a
          key={href}
          href={href}
          onClick={(e) => handleClick(e, href)}
          className="sticky-nav-item"
        >
          <Icon size={20} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
