import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServiceHighlights from '../components/sections/ServiceHighlights';
import ServicesSection from '../components/sections/ServicesSection';
import MachineryShowcase from '../components/sections/MachineryShowcase';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import OwnerContactSection from '../components/sections/OwnerContactSection';
import { setPageMeta, injectSchema, localBusinessSchema, faqSchema } from '../utils/seo';
import { FAQ_LIST } from '../data/siteData';

export default function HomePage() {
  useEffect(() => {
    setPageMeta({
      title: 'GG Harvesters and Earth Movers | விவசாய & JCB இயந்திர சேவைகள் | Kumbakonam',
      description:
        'GG Harvesters and Earth Movers — Kumbakonam & Thanjavur பகுதியில் நெல் அறுவடை, டிராக்டர், ரோட்டவேட்டர், JCB, Mini Excavator மற்றும் Round Baler சேவைகள். 📞 8608522042',
      canonical: 'https://www.ggharvesters.com/',
      ogImage: 'https://www.ggharvesters.com/images/og/gg-harvester-og-image.jpg',
    });

    // Inject LocalBusiness schema
    injectSchema(localBusinessSchema(), 'local-business');

    // Inject FAQ schema
    if (FAQ_LIST?.length) {
      injectSchema(faqSchema(FAQ_LIST), 'faq');
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <MachineryShowcase />
      <ServiceHighlights />
      <ServicesSection />
      <WhyChooseSection />      
      <OwnerContactSection />
    </Layout>
  );
}
