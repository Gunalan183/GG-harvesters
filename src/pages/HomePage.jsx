import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import TrustStrip from '../components/sections/TrustStrip';
import ServicesSection from '../components/sections/ServicesSection';
import MachineryShowcase from '../components/sections/MachineryShowcase';
import WhyChooseSection from '../components/sections/WhyChooseSection';
import GalleryPreview from '../components/sections/GalleryPreview';
import VideosSection from '../components/sections/VideosSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import ContactCTA from '../components/ui/ContactCTA';
import OwnerContactSection from '../components/sections/OwnerContactSection';
import { setPageMeta } from '../utils/seo';

export default function HomePage() {
  useEffect(() => {
    setPageMeta({
      title: 'GG Harvester and Earth Movers | விவசாய & JCB இயந்திர சேவைகள் | Kumbakonam',
      description:
        'GG Harvester and Earth Movers — Kumbakonam & Thanjavur பகுதியில் நெல் அறுவடை, டிராக்டர், ரோட்டவேட்டர், JCB, Mini Excavator மற்றும் Round Baler சேவைகள். 📞 8608522042',
      canonical: 'https://www.ggharvesters.com/',
    });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <MachineryShowcase />
      <WhyChooseSection />
      <GalleryPreview />
      <VideosSection />
      <HowItWorksSection />
      <ServiceAreasSection />
      <OwnerContactSection />
    </Layout>
  );
}
