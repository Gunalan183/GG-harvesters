import { Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';
import mobileBg from '../../assets/images/Hero-section_BG.png';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ borderRadius: '0 0 2rem 2rem' }}
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Mobile BG — shown only below md (768px) */}
        <img
          src={mobileBg}
          alt=""
          aria-hidden="true"
          className="md:hidden w-full h-full object-cover object-center"
          fetchpriority="high"
          width={800}
          height={1200}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Desktop BG — shown only at md and above */}
        <img
          src="/og-image.jpg"
          alt="GG Harvester paddy harvesting machine working in a rice field near Kumbakonam"
          className="hidden md:block w-full h-full object-cover object-center"
          fetchpriority="high"
          width={1600}
          height={900}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background =
              'linear-gradient(160deg, #0a2d16 0%, #d4a017 60%, #0f3d1e 100%)';
          }}
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center w-full px-6"
        style={{ paddingTop: '2rem', paddingBottom: '5rem' }}
      >

        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full text-white text-[0.7rem] font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(212,160,23,0.18)',
            border: '1px solid rgba(212,160,23,0.5)',
            backdropFilter: 'blur(10px)',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
          }}
        >
          <MapPin size={11} className="text-[#f0cc5a] flex-shrink-0" />
          விவசாயத்தின் வெற்றிக்கு இயந்திரங்களின் துணை
        </div>

        {/* Brand name */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 className="brand-title">
            <span className="brand-gg">GG </span>
            <span className="brand-harvester">HARVESTER</span>
          </h1>
          <p className="brand-earth">&amp; Earth Movers</p>
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
            className="tamil text-white font-bold leading-snug"
            style={{ fontSize: 'clamp(0.82rem, 4vw, 1.1rem)' }}
          >
            விவசாயம் மற்றும் நிலப் பணிகளுக்கு<br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            <span style={{ color: '#f0cc5a' }}>நம்பகமான இயந்திர சேவைகள்</span>
          </p>
        </div>

        {/* Contact bar */}
        <div
          className="flex flex-col items-center w-full"
          style={{ gap: '0.6rem', maxWidth: '300px', marginBottom: '2.5rem' }}
        >
          {/* WhatsApp button */}
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold w-full active:scale-95 transition-transform"
            style={{
              background: '#25d366',
              color: '#fff',
              borderRadius: '999px',
              boxShadow: '0 4px 18px rgba(37,211,102,0.45)',
              fontSize: '0.85rem',
              padding: '0.7rem 1.5rem',
            }}
          >
            <MessageCircle size={18} />
            WhatsApp தொடர்பு
          </a>

          {/* Phone numbers row */}
          <div
            className="flex w-full"
            style={{
              gap: '0.5rem',
            }}
          >
            <a
              href={callLink(BUSINESS.phones[0])}
              className="inline-flex flex-1 items-center justify-center gap-2 font-bold active:scale-95 transition-transform"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)',
                color: '#fff',
                borderRadius: '999px',
                fontSize: '0.8rem',
                padding: '0.65rem 0.75rem',
              }}
              aria-label={`Call ${BUSINESS.phones[0]}`}
            >
              <Phone size={15} />
              {BUSINESS.phones[0]}
            </a>
            <a
              href={callLink(BUSINESS.phones[1])}
              className="inline-flex flex-1 items-center justify-center gap-2 font-bold active:scale-95 transition-transform"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(10px)',
                color: '#fff',
                borderRadius: '999px',
                fontSize: '0.8rem',
                padding: '0.65rem 0.75rem',
              }}
              aria-label={`Call ${BUSINESS.phones[1]}`}
            >
              <Phone size={15} />
              {BUSINESS.phones[1]}
            </a>
          </div>
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
