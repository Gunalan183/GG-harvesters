import SectionHeader from '../ui/SectionHeader';
import { TRUST_POINTS } from '../../data/siteData';

export default function WhyChooseSection() {
  return (
    <section className="section-py bg-white" aria-labelledby="why-choose-heading">
      <div className="container-site">
        <SectionHeader
          badge="ஏன் GG?"
          title={
            <>
              GG Harvester-ஐ{' '}
              <span className="text-[#d4a017]">ஏன் தேர்வு செய்வது?</span>
            </>
          }
          subtitle="எங்கள் வாடிக்கையாளர்களுக்கு நாங்கள் வழங்கும் மதிப்பு."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_POINTS.map((point, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-100 border-l-4 border-l-[#d4a017] hover:shadow-lg transition-shadow flex items-start"
              style={{ gap: '1rem', padding: '1.5rem' }}
            >
              <div
                className="rounded-full bg-[#fdf8e8] flex items-center justify-center text-2xl flex-shrink-0"
                style={{ width: '3rem', height: '3rem' }}
                aria-hidden="true"
              >
                {point.icon}
              </div>
              <div>
                <h3 className="tamil font-bold text-[#1a1814] text-base" style={{ marginBottom: '0.4rem' }}>
                  {point.title}
                </h3>
                <p className="tamil text-[#4b5563] text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
