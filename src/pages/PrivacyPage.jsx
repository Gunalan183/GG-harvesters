import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import { setPageMeta } from '../utils/seo';
import { BUSINESS } from '../data/siteData';

export default function PrivacyPage() {
  useEffect(() => {
    setPageMeta({
      title: 'Privacy Policy | GG Harvester and Earth Movers',
      description: 'Privacy Policy for GG Harvester and Earth Movers website.',
      canonical: 'https://www.ggharvesters.com/privacy-policy',
    });
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb items={[{ label: 'முகப்பு', path: '/' }, { label: 'Privacy Policy' }]} />
          <div className="mt-6">
            <h1 className="text-white text-3xl font-extrabold mb-3">Privacy Policy</h1>
            <p className="text-white/80 text-base">GG Harvester and Earth Movers</p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site max-w-3xl mx-auto prose">
          <div className=" bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-lg hover:-translate-y-1 transition-all duration-300  rounded-2xl   border border-gray-100 p-8 space-y-6 text-gray-300 text-sm leading-relaxed">

            <p className="text-gray-500 text-xs">Last updated: August 2026</p>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">Information We Collect</h2>
              <p>When you use our service booking form or contact us, we collect the following information:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Your name</li>
                <li>Mobile phone number</li>
                <li>Location / village name</li>
                <li>Service requirements</li>
                <li>Preferred service date</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">How We Use Your Information</h2>
              <p>The information you provide is used exclusively to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Process and respond to your service request</li>
                <li>Contact you regarding your booking</li>
                <li>Provide the requested machinery service</li>
              </ul>
              <p className="mt-2">We do <strong>not</strong> sell, share, or distribute your personal information to any third party.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">WhatsApp Communication</h2>
              <p>When you click our WhatsApp buttons, your browser opens WhatsApp with a pre-filled message. The message is sent from your own WhatsApp account. We do not have access to your WhatsApp account.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">Cookies and Analytics</h2>
              <p>This website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use our site. This data is aggregated and anonymised. You can disable cookies in your browser settings.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">Data Security</h2>
              <p>We take reasonable steps to protect your personal data. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">Children's Privacy</h2>
              <p>Our services are not directed to individuals under 18 years of age.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">Contact</h2>
              <p>For privacy-related questions, contact us:</p>
              <address className="not-italic mt-2">
                <strong>GG Harvester and Earth Movers</strong><br />
                {BUSINESS.address.full}<br />
                Phone: <a href={`tel:+91${BUSINESS.phones[0]}`} className="text-[#1a5c2e]">{BUSINESS.phones[0]}</a>
              </address>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
