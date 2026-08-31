import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import ContactCTA from '../components/ui/ContactCTA';
import SectionHeader from '../components/ui/SectionHeader';
import { setPageMeta } from '../utils/seo';
import { TRUST_POINTS, BUSINESS } from '../data/siteData';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { callLink, whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function AboutPage() {
  useEffect(() => {
    setPageMeta({
      title: 'எங்களைப் பற்றி | GG Harvester and Earth Movers | Kumbakonam',
      description:
        'GG Harvester and Earth Movers பற்றி அறிந்துகொள்ளுங்கள். Kumbakonam & Thanjavur பகுதியில் விவசாய மற்றும் நிலப் பணிகளுக்கான இயந்திர சேவை நிறுவனம்.',
      canonical: 'https://www.ggharvesters.com/about',
    });
  }, []);

  return (
    <Layout>
      {/* Page Hero */}
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[
              { label: 'முகப்பு', path: '/' },
              { label: 'எங்களைப் பற்றி' },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">எங்களைப் பற்றி</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4 leading-tight">
              GG Harvester and Earth Movers பற்றி
            </h1>
            <p className="tamil text-white/85 text-base md:text-lg leading-relaxed">
              கும்பகோணம் மற்றும் தஞ்சாவூர் பகுதியில் விவசாயிகள் மற்றும் கட்டிட தொழிலாளர்களுக்கு
              நம்பகமான இயந்திர சேவை வழங்கும் நிறுவனம்.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-green mb-3">நமது கதை</span>
              <h2 className="section-title mb-5">
                விவசாயிகளுக்காக{' '}
                <span className="text-[#d4a017]">இயந்திர சேவை</span>
              </h2>
              <div className="space-y-4 tamil text-gray-300 text-base leading-relaxed">
                <p>
                  GG Harvester and Earth Movers, தமிழ்நாட்டின் தஞ்சாவூர் மாவட்டம்,
                  கும்பகோணம் தாலுக்காவில் உள்ள பம்பைப்படியூரில் இயங்கும் ஒரு
                  இயந்திர சேவை நிறுவனம்.
                </p>
                <p>
                  நெல் அறுவடை, டிராக்டர் சேவை, ரோட்டவேட்டர், JCB, JCB 3CX
                  Backhoe Loader, JCB Mini Excavator மற்றும் Round Baler
                  ஆகிய இயந்திரங்களுடன் விவசாயிகள், நில உரிமையாளர்கள் மற்றும்
                  கட்டிட ஒப்பந்தக்காரர்களுக்கு சேவை வழங்குகிறோம்.
                </p>
                <p>
                  எங்கள் இயந்திரங்கள் நன்கு பராமரிக்கப்படுகின்றன.
                  அனைத்து இயந்திரங்களுடனும் அனுபவமிக்க ஆபரேட்டர்கள் வருகிறார்கள்.
                  உங்கள் வயலுக்கு அல்லது பணி இடத்திற்கு நேரடியாக இயந்திரம் வரும்.
                </p>
                <p>
                  கும்பகோணம், தஞ்சாவூர் மற்றும் அருகில் உள்ள கிராமங்களில் சேவை
                  கிடைக்கும். தொடர்பு கொள்ள தயங்காதீர்கள்.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href={callLink(BUSINESS.phones[0])} className="btn-call">
                  <Phone size={16} /> {BUSINESS.phones[0]}
                </a>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src="/images/services/gg-paddy-harvester-service-kumbakonam.jpg"
                  alt="GG paddy harvester service in rice field Kumbakonam"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={300}
                  height={300}
                  onError={(e) => { e.target.onerror = null; e.target.parentElement.style.background = 'linear-gradient(135deg, #fdf8e8, #c3e6cc)'; e.target.style.display = 'none'; }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square mt-6">
                <img
                  src="/images/services/gg-jcb-mini-excavator-service-thanjavur.jpg"
                  alt="GG JCB mini excavator service in Thanjavur"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={300}
                  height={300}
                  onError={(e) => { e.target.onerror = null; e.target.parentElement.style.background = 'linear-gradient(135deg, #fdf8e8, #f5d87a)'; e.target.style.display = 'none'; }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src="/images/services/gg-jcb-3cx-service-kumbakonam.jpg"
                  alt="GG JCB 3CX backhoe loader service Kumbakonam"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={300}
                  height={300}
                  onError={(e) => { e.target.onerror = null; e.target.parentElement.style.background = 'linear-gradient(135deg, #fdf8e8, #c3e6cc)'; e.target.style.display = 'none'; }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square mt-6">
                <img
                  src="/images/services/gg-tractor-rotavator-service-kumbakonam.jpg"
                  alt="GG tractor rotavator service in agricultural land Kumbakonam"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={300}
                  height={300}
                  onError={(e) => { e.target.onerror = null; e.target.parentElement.style.background = 'linear-gradient(135deg, #fdf8e8, #f5d87a)'; e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-[#f9fafb] animate-fade-in-up">
        <div className="container-site">
          <SectionHeader
            badge="எங்கள் மதிப்புகள்"
            title={<>நாங்கள் ஏன் <span className="text-[#d4a017]">நம்பகமானவர்கள்?</span></>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_POINTS.map((p, i) => (
              <div key={i} className=" bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-lg hover:-translate-y-1 transition-all duration-300  rounded-2xl p-6   border border-gray-100">
                <span className="text-3xl mb-3 block" aria-hidden="true">{p.icon}</span>
                <h3 className="tamil font-bold text-gray-50 text-base mb-2">{p.title}</h3>
                <p className="tamil text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-py animate-fade-in-up">
        <div className="container-site max-w-3xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter">
          <MapPin size={40} className="text-[#d4a017] mx-auto mb-4" />
          <h2 className="tamil section-title mb-3">எங்கள் இடம்</h2>
          <address className="tamil not-italic text-gray-300 text-lg leading-relaxed mb-6">
            {BUSINESS.address.fullTamil}
          </address>
          <a
            href={BUSINESS.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl "
          >
            <MapPin size={16} /> Google Maps-ல் பார்க்க
          </a>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
