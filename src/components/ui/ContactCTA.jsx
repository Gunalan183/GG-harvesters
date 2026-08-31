import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ClipboardList } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export default function ContactCTA({ title, subtitle, serviceSlug }) {
  const msg = serviceSlug
    ? WHATSAPP_MESSAGES[serviceSlug] || WHATSAPP_MESSAGES.general
    : WHATSAPP_MESSAGES.general;

  return (
    <section
      className="gradient-brand py-14 px-4"
      aria-labelledby="cta-heading"
    >
      <div className="container-site text-center max-w-2xl mx-auto">
        <h2
          id="cta-heading"
          className="tamil text-white text-2xl md:text-3xl font-extrabold mb-3"
        >
          {title || 'இயந்திர சேவை தேவையா?'}
        </h2>
        <p className="tamil text-white/80 mb-8 text-base leading-relaxed">
          {subtitle || 'இப்பொழுதே தொடர்பு கொள்ளுங்கள். கும்பகோணம் மற்றும் தஞ்சாவூர் பகுதிகளில் சேவை கிடைக்கும்.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={callLink(BUSINESS.phones[0])}
            className="btn-call w-full sm:w-auto justify-center text-base"
            aria-label={`Call ${BUSINESS.phones[0]}`}
          >
            <Phone size={18} />
            📞 {BUSINESS.phones[0]}
          </a>
          <a
            href={whatsappLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto justify-center text-base"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
            💬 WhatsApp
          </a>
          <Link
            to="/book-service"
            className="btn-outline-white w-full sm:w-auto justify-center text-base"
          >
            <ClipboardList size={18} />
            📋 சேவை பதிவு
          </Link>
        </div>
        <div className="mt-6 text-white/60 text-sm">
          <p>📍 {BUSINESS.address.street}, {BUSINESS.address.district}, {BUSINESS.address.state}</p>
        </div>
      </div>
    </section>
  );
}
