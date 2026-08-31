import { useState } from 'react';
import { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import ContactCTA from '../components/ui/ContactCTA';
import { setPageMeta } from '../utils/seo';

const ALL_IMAGES = [
  { src: '/images/gallery/gg-paddy-harvester-working-kumbakonam.jpg', alt: 'GG paddy harvester working in rice field Kumbakonam', caption: 'நெல் அறுவடை பணியில் GG Harvester - Kumbakonam', category: 'paddy-harvester' },
  { src: '/images/gallery/gg-paddy-harvester-thanjavur-rice-field.jpg', alt: 'GG paddy harvester machine in Thanjavur rice field', caption: 'தஞ்சாவூர் நெல் வயலில் GG Harvester', category: 'paddy-harvester' },
  { src: '/images/gallery/gg-paddy-harvester-transport-lorry.jpg', alt: 'GG paddy harvester being transported on lorry', caption: 'GG Harvester வாகன போக்குவரத்து', category: 'paddy-harvester' },
  { src: '/images/gallery/gg-tractor-agricultural-work-kumbakonam.jpg', alt: 'GG tractor doing agricultural work in Kumbakonam', caption: 'GG டிராக்டர் விவசாய பணி', category: 'tractor' },
  { src: '/images/gallery/gg-tractor-rotavator-service-kumbakonam.jpg', alt: 'GG tractor rotavator tilling land Kumbakonam', caption: 'ரோட்டவேட்டர் மூலம் நிலம் தயார்', category: 'tractor' },
  { src: '/images/gallery/gg-jcb-earthwork-kumbakonam.jpg', alt: 'GG JCB machine earthwork near Kumbakonam', caption: 'JCB மண் பணி - Kumbakonam', category: 'jcb' },
  { src: '/images/gallery/gg-jcb-3cx-earthwork-kumbakonam.jpg', alt: 'GG JCB 3CX backhoe loader working', caption: 'JCB 3CX Backhoe Loader பணி', category: 'jcb' },
  { src: '/images/gallery/gg-jcb-mini-excavator-canal-thanjavur.jpg', alt: 'GG JCB mini excavator digging canal Thanjavur', caption: 'JCB Mini Excavator கால்வாய் பணி', category: 'mini-excavator' },
  { src: '/images/gallery/gg-jcb-mini-excavator-construction.jpg', alt: 'GG JCB mini excavator at construction site', caption: 'JCB Mini Excavator கட்டுமான பணி', category: 'mini-excavator' },
  { src: '/images/gallery/gg-round-baler-paddy-straw-thanjavur.jpg', alt: 'GG round baler baling paddy straw after harvest', caption: 'Round Baler வைக்கோல் சுருட்டல்', category: 'round-baler' },
  { src: '/images/gallery/gg-round-baler-bale-field.jpg', alt: 'Round bales of straw in paddy field after harvest', caption: 'வைக்கோல் பேல்கள் - GG Round Baler', category: 'round-baler' },
  { src: '/images/gallery/gg-harvester-machinery-pambapadiyur.jpg', alt: 'GG harvester and machinery at Pambapadiyur base', caption: 'GG இயந்திரங்கள் - பம்பைப்படியூர்', category: 'all' },
];

const FILTERS = [
  { label: 'அனைத்தும்', value: 'all' },
  { label: '🌾 நெல் அறுவடை', value: 'paddy-harvester' },
  { label: '🚜 டிராக்டர்', value: 'tractor' },
  { label: '🚧 JCB', value: 'jcb' },
  { label: '⛏️ Mini Excavator', value: 'mini-excavator' },
  { label: '🌀 Round Baler', value: 'round-baler' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    setPageMeta({
      title: 'எங்கள் பணிகள் | Gallery | GG Harvester and Earth Movers',
      description:
        'GG Harvester and Earth Movers — நெல் அறுவடை, JCB, டிராக்டர், Mini Excavator பணிகளின் உண்மையான படங்கள். Kumbakonam & Thanjavur. 📞 8608522042',
      canonical: 'https://www.ggharvesters.com/gallery',
    });
  }, []);

  const filtered = activeFilter === 'all'
    ? ALL_IMAGES
    : ALL_IMAGES.filter((img) => img.category === activeFilter || img.category === 'all');

  const openLightbox = (img) => {
    setLightbox(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && closeLightbox();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'எங்கள் பணிகள்' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">படங்கள்</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4 leading-tight">
              எங்கள் <span className="text-[#f0c040]">பணிகளின் படங்கள்</span>
            </h1>
            <p className="tamil text-white/85 text-base leading-relaxed">
              GG Harvester இயந்திரங்கள் வயல்களிலும் பணி இடங்களிலும் செய்த வேலைகளின் உண்மையான படங்கள்.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <SectionHeader
            badge="Gallery"
            title={<>உண்மையான <span className="text-[#1a5c2e]">பணி படங்கள்</span></>}
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-8" role="group" aria-label="Gallery filters">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`tamil px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeFilter === f.value
                    ? 'bg-[#1a5c2e] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-300 hover:bg-[#e8f5ec] hover:text-[#1a5c2e]'
                }`}
                aria-pressed={activeFilter === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((img, i) => (
              <button
                key={i}
                className="gallery-item aspect-square relative group"
                onClick={() => openLightbox(img)}
                aria-label={`View: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={300}
                  height={300}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #e8f5ec, #c3e6cc)';
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white drop-shadow" size={28} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="tamil text-white text-xs">{img.caption}</p>
                </div>
              </button>
            ))}
          </div>

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter text-sm text-gray-500 mt-6 tamil">
            📸 உண்மையான GG இயந்திர பணி படங்கள். சேவை பதிவு செய்ய{' '}
            <a href="tel:+918608522042" className="text-[#1a5c2e] font-semibold">8608522042</a>-ல் அழைக்கவும்.
          </p>
        </div>
      </section>

      <ContactCTA />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
        >
          <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-4 text-white hover:text-[#f0c040] transition-colors p-2"
              aria-label="Close"
            >
              <X size={30} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="tamil text-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter text-sm mt-4 opacity-80">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </Layout>
  );
}
