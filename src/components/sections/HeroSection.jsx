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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f3d1e]/60 to-transparent" />
      </div>

      {/* ── Main content — centered ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-6 pt-24 pb-24 md:pt-36 md:pb-32">

        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-white text-[0.7rem] font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(212,160,23,0.18)',
            border: '1px solid rgba(212,160,23,0.5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <MapPin size={11} className="text-[#f0cc5a] flex-shrink-0" />
          Kumbakonam · Thanjavur · Tamil Nadu
        </div>

        {/* Brand name */}
        <div className="mb-5">
          <h1
            className="font-extrabold text-white tracking-tight leading-none drop-shadow-lg"
            style={{ fontSize: 'clamp(2.6rem, 12vw, 5rem)', letterSpacing: '-0.02em' }}
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
            className="text-white/65 font-semibold tracking-[0.3em] uppercase mt-2"
            style={{ fontSize: 'clamp(0.65rem, 3vw, 0.85rem)' }}
          >
            &amp; Earth Movers
          </p>
        </div>

        {/* Gold divider */}
        <div
          className="w-16 h-[3px] rounded-full mb-7"
          style={{ background: 'linear-gradient(90deg, #d4a017, #f0cc5a)' }}
          aria-hidden="true"
        />

        {/* Tamil tagline — single line with bg layer */}
        <div
          className="mb-16 px-5 py-3 rounded-2xl"
          style={{
            background: 'rgba(0,0,0,0.35)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <p
            className="tamil text-white font-bold whitespace-nowrap leading-snug"
            style={{ fontSize: 'clamp(0.82rem, 4vw, 1.15rem)' }}
          >
            விவசாயம் மற்றும் நிலப் பணிகளுக்கு{' '}
            <span style={{ color: '#f0cc5a' }}>நம்பகமான இயந்திர சேவைகள்</span>
          </p>
        </div>

        {/* 2×2 CTA grid */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs mx-auto mb-10">
          {/* சேவை பதிவு */}
          <Link
            to="/book-service"
            className="inline-flex flex-col items-center justify-center gap-1.5 font-bold rounded-2xl py-4 px-3 text-center active:scale-95 transition-all"
            style={{
              background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
              color: '#1a2e1a',
              boxShadow: '0 4px 20px rgba(212,160,23,0.45)',
              fontSize: 'clamp(0.78rem, 3.5vw, 0.88rem)',
            }}
          >
            <ArrowRight size={20} />
            சேவை பதிவு செய்யுங்கள்
          </Link>

          {/* WhatsApp */}
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center justify-center gap-1.5 font-bold rounded-2xl py-4 px-3 text-center text-white active:scale-95 transition-all"
            style={{
              background: '#25d366',
              boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
              fontSize: 'clamp(0.78rem, 3.5vw, 0.88rem)',
            }}
          >
            <MessageCircle size={20} />
            WhatsApp தொடர்பு
          </a>

          {/* Phone 1 */}
          <a
            href={callLink(BUSINESS.phones[0])}
            className="inline-flex flex-col items-center justify-center gap-1.5 font-bold rounded-2xl py-4 px-3 text-center text-white active:scale-95 transition-all"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)',
              fontSize: 'clamp(0.78rem, 3.5vw, 0.88rem)',
            }}
            aria-label={`Call ${BUSINESS.phones[0]}`}
          >
            <Phone size={20} />
            {BUSINESS.phones[0]}
          </a>

          {/* Phone 2 */}
          <a
            href={callLink(BUSINESS.phones[1])}
            className="inline-flex flex-col items-center justify-center gap-1.5 font-bold rounded-2xl py-4 px-3 text-center text-white active:scale-95 transition-all"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)',
              fontSize: 'clamp(0.78rem, 3.5vw, 0.88rem)',
            }}
            aria-label={`Call ${BUSINESS.phones[1]}`}
          >
            <Phone size={20} />
            {BUSINESS.phones[1]}
          </a>
        </div>

        {/* Scroll hint */}
        <a
          href="#services"
          className="flex flex-col items-center gap-1 text-white/35 hover:text-white/60 transition-colors"
          aria-label="Scroll down"
        >
          <span className="tracking-widest uppercase text-[0.55rem]">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>


    </section>
  );
}
