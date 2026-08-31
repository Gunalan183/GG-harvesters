import { Wrench, Users, Clock, Wheat, MapPin, Phone } from 'lucide-react';

const TRUST_ITEMS = [
  { Icon: Wrench,  title: 'நம்பகமான இயந்திரங்கள்',     desc: 'நன்கு பராமரிக்கப்பட்ட நவீன இயந்திரங்கள்' },
  { Icon: Users,   title: 'அனுபவமிக்க ஆபரேட்டர்கள்', desc: 'திறமையான, பயிற்சி பெற்ற ஆபரேட்டர்கள்' },
  { Icon: Clock,   title: 'சரியான நேரத்தில் சேவை',    desc: 'கோரிய நேரத்தில் இயந்திரம் வரும்' },
  { Icon: Wheat,   title: 'விவசாயிகளுக்கான சேவை',     desc: 'விவசாய தேவைகளை புரிந்து சேவை' },
  { Icon: MapPin,  title: 'சுற்றுவட்டார பகுதிகள்',    desc: 'கும்பகோணம், தஞ்சாவூர் மற்றும் அருகில்' },
  { Icon: Phone,   title: 'நேரடி தொடர்பு',            desc: 'நேரடியாக அழைத்து சேவை பதிவு செய்யலாம்' },
];

export default function TrustStrip() {
  return (
    <section
      className="trust-strip py-8"
      aria-label="Trust indicators"
    >
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUST_ITEMS.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2.5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
              >
                <Icon size={22} color="#f0cc5a" strokeWidth={1.75} />
              </div>
              <div>
                <p className="tamil text-white font-bold text-sm leading-snug mb-0.5">
                  {title}
                </p>
                <p className="tamil text-white/60 text-xs leading-relaxed hidden md:block">
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
