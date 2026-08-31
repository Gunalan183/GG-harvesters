import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

const SERVICES_PILLS = [
  { label: 'Paddy Harvester', icon: '🌾' },
  { label: 'Tractor',         icon: '🚜' },
  { label: 'Rotavator',       icon: '🌱' },
  { label: 'JCB 3CX',        icon: '🏗️' },
  { label: 'Mini Excavator',  icon: '⛏️' },
  { label: 'Round Baler',     icon: '🌀' },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background image + overlay ── */}
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
        {/* Multi-layer overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
        {/* Subtle green tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f3d1e]/60 to-transparent" />
      </div>

      {/* ── Main content — centered ── */}
      <div className="container-site relative z-10 flex flex-col items-center text-center py-28 md:py-36 px-4">

        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-white text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(212,160,23,0.18)',
            border: '1px solid rgba(212,160,23,0.5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <MapPin size={12} className="text-[#f0cc5a]" />
          Kumbakonam &nbsp;·&nbsp; Thanjavur &nbsp;·&nbsp; Tamil Nadu
        </div>

        {/* Brand name — THE focal point */}
        <div className="mb-4">
          <h1
            className="font-extrabold text-white tracking-tight leading-none drop-shadow-lg"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            GG{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(90deg, #f0cc5a, #d4a017)',
              }}
            >
              HARVESTER
            </span>
          </h1>
          <p
            className="text-white/70 font-semibold tracking-[0.25em] uppercase mt-1"
            style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.9rem)' }}
          >
            &amp; Earth Movers
          </p>
        </div>

        {/* Gold divider */}
        <div
          className="w-20 h-1 rounded-full mb-6"
          style={{ background: 'linear-gradient(90deg, #d4a017, #f0cc5a)' }}
          aria-hidden="true"
        />

        {/* Tamil tagline */}
        <p
          className="tamil text-white/90 font-bold mb-3 max-w-xl mx-auto leading-snug"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
        >
          விவசாயம் மற்றும் நிலப் பணிகளுக்கு{' '}
          <span style={{ color: '#f0cc5a' }}>நம்பகமான இயந்திர சேவைகள்</span>
        </p>

        {/* English subtitle */}
        <p
          className="text-white/65 mb-10 max-w-lg mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1rem)' }}
        >
          Paddy Harvesting · Tractor · Rotavator · JCB · Mini Excavator · Round Baler
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 w-full max-w-sm mx-auto sm:max-w-none">
          <Link
            to="/book-service"
            className="inline-flex items-center justify-center gap-2 font-bold rounded-xl py-4 px-8 text-base transition-all hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(90deg, #d4a017, #f0cc5a)',
              color: '#1a2e1a',
              boxShadow: '0 4px 24px rgba(212,160,23,0.45)',
            }}
          >
            சேவை பதிவு செய்யுங்கள்
            <ArrowRight size={18} />
          </Link>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-4 px-8 text-base justify-center hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle size={18} />
            WhatsApp தொடர்பு
          </a>
        </div>

        {/* Phone numbers */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {BUSINESS.phones.map((phone) => (
            <a
              key={phone}
              href={callLink(phone)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#f0cc5a] transition-colors rounded-full px-4 py-2"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(6px)',
              }}
              aria-label={`Call ${phone}`}
            >
              <Phone size={13} />
              {phone}
            </a>
          ))}
        </div>

        {/* Scroll hint */}
        <a
          href="#services"
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors text-xs font-medium"
          aria-label="Scroll down"
        >
          <span className="tracking-widest uppercase text-[0.6rem]">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>

      {/* ── Bottom services strip ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 hidden md:block"
        style={{
          background: 'rgba(10,45,22,0.80)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(212,160,23,0.25)',
        }}
      >
        <div className="container-site py-3 flex items-center justify-center gap-8 overflow-x-auto">
          {SERVICES_PILLS.map(({ label, icon }) => (
            <span
              key={label}
              className="text-white/75 text-xs font-semibold whitespace-nowrap flex items-center gap-1.5"
            >
              <span aria-hidden="true">{icon}</span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
