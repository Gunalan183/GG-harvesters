import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import ContactCTA from '../components/ui/ContactCTA';
import { setPageMeta } from '../utils/seo';

const VIDEOS = [
  {
    id: 'paddy-harvester-1',
    title: 'GG Harvester Paddy Harvesting | நெல் அறுவடை சேவை',
    titleTamil: 'நெல் அறுவடை இயந்திரம் — சேவை காட்சி',
    desc: 'GG Harvester நெல் வயலில் அறுவடை செய்யும் காட்சி.',
    thumbnail: '/images/gallery/gg-paddy-harvester-working-kumbakonam.jpg',
    thumbnailAlt: 'GG paddy harvester working in rice field',
    youtubeSrc: null,
    videoSrc: '/videos/gg_harvester.mp4',
    service: 'paddy-harvester',
    category: 'harvest',
  },
  {
    id: 'paddy-harvester-2',
    title: 'GG Harvester Working | நெல் அறுவடை — வயல் காட்சி',
    titleTamil: 'நெல் அறுவடை இயந்திரம் — வயல் காட்சி',
    desc: 'GG Harvester தஞ்சாவூர் நெல் வயலில் அறுவடை செய்யும் காட்சி.',
    thumbnail: '/images/gallery/gg-paddy-harvester-thanjavur-rice-field.jpg',
    thumbnailAlt: 'GG paddy harvester in Thanjavur rice field',
    youtubeSrc: null,
    videoSrc: '/videos/gg_harvester02.mp4',
    service: 'paddy-harvester',
    category: 'harvest',
  },
  {
    id: 'jcb-service-1',
    title: 'GG JCB Service | JCB பணி காட்சி',
    titleTamil: 'JCB இயந்திர சேவை',
    desc: 'GG JCB இயந்திரம் மண் பணி செய்யும் காட்சி.',
    thumbnail: '/videos/gg_JCB.jpeg',
    thumbnailAlt: 'GG JCB machine at work',
    youtubeSrc: null,
    videoSrc: null,
    service: 'jcb',
    category: 'jcb',
  },
  {
    id: 'tractor-rotavator-1',
    title: 'GG Tractor Rotavator Service | டிராக்டர் ரோட்டவேட்டர்',
    titleTamil: 'டிராக்டர் + ரோட்டவேட்டர் பணி',
    desc: 'நிலம் தயார் செய்ய ரோட்டவேட்டர் பயன்படுத்தும் காட்சி.',
    thumbnail: '/images/gallery/gg-tractor-rotavator-service-kumbakonam.jpg',
    thumbnailAlt: 'GG tractor rotavator service',
    youtubeSrc: null,
    videoSrc: null,
    service: 'tractor-rotavator',
    category: 'tractor',
  },
  {
    id: 'jcb-mini-excavator-1',
    title: 'GG JCB Mini Excavator | Canal Digging Thanjavur',
    titleTamil: 'JCB Mini Excavator கால்வாய் பணி',
    desc: 'JCB Mini Excavator கால்வாய் தோண்டல் பணி.',
    thumbnail: '/images/gallery/gg-jcb-mini-excavator-canal-thanjavur.jpg',
    thumbnailAlt: 'GG JCB mini excavator video thumbnail',
    youtubeSrc: null,
    videoSrc: null,
    service: 'jcb-mini-excavator',
    category: 'jcb',
  },
  {
    id: 'round-baler-1',
    title: 'GG Tractor Round Baler | Paddy Straw Baling Tamil Nadu',
    titleTamil: 'Round Baler வைக்கோல் சுருட்டல்',
    desc: 'நெல் அறுவடைக்கு பின் வைக்கோல் பேக் செய்யும் காட்சி.',
    thumbnail: '/images/gallery/gg-round-baler-paddy-straw-thanjavur.jpg',
    thumbnailAlt: 'GG round baler straw baling video thumbnail',
    youtubeSrc: null,
    videoSrc: null,
    service: 'tractor-round-baler',
    category: 'harvest',
  },
  {
    id: 'jcb-earthwork-1',
    title: 'GG JCB Service | Land Levelling & Earthwork Kumbakonam',
    titleTamil: 'JCB நில சீரமைப்பு பணி',
    desc: 'JCB இயந்திரம் நில சீரமைப்பு செய்யும் காட்சி.',
    thumbnail: '/images/gallery/gg-jcb-earthwork-kumbakonam.jpg',
    thumbnailAlt: 'GG JCB earthwork service video thumbnail',
    youtubeSrc: null,
    videoSrc: null,
    service: 'jcb',
    category: 'jcb',
  },
];

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="card" aria-label={video.titleTamil}>
      <div
        className="relative overflow-hidden cursor-pointer"
        style={{ paddingBottom: '56.25%' }}
        onClick={() => setPlaying(true)}
        role="button"
        tabIndex={0}
        aria-label={`Play: ${video.titleTamil}`}
        onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
      >
        {playing && video.youtubeSrc ? (
          <iframe
            src={`${video.youtubeSrc}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : playing && video.videoSrc ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src={video.videoSrc} type="video/mp4" />
          </video>
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.thumbnailAlt}
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={480}
              height={270}
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentElement.style.background = 'linear-gradient(135deg, #1a5c2e, #0f3d1e)';
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/45 flex items-center justify-center group hover:bg-black/35 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <Play size={26} className="text-[#1a5c2e] ml-1" fill="#1a5c2e" />
              </div>
            </div>
            {!video.videoSrc && !video.youtubeSrc && (
              <span className="absolute top-3 right-3 badge-gold text-xs">விரைவில்</span>
            )}
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="tamil font-bold text-gray-50 text-sm leading-snug mb-1">{video.titleTamil}</h3>
        <p className="tamil text-gray-400 text-xs leading-relaxed mb-2">{video.desc}</p>
        <p className="text-gray-400 text-xs truncate">{video.title}</p>
      </div>
    </article>
  );
}

export default function VideosPage() {
  useEffect(() => {
    setPageMeta({
      title: 'வீடியோக்கள் | GG Harvester and Earth Movers',
      description:
        'GG Harvester and Earth Movers இயந்திரங்கள் வயல்களிலும் கட்டுமான இடங்களிலும் செயல்படும் வீடியோக்கள். Kumbakonam & Thanjavur. 📞 8608522042',
      canonical: 'https://www.ggharvesters.com/videos',
    });
  }, []);

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'வீடியோக்கள்' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">வீடியோக்கள்</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4 leading-tight">
              இயந்திரங்கள் <span className="text-[#f0c040]">செயல்படும் காட்சிகள்</span>
            </h1>
            <p className="tamil text-white/85 text-base leading-relaxed">
              GG Harvester இயந்திரங்கள் வயல்களிலும் பணி இடங்களிலும் செயல்படும் வீடியோக்கள்.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <SectionHeader
            badge="Videos"
            title={<>உண்மையான <span className="text-[#1a5c2e]">பணி வீடியோக்கள்</span></>}
            subtitle="வீடியோக்கள் விரைவில் சேர்க்கப்படும். தொடர்பில் இருங்கள்."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          <div className="mt-8 bg-[#e8f5ec] rounded-2xl p-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter">
            <p className="tamil text-[#1a5c2e] font-semibold text-base mb-2">
              📹 உண்மையான வீடியோக்கள் விரைவில்!
            </p>
            <p className="tamil text-gray-400 text-sm">
              GG Harvester இயந்திர பணிகளின் வீடியோக்கள் விரைவில் இங்கே கிடைக்கும்.
              உங்கள் தொலைபேசியில் தொடர்புகொண்டு நேரடியாக பாருங்கள்.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
