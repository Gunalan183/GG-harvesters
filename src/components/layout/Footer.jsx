import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BUSINESS, SERVICES } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

const scrollTo = (href) => {
  if (href === '#top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="text-white pb-20 md:pb-0" style={{ background: 'linear-gradient(180deg, #0a2d16 0%, #0f3d1e 100%)' }} role="contentinfo">

      {/* Decorative top border */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #d4a017, #f0cc5a, #d4a017, transparent)' }} />

      {/* Main grid */}
      <div className="container-site" style={{ padding: '3rem 1rem 2rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ── Brand column ── */}
          <div className="md:col-span-1">
            <a
              href="#top"
              aria-label="GG Harvesters Home"
              onClick={(e) => { e.preventDefault(); scrollTo('#top'); }}
              className="inline-block mb-4"
            >
              <img
                src="/GG_harvester_and_Earth_Movers_Logo_BG.png"
                alt="GG Harvesters and Earth Movers Logo"
                className="h-20 w-auto object-contain"
                width={160}
                height={80}
                loading="lazy"
              />
            </a>

            <p className="tamil text-white/70 text-sm leading-relaxed" style={{ marginBottom: '0.75rem' }}>
              {BUSINESS.taglineTamil}
            </p>
            <p className="text-white/45 text-xs leading-relaxed" style={{ marginBottom: '1.5rem' }}>
              GG Harvesters and Earth Movers provides agricultural machinery and earth-moving
              services for farmers, landowners and other customers around Kumbakonam and Thanjavur.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={callLink(BUSINESS.phones[0])}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.4)' }}
                aria-label={`Call ${BUSINESS.phones[0]}`}
              >
                <Phone size={16} className="text-[#f0cc5a]" />
              </a>
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.35)' }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} className="text-[#25d366]" />
              </a>
            </div>
          </div>

          {/* ── Services ── */}
          <div>
            <h3
              className="tamil font-extrabold text-sm uppercase tracking-widest"
              style={{ color: '#f0cc5a', marginBottom: '1.25rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(240,204,90,0.2)' }}
            >
              சேவைகள்
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                    className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:bg-[#f0cc5a] transition-colors"
                      style={{ background: 'rgba(240,204,90,0.4)' }}
                    />
                    <span className="tamil">{s.nameTamil}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3
              className="tamil font-extrabold text-sm uppercase tracking-widest"
              style={{ color: '#f0cc5a', marginBottom: '1.25rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(240,204,90,0.2)' }}
            >
              தொடர்புக்கு
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(212,160,23,0.15)' }}>
                  <MapPin size={14} className="text-[#f0cc5a]" />
                </div>
                <address className="tamil not-italic text-white/65 text-sm leading-relaxed">
                  {BUSINESS.address.fullTamil}
                </address>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,160,23,0.15)' }}>
                  <Phone size={14} className="text-[#f0cc5a]" />
                </div>
                <div className="flex flex-col gap-1">
                  {BUSINESS.phones.map((phone) => (
                    <a
                      key={phone}
                      href={callLink(phone)}
                      className="text-white/65 text-sm hover:text-white transition-colors font-medium"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,160,23,0.15)' }}>
                  <Clock size={14} className="text-[#f0cc5a]" />
                </div>
                <p className="tamil text-white/65 text-sm leading-relaxed">
                  திங்கள் – ஞாயிறு<br />
                  <span style={{ color: '#f0cc5a' }}>காலை 6.00 – மாலை 7.00</span>
                </p>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/65 text-sm hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="text-[#25d366] flex-shrink-0" />
                WhatsApp: {BUSINESS.phones[0]}
              </a>

              {/* CTA */}
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.booking)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full font-bold rounded-xl text-sm tamil transition-all active:scale-95 hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
                  color: '#1a1814',
                  padding: '0.75rem 1rem',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 16px rgba(212,160,23,0.3)',
                }}
              >
                <MessageCircle size={16} />
                சேவை பதிவு செய்யுங்கள்
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-site py-4 flex flex-col items-center gap-1">
          <p className="text-white/35 text-xs text-center">
            © {year} GG Harvesters and Earth Movers. All rights reserved.
          </p>
          <p className="text-white/30 text-xs text-center">
            Designed &amp; Developed by{' '}
            <a
              href="https://gunalana.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0cc5a] hover:text-white transition-colors font-semibold"
            >
              Gunalan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
