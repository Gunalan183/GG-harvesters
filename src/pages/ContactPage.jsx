import { useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import { setPageMeta } from '../utils/seo';
import { BUSINESS } from '../data/siteData';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  useEffect(() => {
    setPageMeta({
      title: 'தொடர்புக்கு | GG Harvester and Earth Movers | Kumbakonam',
      description:
        'GG Harvester and Earth Movers — தொடர்பு கொள்ளுங்கள். 📞 8608522042 | 8248287672. 229 Main Road, Pambapadiyur, Kumbakonam Taluk, Thanjavur, Tamil Nadu.',
      canonical: 'https://www.ggharvesters.com/contact',
    });
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'தொடர்புக்கு' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">தொடர்புக்கு</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4 leading-tight">
              இன்றே <span className="text-[#f0c040]">தொடர்பு கொள்ளுங்கள்</span>
            </h1>
            <p className="tamil text-white/85 text-base leading-relaxed">
              இயந்திர சேவை தேவையா? தொலைபேசி அல்லது WhatsApp மூலம் உடனே தொடர்பு கொள்ளுங்கள்.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <SectionHeader
            badge="தொடர்பு"
            title={<>எங்களை <span className="text-[#d4a017]">தொடர்பு கொள்ளுங்கள்</span></>}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact cards */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="bg-[#d4a017] text-white rounded-2xl p-6">
                <h3 className="tamil font-bold text-xl mb-5 flex items-center gap-2">
                  <Phone size={20} className="text-[#f0c040]" />
                  தொலைபேசி
                </h3>
                <div className="space-y-4">
                  {BUSINESS.phones.map((phone) => (
                    <a
                      key={phone}
                      href={callLink(phone)}
                      className="flex items-center gap-4 bg-white/15 hover:bg-white/25 rounded-xl p-4 transition-colors"
                      aria-label={`Call ${phone}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#d4a017] flex items-center justify-center flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs mb-0.5">அழைக்கவும்</p>
                        <p className="font-bold text-xl tracking-wide">{phone}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-[#128c7e] text-white rounded-2xl p-6">
                <h3 className="tamil font-bold text-xl mb-4 flex items-center gap-2">
                  <MessageCircle size={20} />
                  WhatsApp
                </h3>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/15 hover:bg-white/25 rounded-xl p-4 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs mb-0.5">WhatsApp செய்யுங்கள்</p>
                    <p className="font-bold text-xl">+91 {BUSINESS.phones[0]}</p>
                  </div>
                </a>
                <p className="tamil text-white/70 text-xs mt-3 leading-relaxed">
                  WhatsApp மூலம் உங்கள் தேவை, இடம் மற்றும் சேவை விவரங்களை அனுப்புங்கள்.
                </p>
              </div>

              {/* Address */}
              <div className=" bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-lg hover:-translate-y-1 transition-all duration-300  rounded-2xl p-6   border border-gray-100">
                <h3 className="tamil font-bold text-gray-50 text-xl mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-[#d4a017]" />
                  முகவரி
                </h3>
                <address className="tamil not-italic text-gray-300 text-base leading-relaxed mb-4">
                  {BUSINESS.address.fullTamil}
                </address>
                <a
                  href={BUSINESS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  <MapPin size={14} /> Google Maps-ல் பார்க்க
                </a>
              </div>
            </div>

            {/* Map & info */}
            <div className="space-y-5">
              {/* Map placeholder */}
              <div className="bg-[#fdf8e8] rounded-2xl overflow-hidden min-h-[320px] flex flex-col items-center justify-center shadow-sm p-8">
                <MapPin size={56} className="text-[#d4a017] mb-4" />
                <p className="tamil font-bold text-[#d4a017] text-xl mb-2">Pambapadiyur</p>
                <p className="tamil text-gray-400 text-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter mb-4">
                  Kumbakonam Taluk, Thanjavur District<br />Tamil Nadu – 612703
                </p>
                <a
                  href={BUSINESS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl  text-sm py-2.5"
                >
                  <MapPin size={14} /> வழிகாட்டி பார்க்க
                </a>
              </div>

              {/* Service booking prompt */}
              <div className="bg-[#fdf8e8] border border-[#d4a017]/30 rounded-2xl p-6">
                <h3 className="tamil font-bold text-gray-50 text-lg mb-3">
                  🌾 சேவை பதிவு செய்ய
                </h3>
                <p className="tamil text-gray-300 text-sm leading-relaxed mb-5">
                  இயந்திர சேவை தேவைப்பட்டால் படிவம் மூலம் விரைவாக பதிவு செய்யலாம்.
                  அல்லது நேரடியாக அழைக்கலாம்.
                </p>
                <Link to="/book-service" className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl  w-full justify-center">
                  📋 சேவை பதிவு படிவம்
                </Link>
              </div>

              {/* FAQ link */}
              <div className=" bg-slate-950  rounded-2xl p-6 border border-gray-100">
                <h3 className="tamil font-bold text-gray-50 mb-2">கேள்விகள் உள்ளதா?</h3>
                <p className="tamil text-gray-400 text-sm mb-4">
                  பொதுவான கேள்விகளுக்கு FAQ பக்கம் பாருங்கள்.
                </p>
                <Link to="/faq" className="btn-outline text-sm">
                  கேள்வி-பதில் (FAQ) காண்க
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
