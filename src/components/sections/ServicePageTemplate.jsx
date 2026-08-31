import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';
import Layout from '../layout/Layout';
import Breadcrumb from '../ui/Breadcrumb';
import ContactCTA from '../ui/ContactCTA';
import SectionHeader from '../ui/SectionHeader';
import { SERVICES, BUSINESS } from '../../data/siteData';
import { callLink, getServiceWhatsApp } from '../../utils/whatsapp';

export default function ServicePageTemplate({ service }) {
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <Layout serviceSlug={service.slug}>
      {/* Hero */}
      <section className="relative min-h-[55vh] md:min-h-[50vh] flex items-end overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.altText}
            className="w-full h-full object-cover"
            fetchpriority="high"
            width={1280}
            height={640}
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentElement.style.background = 'linear-gradient(135deg, #0f3d1e, #1a5c2e)';
              e.target.style.display = 'none';
            }}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container-site relative z-10 pb-10 pt-24">
          <Breadcrumb
            items={[
              { label: 'முகப்பு', path: '/' },
              { label: 'சேவைகள்', path: '/services' },
              { label: service.nameTamil },
            ]}
          />
          <div className="mt-4">
            <span className="text-3xl mb-2 block" aria-hidden="true">{service.icon}</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-2 leading-tight">
              {service.nameTamil}
            </h1>
            <p className="text-white/80 text-base md:text-lg font-medium mb-1">
              {service.nameEnglish}
            </p>
            <p className="tamil text-white/85 text-base max-w-xl leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <div className="bg-[#1a5c2e] py-4">
        <div className="container-site flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="tamil text-white font-bold text-base">
            {service.nameTamil} தேவையா?
          </p>
          <div className="flex gap-3">
            <a href={callLink(BUSINESS.phones[0])} className="btn-call text-sm py-2.5">
              <Phone size={15} /> {BUSINESS.phones[0]}
            </a>
            <a
              href={getServiceWhatsApp(service.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-8">
              {/* What is this service */}
              <div>
                <h2 className="tamil text-2xl font-bold text-gray-50 mb-4">
                  {service.nameTamil} என்றால் என்ன?
                </h2>
                <p className="tamil text-gray-300 text-base leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <p className="tamil text-gray-300 text-base leading-relaxed">
                  {service.shortDescEnglish}
                </p>
              </div>

              {/* Applications */}
              <div>
                <h2 className="tamil text-xl font-bold text-gray-50 mb-4">
                  எதற்கெல்லாம் பயன்படுத்தலாம்?
                </h2>
                <ul className="space-y-3">
                  {service.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-3 bg-[#e8f5ec] rounded-lg px-4 py-3">
                      <span className="w-6 h-6 rounded-full bg-[#1a5c2e] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span className="tamil text-gray-100 font-medium">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service gallery */}
              <div>
                <h2 className="tamil text-xl font-bold text-gray-50 mb-4">
                  பணி படங்கள்
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[service.image, ...Array(5).fill('/images/gallery/gg-paddy-harvester-working-kumbakonam.jpg')].map((img, i) => (
                    <div key={i} className="gallery-item aspect-square">
                      <img
                        src={img}
                        alt={`${service.nameTamil} - பணி படம் ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        width={200}
                        height={200}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentElement.style.background = 'linear-gradient(135deg, #e8f5ec, #c3e6cc)';
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Service areas */}
              <div className="bg-[#f9fafb] rounded-2xl p-6">
                <h2 className="tamil text-xl font-bold text-gray-50 mb-3">
                  சேவை கிடைக்கும் பகுதிகள்
                </h2>
                <p className="tamil text-gray-300 text-sm leading-relaxed">
                  கும்பகோணம், தஞ்சாவூர், பம்பைப்படியூர் மற்றும் அருகில் உள்ள
                  கிராமங்களில் {service.nameTamil} சேவை கிடைக்கும்.
                  சரியான விவரத்திற்கு தொடர்பு கொள்ளவும்.
                </p>
                <Link to="/service-areas" className="inline-flex items-center gap-1 text-[#1a5c2e] font-semibold text-sm mt-3 hover:underline tamil">
                  சேவை பகுதிகள் முழு விவரம் <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick contact */}
              <div className="bg-[#1a5c2e] rounded-2xl p-6 text-white">
                <h3 className="tamil font-bold text-lg mb-4">{service.nameTamil} தேவையா?</h3>
                <div className="space-y-3">
                  <a
                    href={callLink(BUSINESS.phones[0])}
                    className="flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-xl p-3 transition-colors"
                  >
                    <Phone size={18} />
                    <div>
                      <p className="text-xs text-white/70">அழைக்கவும்</p>
                      <p className="font-bold">{BUSINESS.phones[0]}</p>
                    </div>
                  </a>
                  <a
                    href={callLink(BUSINESS.phones[1])}
                    className="flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-xl p-3 transition-colors"
                  >
                    <Phone size={18} />
                    <div>
                      <p className="text-xs text-white/70">அழைக்கவும்</p>
                      <p className="font-bold">{BUSINESS.phones[1]}</p>
                    </div>
                  </a>
                  <a
                    href={getServiceWhatsApp(service.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebe5d] rounded-xl p-3 transition-colors"
                  >
                    <MessageCircle size={18} />
                    <div>
                      <p className="text-xs text-white/80">WhatsApp செய்யுங்கள்</p>
                      <p className="font-bold">WhatsApp</p>
                    </div>
                  </a>
                  <Link
                    to="/book-service"
                    className="flex items-center justify-center gap-2 bg-[#d4a017] hover:bg-[#b8860b] rounded-xl p-3 transition-colors font-bold tamil"
                  >
                    📋 சேவை பதிவு செய்யுங்கள்
                  </Link>
                </div>
              </div>

              {/* Related services */}
              <div className="bg-[#f9fafb] rounded-2xl p-6">
                <h3 className="tamil font-bold text-gray-50 mb-4">மற்ற சேவைகள்</h3>
                <div className="space-y-3">
                  {related.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 hover:bg-[#e8f5ec] rounded-lg p-2 transition-colors"
                    >
                      <span className="text-xl" aria-hidden="true">{s.icon}</span>
                      <span className="tamil text-gray-300 text-sm font-medium hover:text-[#1a5c2e]">
                        {s.nameTamil}
                      </span>
                      <ChevronRight size={14} className="ml-auto text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        title={`${service.nameTamil} தேவையா?`}
        subtitle="இப்பொழுதே தொடர்பு கொள்ளுங்கள். உங்கள் இடத்திற்கு இயந்திரம் வரும்."
        serviceSlug={service.slug}
      />
    </Layout>
  );
}
