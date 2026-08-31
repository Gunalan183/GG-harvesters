import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export default function FloatingCTA({ serviceSlug }) {
  const msg = serviceSlug
    ? WHATSAPP_MESSAGES[serviceSlug] || WHATSAPP_MESSAGES.general
    : WHATSAPP_MESSAGES.general;

  return (
    <div className="floating-cta" aria-label="Quick contact">
      <a
        href={callLink(BUSINESS.phones[0])}
        className="floating-btn bg-[#d4a017] text-white"
        aria-label={`Call GG Harvester: ${BUSINESS.phones[0]}`}
        title="Call Now"
      >
        <Phone size={22} />
      </a>
      <a
        href={whatsappLink(msg)}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bg-[#25d366] text-white"
        aria-label="WhatsApp GG Harvester"
        title="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
