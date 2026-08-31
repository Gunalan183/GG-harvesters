import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { getServiceWhatsApp } from '../../utils/whatsapp';

const MACHINES = [
  {
    name: 'Paddy Harvester',
    nameTamil: 'நெல் அறுவடை இயந்திரம்',
    desc: 'நெல் வயல்களில் வேகமான மற்றும் திறமையான அறுவடை.',
    image: '/images/machinery/gg-paddy-harvester-machine-kumbakonam.jpg',
    alt: 'GG paddy harvester combine harvester machine in Tamil Nadu',
    service: 'paddy-harvester',
  },
  {
    name: 'Tractor',
    nameTamil: 'டிராக்டர்',
    desc: 'விவசாய நிலம் தயாரிப்பு மற்றும் பல்வேறு பணிகளுக்கு.',
    image: '/images/machinery/gg-tractor-agricultural-kumbakonam.jpg',
    alt: 'GG tractor for agricultural work in Kumbakonam Thanjavur',
    service: 'tractor',
  },
  {
    name: 'Tractor + Rotavator',
    nameTamil: 'டிராக்டர் + ரோட்டவேட்டர்',
    desc: 'மண்ணை ஆழமாக உழுது நிலம் தயார் செய்ய.',
    image: '/images/machinery/gg-tractor-rotavator-kumbakonam.jpg',
    alt: 'GG tractor with rotavator attachment for deep soil tilling',
    service: 'tractor-rotavator',
  },
  {
    name: 'JCB 3CX Backhoe Loader',
    nameTamil: 'JCB 3CX Backhoe Loader',
    desc: 'கட்டுமான மற்றும் மண் பணிகளுக்கு பல்நோக்கு இயந்திரம்.',
    image: '/images/machinery/gg-jcb-3cx-backhoe-loader-kumbakonam.jpg',
    alt: 'GG JCB 3CX backhoe loader for construction and earthwork',
    service: 'jcb-3cx',
  },
  {
    name: 'JCB Mini Excavator',
    nameTamil: 'JCB Mini Excavator',
    desc: 'சிறிய இடங்களில் தோண்டுதல் மற்றும் கால்வாய் பணிகள்.',
    image: '/images/machinery/gg-jcb-mini-excavator-thanjavur.jpg',
    alt: 'GG JCB mini excavator for canal digging and narrow space earthwork',
    service: 'jcb-mini-excavator',
  },
  {
    name: 'Round Baler',
    nameTamil: 'டிராக்டர் + Round Baler',
    desc: 'அறுவடைக்கு பின் வைக்கோலை சுருட்டி பேக் செய்ய.',
    image: '/images/machinery/gg-tractor-round-baler-thanjavur.jpg',
    alt: 'GG tractor round baler baling straw after paddy harvest',
    service: 'tractor-round-baler',
  },
];

export default function MachineryShowcase() {
  return (
    <section className="section-py bg-[#f0faf4]" aria-labelledby="machinery-heading">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MACHINES.map((machine) => (
            <article
              key={machine.service}
              className="card group"
              aria-label={machine.nameTamil}
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '62%' }}>
                <img
                  src={machine.image}
                  alt={machine.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={480}
                  height={298}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.style.background =
                      'linear-gradient(135deg, #e8f5ec, #fdf8e8)';
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-bold text-sm">{machine.name}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="tamil font-bold text-[#1a2e1a] mb-1">{machine.nameTamil}</h3>
                <p className="tamil text-[#4b5563] text-sm mb-4">{machine.desc}</p>
                <div className="flex gap-2">
                  <Link
                    to={`/services/${machine.service}`}
                    className="flex-1 btn-outline text-sm py-2 justify-center"
                  >
                    விவரங்கள்
                    <ArrowRight size={13} />
                  </Link>
                  <a
                    href={getServiceWhatsApp(machine.service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-whatsapp text-sm py-2 justify-center"
                  >
                    <MessageCircle size={13} />
                    சேவை பதிவு
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/machinery" className="btn-outline text-base">
            அனைத்து இயந்திரங்களும் காண்க
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
