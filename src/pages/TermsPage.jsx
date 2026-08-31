import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import { setPageMeta } from '../utils/seo';
import { BUSINESS } from '../data/siteData';

export default function TermsPage() {
  useEffect(() => {
    setPageMeta({
      title: 'Terms & Conditions | GG Harvester and Earth Movers',
      description: 'Terms and Conditions for GG Harvester and Earth Movers website and services.',
      canonical: 'https://www.ggharvesters.com/terms',
    });
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb items={[{ label: 'முகப்பு', path: '/' }, { label: 'Terms & Conditions' }]} />
          <div className="mt-6">
            <h1 className="text-white text-3xl font-extrabold mb-3">Terms & Conditions</h1>
            <p className="text-white/80 text-base">GG Harvester and Earth Movers</p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site max-w-3xl mx-auto">
          <div className=" bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-lg hover:-translate-y-1 transition-all duration-300  rounded-2xl   border border-gray-100 p-8 space-y-6 text-gray-300 text-sm leading-relaxed">

            <p className="text-gray-500 text-xs">Last updated: August 2026</p>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">1. Services</h2>
              <p>GG Harvester and Earth Movers provides agricultural machinery and earth-moving services including paddy harvesting, tractor, rotavator, JCB, JCB 3CX Backhoe Loader, JCB Mini Excavator and Round Baler services in Kumbakonam Taluk, Thanjavur District, Tamil Nadu.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">2. Service Availability</h2>
              <p>Service availability depends on machine availability and operational capacity. We recommend contacting us in advance, especially during harvest seasons. We do not guarantee immediate availability without prior booking.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">3. Pricing</h2>
              <p>Service pricing is discussed directly with the customer at the time of booking. Pricing may vary depending on the service type, duration, location and other factors. Prices are not listed on this website.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">4. Website Use</h2>
              <p>This website is for informational purposes only. The information provided is as accurate as possible but may be subject to change. We are not responsible for errors or omissions on this website.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">5. Intellectual Property</h2>
              <p>All content, images, logos and text on this website are the property of GG Harvester and Earth Movers unless otherwise stated. Unauthorised reproduction is not permitted.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">6. Limitation of Liability</h2>
              <p>GG Harvester and Earth Movers is not liable for any indirect or consequential loss arising from the use of this website or our services beyond what is covered under the applicable service agreement.</p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-50 mb-2">7. Contact</h2>
              <address className="not-italic">
                <strong>GG Harvester and Earth Movers</strong><br />
                {BUSINESS.address.full}<br />
                Phone: <a href={`tel:+91${BUSINESS.phones[0]}`} className="text-[#d4a017]">{BUSINESS.phones[0]}</a>
              </address>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
