import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations } from '../../i18n/translations';

const MACHINES = [
  {
    name: 'Paddy Harvester',
    nameTamil: 'நெல் அறுவடை இயந்திரம்',
    image: '/images/machinery/gg-paddy-harvester-machine-kumbakonam.jpg',
    alt: 'GG paddy harvester combine harvester machine in Tamil Nadu',
  },
  {
    name: 'Tractor',
    nameTamil: 'டிராக்டர்',
    image: '/images/machinery/gg-tractor-agricultural-kumbakonam.jpg',
    alt: 'GG tractor for agricultural work in Kumbakonam Thanjavur',
  },
  {
    name: 'Tractor + Rotavator',
    nameTamil: 'டிராக்டர் + ரோட்டவேட்டர்',
    image: '/images/machinery/gg-tractor-rotavator-kumbakonam.png',
    alt: 'GG tractor with rotavator attachment for deep soil tilling',
  },
  {
    name: 'JCB',
    nameTamil: 'JCB இயந்திரம்',
    image: '/images/machinery/gg-jcb-3cx-backhoe-loader-kumbakonam.jpg',
    alt: 'GG JCB backhoe loader for construction and earthwork',
  },
  {
    name: 'JCB Mini Excavator',
    nameTamil: 'JCB Mini Excavator',
    image: '/images/machinery/Jcb_mini.jpg',
    alt: 'GG JCB mini excavator for canal digging and narrow space earthwork',
  },
  {
    name: 'Round Baler',
    nameTamil: 'டிராக்டர் + Round Baler',
    image: '/images/machinery/gg-tractor-round-baler-service-thanjavur.png',
    alt: 'GG tractor round baler baling straw after paddy harvest',
  },
  {
    name: 'Lorry',
    nameTamil: 'லாரி',
    image: '/images/machinery/gg-paddy-harvester-transport-lorry.png',
    alt: 'GG lorry transport service for machinery and produce',
  },
];

const ROW1 = [...MACHINES.slice(0, 4), ...MACHINES.slice(0, 4)];
const ROW2 = [...MACHINES.slice(3), ...MACHINES.slice(3)];

function MachineCard({ machine, label, desc }) {
  return (
    <div className="flex-shrink-0" style={{ width: '220px', margin: '0 0.5rem' }}>
      <div className="overflow-hidden" style={{ borderRadius: '1.25rem', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
        <div className="relative" style={{ paddingBottom: '68%' }}>
          <img
            src={machine.image}
            alt={machine.alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={220}
            height={150}
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentElement.style.background = 'linear-gradient(135deg, #e8f5ec, #fdf8e8)';
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,25,10,0.7) 0%, transparent 60%)' }} />
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white font-bold text-xs leading-tight">{machine.name}</p>
          </div>
        </div>
        <div style={{ background: '#fff', padding: '0.65rem 0.85rem' }}>
          <h3 className="font-bold text-[#1a1814] text-xs leading-snug">{label}</h3>
        </div>
      </div>
    </div>
  );
}

export default function MachineryShowcase() {
  const { lang } = useLanguage();
  const ts = getTranslations(lang);
  const t = ts.machinery;
  const md = ts.machineData;

  return (
    <section id="machinery" className="section-py bg-[#f0faf4]" aria-labelledby="machinery-heading">
      <div className="container-site">
        <SectionHeader
          badge={t.badge}
          title={
            <span className="whitespace-nowrap sm:whitespace-normal block text-[1.45rem] sm:text-[clamp(1.8rem,5vw,2.4rem)]">
              {t.title}{' '}
              <span className="text-[#1a5c2e]">{t.titleHighlight}</span>
            </span>
          }
          subtitle={t.subtitle}
        />
      </div>

      {/* Mobile: two rows */}
      <div className="md:hidden" style={{ marginTop: '2rem', overflow: 'hidden' }}>
        <div className="machinery-track" style={{ marginBottom: '0.75rem' }}>
          {ROW1.map((machine, i) => (
            <MachineCard key={i} machine={machine}
              label={md[machine.name] ? machine.name : machine.nameTamil}
              desc={md[machine.name] || ''}
            />
          ))}
        </div>
        <div className="machinery-track-reverse">
          {ROW2.map((machine, i) => (
            <MachineCard key={i} machine={machine}
              label={md[machine.name] ? machine.name : machine.nameTamil}
              desc={md[machine.name] || ''}
            />
          ))}
        </div>
      </div>

      {/* Desktop: single row */}
      <div className="hidden md:block relative overflow-hidden" style={{ marginTop: '2rem' }}>
        <div className="machinery-track">
          {[...MACHINES, ...MACHINES].map((machine, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: '260px', margin: '0 0.75rem' }}>
              <div className="overflow-hidden" style={{ borderRadius: '1.25rem', boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}>
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
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,25,10,0.7) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-sm leading-tight">{machine.name}</p>
                  </div>
                </div>
                <div style={{ background: '#fff', padding: '0.85rem 1rem' }}>
                  <h3 className="font-bold text-[#1a1814] text-sm leading-snug" style={{ marginBottom: '0.25rem' }}>
                    {machine.name}
                  </h3>
                  <p className="text-[#6b7280] text-xs leading-relaxed">
                    {md[machine.name] || machine.nameTamil}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
