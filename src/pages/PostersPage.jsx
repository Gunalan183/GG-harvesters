import { useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import { setPageMeta } from '../utils/seo';
import { BUSINESS, SERVICES } from '../data/siteData';

function Poster({ service, format = 'instagram-post' }) {
  const formatStyles = {
    'instagram-post': 'w-[360px] h-[360px]',
    'instagram-story': 'w-[270px] h-[480px]',
    'whatsapp-status': 'w-[360px] h-[270px]',
    'a4-poster': 'w-[420px] h-[594px]',
  };

  const style = formatStyles[format] || formatStyles['instagram-post'];

  return (
    <div
      className={`${style} relative overflow-hidden rounded-xl shadow-xl flex-shrink-0`}
      className="bg-gradient-to-br from-emerald-900 to-emerald-950 border border-emerald-800"
    >
      {/* Top brand bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4a017] via-[#f0c040] to-[#d4a017]" />

      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        {/* Logo + brand */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/GG_harvester_and_Earth_Movers_Logo.png"
            alt="GG Harvester Logo"
            className="h-10 w-auto object-contain brightness-0 invert"
            style={{ maxWidth: 80 }}
          />
          <div>
            <p className="text-white font-extrabold text-xs leading-tight">
              GG HARVESTER
            </p>
            <p className="text-white/70 text-[0.6rem] leading-tight">
              AND EARTH MOVERS
            </p>
          </div>
        </div>

        {/* Service name */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[#f0c040] text-xs font-bold uppercase tracking-widest mb-2">
            சேவை
          </p>
          <h2 className="tamil text-white text-2xl font-extrabold leading-tight mb-1">
            {service.nameTamil}
          </h2>
          <p className="text-white/70 text-sm font-medium mb-3">{service.nameEnglish}</p>
          <p className="tamil text-white/80 text-xs leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-3 mt-3">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[#f0c040] text-xs font-bold mb-0.5">📞 அழைக்கவும்</p>
              <p className="text-white font-bold text-sm">{BUSINESS.phones[0]}</p>
              <p className="text-white font-bold text-sm">{BUSINESS.phones[1]}</p>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-[0.6rem] leading-relaxed">
                Pambapadiyur,<br />
                Kumbakonam Taluk,<br />
                Thanjavur
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gold bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4a017] via-[#f0c040] to-[#d4a017]" />
    </div>
  );
}

function VisitingCard() {
  return (
    <div className="space-y-6">
      {/* Front */}
      <div>
        <p className="text-sm font-semibold text-gray-500 mb-3">முன் பக்கம் (Front)</p>
        <div
          className="w-[340px] h-[200px] rounded-xl shadow-xl relative overflow-hidden"
          className="bg-gradient-to-br from-emerald-900 to-emerald-950 border border-emerald-800"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4a017] via-[#f0c040] to-[#d4a017]" />
          <div className="p-5 flex flex-col h-full justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/GG_harvester_and_Earth_Movers_Logo.png"
                alt="GG Harvester Logo"
                className="h-14 w-auto brightness-0 invert object-contain"
              />
              <div>
                <p className="text-white font-extrabold text-sm leading-tight">GG HARVESTER</p>
                <p className="text-white/70 text-xs">AND EARTH MOVERS</p>
              </div>
            </div>
            <div>
              <p className="tamil text-[#f0c040] text-xs font-medium leading-relaxed">
                விவசாயம் மற்றும் நிலப் பணிகளுக்கான இயந்திர சேவைகள்
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4a017] via-[#f0c040] to-[#d4a017]" />
        </div>
      </div>

      {/* Back */}
      <div>
        <p className="text-sm font-semibold text-gray-500 mb-3">பின் பக்கம் (Back)</p>
        <div
          className="w-[340px] h-[200px] rounded-xl shadow-xl relative overflow-hidden bg-white border border-gray-200"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4a017] via-[#2d7a42] to-[#d4a017]" />
          <div className="p-4 flex gap-4 h-full">
            {/* Services */}
            <div className="flex-1">
              <p className="tamil text-[#d4a017] font-bold text-xs mb-2">சேவைகள்</p>
              <ul className="space-y-0.5">
                {SERVICES.map((s) => (
                  <li key={s.id} className="text-gray-300 text-[0.6rem] flex items-center gap-1">
                    <span className="text-[0.5rem]">{s.icon}</span>
                    <span className="tamil">{s.nameTamil}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div className="w-28 text-right">
              <p className="tamil text-[#d4a017] font-bold text-xs mb-2">தொடர்பு</p>
              <p className="text-gray-100 font-bold text-xs">{BUSINESS.phones[0]}</p>
              <p className="text-gray-100 font-bold text-xs">{BUSINESS.phones[1]}</p>
              <p className="tamil text-gray-500 text-[0.55rem] leading-relaxed mt-2">
                229 Main Road,<br />
                Pambapadiyur,<br />
                Kumbakonam – 612703
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4a017] via-[#2d7a42] to-[#d4a017]" />
        </div>
      </div>
    </div>
  );
}

export default function PostersPage() {
  useEffect(() => {
    setPageMeta({
      title: 'Poster & Visiting Card Designs | GG Harvester and Earth Movers',
      description: 'GG Harvester and Earth Movers — Digital poster and visiting card designs for social media and print.',
      canonical: 'https://www.ggharvesters.com/posters',
    });
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb items={[{ label: 'முகப்பு', path: '/' }, { label: 'Posters & Cards' }]} />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">Marketing Materials</span>
            <h1 className="tamil text-white text-3xl font-extrabold mb-4">
              Poster & Visiting Card <span className="text-[#f0c040]">வடிவமைப்புகள்</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <h2 className="tamil text-2xl font-bold text-gray-50 mb-8">சேவை Posters — Instagram Post</h2>
          <div className="flex flex-wrap gap-6 mb-12">
            {SERVICES.map((service) => (
              <Poster key={service.id} service={service} format="instagram-post" />
            ))}
          </div>

          <h2 className="tamil text-2xl font-bold text-gray-50 mb-8">WhatsApp Status Format</h2>
          <div className="flex flex-wrap gap-6 mb-12">
            {SERVICES.slice(0, 3).map((service) => (
              <Poster key={service.id} service={service} format="whatsapp-status" />
            ))}
          </div>

          <h2 className="tamil text-2xl font-bold text-gray-50 mb-8">Visiting Card Design</h2>
          <VisitingCard />

          <div className="mt-12 bg-[#fdf8e8] rounded-2xl p-6">
            <p className="tamil text-[#d4a017] font-semibold text-base">
              💡 இந்த வடிவமைப்புகளை திரையில் screenshot எடுத்து அல்லது print செய்து பயன்படுத்தலாம்.
              Professional print-ready files தேவைப்பட்டால் ஒரு graphic designer மூலம் export செய்யலாம்.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
