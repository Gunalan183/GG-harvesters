import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import ContactCTA from '../components/ui/ContactCTA';
import { setPageMeta } from '../utils/seo';
import { SERVICES } from '../data/siteData';
import { getServiceWhatsApp } from '../utils/whatsapp';

export default function MachineryPage() {
  useEffect(() => {
    setPageMeta({
      title: 'இயந்திரங்கள் | GG Harvester and Earth Movers | Kumbakonam',
      description:
        'GG Harvester and Earth Movers இயந்திரங்கள்: Paddy Harvester, Tractor, Rotavator, JCB 3CX, Mini Excavator, Round Baler. Kumbakonam & Thanjavur. 📞 8608522042',
      canonical: 'https://www.ggharvesters.com/machinery',
    });
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'இயந்திரங்கள்' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">இயந்திரங்கள்</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4 leading-tight">
              எங்கள் <span className="text-[#f0c040]">இயந்திர சேகரிப்பு</span>
            </h1>
            <p className="tamil text-white/85 text-base leading-relaxed">
              நன்கு பராமரிக்கப்பட்ட நவீன இயந்திரங்கள், அனுபவமிக்க ஆபரேட்டர்களுடன்.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <SectionHeader
            badge="நமது இயந்திரங்கள்"
            title={<>GG-யின் <span className="text-[#d4a017]">இயந்திரங்கள்</span></>}
            subtitle="விவசாயம் மற்றும் நிலப் பணிகளுக்காக தேர்ந்தெடுக்கப்பட்ட இயந்திரங்கள்."
          />

          <div className="space-y-12">
            {SERVICES.map((service, i) => (
              <article
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`rounded-2xl overflow-hidden shadow-md ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.altText}
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-400"
                    loading="lazy"
                    width={640}
                    height={360}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #fdf8e8, #c3e6cc)';
                      e.target.parentElement.style.minHeight = '250px';
                    }}
                  />
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-3xl mb-3 block" aria-hidden="true">{service.icon}</span>
                  <h2 className="tamil text-2xl font-bold text-gray-50 mb-2">
                    {service.nameTamil}
                  </h2>
                  <p className="text-gray-500 text-sm font-medium mb-3">{service.nameEnglish}</p>
                  <p className="tamil text-gray-300 text-base leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  <div className="mb-5">
                    <h3 className="tamil font-bold text-gray-100 text-sm mb-2">பயன்பாடுகள்:</h3>
                    <ul className="space-y-1.5">
                      {service.applications.map((app, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm tamil text-gray-300">
                          <span className="w-4 h-4 rounded-full bg-[#fdf8e8] text-[#d4a017] flex items-center justify-center text-xs flex-shrink-0">✓</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl  text-sm py-2.5"
                    >
                      சேவை விவரம்
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={getServiceWhatsApp(service.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp text-sm py-2.5"
                    >
                      <MessageCircle size={14} />
                      சேவை பதிவு
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
