import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations } from '../../i18n/translations';
import mobileBg from '../../assets/images/Hero-section_BG.png';

export default function HeroSection() {
  const animateClass = 'hero-anim-up';
  const { lang } = useLanguage();
  const t = getTranslations(lang).hero;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
      style={{ borderRadius: '0 0 2rem 2rem' }}
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 hero-anim-up" style={{ animationDuration: '2s', animationFillMode: 'forwards' }}>
        <img
          src={mobileBg}
          alt=""
          aria-hidden="true"
          className="md:hidden w-full h-full object-cover object-center"
          fetchpriority="high"
          width={800}
          height={1200}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <img
          src="/images/gallery/gg-paddy-harvester-transport-lorry.jpg"
          alt="GG paddy harvester transport lorry Kumbakonam"
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
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center w-full px-6 pt-12 md:pt-20"
        style={{ paddingBottom: '5rem' }}
      >
        {/* Tagline badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full text-[0.7rem] font-semibold tracking-widest uppercase whitespace-nowrap ${animateClass}`}
          style={{
            background: 'rgba(212,160,23,0.18)',
            border: '1px solid rgba(212,160,23,0.5)',
            backdropFilter: 'blur(10px)',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            color: '#1a237e',
            animationDelay: '100ms',
            animationFillMode: 'forwards',
          }}
        >
          {t.taglineBadge}
        </div>

        {/* Brand name */}
        <div className={animateClass} style={{ marginBottom: '1.5rem', animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <h1 className="brand-title">
            <span className="brand-gg">GG </span>
            <span className="brand-harvester">HARVESTERS</span>
          </h1>
          <p className="brand-earth">&amp; Earth Movers</p>
        </div>

        {/* Service availability badge */}
        <div
          className={`inline-flex items-center gap-2 rounded-full text-[0.68rem] font-semibold tracking-wide ${animateClass}`}
          style={{
            background: 'rgba(0,0,0,0.55)',
            border: '1px solid rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
            padding: '0.4rem 1rem',
            marginBottom: '1.5rem',
            color: '#fff',
            animationDelay: '500ms',
            animationFillMode: 'forwards',
          }}
        >
          <span style={{ color: '#4caf50', fontSize: '0.55rem' }}>●</span>
          {t.availabilityBadge}
        </div>

        {/* Gold divider */}
        <div
          className={`rounded-full ${animateClass}`}
          style={{
            width: '64px',
            height: '3px',
            background: 'linear-gradient(90deg, #d4a017, #f0cc5a)',
            marginBottom: '2rem',
            animationDelay: '600ms',
            animationFillMode: 'forwards',
          }}
          aria-hidden="true"
        />

        {/* Tagline box */}
        <div
          className={`rounded-2xl w-full max-w-sm ${animateClass}`}
          style={{
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            padding: '0.65rem 1.25rem',
            marginBottom: '4rem',
            animationDelay: '800ms',
            animationFillMode: 'forwards',
          }}
        >
          {/* Tamil lines — always shown */}
          <p
            className="tamil font-bold leading-snug"
            style={{ fontSize: 'clamp(0.7rem, 3.2vw, 1rem)', color: '#fefefe' }}
          >
            {t.tamilLine1}<br />
            <span style={{ color: '#f0cc5a' }}>{t.tamilLine2}</span>
          </p>
          {/* Translated lines */}
          <p
            className="font-medium leading-snug mt-2"
            style={{ fontSize: 'clamp(1rem, 4.5vw, 1.4rem)', color: 'rgba(255,255,255,0.7)' }}
          >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            {t.englishLine1}<br />
            <span style={{ color: '#f0cc5a' }}>{t.englishLine2}</span>
          </p>
        </div>

        {/* Contact bar */}
        <div
          className={`flex flex-col items-center w-full ${animateClass}`}
          style={{ gap: '0.6rem', maxWidth: '300px', marginBottom: '2.5rem', animationDelay: '1000ms', animationFillMode: 'forwards' }}
        >
          {/* Owner image */}
          <div className="flex flex-col items-center mb-1">
            <div className="relative mb-3" style={{ width: '240px', height: '240px' }}>
              <div className="absolute overflow-hidden" style={{ inset: '0', borderRadius: '1.25rem' }}>
                <img
                  src="/Owner_image.png"
                  alt="GG Harvesters Owner Jeeva"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1"
              style={{
                background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
                boxShadow: '0 2px 12px rgba(212,160,23,0.55)',
              }}
            >
              <span className="text-[#1a1814] text-xs font-black tracking-widest uppercase">JEEVA</span>
            </div>
          </div>

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
            {t.whatsapp}
          </a>

          {/* Phone numbers row */}
          <div className="flex w-full" style={{ gap: '0.5rem' }}>
            {BUSINESS.phones.map((phone) => (
              <a
                key={phone}
                href={callLink(phone)}
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
                aria-label={`Call ${phone}`}
              >
                <Phone size={15} />
                {phone}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <a
          href="#services"
          className={`flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors ${animateClass}`}
          style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
          aria-label="Scroll down"
        >
          <span className="tracking-widest uppercase" style={{ fontSize: '0.55rem' }}>{t.scroll}</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
