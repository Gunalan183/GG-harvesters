import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { setPageMeta } from '../utils/seo';
import { SERVICES } from '../data/siteData';

export default function NotFoundPage() {
  useEffect(() => {
    setPageMeta({
      title: 'பக்கம் கிடைக்கவில்லை (404) | GG Harvester and Earth Movers',
      description: 'Page not found. GG Harvester and Earth Movers.',
    });
    document.title = '404 - Page Not Found | GG Harvester and Earth Movers';
  }, []);

  return (
    <Layout>
      <section className="section-py min-h-[70vh] flex items-center animate-fade-in-up">
        <div className="container-site text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter max-w-2xl mx-auto">
          <div className="text-8xl mb-6" aria-hidden="true">🌾</div>
          <h1 className="tamil text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold text-gray-50 mb-4">
            பக்கம் கிடைக்கவில்லை
          </h1>
          <p className="text-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100xl font-black mb-4 text-[#d4a017]/20">
            404
          </p>
          <p className="tamil text-gray-400 text-base mb-8 leading-relaxed">
            நீங்கள் தேடும் பக்கம் இல்லை அல்லது நகர்த்தப்பட்டிருக்கலாம்.
            முகப்பு பக்கத்திற்கு திரும்பலாம்.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link to="/" className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl ">
              🏠 முகப்பு பக்கம்
            </Link>
            <Link to="/services" className="btn-outline">
              சேவைகள் காண்க
            </Link>
            <a href="tel:+918608522042" className="btn-call">
              📞 8608522042
            </a>
          </div>

          <div className="bg-[#f9fafb] rounded-2xl p-6">
            <h2 className="tamil font-bold text-gray-50 mb-4">நமது சேவைகள்</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {SERVICES.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-[#d4a017] hover:text-[#d4a017] text-gray-300 px-3 py-2 rounded-full text-sm transition-colors tamil"
                >
                  {s.icon} {s.nameTamil}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
