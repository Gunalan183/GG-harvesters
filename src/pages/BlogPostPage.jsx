import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import ContactCTA from '../components/ui/ContactCTA';
import { setPageMeta } from '../utils/seo';
import { BLOG_POSTS, SERVICES } from '../data/siteData';

const POST_CONTENT = {
  'when-to-book-paddy-harvester': {
    intro: 'நெல் அறுவடை காலம் வந்துவிட்டது. இயந்திரம் சரியான நேரத்தில் கிடைக்குமா என்ற கவலை விவசாயிகளுக்கு இருக்கும். முன்கூட்டியே பதிவு செய்வதால் இந்த பிரச்சனையை தவிர்க்கலாம்.',
    sections: [
      { title: 'ஏன் முன்பதிவு செய்வது முக்கியம்?', content: 'அறுவடை காலங்களில் இயந்திரத்திற்கு அதிக தேவை இருக்கும். கும்பகோணம், தஞ்சாவூர் பகுதியில் நெல் சீசன் நேரத்தில் பல விவசாயிகள் ஒரே நேரத்தில் அறுவடை செய்கிறார்கள். இதனால் கடைசி நேரத்தில் இயந்திரம் கிடைக்காமல் போகலாம்.' },
      { title: 'எத்தனை நாட்களுக்கு முன்பே தொடர்பு கொள்ள வேண்டும்?', content: 'முடிந்தவரை 7-10 நாட்களுக்கு முன்பே தொடர்பு கொள்வது நல்லது. நெல் பழுக்கும் நேரம் தெரிந்தவுடன் GG Harvester-ஐ தொடர்பு கொண்டு தேதி உறுதி செய்யுங்கள்.' },
      { title: 'எப்படி பதிவு செய்வது?', content: '8608522042 அல்லது 8248287672 என்ற எண்ணில் அழைக்கலாம். WhatsApp மூலமும் தொடர்பு கொள்ளலாம். வயல் இடம், அளவு மற்றும் விரும்பிய தேதி சொல்லுங்கள்.' },
    ],
    relatedService: 'paddy-harvester',
  },
  'rotavator-benefits-land-preparation': {
    intro: 'ரோட்டவேட்டர் என்பது டிராக்டருடன் இணைக்கப்படும் ஒரு கருவி. இது நிலத்தை ஆழமாக உழுது விதை விதைப்பிற்கு சரியான சூழலை உருவாக்குகிறது.',
    sections: [
      { title: 'ரோட்டவேட்டர் என்றால் என்ன?', content: 'ரோட்டவேட்டர் என்பது சுழலும் பற்களை கொண்ட ஒரு கருவி. இது மண்ணை நன்கு தளர்த்தி, கட்டிகளை உடைத்து, சீரான மேற்பரப்பை உருவாக்குகிறது.' },
      { title: 'விவசாயத்தில் என்ன நன்மைகள்?', content: 'ஆழமான மண் தளர்வு, நீர் வடிகால் சிறப்பாக செயல்படும், விதை முளைப்பு அதிகரிக்கும், களைகள் நன்கு அழிக்கப்படும், ஒரே நேரத்தில் நிலம் தயாராகும்.' },
      { title: 'எப்போது பயன்படுத்தலாம்?', content: 'நெல் அல்லது பிற பயிர் விதைப்பிற்கு முன்பு, நிலத்தை தயார் செய்யும் போது ரோட்டவேட்டர் பயன்படுத்தலாம். GG Harvester மூலம் டிராக்டர் + ரோட்டவேட்டர் சேவை கும்பகோணம் பகுதியில் கிடைக்கும்.' },
    ],
    relatedService: 'tractor-rotavator',
  },
  'jcb-mini-excavator-uses': {
    intro: 'JCB Mini Excavator என்பது சிறிய அளவிலான ஆனால் சக்திவாய்ந்த ஒரு இயந்திரம். பெரிய JCB இயந்திரங்கள் செல்ல முடியாத குறுகிய இடங்களுக்கும் இது பொருத்தமானது.',
    sections: [
      { title: 'Mini Excavator பெரிய இடங்களில்', content: 'கட்டுமான தளங்களில் அடித்தளம் தோண்டல், நிலம் சீரமைக்க, மண் அகற்றல் ஆகியவற்றுக்கு Mini Excavator பயன்படுகிறது.' },
      { title: 'குறுகிய இடங்களில் பயன்பாடு', content: 'வீடுகளுக்கு அருகில் கால்வாய் தோண்டல், குழாய் போட, மண்ணை தோண்டி அகற்றுவதற்கு Mini Excavator சிறந்தது. குறுகிய தெருக்களிலும் நுழைய முடியும்.' },
      { title: 'விவசாயத்தில் பயன்பாடு', content: 'நில சீரமைப்பு, விளைநில கால்வாய் பணிகள், நிலத்தடி நீர் குழாய் போடுவதற்கு Mini Excavator பயன்படுகிறது. GG Harvester மூலம் Kumbakonam, Thanjavur பகுதியில் JCB Mini Excavator சேவை கிடைக்கும்.' },
    ],
    relatedService: 'jcb-mini-excavator',
  },
  'round-baler-explained': {
    intro: 'Round Baler என்பது நெல் அறுவடைக்கு பின் வயலில் விடப்படும் வைக்கோல் மற்றும் தாவர கழிவுகளை உருண்டை வடிவத்தில் சுருட்டி பேக் செய்யும் ஒரு இயந்திரம்.',
    sections: [
      { title: 'Round Baler எப்படி செயல்படுகிறது?', content: 'டிராக்டருடன் இணைக்கப்பட்ட Round Baler, வயலில் உள்ள வைக்கோலை திரட்டி உள்ளே இழுத்து, சுழலும் பட்டைகளின் மூலம் உருண்டையாக சுருட்டுகிறது. பின் கயிறு கட்டி வெளியே போடுகிறது.' },
      { title: 'விவசாயிகளுக்கு என்ன நன்மை?', content: 'அறுவடைக்கு பின் வயல் விரைவாக சுத்தப்படும். வைக்கோல் பேல்களை எளிதாக சேமிக்கலாம் அல்லது விற்கலாம். வேலையாட்கள் தேவை குறையும். அடுத்த பயிருக்கு நிலம் சீக்கிரம் தயாராகும்.' },
      { title: 'GG Harvester Round Baler சேவை', content: 'GG Harvester and Earth Movers மூலம் Kumbakonam, Thanjavur பகுதியில் Tractor + Round Baler சேவை கிடைக்கும். அறுவடை சீசனில் முன்கூட்டியே பதிவு செய்வது சிறந்தது.' },
    ],
    relatedService: 'tractor-round-baler',
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const content = POST_CONTENT[slug];

  useEffect(() => {
    if (post) {
      setPageMeta({
        title: `${post.titleTamil} | GG Harvester Blog`,
        description: post.excerpt,
        canonical: `https://www.ggharvesters.com/blog/${post.slug}`,
      });
    }
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="container-site section-py text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter">
          <h1 className="tamil text-2xl font-bold text-gray-50 mb-4">கட்டுரை கிடைக்கவில்லை</h1>
          <Link to="/blog" className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl ">வலைப்பதிவுக்கு திரும்பு</Link>
        </div>
      </Layout>
    );
  }

  const relatedService = SERVICES.find((s) => s.id === content?.relatedService);
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <article>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 z-0">
            <img
              src={post.image}
              alt={post.altText}
              className="w-full h-full object-cover"
              width={1280}
              height={640}
              onError={(e) => { e.target.onerror = null; e.target.parentElement.style.background = 'linear-gradient(135deg, #0f3d1e, #d4a017)'; e.target.style.display = 'none'; }}
            />
            <div className="hero-overlay absolute inset-0" />
          </div>
          <div className="container-site relative z-10 pb-10 pt-24">
            <Breadcrumb items={[{ label: 'முகப்பு', path: '/' }, { label: 'வலைப்பதிவு', path: '/blog' }, { label: post.titleTamil }]} />
            <div className="mt-4 max-w-2xl">
              <div className="flex items-center gap-3 text-white/70 text-sm mb-3">
                <span className="flex items-center gap-1"><Calendar size={13} /> {new Date(post.date).toLocaleDateString('ta-IN')}</span>
                <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
              </div>
              <h1 className="tamil text-white text-2xl md:text-3xl font-extrabold leading-snug">{post.titleTamil}</h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-py animate-fade-in-up">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 prose-content">
                {/* Intro */}
                <p className="tamil text-gray-300 text-base leading-relaxed mb-8 text-lg font-medium border-l-4 border-[#d4a017] pl-5 bg-[#fdf8e8]/50 py-4 pr-4 rounded-r-xl">
                  {content?.intro}
                </p>

                {/* Sections */}
                {content?.sections.map((section, i) => (
                  <div key={i} className="mb-8">
                    <h2 className="tamil font-bold text-gray-50 text-xl mb-3">{section.title}</h2>
                    <p className="tamil text-gray-300 text-base leading-relaxed">{section.content}</p>
                  </div>
                ))}

                {/* CTA box */}
                {relatedService && (
                  <div className="mt-10 bg-[#d4a017] text-white rounded-2xl p-6">
                    <h3 className="tamil font-bold text-lg mb-2">
                      {relatedService.nameTamil} சேவை தேவையா?
                    </h3>
                    <p className="tamil text-white/80 text-sm mb-4">{relatedService.shortDesc}</p>
                    <div className="flex gap-3">
                      <Link to={`/services/${relatedService.slug}`} className="btn-outline-white text-sm py-2.5">
                        சேவை விவரம்
                      </Link>
                      <a href="tel:+918608522042" className="btn-call text-sm py-2.5">📞 8608522042</a>
                    </div>
                  </div>
                )}

                {/* Author / Business info */}
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img src="/GG_harvester_and_Earth_Movers_Logo.png" alt="GG Harvester Logo" className="w-12 h-12 object-contain rounded-full border border-gray-200" />
                  <div>
                    <p className="font-bold text-gray-50 text-sm">GG Harvester and Earth Movers</p>
                    <p className="tamil text-gray-500 text-xs">Pambapadiyur, Kumbakonam Taluk, Thanjavur</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-[#f9fafb] rounded-2xl p-6">
                  <h3 className="tamil font-bold text-gray-50 mb-4">மற்ற கட்டுரைகள்</h3>
                  <div className="space-y-4">
                    {otherPosts.map((p) => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="flex gap-3 group hover:bg-white rounded-xl p-2 transition-colors">
                        <img src={p.image} alt={p.altText} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" loading="lazy" width={64} height={64} onError={(e) => { e.target.style.display='none'; }} />
                        <div>
                          <p className="tamil text-gray-100 text-xs font-semibold leading-snug group-hover:text-[#d4a017] transition-colors">{p.titleTamil}</p>
                          <p className="text-gray-400 text-xs mt-1">{p.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-[#d4a017] text-white rounded-2xl p-6">
                  <h3 className="tamil font-bold mb-3">சேவை தேவையா?</h3>
                  <a href="tel:+918608522042" className="btn-call w-full justify-center text-sm mb-3 block">📞 8608522042</a>
                  <Link to="/book-service" className="btn-outline-white w-full justify-center text-sm block">📋 சேவை பதிவு</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <ContactCTA />
    </Layout>
  );
}
