import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import ContactCTA from '../components/ui/ContactCTA';
import { setPageMeta } from '../utils/seo';
import { BLOG_POSTS } from '../data/siteData';

export default function BlogPage() {
  useEffect(() => {
    setPageMeta({
      title: 'வலைப்பதிவு | GG Harvester and Earth Movers',
      description:
        'விவசாய இயந்திரங்கள் மற்றும் நில பணிகள் பற்றிய பயனுள்ள தமிழ் கட்டுரைகள். நெல் அறுவடை, JCB, ரோட்டவேட்டர், Round Baler.',
      canonical: 'https://www.ggharvesters.com/blog',
    });
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'வலைப்பதிவு' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">வலைப்பதிவு</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4">
              விவசாய <span className="text-[#f0c040]">தகவல்கள் & கட்டுரைகள்</span>
            </h1>
            <p className="tamil text-white/85 text-base">
              இயந்திரங்கள், விவசாயம் மற்றும் நில பணிகள் பற்றிய பயனுள்ள கட்டுரைகள்.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <SectionHeader
            badge="கட்டுரைகள்"
            title={<>விவசாயிகளுக்கான <span className="text-[#1a5c2e]">பயனுள்ள கட்டுரைகள்</span></>}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="card group">
                <div className="relative overflow-hidden" style={{ paddingBottom: '58%' }}>
                  <img
                    src={post.image}
                    alt={post.altText}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                    loading="lazy"
                    width={400}
                    height={232}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #e8f5ec, #c3e6cc)';
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('ta-IN')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="tamil font-bold text-gray-50 text-base leading-snug mb-2 group-hover:text-[#1a5c2e] transition-colors">
                    {post.titleTamil}
                  </h2>
                  <p className="tamil text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-1.5 text-[#1a5c2e] font-semibold text-sm hover:gap-2.5 transition-all tamil"
                  >
                    மேலும் படிக்க <ArrowRight size={14} />
                  </Link>
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
