import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import ServiceCard from '../components/ui/ServiceCard';
import ContactCTA from '../components/ui/ContactCTA';
import SectionHeader from '../components/ui/SectionHeader';
import { setPageMeta } from '../utils/seo';
import { SERVICES } from '../data/siteData';

export default function ServicesPage() {
  useEffect(() => {
    setPageMeta({
      title: 'எங்கள் சேவைகள் | GG Harvester and Earth Movers | Kumbakonam',
      description:
        'GG Harvester and Earth Movers சேவைகள்: நெல் அறுவடை, டிராக்டர், ரோட்டவேட்டர், JCB, JCB 3CX, Mini Excavator, Round Baler. Kumbakonam & Thanjavur. 📞 8608522042',
      canonical: 'https://www.ggharvesters.com/services',
    });
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'சேவைகள்' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">எங்கள் சேவைகள்</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4 leading-tight">
              விவசாயம் மற்றும் நிலப் பணிகளுக்கான{' '}
              <span className="text-[#f0c040]">இயந்திர சேவைகள்</span>
            </h1>
            <p className="tamil text-white/85 text-base leading-relaxed">
              GG Harvester and Earth Movers வழங்கும் அனைத்து சேவைகளும் இங்கே.
              உங்கள் தேவைக்கேற்ற சேவையை தேர்ந்தெடுங்கள்.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <SectionHeader
            badge="7 சேவைகள்"
            title={<>நாங்கள் வழங்கும் <span className="text-[#1a5c2e]">சேவைகள்</span></>}
            subtitle="கும்பகோணம், தஞ்சாவூர் மற்றும் அருகில் உள்ள பகுதிகளில் சேவை கிடைக்கும்."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
