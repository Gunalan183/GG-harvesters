import SectionHeader from '../ui/SectionHeader';

const MACHINES = [
  {
    name: 'Paddy Harvester',
    nameTamil: 'நெல் அறுவடை இயந்திரம்',
    desc: 'நெல் வயல்களில் வேகமான மற்றும் திறமையான அறுவடை.',
    image: '/images/machinery/gg-paddy-harvester-machine-kumbakonam.jpg',
    alt: 'GG paddy harvester combine harvester machine in Tamil Nadu',
  },
  {
    name: 'Tractor',
    nameTamil: 'டிராக்டர்',
    desc: 'விவசாய நிலம் தயாரிப்பு மற்றும் பல்வேறு பணிகளுக்கு.',
    image: '/images/machinery/gg-tractor-agricultural-kumbakonam.jpg',
    alt: 'GG tractor for agricultural work in Kumbakonam Thanjavur',
  },
  {
    name: 'Tractor + Rotavator',
    nameTamil: 'டிராக்டர் + ரோட்டவேட்டர்',
    desc: 'மண்ணை ஆழமாக உழுது நிலம் தயார் செய்ய.',
    image: '/images/machinery/gg-tractor-rotavator-kumbakonam.jpg',
    alt: 'GG tractor with rotavator attachment for deep soil tilling',
  },
  {
    name: 'JCB',
    nameTamil: 'JCB இயந்திரம்',
    desc: 'கட்டுமான மற்றும் மண் பணிகளுக்கு சக்திவாய்ந்த JCB.',
    image: '/images/machinery/JCB_Big.jpg',
    alt: 'GG JCB backhoe loader for construction and earthwork',
  },
  {
    name: 'JCB Mini Excavator',
    nameTamil: 'JCB Mini Excavator',
    desc: 'சிறிய இடங்களில் தோண்டுதல் மற்றும் கால்வாய் பணிகள்.',
    image: '/images/machinery/Jcb_mini.jpg',
    alt: 'GG JCB mini excavator for canal digging and narrow space earthwork',
  },
  {
    name: 'Round Baler',
    nameTamil: 'டிராக்டர் + Round Baler',
    desc: 'அறுவடைக்கு பின் வைக்கோலை சுருட்டி பேக் செய்ய.',
    image: '/images/machinery/gg-tractor-round-baler-service-thanjavur.png',
    alt: 'GG tractor round baler baling straw after paddy harvest',
  },
  {
    name: 'Lorry',
    nameTamil: 'லாரி',
    desc: 'இயந்திரங்கள் மற்றும் விளைபொருட்கள் போக்குவரத்து.',
    image: '/images/machinery/gg-paddy-harvester-transport-lorry.png',
    alt: 'GG lorry transport service for machinery and produce',
  },
];

// Duplicate for seamless infinite loop
const TRACK = [...MACHINES, ...MACHINES];

export default function MachineryShowcase() {
  return (
    <section id="machinery" className="section-py bg-[#f0faf4]" aria-labelledby="machinery-heading">
      <div className="container-site">
        <SectionHeader
          badge="இயந்திரங்கள்"
          title={
            <>
              எங்கள்{' '}
              <span className="text-[#1a5c2e]">இயந்திர சேகரிப்பு</span>
            </>
          }
          subtitle="நன்கு பராமரிக்கப்பட்ட இயந்திரங்கள், அனுபவமிக்க ஆபரேட்டர்களுடன்."
        />
      </div>

      {/* Infinite scroll strip */}
      <div className="relative overflow-hidden" style={{ marginTop: '2rem' }}>

        <div className="machinery-track">
          {TRACK.map((machine, i) => (
            <div
              key={i}
              className="machinery-card flex-shrink-0"
              style={{ width: '260px', margin: '0 0.75rem' }}
            >
              <div
                className="overflow-hidden"
                style={{ borderRadius: '1.25rem', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}
              >
                {/* Image */}
                <div className="relative" style={{ paddingBottom: '68%' }}>
                  <img
                    src={machine.image}
                    alt={machine.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width={260}
                    height={177}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #e8f5ec, #fdf8e8)';
                      e.target.style.display = 'none';
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,25,10,0.7) 0%, transparent 60%)' }}
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-sm leading-tight">{machine.name}</p>
                  </div>
                </div>

                {/* Text */}
                <div style={{ background: '#fff', padding: '0.85rem 1rem' }}>
                  <h3 className="tamil font-bold text-[#1a1814] text-sm leading-snug" style={{ marginBottom: '0.25rem' }}>
                    {machine.nameTamil}
                  </h3>
                  <p className="tamil text-[#6b7280] text-xs leading-relaxed">{machine.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
