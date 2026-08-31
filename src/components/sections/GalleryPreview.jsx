import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const GALLERY_IMAGES = [
  {
    src: '/images/gallery/gg-paddy-harvester-working-kumbakonam.jpg',
    alt: 'GG paddy harvester working in a rice field in Kumbakonam',
    captionTamil: 'நெல் அறுவடை பணியில் GG Harvester',
    category: 'paddy-harvester',
  },
  {
    src: '/images/gallery/gg-paddy-harvester-thanjavur-rice-field.jpg',
    alt: 'GG paddy harvester machine in Thanjavur rice field during harvest season',
    captionTamil: 'தஞ்சாவூர் நெல் வயலில் GG Harvester',
    category: 'paddy-harvester',
  },
  {
    src: '/images/gallery/gg-tractor-rotavator-service-kumbakonam.jpg',
    alt: 'GG tractor with rotavator tilling agricultural land in Kumbakonam',
    captionTamil: 'ரோட்டவேட்டர் மூலம் நிலம் தயார்',
    category: 'tractor',
  },
  {
    src: '/images/gallery/gg-jcb-mini-excavator-canal-thanjavur.jpg',
    alt: 'GG JCB mini excavator digging a canal near Thanjavur',
    captionTamil: 'JCB Mini Excavator கால்வாய் பணி',
    category: 'jcb',
  },
  {
    src: '/images/gallery/gg-jcb-3cx-earthwork-kumbakonam.jpg',
    alt: 'GG JCB 3CX backhoe loader earthwork in Kumbakonam',
    captionTamil: 'JCB 3CX Backhoe Loader பணி',
    category: 'jcb',
  },
  {
    src: '/images/gallery/gg-round-baler-paddy-straw-thanjavur.jpg',
    alt: 'GG round baler baling paddy straw after harvest in Thanjavur',
    captionTamil: 'Round Baler வைக்கோல் சுருட்டல்',
    category: 'round-baler',
  },
];

const FILTERS = [
  { label: 'அனைத்தும்', value: 'all' },
  { label: 'நெல் அறுவடை', value: 'paddy-harvester' },
  { label: 'டிராக்டர்', value: 'tractor' },
  { label: 'JCB', value: 'jcb' },
  { label: 'Round Baler', value: 'round-baler' },
];

export default function GalleryPreview() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section className="section-py bg-white" aria-labelledby="gallery-heading">
      <div className="container-site">
        <SectionHeader
          badge="எங்கள் பணிகள்"
          title={
            <>
              நாங்கள் செய்த{' '}
              <span className="text-[#1a5c2e]">பணிகளின் படங்கள்</span>
            </>
          }
          subtitle="GG Harvester இயந்திரங்கள் உண்மையான வயல்களில் செய்த வேலைகளின் படங்கள்."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center" style={{ marginBottom: '2rem' }} role="group" aria-label="Gallery filters">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className="tamil text-sm font-semibold rounded-full transition-colors"
              style={{
                padding: '0.5rem 1.25rem',
                background: activeFilter === f.value ? '#1a5c2e' : '#f0f0f0',
                color: activeFilter === f.value ? '#fff' : '#4b5563',
              }}
              aria-pressed={activeFilter === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <button
              key={i}
              className="gallery-item aspect-square relative group focus-visible:outline-2 focus-visible:outline-[#d4a017]"
              onClick={() => setLightbox(img)}
              aria-label={`View: ${img.captionTamil}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={400}
                height={400}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #e8f5ec, #fdf8e8)';
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white" size={28} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="tamil text-white text-xs font-semibold">{img.captionTamil}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center" style={{ marginTop: '3rem' }}>
          <Link to="/gallery" className="btn-outline text-base">
            அனைத்து படங்களையும் காண்க
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.captionTamil}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white hover:text-[#f0cc5a] transition-colors"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="tamil text-white text-center text-sm" style={{ marginTop: '0.75rem' }}>
              {lightbox.captionTamil}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
