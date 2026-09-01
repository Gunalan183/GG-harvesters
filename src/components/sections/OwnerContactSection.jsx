import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export default function OwnerContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a2d16 0%, #0f3d1e 60%, #1a5c2e 100%)', borderRadius: '0 0 2rem 2rem' }}
      aria-label="Contact the owner"
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div style={{
          position: 'absolute', top: '-4rem', right: '-4rem',
          width: '18rem', height: '18rem', borderRadius: '50%',
          background: 'rgba(212,160,23,0.07)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-3rem', left: '-3rem',
          width: '14rem', height: '14rem', borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
        }} />
      </div>

      <div className="container-site relative z-10" style={{ padding: '3.5rem 1rem 0 1rem' }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <span
            className="inline-block tamil text-xs font-bold tracking-widest uppercase rounded-full"
            style={{
              background: 'rgba(212,160,23,0.18)',
              border: '1px solid rgba(212,160,23,0.45)',
              color: '#f0cc5a',
              padding: '0.3rem 1rem',
              marginBottom: '0.85rem',
            }}
          >
            தொடர்புக்கு
          </span>
          <h2
            className="tamil text-white font-extrabold"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', lineHeight: 1.2, marginBottom: '0.65rem' }}
          >
            இயந்திர சேவை <span style={{ color: '#f0cc5a' }}>தேவையா?</span>
          </h2>
          <p
            className="tamil text-white/65 mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)', maxWidth: '480px' }}
          >
            உங்கள் விவசாயம் மற்றும் நிலப் பணிகளுக்கு தேவையான இயந்திர சேவைகளுக்கு இப்போதே எங்களை தொடர்பு கொள்ளுங்கள்.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">

          {/* ── Phone cards ── */}
          <div className="flex flex-col gap-3">
            {BUSINESS.phones.map((phone, i) => (
              <a
                key={phone}
                href={callLink(phone)}
                className="flex items-center gap-3 rounded-2xl transition-all active:scale-95 hover:brightness-110"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(10px)',
                  padding: '1rem 1.25rem',
                }}
                aria-label={`Call ${phone}`}
              >
                <span
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    width: '2.5rem', height: '2.5rem',
                    background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
                  }}
                >
                  <Phone size={15} className="text-[#1a2e1a]" />
                </span>
                <div>
                  <p className="text-white/50 text-[0.65rem] font-semibold uppercase tracking-wider">
                    {i === 0 ? 'முதன்மை தொலைபேசி' : 'மாற்று தொலைபேசி'}
                  </p>
                  <p className="text-white font-bold text-base">{phone}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-bold rounded-2xl tamil transition-all active:scale-95"
              style={{
                background: '#25d366',
                color: '#fff',
                padding: '0.9rem 1.25rem',
                fontSize: '0.9rem',
                boxShadow: '0 4px 18px rgba(37,211,102,0.4)',
              }}
            >
              <MessageCircle size={18} />
              WhatsApp மூலம் தொடர்பு கொள்ளவும்
            </a>
          </div>

          {/* ── Address + Hours ── */}
          <div
            className="rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.13)',
              backdropFilter: 'blur(10px)',
              padding: '1.5rem',
            }}
          >
            {/* Address */}
            <div className="flex items-start gap-3" style={{ marginBottom: '1.5rem' }}>
              <span
                className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                style={{ width: '2.25rem', height: '2.25rem', background: 'rgba(212,160,23,0.2)' }}
              >
                <MapPin size={15} className="text-[#f0cc5a]" />
              </span>
              <div>
                <p className="tamil text-white/50 text-[0.65rem] font-semibold uppercase tracking-wider"
                  style={{ marginBottom: '0.4rem' }}>எங்கள் முகவரி</p>
                <address className="tamil not-italic text-white font-medium leading-relaxed text-sm">
                  229 Main Road, Pambapadiyur,<br />
                  Kumbakonam Taluk,<br />
                  Thanjavur – 612703
                </address>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '1.25rem' }} />

            {/* Hours */}
            <div className="flex items-start gap-3">
              <span
                className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                style={{ width: '2.25rem', height: '2.25rem', background: 'rgba(212,160,23,0.2)' }}
              >
                <Clock size={15} className="text-[#f0cc5a]" />
              </span>
              <div>
                <p className="tamil text-white/50 text-[0.65rem] font-semibold uppercase tracking-wider"
                  style={{ marginBottom: '0.4rem' }}>பணி நேரம்</p>
                <p className="tamil text-white font-medium text-sm">
                  திங்கள் – ஞாயிறு<br />
                  <span style={{ color: '#f0cc5a' }}>காலை 6.00 – மாலை 7.00</span>
                </p>
              </div>
            </div>
          </div>

          {/* ── Owner image ── */}
          <div className="flex items-end justify-center" style={{ minHeight: '220px', marginBottom: '0' }}>
            <img
              src="/Owner_image.png"
              alt="GG Harvesters Owner"
              className="object-contain object-bottom w-auto drop-shadow-xl"
              style={{ maxHeight: '280px', display: 'block' }}
              loading="lazy"
              width={260}
              height={280}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
