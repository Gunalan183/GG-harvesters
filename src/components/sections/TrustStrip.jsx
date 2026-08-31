import { Wrench, Users, Clock, Wheat, MapPin, Phone } from 'lucide-react';

const TRUST_ITEMS = [
  { Icon: Wrench,  title: 'நம்பகமான இயந்திரங்கள்',     desc: 'நன்கு பராமரிக்கப்பட்ட நவீன இயந்திரங்கள்',         color: '#16a34a' },
  { Icon: Users,   title: 'அனுபவமிக்க ஆபரேட்டர்கள்', desc: 'திறமையான, பயிற்சி பெற்ற ஆபரேட்டர்கள்',            color: '#2563eb' },
  { Icon: Clock,   title: 'சரியான நேரத்தில் சேவை',    desc: 'கோரிய நேரத்தில் இயந்திரம் வரும்',                  color: '#d97706' },
  { Icon: Wheat,   title: 'விவசாயிகளுக்கான சேவை',     desc: 'விவசாய தேவைகளை புரிந்து சேவை',                    color: '#16a34a' },
  { Icon: MapPin,  title: 'சுற்றுவட்டார பகுதிகள்',    desc: 'கும்பகோணம், தஞ்சாவூர் மற்றும் அருகில்',           color: '#dc2626' },
  { Icon: Phone,   title: 'நேரடி தொடர்பு',            desc: 'நேரடியாக அழைத்து சேவை பதிவு செய்யலாம்',           color: '#7c3aed' },
];

export default function TrustStrip() {
  return (
    <section className="bg-white" style={{ padding: '3.5rem 0' }} aria-label="Trust indicators">
      <div className="container-site">

        {/* Section label */}
        <div className="text-center" style={{ marginBottom: '2.5rem' }}>
          <span className="badge-green">ஏன் GG Harvester?</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {TRUST_ITEMS.map(({ Icon, title, desc, color }, i) => (
            <div
              key={i}
              className="rounded-2xl flex flex-col items-start"
              style={{
                background: '#f7fdf9',
                border: '1px solid #e2f0e8',
                padding: '1.25rem',
                gap: '0.75rem',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,92,46,0.10)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon circle */}
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  background: color + '18',
                }}
              >
                <Icon size={20} color={color} strokeWidth={2} />
              </div>

              {/* Text */}
              <div>
                <p className="tamil font-bold text-[#1a2e1a]" style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                  {title}
                </p>
                <p className="tamil text-[#4b5563] leading-relaxed" style={{ fontSize: '0.75rem' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
