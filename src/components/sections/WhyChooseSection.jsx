import { useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { TRUST_POINTS } from '../../data/siteData';

export default function WhyChooseSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('why-card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TRUST_POINTS.map((point, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="why-card bg-white rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-[#d4a017] hover:shadow-md hover:-translate-y-1 transition-all flex items-start"
              style={{
                gap: '0.65rem',
                padding: '0.85rem',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="rounded-full bg-[#fdf8e8] flex items-center justify-center text-lg flex-shrink-0"
                style={{ width: '2.2rem', height: '2.2rem' }}
                aria-hidden="true"
              >
                {point.icon}
              </div>
              <div>
                <h3 className="tamil font-bold text-[#1a1814] text-xs leading-snug" style={{ marginBottom: '0.2rem' }}>
                  {point.title}
                </h3>
                <p className="tamil text-[#4b5563] text-xs leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
