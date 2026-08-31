import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/services/gg-paddy-harvester-service-kumbakonam.jpg"
          alt="GG Harvester paddy harvesting machine working in a rice field near Kumbakonam"
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
          width={1600}
          height={900}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background =
              'linear-gradient(160deg, #0a2d16 0%, #1a5c2e 60%, #0f3d1e 100%)';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center w-full px-6"
        style={{ paddingTop: '7rem', paddingBottom: '5rem' }}
      >

        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full text-white text-[0.7rem] font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(212,160,23,0.18)',
            border: '1px solid rgba(212,160,23,0.5)',
            backdropFilter: 'blur(10px)',
            padding: '0.5rem 1rem',
            marginBottom: '2rem',
          }}
        >
          <MapPin size={11} className="text-[#f0cc5a] flex-shrink-0" />
          Kumbakonam · Thanjavur · Tamil Nadu
        </div>

        {/* Brand name */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1
            className="font-extrabold text-white tracking-tight leading-none drop-shadow-lg"
            style={{ fontSize: 'clamp(2.8rem, 13vw, 5.5rem)', letterSpacing: '-0.02em' }}
          >
            GG{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #f0cc5a, #d4a017)' }}
            >
              HARVESTER
            </span>
          </h1>
          <p
            className="text-white/65 font-semibold tracking-[0.3em] uppercase"
            style={{ fontSize: 'clamp(0.65rem, 3vw, 0.85rem)', marginTop: '0.6rem' }}
          >
            &amp; Earth Movers
          </p>
        </div>

        {/* Gold divider */}
        <div
          className="rounded-full"
          style={{
            width: '64px',
            height: '3px',
            background: 'linear-gradient(90deg, #d4a017, #f0cc5a)',
            marginBottom: '2rem',
          }}
          aria-hidden="true"
        />

        {/* Tamil tagline — single line with frosted bg */}
        <div
          className="rounded-2xl"
          style={{
            background: 'rgba(0,0,0,0.38)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)',
            padding: '0.75rem 1.25rem',
            marginBottom: '3rem',
          }}
        >
          <p
            className="tamil text-white font-bold whitespace-nowrap leading-snug"
            style={{ fontSize: 'clamp(0.82rem, 4vw, 1.1rem)' }}
          >
            விவசாயம் மற்றும் நிலப் பணிகளுக்கு{' '}
            <span style={{ color: '#f0cc5a' }}>நம்பகமான இயந்திர சேவைகள்</span>
          </p>
        </div>

        {/* 2×2 CTA grid */}
        <div
          className="grid grid-cols-2 w-full"
          style={{ gap: '0.75rem', maxWidth: '320px', marginBottom: '2.5rem' }}
        >
          {/* Book service */}
          <Link
            to="/book-service"
            className="inline-flex flex-col items-center justify-center gap-2 font-bold rounded-2xl text-center active:scale-95 transition-transform"
            style={{
              background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
              color: '#1a2e1a',
              boxShadow: '0 4px 20px rgba(212,160,23,0.45)',
              fontSize: 'clamp(0.78rem, 3.8vw, 0.9rem)',
              padding: '1rem 0.75rem',
            }}
          >
            <ArrowRight size={22} />
            சேவை பதிவு செய்யுங்கள்
          </Link>

          {/* WhatsApp */}
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-center gap-2 font-bold rounded-2xl text-center text-white active:scale-95 transition-transform"
            style={{
              background: '#25d366',
              boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
              fontSize: 'clamp(0.78rem, 3.8vw, 0.9rem)',
              padding: '1rem 0.75rem',
            }}
          >
            <MessageCircle size={22} />
            WhatsApp தொடர்பு
          </a>

          {/* Phone 1 */}
          <a
            href={callLink(BUSINESS.phones[0])}
            className="inline-flex flex-col items-center justify-center gap-2 font-bold rounded-2xl text-center text-white active:scale-95 transition-transform"
            style={{
              background: 'rgba(255,255,255,0.13)',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
              fontSize: 'clamp(0.78rem, 3.8vw, 0.9rem)',
              padding: '1rem 0.75rem',
            }}
            aria-label={`Call ${BUSINESS.phones[0]}`}
          >
            <Phone size={22} />
            {BUSINESS.phones[0]}
          </a>

          {/* Phone 2 */}
          <a
            href={callLink(BUSINESS.phones[1])}
            className="inline-flex flex-col items-center justify-center gap-2 font-bold rounded-2xl text-center text-white active:scale-95 transition-transform"
            style={{
              background: 'rgba(255,255,255,0.13)',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(8px)',
              fontSize: 'clamp(0.78rem, 3.8vw, 0.9rem)',
              padding: '1rem 0.75rem',
            }}
            aria-label={`Call ${BUSINESS.phones[1]}`}
          >
            <Phone size={22} />
            {BUSINESS.phones[1]}
          </a>
        </div>

        {/* Scroll hint */}
        <a
          href="#services"
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Scroll down"
        >
          <span className="tracking-widest uppercase" style={{ fontSize: '0.55rem' }}>Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
