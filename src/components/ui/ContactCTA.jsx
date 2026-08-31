import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ClipboardList } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export default function ContactCTA({ title, subtitle, serviceSlug }) {
  const msg = serviceSlug
    ? WHATSAPP_MESSAGES[serviceSlug] || WHATSAPP_MESSAGES.general
    : WHATSAPP_MESSAGES.general;

  return (
    <section className="gradient-brand" style={{ padding: '5rem 1rem' }} aria-labelledby="cta-heading">
      <div className="container-site text-center" style={{ maxWidth: '40rem', margin: '0 auto' }}>
        <h2
          id="cta-heading"
          className="tamil text-white font-extrabold"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1rem' }}
        >
          {title || 'இயந்திர சேவை தேவையா?'}
        </h2>
        <p className="tamil text-white/80 leading-relaxed" style={{ fontSize: '1rem', marginBottom: '2.5rem' }}>
          {subtitle || 'இப்பொழுதே தொடர்பு கொள்ளுங்கள். கும்பகோணம் மற்றும் தஞ்சாவூர் பகுதிகளில் சேவை கிடைக்கும்.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={callLink(BUSINESS.phones[0])}
            className="btn-call w-full sm:w-auto justify-center"
            style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}
            aria-label={`Call ${BUSINESS.phones[0]}`}
          >
            <Phone size={18} />
            {BUSINESS.phones[0]}
          </a>
          <a
            href={whatsappLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto justify-center"
            style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <Link
            to="/book-service"
            className="btn-outline-white w-full sm:w-auto justify-center"
            style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}
          >
            <ClipboardList size={18} />
            சேவை பதிவு
          </Link>
        </div>
        <p className="text-white/50 text-sm" style={{ marginTop: '2rem' }}>
          📍 {BUSINESS.address.street}, {BUSINESS.address.district}, {BUSINESS.address.state}
        </p>
      </div>
    </section>
  );
}
