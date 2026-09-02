import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Header from '../components/layout/Header';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import Footer from '../components/layout/Footer';
import { whatsappLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

const WORKS = [
  {
    id: 1,
    image: '/images/works/work02.png',
    alt: 'GG Harvesters field work — நெல் அறுவடை பணி',
    titleTamil: 'நெல் அறுவடை பணி',
    titleEnglish: 'Paddy Harvesting Work',
    descTamil: 'கும்பகோணம் மற்றும் தஞ்சாவூர் பகுதியில் நெல் வயல்களில் GG Harvesters இயந்திரங்களால் செய்யப்பட்ட அறுவடை பணி.',
    category: 'harvester',
    tag: 'நெல் அறுவடை',
  },
  {
    id: 2,
    image: '/images/works/Work01.jpeg',
    alt: 'GG Harvesters JCB work — JCB பணி',
    titleTamil: 'மண் பணி & கட்டுமானம்',
    titleEnglish: 'Earthwork & Construction',
    descTamil: 'JCB மற்றும் Mini Excavator மூலம் கால்வாய் தோண்டல், நில சீரமைப்பு மற்றும் கட்டுமான பணிகள்.',
    category: 'jcb',
    tag: 'JCB பணி',
  },
  {
    id: 3,
    image: '/images/works/work03.jpg',
    alt: 'GG Harvesters JCB work — JCB பணி',
    titleTamil: 'JCB இயந்திர பணி',
    titleEnglish: 'JCB Machinery Work',
    descTamil: 'JCB இயந்திரம் மூலம் நில தோண்டல், மண் அகற்றல் மற்றும் கட்டுமான அடிப்படை பணிகள்.',
    category: 'jcb',
    tag: 'JCB பணி',
  },
  {
    id: 4,
    image: '/images/works/Work04.jpg',
    alt: 'GG tractor with tailer transport work',
    titleTamil: 'டிராக்டர் + டெய்லர் பணி',
    titleEnglish: 'Tractor with Tailer',
    descTamil: 'டிராக்டர் + டெய்லர் மூலம் விளைபொருட்கள் மற்றும் பொருட்களை ஒரு இடத்திலிருந்து மற்றொரு இடத்திற்கு கொண்டு செல்லும் பணி.',
    category: 'tractor',
    tag: 'டெய்லர் பணி',
  },
  {
    id: 5,
    image: '/images/works/work05.png',
    alt: 'GG tractor rotavator land preparation work',
    titleTamil: 'டிராக்டர் + ரோட்டவேட்டர் பணி',
    titleEnglish: 'Tractor Rotavator',
    descTamil: 'டிராக்டர் ரோட்டவேட்டர் மூலம் நிலத்தை ஆழமாக உழுது விதை விதைப்பிற்கு தயார்படுத்தும் பணி.',
    category: 'tractor',
    tag: 'ரோட்டவேட்டர் பணி',
  },
  {
    id: 6,
    image: '/images/works/work06.png',
    alt: 'GG lorry transport service work',
    titleTamil: 'லாரி போக்குவரத்து பணி',
    titleEnglish: 'Lorry Transport',
    descTamil: 'இயந்திரங்கள் மற்றும் விளைபொருட்களை லாரி மூலம் பாதுகாப்பாக கொண்டு செல்லும் போக்குவரத்து சேவை.',
    category: 'lorry',
    tag: 'லாரி பணி',
  },
];

const TAG_COLORS = {
  harvester: { bg: 'rgba(26,92,46,0.85)',  text: '#fff' },
  jcb:       { bg: 'rgba(212,160,23,0.9)', text: '#1a1814' },
  tractor:   { bg: 'rgba(26,35,126,0.85)', text: '#fff' },
  lorry:     { bg: 'rgba(180,60,20,0.85)', text: '#fff' },
};

export default function WorksPage() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const open = (i) => { setLightbox(i); document.body.style.overflow = 'hidden'; };
  const close = () => { setLightbox(null); document.body.style.overflow = ''; };
  const prev = () => setLightbox((i) => (i - 1 + WORKS.length) % WORKS.length);
  const next = () => setLightbox((i) => (i + 1) % WORKS.length);

  return (
    <div className="flex flex-col min-h-screen font-sans" style={{ background: '#fff' }}>
      <Header />

      <main className="flex-1 pt-[68px] pb-24">

        {/* ── Hero ── */}
        <div
          className="relative flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #0a2d16 0%, #1a5c2e 55%, #0f3d1e 100%)',
            padding: '4.5rem 1.5rem 3.5rem',
          }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div style={{ position: 'absolute', top: '-4rem', right: '-4rem', width: '20rem', height: '20rem', borderRadius: '50%', background: 'rgba(212,160,23,0.06)' }} />
            <div style={{ position: 'absolute', bottom: '-3rem', left: '-2rem', width: '12rem', height: '12rem', borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
          </div>

          <span
            className="inline-block tamil text-xs font-bold tracking-widest uppercase rounded-full"
            style={{ background: 'rgba(212,160,23,0.18)', border: '1px solid rgba(212,160,23,0.45)', color: '#f0cc5a', padding: '0.3rem 1rem', marginBottom: '1rem' }}
          >
            எங்கள் பணிகள்
          </span>
          <h1
            className="tamil font-extrabold text-white"
            style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}
          >
            நாங்கள் செய்த{' '}
            <span style={{ color: '#f0cc5a' }}>வேலைகள்</span>
          </h1>
          <p className="tamil text-white/60" style={{ fontSize: '0.95rem', maxWidth: '460px', lineHeight: 1.7 }}>
            உண்மையான வயல்கள் மற்றும் கட்டுமான இடங்களில் GG Harvesters இயந்திரங்கள் செய்த பணிகளின் காட்சிகள்.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mt-8" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { num: '500+', label: 'வயல் பணிகள்' },
              { num: '6+', label: 'ஆண்டுகள் அனுபவம்' },
              { num: '13', label: 'மாவட்டங்கள்' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-extrabold text-white" style={{ fontSize: 'clamp(1.6rem, 5vw, 2rem)', color: '#f0cc5a', lineHeight: 1 }}>{s.num}</p>
                <p className="tamil text-white/50 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Works Grid ── */}
        <div style={{ padding: '2.5rem 1rem' }}>

          {/* Featured first card — full width */}
          <div
            className="relative overflow-hidden group cursor-pointer"
            style={{ borderRadius: '1.5rem', marginBottom: '1rem', height: '280px' }}
            onClick={() => open(0)}
          >
            <img
              src={WORKS[0].image}
              alt={WORKS[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }} />

            {/* Tag */}
            <span
              className="absolute top-4 left-4 tamil text-xs font-bold rounded-full px-3 py-1"
              style={{ background: TAG_COLORS[WORKS[0].category].bg, color: TAG_COLORS[WORKS[0].category].text }}
            >
              {WORKS[0].tag}
            </span>

            {/* Play/zoom hint */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)' }}>
              <Play size={16} className="text-white ml-0.5" fill="white" />
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white/60 text-xs mb-1">{WORKS[0].titleEnglish}</p>
              <h2 className="tamil text-white font-extrabold" style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', lineHeight: 1.2 }}>
                {WORKS[0].titleTamil}
              </h2>
              <p className="tamil text-white/65 text-xs mt-1 leading-relaxed line-clamp-2">{WORKS[0].descTamil}</p>
            </div>
          </div>

          {/* Two cards side by side */}
          <div className="grid grid-cols-2 gap-3">
            {WORKS.slice(1).map((work, i) => (
              <div
                key={work.id}
                className="relative overflow-hidden group cursor-pointer"
                style={{ borderRadius: '1.25rem', height: '200px' }}
                onClick={() => open(i + 1)}
              >
                <img
                  src={work.image}
                  alt={work.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 60%)' }} />

                <span
                  className="absolute top-3 left-3 tamil text-[0.6rem] font-bold rounded-full px-2 py-0.5"
                  style={{ background: TAG_COLORS[work.category].bg, color: TAG_COLORS[work.category].text }}
                >
                  {work.tag}
                </span>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="tamil text-white font-bold text-sm leading-snug">{work.titleTamil}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="mx-4 rounded-3xl text-center"
          style={{
            background: 'linear-gradient(135deg, #1a5c2e, #0a2d16)',
            border: '1px solid rgba(212,160,23,0.25)',
            padding: '2rem 1.5rem',
          }}
        >
          <p className="tamil text-white/60 text-xs uppercase tracking-widest font-bold mb-2">உங்கள் பணி?</p>
          <h3 className="tamil text-white font-extrabold mb-1" style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)' }}>
            இதே போல் உங்கள் பணியும் முடிக்கணுமா?
          </h3>
          <p className="tamil text-white/55 text-sm mb-4">இப்போதே தொடர்பு கொண்டு சேவை பதிவு செய்யுங்கள்.</p>
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tamil font-bold rounded-full active:scale-95 transition-transform"
            style={{ background: 'linear-gradient(135deg, #d4a017, #f0cc5a)', color: '#1a1814', padding: '0.8rem 2rem', fontSize: '0.9rem' }}
          >
            WhatsApp மூலம் பதிவு செய்யுங்கள்
          </a>
        </div>
      </main>

      <Footer />
      <MobileBottomNav />

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)' }}
          onClick={close}
        >
          <button onClick={close} className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }} aria-label="Close">
            <X size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <div className="relative max-w-2xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={WORKS[lightbox].image}
              alt={WORKS[lightbox].alt}
              className="w-full max-h-[70vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <span
                className="inline-block tamil text-xs font-bold rounded-full px-3 py-1 mb-2"
                style={{ background: TAG_COLORS[WORKS[lightbox].category].bg, color: TAG_COLORS[WORKS[lightbox].category].text }}
              >
                {WORKS[lightbox].tag}
              </span>
              <h3 className="tamil text-white font-extrabold text-lg">{WORKS[lightbox].titleTamil}</h3>
              <p className="tamil text-white/60 text-sm mt-1 leading-relaxed">{WORKS[lightbox].descTamil}</p>
              <p className="text-white/30 text-xs mt-3">{lightbox + 1} / {WORKS.length}</p>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
