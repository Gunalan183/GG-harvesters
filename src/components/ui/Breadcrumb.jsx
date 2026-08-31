import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-0.5 text-sm py-3"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-0.5">
          {i > 0 && <ChevronRight size={13} className="text-gray-400" aria-hidden="true" />}
          {item.path ? (
            <Link
              to={item.path}
              className="text-[#d4a017] hover:text-[#b8870f] font-medium transition-colors tamil"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#4b5563] tamil" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
