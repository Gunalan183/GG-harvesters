import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import ContactCTA from '../components/ui/ContactCTA';
import { setPageMeta, injectSchema } from '../utils/seo';
import { FAQ_LIST } from '../data/siteData';

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);
  const id = `faq-${index}`;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-[#f9fafb] transition-colors"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="tamil font-semibold text-gray-50 text-base leading-snug pr-2">
          {faq.question}
        </span>
        {open ? (
          <ChevronUp size={20} className="text-[#d4a017] flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div id={id} className="px-5 pb-5 bg-[#f9fafb]">
          <p className="tamil text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  useEffect(() => {
    setPageMeta({
      title: 'கேள்வி-பதில் (FAQ) | GG Harvester and Earth Movers',
      description:
        'GG Harvester and Earth Movers பற்றிய பொதுவான கேள்விகளுக்கான பதில்கள். சேவை பகுதிகள், பதிவு செய்வது எப்படி, JCB, நெல் அறுவடை, ரோட்டவேட்டர் FAQs.',
      canonical: 'https://www.ggharvesters.com/faq',
    });

    // FAQ schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_LIST.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
    injectSchema(schema);
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'கேள்வி-பதில்' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">FAQ</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4">
              அடிக்கடி கேட்கப்படும்{' '}
              <span className="text-[#f0c040]">கேள்விகள்</span>
            </h1>
            <p className="tamil text-white/85 text-base">
              GG Harvester சேவைகள் பற்றிய கேள்விகளுக்கு இங்கே பதில் கிடைக்கும்.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site max-w-3xl mx-auto">
          <SectionHeader
            badge="கேள்விகள்"
            title={<>பொதுவான <span className="text-[#d4a017]">கேள்வி-பதில்கள்</span></>}
            subtitle="கீழே உங்கள் கேள்வியை கிளிக் செய்யுங்கள்."
          />

          <div className="space-y-3">
            {FAQ_LIST.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          <div className="mt-10 bg-[#fdf8e8] rounded-2xl p-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter">
            <p className="tamil text-[#d4a017] font-bold text-lg mb-2">
              உங்கள் கேள்விக்கு பதில் கிடைக்கவில்லையா?
            </p>
            <p className="tamil text-gray-400 text-sm mb-5">
              நேரடியாக தொடர்பு கொள்ளுங்கள்.
            </p>
            <a href="tel:+918608522042" className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl ">
              📞 8608522042
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
