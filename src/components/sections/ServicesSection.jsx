import ServiceCard from '../ui/ServiceCard';
import SectionHeader from '../ui/SectionHeader';
import { SERVICES } from '../../data/siteData';

export default function ServicesSection() {
  return (
    <section id="services" className="section-py bg-[#f0faf4]" aria-labelledby="services-heading">
      <div className="container-site">
        <SectionHeader
          badge="எங்கள் சேவைகள்"
          title={
            <>
              நாங்கள் வழங்கும்{' '}
              <span className="text-[#1a5c2e]">இயந்திர சேவைகள்</span>
            </>
          }
          subtitle="விவசாய பணிகள் முதல் நிலப் பணிகள் வரை — உங்கள் தேவைக்கேற்ப சரியான இயந்திரத்துடன் நாங்கள் வருகிறோம்."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
