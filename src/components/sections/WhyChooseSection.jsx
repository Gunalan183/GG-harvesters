import { useEffect, useRef } from 'react';
import { Shield, Users, Clock, Wheat, MapPin, Phone, Wrench } from 'lucide-react';

const POINTS = [
  {
    icon: Shield,
    title: 'நம்பகமான இயந்திரங்கள்',
    desc: 'நன்கு பராமரிக்கப்பட்ட நவீன இயந்திரங்கள்',
    color: '#d4a017',
    bg: 'rgba(212,160,23,0.1)',
    border: 'rgba(212,160,23,0.25)',
  },
  {
    icon: Users,
    title: 'அனுபவமிக்க ஆபரேட்டர்கள்',
    desc: 'திறமையான, பயிற்சி பெற்ற ஆபரேட்டர்கள்',
    color: '#1a5c2e',
    bg: 'rgba(26,92,46,0.1)',
    border: 'rgba(26,92,46,0.25)',
  },
  {
    icon: Clock,
    title: 'சரியான நேரத்தில் சேவை',
    desc: 'கோரிய நேரத்தில் இயந்திரம் வரும்',
    color: '#1565c0',
    bg: 'rgba(21,101,192,0.1)',
    border: 'rgba(21,101,192,0.25)',
  },
  {
    icon: Wheat,
    title: 'விவசாயிகளுக்கான சேவை',
    desc: 'விவசாய தேவைகளை புரிந்து சேவை',
    color: '#2e7d32',
    bg: 'rgba(46,125,50,0.1)',
    border: 'rgba(46,125,50,0.25)',
  },
  {
    icon: MapPin,
    title: 'சுற்றுவட்டார பகுதிகள்',
    desc: 'கும்பகோணம், தஞ்சாவூர் மற்றும் அருகில்',
    color: '#c62828',
    bg: 'rgba(198,40,40,0.1)',
    border: 'rgba(198,40,40,0.25)',
  },
  {
    icon: Phone,
    title: 'நேரடி தொடர்பு',
    desc: 'நேரடியாக அழைத்து சேவை பதிவு செய்யலாம்',
    color: '#6a1b9a',
    bg: 'rgba(106,27,154,0.1)',
    border: 'rgba(106,27,154,0.25)',
  },
  {
    icon: Wrench,
    title: 'இயந்திர மெக்கானிக்கல் சேவை',
    desc: 'Machinery Mechanical Service — இயந்திரங்கள் பழுது சரிசெய்தல்',
    color: '#e65100',
    bg: 'rgba(230,81,0,0.1)',
    border: 'rgba(230,81,0,0.25)',
  },
];

export default function WhyChooseSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('why-card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f7fdf9 0%, #edf7f1 100%)', padding: '5rem 0' }}
      aria-labelledby="why-choose-heading"
    >
      {/* Decorative bg circle */}
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ top: '-6rem', right: '-6rem', width: '24rem', height: '24rem', borderRadius: '50%', background: 'rgba(212,160,23,0.05)' }} />
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ bottom: '-4rem', left: '-4rem', width: '18rem', height: '18rem', borderRadius: '50%', background: 'rgba(26,92,46,0.05)' }} />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <span
            className="inline-block tamil text-xs font-bold tracking-widest uppercase rounded-full"
            style={{ background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.35)', color: '#b8860b', padding: '0.35rem 1rem', marginBottom: '1rem' }}
          >
            ஏன் GG?
          </span>
          <h2
            id="why-choose-heading"
            className="tamil font-extrabold"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', lineHeight: 1.2, color: '#1a1814', marginBottom: '0.75rem' }}
          >
            GG Harvester-ஐ{' '}
            <span style={{ color: '#d4a017' }}>ஏன் தேர்வு செய்வது?</span>
          </h2>
          <p className="tamil text-[#6b7280] mx-auto text-center" style={{ fontSize: '0.95rem', maxWidth: '480px' }}>
            எங்கள் வாடிக்கையாளர்களுக்கு நாங்கள் வழங்கும் மதிப்பு.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="why-card group relative overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: '#fff',
                  border: `1px solid ${point.border}`,
                  padding: '1.5rem',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Subtle bg gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${point.bg}, transparent)` }}
                />

                {/* Step number */}
                <span
                  className="absolute top-3 right-4 font-black"
                  style={{ fontSize: '3.5rem', lineHeight: 1, color: point.bg, zIndex: 0 }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-2xl mb-4"
                    style={{ width: '3rem', height: '3rem', background: point.bg, border: `1.5px solid ${point.border}` }}
                  >
                    <Icon size={22} style={{ color: point.color }} strokeWidth={2} />
                  </div>

                  <h3 className="tamil font-extrabold text-[#1a1814] leading-snug" style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                    {point.title}
                  </h3>
                  <p className="tamil text-[#6b7280] text-sm leading-relaxed">
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
