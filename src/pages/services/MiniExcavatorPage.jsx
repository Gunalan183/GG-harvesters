import { useEffect } from 'react';
import ServicePageTemplate from '../../components/sections/ServicePageTemplate';
import { SERVICES } from '../../data/siteData';
import { setPageMeta } from '../../utils/seo';

const service = SERVICES.find((s) => s.id === 'jcb-mini-excavator');

export default function MiniExcavatorPage() {
  useEffect(() => {
    setPageMeta({
      title: service.seoTitle,
      description: service.metaDesc,
      canonical: `https://www.ggharvesters.com/services/${service.slug}`,
    });
  }, []);

  return <ServicePageTemplate service={service} />;
}
