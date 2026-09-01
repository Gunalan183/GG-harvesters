import { useState } from 'react';
import { MessageCircle, Info, CheckCircle, X } from 'lucide-react';
import { SERVICES } from '../../data/siteData';
import { getServiceWhatsApp } from '../../utils/whatsapp';

/* ── Detail Modal ── */
function ServiceModal({ service, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden"
        style={{ background: '#fff', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative" style={{ paddingBottom: '52%' }}>
          <img
            src={service.image}
            alt={service.altText}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #e8f5ec, #fdf8e8)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-9 h-9 rounded-full flex items-center justify-center text-lg shadow"
                style={{ background: 'rgba(255,255,255,0.92)' }}>
                {service.icon}
              </span>
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#f0cc5a' }}>
                {service.nameEnglish}
              </span>
            </div>
            <h2 className="tamil text-white font-extrabold text-xl leading-snug">{service.nameTamil}</h2>
          </div>
        </div>
        <div style={{ padding: '1.5rem' }}>
          <p className="tamil text-[#4b5563] text-sm leading-relaxed" style={{ marginBottom: '1.25rem' }}>
            {service.shortDesc}
          </p>
          {service.applications?.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="tamil font-bold text-sm uppercase tracking-wider"
                style={{ color: '#1a5c2e', marginBottom: '0.75rem' }}>பயன்பாடுகள்</h3>
              <ul className="grid grid-cols-1 gap-2">
                {service.applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#1a5c2e] flex-shrink-0" />
                    <span className="tamil text-[#374151] text-sm">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div style={{ height: '1px', background: '#e5e7eb', marginBottom: '1.25rem' }} />
          <a
            href={getServiceWhatsApp(service.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full font-bold rounded-2xl tamil active:scale-95 transition-transform"
            style={{
              background: '#25d366', color: '#fff',
              padding: '0.85rem 1rem', fontSize: '0.95rem',
              boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
            }}
          >
            <MessageCircle size={18} />
            WhatsApp மூலம் பதிவு செய்யுங்கள்
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Service Card ── */
function ServiceCard({ service, onDetail }) {
  return (
    <article
      className="group relative overflow-hidden cursor-pointer"
      style={{ borderRadius: '1.25rem', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
      aria-label={service.nameTamil}
    >
      {/* Full-bleed image */}
      <div className="relative" style={{ paddingBottom: '70%' }}>
        <img
          src={service.image}
          alt={service.altText}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={400}
          height={280}
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #e8f5ec 0%, #fdf8e8 100%)';
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,25,10,0.88) 0%, rgba(10,25,10,0.3) 55%, transparent 100%)',
          }}
        />

        {/* Icon badge */}
        <div
          className="absolute top-3 left-3 w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-lg"
          style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(6px)' }}
        >
          {service.icon}
        </div>

        {/* English tag */}
        <div
          className="absolute top-3 right-3 text-[0.6rem] font-bold tracking-widest uppercase rounded-full px-2 py-0.5"
          style={{ background: 'rgba(212,160,23,0.85)', color: '#1a1814' }}
        >
          {service.nameEnglish}
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="tamil text-white font-extrabold leading-snug"
            style={{ fontSize: 'clamp(0.95rem, 3vw, 1.05rem)', marginBottom: '0.4rem' }}>
            {service.nameTamil}
          </h3>
        </div>
      </div>

      {/* Buttons */}
      <div
        className="flex gap-2"
        style={{
          padding: '0.75rem',
          background: '#fff',
          borderTop: '1px solid #f0f0f0',
        }}
      >
        <button
          onClick={() => onDetail(service)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 font-bold rounded-xl tamil transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #1a5c2e, #2d8a4e)',
            color: '#fff',
            padding: '0.6rem 0.5rem',
            fontSize: '0.78rem',
            boxShadow: '0 2px 10px rgba(26,92,46,0.25)',
          }}
        >
          <Info size={13} />
          விவரங்கள்
        </button>
        <a
          href={getServiceWhatsApp(service.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 font-bold rounded-xl tamil transition-all active:scale-95"
          style={{
            background: '#25d366',
            color: '#fff',
            padding: '0.6rem 0.5rem',
            fontSize: '0.78rem',
            boxShadow: '0 2px 10px rgba(37,211,102,0.3)',
          }}
          aria-label={`WhatsApp for ${service.nameTamil}`}
        >
          <MessageCircle size={13} />
          WhatsApp
        </a>
      </div>
    </article>
  );
}

/* ── Section ── */
export default function ServicesSection() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (service) => {
    setActiveModal(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ background: 'linear-gradient(180deg, #f7fdf9 0%, #edf7f1 100%)', padding: '5rem 0' }}
    >
      <div className="container-site">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <span
            className="inline-block tamil text-xs font-bold tracking-widest uppercase rounded-full"
            style={{
              background: 'rgba(26,92,46,0.1)',
              border: '1px solid rgba(26,92,46,0.25)',
              color: '#1a5c2e',
              padding: '0.35rem 1rem',
              marginBottom: '1rem',
            }}
          >
            எங்கள் சேவைகள்
          </span>
          <h2
            id="services-heading"
            className="tamil font-extrabold"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', lineHeight: 1.2, color: '#1a1814', marginBottom: '0.75rem' }}
          >
            நாங்கள் வழங்கும்{' '}
            <span style={{ color: '#d4a017' }}>இயந்திர சேவைகள்</span>
          </h2>
          <p className="tamil text-[#4b5563] mx-auto text-center" style={{ fontSize: '0.95rem', maxWidth: '520px', textAlign: 'center' }}>
            விவசாய பணிகள் முதல் நிலப் பணிகள் வரை — உங்கள் தேவைக்கேற்ப சரியான இயந்திரத்துடன் நாங்கள் வருகிறோம்.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} onDetail={openModal} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && <ServiceModal service={activeModal} onClose={closeModal} />}
    </section>
  );
}
