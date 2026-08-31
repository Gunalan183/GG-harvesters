import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { HOW_IT_WORKS } from '../../data/siteData';

export default function HowItWorksSection() {
  return (
    <section className="section-py gradient-brand" aria-labelledby="how-it-works-heading">
      <div className="container-site">
        <SectionHeader
          badge="எப்படி பெறுவது?"
          title={
            <>
              சேவை பெறுவது{' '}
              <span className="text-[#f0cc5a]">மிகவும் எளிது!</span>
            </>
          }
          subtitle="5 எளிய படிகளில் உங்கள் இடத்திற்கு இயந்திரம் வரும்."
          light
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute h-0.5 bg-white/20"
            style={{ top: '1.75rem', left: '10%', right: '10%' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="step-circle mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="tamil text-white font-bold text-base mb-2 leading-snug">
                  {step.titleTamil}
                </h3>
                <p className="tamil text-white/75 text-sm leading-relaxed">
                  {step.descTamil}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/book-service"
            className="btn-gold text-base py-4 px-8"
          >
            இப்பொழுதே சேவை பதிவு செய்யுங்கள்
          </Link>
        </div>
      </div>
    </section>
  );
}
