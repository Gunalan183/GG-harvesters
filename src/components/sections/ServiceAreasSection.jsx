import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { SERVICE_AREAS, BUSINESS } from '../../data/siteData';

export default function ServiceAreasSection() {
  return (
    <section className="section-py bg-[#f0faf4]" aria-labelledby="areas-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Map placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-md bg-[#fdf8e8] min-h-[300px] flex flex-col items-center justify-center p-8 text-center">
            <MapPin size={48} className="text-[#d4a017] mb-4" />
            <h3 className="tamil font-bold text-[#d4a017] text-xl mb-2">எங்கள் இடம்</h3>
            <address className="tamil not-italic text-[#4b5563] text-sm leading-relaxed mb-4">
              {BUSINESS.address.fullTamil}
            </address>
            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
              aria-label="Open in Google Maps"
            >
              <MapPin size={14} />
              Google Maps-ல் பார்க்க
            </a>
          </div>

          {/* Right: Areas */}
          <div>
            <SectionHeader
              badge="சேவை பகுதிகள்"
              title={
                <>
                  நாங்கள் சேவை செய்யும்{' '}
                  <span className="text-[#d4a017]">பகுதிகள்</span>
                </>
              }
              center={false}
            />

            <div className="mb-6">
              <h3 className="tamil font-bold text-[#1a1814] mb-3">முதன்மை பகுதிகள்</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.primary.map((area) => (
                  <span key={area} className="badge-green text-sm py-1.5 px-3">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="tamil font-bold text-[#1a1814] mb-3">அருகில் உள்ள பகுதிகள்</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.nearby.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-sm py-1.5 px-3 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <p className="tamil text-[#4b5563] text-sm mb-6 bg-amber-50 border border-amber-200 rounded-lg p-3">
              ℹ️ {SERVICE_AREAS.note}
            </p>

            <Link to="/service-areas" className="btn-outline text-sm">
              சேவை பகுதிகள் முழு விவரம்
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
