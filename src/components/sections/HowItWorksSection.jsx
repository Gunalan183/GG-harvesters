import { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Wrench, MapPin, CheckCircle } from 'lucide-react';
import { HOW_IT_WORKS } from '../../data/siteData';
import { whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

const ICONS = [Phone, MessageCircle, Wrench, MapPin, CheckCircle];

export default function HowItWorksSection() {
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('how-card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return (
    <section
      className="section-py"
      style={{ background: 'linear-gradient(160deg, #0a2d16 0%, #1a5c2e 60%, #0f3d1e 100%)', borderRadius: '2rem 2rem 0 0' }}
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-site">

        {/* Header */}
        <div ref={headerRef} className="how-card text-center" style={{ marginBottom: '3rem' }}>
          <span
            className="inline-block tamil text-xs font-bold tracking-widest uppercase rounded-full"
            style={{
              background: 'rgba(240,204,90,0.15)',
              border: '1px solid rgba(240,204,90,0.4)',
              color: '#f0cc5a',
              padding: '0.35rem 1rem',
              marginBottom: '1rem',
            }}
          >
            எப்படி பெறுவது?
          </span>
          <h2
            id="how-it-works-heading"
            className="tamil font-extrabold text-white"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', lineHeight: 1.2, marginBottom: '0.75rem' }}
          >
            சேவை பெறுவது{' '}
            <span style={{ color: '#f0cc5a' }}>மிகவும் எளிது!</span>
          </h2>
          <p className="tamil text-white/60 text-sm">
            5 எளிய படிகளில் உங்கள் இடத்திற்கு இயந்திரம் வரும்.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row md:items-start gap-0 md:gap-4">
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = ICONS[i];
            const isLast = i === HOW_IT_WORKS.length - 1;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="how-card flex md:flex-col flex-row items-start md:items-center flex-1"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Mobile: vertical connector + card row */}
                <div className="flex flex-col items-center md:hidden" style={{ marginRight: '1rem', minWidth: '2.5rem' }}>
                  {/* Circle */}
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
                      boxShadow: '0 4px 14px rgba(212,160,23,0.4)',
                    }}
                  >
                    <Icon size={14} className="text-[#1a2e1a]" strokeWidth={2.5} />
                  </div>
                  {/* Vertical line */}
                  {!isLast && (
                    <div
                      style={{
                        width: '2px',
                        flex: 1,
                        minHeight: '3rem',
                        background: 'linear-gradient(to bottom, rgba(240,204,90,0.5), rgba(240,204,90,0.1))',
                        margin: '0.25rem 0',
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl flex-1 md:w-full"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    padding: '1rem 1.1rem',
                    marginBottom: isLast ? 0 : '0.75rem',
                  }}
                >
                  {/* Desktop step number + icon */}
                  <div className="hidden md:flex items-center justify-center" style={{ marginBottom: '0.75rem' }}>
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: '3rem',
                        height: '3rem',
                        background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
                        boxShadow: '0 4px 14px rgba(212,160,23,0.4)',
                      }}
                    >
                      <Icon size={18} className="text-[#1a2e1a]" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <span
                    className="text-[0.65rem] font-black tracking-widest"
                    style={{ color: '#f0cc5a', display: 'block', marginBottom: '0.25rem' }}
                  >
                    {step.step}
                  </span>
                  <h3 className="tamil text-white font-bold text-sm leading-snug" style={{ marginBottom: '0.35rem' }}>
                    {step.titleTamil}
                  </h3>
                  <p className="tamil text-white/60 text-xs leading-relaxed">
                    {step.descTamil}
                  </p>
                </div>

                {/* Desktop: horizontal connector arrow */}
                {!isLast && (
                  <div
                    className="hidden md:flex items-center justify-center flex-shrink-0"
                    style={{ width: '1.5rem', marginTop: '-1rem' }}
                    aria-hidden="true"
                  >
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M0 6H16M16 6L11 1M16 6L11 11" stroke="rgba(240,204,90,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center" style={{ marginTop: '3rem' }}>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.booking)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tamil font-bold rounded-full transition-all active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #d4a017, #f0cc5a)',
              color: '#1a2e1a',
              padding: '0.9rem 2rem',
              fontSize: '0.95rem',
              boxShadow: '0 6px 24px rgba(212,160,23,0.45)',
            }}
          >
            <MessageCircle size={18} />
            இப்பொழுதே சேவை பதிவு செய்யுங்கள்
          </a>
        </div>

      </div>
    </section>
  );
}
