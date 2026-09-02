import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations } from '../../i18n/translations';

const GALLERY_IMAGES = [
  {
    src: '/images/gallery/gg-paddy-harvester-working-kumbakonam.jpg',
    alt: 'GG paddy harvester working in a rice field in Kumbakonam',
    category: 'paddy-harvester',
    captionIndex: 0,
  },
  {
    src: '/images/gallery/gg-paddy-harvester-thanjavur-rice-field.jpg',
    alt: 'GG paddy harvester machine in Thanjavur rice field during harvest season',
    category: 'paddy-harvester',
    captionIndex: 1,
  },
  {
    src: '/images/gallery/gg-tractor-rotavator-service-kumbakonam.jpg',
    alt: 'GG tractor with rotavator tilling agricultural land in Kumbakonam',
    category: 'tractor',
    captionIndex: 2,
  },
  {
    src: '/images/gallery/gg-jcb-mini-excavator-canal-thanjavur.jpg',
    alt: 'GG JCB mini excavator digging a canal near Thanjavur',
    category: 'jcb',
    captionIndex: 3,
  },
  {
    src: '/images/gallery/gg-jcb-3cx-earthwork-kumbakonam.jpg',
    alt: 'GG JCB 3CX backhoe loader earthwork in Kumbakonam',
    category: 'jcb',
    captionIndex: 4,
  },
  {
    src: '/images/gallery/gg-round-baler-bale-field.jpg',
    alt: 'GG round baler baling paddy straw after harvest in Thanjavur',
    category: 'round-baler',
    captionIndex: 5,
  },
];

const FILTER_KEYS = ['all', 'paddy-harvester', 'tractor', 'jcb', 'round-baler'];
const FILTER_TRANSLATION_KEYS = ['all', 'paddyHarvester', 'tractor', 'jcb', 'roundBaler'];

export default function GalleryPreview() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const { lang } = useLanguage();
  const t = getTranslations(lang).gallery;

  const filtered = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="section-py bg-white" aria-labelledby="gallery-heading">
      <div className="container-site">
        <SectionHeader
          badge={t.badge}
          title={
            <>
              {t.title}{' '}
              <span className="text-[#d4a017]">{t.titleHighlight}</span>
            </>
          }
          subtitle={t.subtitle}
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center" style={{ marginBottom: '2rem' }} role="group" aria-label="Gallery filters">
          {FILTER_KEYS.map((key, i) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className="text-sm font-semibold rounded-full transition-colors"
              style={{
                padding: '0.5rem 1.25rem',
                background: activeFilter === key ? '#d4a017' : '#f0f0f0',
                color: activeFilter === key ? '#fff' : '#4b5563',
              }}
              aria-pressed={activeFilter === key}
            >
              {t.filters[FILTER_TRANSLATION_KEYS[i]]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((img, i) => {
            const caption = t.captions[img.captionIndex];
            return (
              <button
                key={i}
                className="gallery-item aspect-square relative group focus-visible:outline-2 focus-visible:outline-[#d4a017]"
                onClick={() => setLightbox({ ...img, caption })}
                aria-label={`View: ${caption}`}
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
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #fdf8e8, #fdf8e8)';
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={28} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-semibold">{caption}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
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
            <p className="text-white text-center text-sm" style={{ marginTop: '0.75rem' }}>
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
