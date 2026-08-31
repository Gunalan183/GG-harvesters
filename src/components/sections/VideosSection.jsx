import { useState } from 'react';
import { Play } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const VIDEOS = [
  {
    id: 'paddy-harvester-1',
    title: 'GG Harvester Paddy Harvesting | நெல் அறுவடை சேவை',
    titleTamil: 'நெல் அறுவடை இயந்திரம் — சேவை காட்சி',
    thumbnail: '/images/gallery/gg-paddy-harvester-working-kumbakonam.jpg',
    thumbnailAlt: 'GG paddy harvester working in rice field',
    videoSrc: '/videos/gg_harvester.mp4',
    youtubeSrc: null,
  },
  {
    id: 'paddy-harvester-2',
    title: 'GG Harvester Working | நெல் அறுவடை — வயல் காட்சி',
    titleTamil: 'நெல் அறுவடை இயந்திரம் — வயல் காட்சி',
    thumbnail: '/images/gallery/gg-paddy-harvester-thanjavur-rice-field.jpg',
    thumbnailAlt: 'GG paddy harvester in Thanjavur rice field',
    videoSrc: '/videos/gg_harvester02.mp4',
    youtubeSrc: null,
  },
  {
    id: 'jcb-service',
    title: 'GG JCB Service | JCB பணி காட்சி',
    titleTamil: 'JCB இயந்திர சேவை',
    thumbnail: '/videos/gg_JCB.jpeg',
    thumbnailAlt: 'GG JCB machine at work',
    videoSrc: null,
    youtubeSrc: null,
  },
  {
    id: 'tractor-rotavator',
    title: 'GG Tractor Rotavator | டிராக்டர் ரோட்டவேட்டர் சேவை',
    titleTamil: 'டிராக்டர் + ரோட்டவேட்டர்',
    thumbnail: '/images/gallery/gg-tractor-rotavator-service-kumbakonam.jpg',
    thumbnailAlt: 'GG tractor rotavator service',
    videoSrc: null,
    youtubeSrc: null,
  },
];

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="card group" aria-label={video.titleTamil}>
      <div
        className="relative overflow-hidden cursor-pointer"
        style={{ paddingBottom: '56.25%' }}
        onClick={() => setPlaying(true)}
        role="button"
        tabIndex={0}
        aria-label={`Play video: ${video.titleTamil}`}
        onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
      >
        {playing && video.youtubeSrc ? (
          <div className="absolute inset-0" style={{ height: '100%' }}>
            <iframe
              src={`${video.youtubeSrc}?autoplay=1&rel=0`}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
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
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width={480}
              height={270}
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentElement.style.background = 'linear-gradient(135deg, #fdf8e8, #fdf8e8)';
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play size={22} className="text-[#d4a017] ml-1" fill="#d4a017" />
              </div>
            </div>
            {/* Coming soon badge if no video */}
            {!video.videoSrc && !video.youtubeSrc && (
              <div className="absolute top-3 right-3 badge-green text-xs">
                விரைவில்
              </div>
            )}
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="tamil font-bold text-[#1a1814] text-sm leading-snug">{video.titleTamil}</h3>
        <p className="text-[#4b5563] text-xs mt-1 truncate">{video.title}</p>
      </div>
    </article>
  );
}

export default function VideosSection() {
  return (
    <section id="videos" className="section-py bg-[#f0faf4]" aria-labelledby="videos-heading">
      <div className="container-site">
        <SectionHeader
          badge="வீடியோக்கள்"
          title={
            <>
              எங்கள் இயந்திரங்கள்{' '}
              <span className="text-[#d4a017]">செயல்படும் வீடியோக்கள்</span>
            </>
          }
          subtitle="GG Harvester இயந்திரங்கள் வயல்களிலும் கட்டுமான இடங்களிலும் செயல்படும் காட்சிகள்."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
