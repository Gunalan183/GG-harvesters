import { useEffect } from 'react';
import { MapPin } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import ContactCTA from '../components/ui/ContactCTA';
import { setPageMeta } from '../utils/seo';
import { SERVICE_AREAS, BUSINESS, SERVICES } from '../data/siteData';
import { Link } from 'react-router-dom';

export default function ServiceAreasPage() {
  useEffect(() => {
    setPageMeta({
      title: 'சேவை பகுதிகள் | GG Harvester | Kumbakonam & Thanjavur',
      description:
        'GG Harvester and Earth Movers சேவை கிடைக்கும் பகுதிகள்: Kumbakonam, Thanjavur, Pambapadiyur மற்றும் அருகில் உள்ள கிராமங்கள். 📞 8608522042',
      canonical: 'https://www.ggharvesters.com/service-areas',
    });
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'சேவை பகுதிகள்' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">சேவை பகுதிகள்</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4 leading-tight">
              நாங்கள் சேவை செய்யும்{' '}
              <span className="text-[#f0c040]">பகுதிகள்</span>
            </h1>
            <p className="tamil text-white/85 text-base leading-relaxed">
              கும்பகோணம், தஞ்சாவூர் மற்றும் அருகில் உள்ள கிராமங்களில் சேவை கிடைக்கும்.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map placeholder */}
            <div>
              <div className="bg-[#fdf8e8] rounded-2xl p-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter mb-6 min-h-[300px] flex flex-col items-center justify-center shadow-sm">
                <MapPin size={48} className="text-[#d4a017] mb-4" />
                <h3 className="tamil font-bold text-[#d4a017] text-xl mb-2">எங்கள் இடம்</h3>
                <address className="tamil not-italic text-gray-300 text-sm leading-relaxed mb-4">
                  {BUSINESS.address.fullTamil}
                </address>
                <a
                  href={BUSINESS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl  text-sm py-2.5"
                >
                  <MapPin size={14} /> Google Maps-ல் பார்க்க
                </a>
              </div>

              {/* Service by area table */}
              <div className=" bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-lg hover:-translate-y-1 transition-all duration-300  rounded-2xl   border border-gray-100 overflow-hidden">
                <div className="bg-[#d4a017] text-white px-5 py-3">
                  <h3 className="tamil font-bold">பகுதி வாரியான சேவைகள்</h3>
                </div>
                <div className="p-5 space-y-4">
                  {SERVICE_AREAS.primary.map((area) => (
                    <div key={area} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-bold text-gray-50 mb-2 flex items-center gap-2">
                        <MapPin size={14} className="text-[#d4a017]" /> {area}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICES.map((s) => (
                          <span key={s.id} className="text-xs bg-[#fdf8e8] text-[#d4a017] px-2 py-1 rounded-full tamil">
                            {s.icon} {s.nameTamil}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <SectionHeader
                badge="எங்கு சேவை கிடைக்கும்?"
                title={<>சேவை <span className="text-[#d4a017]">பகுதிகள் விவரம்</span></>}
                center={false}
              />

              <div className="mb-8">
                <h3 className="tamil font-bold text-gray-50 text-lg mb-4">
                  📍 முதன்மை சேவை பகுதிகள்
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SERVICE_AREAS.primary.map((area) => (
                    <div
                      key={area}
                      className="bg-[#d4a017] text-white rounded-xl p-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter"
                    >
                      <MapPin size={20} className="mx-auto mb-2 text-[#f0c040]" />
                      <p className="tamil font-bold text-sm">{area}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="tamil font-bold text-gray-50 text-lg mb-4">
                  🗺️ அருகில் உள்ள பகுதிகள்
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.nearby.map((area) => (
                    <span
                      key={area}
                      className="flex items-center gap-1.5 bg-gray-100 text-gray-300 px-3 py-2 rounded-full text-sm"
                    >
                      <MapPin size={12} className="text-[#d4a017]" /> {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-900mber-50 border border-amber-200 rounded-xl p-5 mb-6">
                <p className="tamil text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200mber-800 text-sm leading-relaxed">
                  <strong>குறிப்பு:</strong> {SERVICE_AREAS.note}
                  <br />
                  உங்கள் பகுதியில் சேவை கிடைக்குமா என்பதை அறிய{' '}
                  <a href="tel:+918608522042" className="font-bold text-[#d4a017]">8608522042</a>
                  -ல் தொடர்பு கொள்ளுங்கள்.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="tamil font-bold text-gray-50 text-lg">
                  கிடைக்கும் சேவைகள்
                </h3>
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.slug}`}
                    className="flex items-center justify-between bg-[#f9fafb] hover:bg-[#fdf8e8] rounded-xl px-4 py-3 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{s.icon}</span>
                      <span className="tamil font-semibold text-gray-100 group-hover:text-[#d4a017] text-sm">
                        {s.nameTamil}
                      </span>
                    </div>
                    <span className="text-gray-400 group-hover:text-[#d4a017] text-xs">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
