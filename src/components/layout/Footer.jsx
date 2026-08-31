import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS, SERVICES } from '../../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f3d1e] text-white" role="contentinfo">
      {/* Main footer grid */}
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="GG Harvester Home">
              <img
                src="/GG_harvester_and_Earth_Movers_Logo.png"
                alt="GG Harvester and Earth Movers Logo"
                className="h-16 w-auto object-contain mb-4 brightness-0 invert"
                width={160}
                height={64}
                loading="lazy"
              />
            </Link>
            <p className="tamil text-gray-300 text-sm leading-relaxed mb-4">
              {BUSINESS.taglineTamil}
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              GG Harvester and Earth Movers provides agricultural machinery and earth-moving
              services for farmers, landowners and other customers around Kumbakonam and Thanjavur.
            </p>

            {/* Social / Contact icons */}
            <div className="flex gap-3 mt-5">
              <a
                href={callLink(BUSINESS.phones[0])}
                className="w-10 h-10 bg-[#1a5c2e] rounded-full flex items-center justify-center hover:bg-[#25a245] transition-colors"
                aria-label={`Call ${BUSINESS.phones[0]}`}
              >
                <Phone size={16} />
              </a>
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center hover:bg-[#1ebe5d] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="tamil font-bold text-base mb-4 text-[#f0cc5a]">சேவைகள்</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="tamil text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs">{s.icon}</span>
                    {s.nameTamil}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="tamil font-bold text-base mb-4 text-[#f0cc5a]">விரைவு இணைப்புகள்</h3>
            <ul className="space-y-2">
              {[
                { label: 'முகப்பு', path: '/' },
                { label: 'எங்களைப் பற்றி', path: '/about' },
                { label: 'இயந்திரங்கள்', path: '/machinery' },
                { label: 'எங்கள் பணிகள்', path: '/gallery' },
                { label: 'வீடியோக்கள்', path: '/videos' },
                { label: 'சேவை பகுதிகள்', path: '/service-areas' },
                { label: 'கேள்வி-பதில்', path: '/faq' },
                { label: 'வலைப்பதிவு', path: '/blog' },
                { label: 'சேவை பதிவு', path: '/book-service' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="tamil text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="tamil font-bold text-base mb-4 text-[#f0cc5a]">தொடர்புக்கு</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#d4a017] mt-0.5 flex-shrink-0" />
                <address className="tamil not-italic text-gray-300 text-sm leading-relaxed">
                  {BUSINESS.address.fullTamil}
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#d4a017] flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href={callLink(BUSINESS.phones[0])}
                    className="text-gray-300 text-sm hover:text-white transition-colors font-medium"
                  >
                    {BUSINESS.phones[0]}
                  </a>
                  <a
                    href={callLink(BUSINESS.phones[1])}
                    className="text-gray-300 text-sm hover:text-white transition-colors font-medium"
                  >
                    {BUSINESS.phones[1]}
                  </a>
                </div>
              </div>

              <a
                href={whatsappLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle size={16} className="text-[#25d366] flex-shrink-0" />
                <span className="text-gray-300 text-sm hover:text-white transition-colors">
                  WhatsApp: {BUSINESS.phones[0]}
                </span>
              </a>

              <Link
                to="/book-service"
                className="flex items-center justify-center w-full bg-[#d4a017] text-white font-bold rounded-xl text-sm py-3 hover:bg-[#b8870f] transition-colors tamil mt-4"
              >
                சேவை பதிவு செய்யுங்கள்
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            © {year} GG Harvester and Earth Movers. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-400 text-xs hover:text-white transition-colors tamil">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-xs hover:text-white transition-colors tamil">
              Terms &amp; Conditions
            </Link>
            <Link to="/contact" className="text-gray-400 text-xs hover:text-white transition-colors tamil">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
