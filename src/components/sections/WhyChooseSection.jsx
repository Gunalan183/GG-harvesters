import { useEffect, useRef } from 'react';
import { Shield, Users, Clock, Wheat, MapPin, Phone, Wrench } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations } from '../../i18n/translations';

const ICONS = [Shield, Users, Clock, Wheat, MapPin, Phone, Wrench];
const STYLES = [
  { color: '#d4a017', bg: 'rgba(212,160,23,0.1)',  border: 'rgba(212,160,23,0.25)' },
  { color: '#1a5c2e', bg: 'rgba(26,92,46,0.1)',    border: 'rgba(26,92,46,0.25)' },
  { color: '#1565c0', bg: 'rgba(21,101,192,0.1)',  border: 'rgba(21,101,192,0.25)' },
  { color: '#2e7d32', bg: 'rgba(46,125,50,0.1)',   border: 'rgba(46,125,50,0.25)' },
  { color: '#c62828', bg: 'rgba(198,40,40,0.1)',   border: 'rgba(198,40,40,0.25)' },
  { color: '#6a1b9a', bg: 'rgba(106,27,154,0.1)',  border: 'rgba(106,27,154,0.25)' },
  { color: '#e65100', bg: 'rgba(230,81,0,0.1)',    border: 'rgba(230,81,0,0.25)' },
];

export default function WhyChooseSection() {
  const containerRef = useRef(null);
  const { lang } = useLanguage();
  const t = getTranslations(lang).whyChoose;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const cards = containerRef.current.querySelectorAll('.animate-stagger-card');
          cards.forEach((card) => {
            card.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
            card.classList.add('opacity-100', 'translate-y-0', 'scale-100');
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f7fdf9 0%, #edf7f1 100%)', padding: '5rem 0' }}
      aria-labelledby="why-choose-heading"
    >
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ top: '-6rem', right: '-6rem', width: '24rem', height: '24rem', borderRadius: '50%', background: 'rgba(212,160,23,0.05)' }} />
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ bottom: '-4rem', left: '-4rem', width: '18rem', height: '18rem', borderRadius: '50%', background: 'rgba(26,92,46,0.05)' }} />

      <div className="container-site relative z-10" ref={containerRef}>
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase rounded-full"
            style={{ background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.35)', color: '#b8860b', padding: '0.35rem 1rem', marginBottom: '1rem' }}
          >
            {t.badge}
          </span>
          <h2
            id="why-choose-heading"
            className="font-extrabold"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', lineHeight: 1.2, color: '#1a1814', marginBottom: '0.75rem' }}
          >
            {t.heading}{' '}
            <span style={{ color: '#d4a017' }}>{t.headingHighlight}</span>
          </h2>
          <p className="text-[#6b7280] mx-auto text-center" style={{ fontSize: '0.95rem', maxWidth: '480px' }}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.points.map((point, i) => {
            const Icon = ICONS[i];
            const style = STYLES[i];
            return (
              <div
                key={i}
                className="animate-stagger-card group relative overflow-hidden rounded-2xl transition-all duration-[800ms] cubic-bezier(0.2,0.8,0.2,1) opacity-0 translate-y-12 scale-95 hover:!translate-y-[-0.5rem] hover:shadow-2xl"
                style={{
                  background: '#fff',
                  border: `1px solid ${style.border}`,
                  padding: '1.5rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${style.bg}, transparent)` }}
                />
                <span
                  className="absolute top-3 right-4 font-black"
                  style={{ fontSize: '3.5rem', lineHeight: 1, color: style.bg, zIndex: 0 }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div className="relative z-10">
                  <div
                    className="flex items-center justify-center rounded-2xl mb-4"
                    style={{ width: '3rem', height: '3rem', background: style.bg, border: `1.5px solid ${style.border}` }}
                  >
                    <Icon size={22} style={{ color: style.color }} strokeWidth={2} />
                  </div>
                  <h3 className="font-extrabold text-[#1a1814] leading-snug" style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                    {point.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
