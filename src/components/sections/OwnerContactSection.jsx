import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export default function OwnerContactSection() {
  return (
    <section
      id="owner-contact"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #d4a017 0%, #0f3d1e 100%)', borderRadius: '0 0 2rem 2rem' }}
      aria-label="Contact the owner"
    >
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center" style={{ minHeight: '200px' }}>

          {/* ── Left: Headline + phones + WhatsApp ── */}
          <div className="md:col-span-5 py-10 pr-0 md:pr-6">
            <h2
              className="tamil text-white font-extrabold leading-tight"
              style={{ fontSize: 'clamp(1.3rem, 4vw, 1.75rem)', marginBottom: '0.75rem' }}
            >
              இயந்திர சேவை தேவையா?
            </h2>
            <p
              className="tamil text-white/80 leading-relaxed"
              style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)', marginBottom: '1.5rem' }}
            >
              உங்கள் விவசாயம் மற்றும் நிலப் பணிகளுக்கு தேவையான
              இயந்திர சேவைகளுக்கு இப்போதே எங்களை தொடர்பு கொள்ளுங்கள்.
            </p>

            {/* Phone numbers */}
            <div className="flex flex-col" style={{ gap: '0.6rem', marginBottom: '1.25rem' }}>
              {BUSINESS.phones.map((phone) => (
                <a
                  key={phone}
                  href={callLink(phone)}
                  className="inline-flex items-center gap-3 text-white font-bold transition-colors hover:text-[#f0cc5a]"
                  style={{ fontSize: 'clamp(1rem, 3.5vw, 1.2rem)' }}
                  aria-label={`Call ${phone}`}
                >
                  <span
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: '2rem',
                      height: '2rem',
                      background: 'rgba(255,255,255,0.15)',
                    }}
                  >
                    <Phone size={14} />
                  </span>
                  {phone}
                </a>
              ))}
            </div>

            {/* WhatsApp button */}
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold rounded-xl text-white transition-colors"
              style={{
                background: '#25d366',
                padding: '0.75rem 1.5rem',
                fontSize: 'clamp(0.85rem, 3vw, 1rem)',
              }}
            >
              <MessageCircle size={18} />
              WhatsApp மூலம் தொடர்பு கொள்ளவும்
            </a>
          </div>

          {/* ── Middle: Address card ── */}
          <div className="md:col-span-4 py-10 md:py-0">
            <div
              className="rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
              }}
            >
              {/* Address */}
              <div className="flex items-start gap-3" style={{ marginBottom: '1.25rem' }}>
                <span
                  className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    background: 'rgba(255,255,255,0.15)',
                  }}
                >
                  <MapPin size={15} className="text-[#f0cc5a]" />
                </span>
                <div>
                  <p className="tamil text-white/60 text-xs font-semibold uppercase tracking-wider" style={{ marginBottom: '0.35rem' }}>
                    எங்கள் முகவரி
                  </p>
                  <address className="tamil not-italic text-white font-medium leading-relaxed" style={{ fontSize: '0.9rem' }}>
                    229 Main Road, Pambapadiyur,<br />
                    Kumbakonam Taluk,<br />
                    Thanjavur – 612703
                  </address>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex items-start gap-3">
                <span
                  className="flex items-center justify-center rounded-full flex-shrink-0 mt-0.5"
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    background: 'rgba(255,255,255,0.15)',
                  }}
                >
                  <Clock size={15} className="text-[#f0cc5a]" />
                </span>
                <div>
                  <p className="tamil text-white/60 text-xs font-semibold uppercase tracking-wider" style={{ marginBottom: '0.35rem' }}>
                    பணி நேரம்
                  </p>
                  <p className="tamil text-white font-medium" style={{ fontSize: '0.9rem' }}>
                    திங்கள் – ஞாயிறு<br />
                    காலை 6.00 – மாலை 7.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Owner image — visible on all screens ── */}
          <div
            className="flex md:col-span-3 items-end justify-center self-stretch"
            style={{ paddingTop: '1rem' }}
          >
            <img
              src="/Owner_image.png"
              alt="GG Harvester Owner"
              className="object-contain object-bottom w-auto"
              style={{ maxHeight: '240px' }}
              loading="lazy"
              width={280}
              height={240}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
