import { useState } from 'react';
import { MessageCircle, X, CheckCircle, Info } from 'lucide-react';
import { getServiceWhatsApp } from '../../utils/whatsapp';

function ServiceModal({ service, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(0,0,0,0.45)', color: '#fff' }}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Icon + name overlay */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center text-lg shadow"
                style={{ background: 'rgba(255,255,255,0.92)' }}
              >
                {service.icon}
              </span>
              <span
                className="text-xs font-bold tracking-wider uppercase"
                style={{ color: '#f0cc5a' }}
              >
                {service.nameEnglish}
              </span>
            </div>
            <h2 className="tamil text-white font-extrabold text-xl leading-snug">
              {service.nameTamil}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem' }}>

          {/* Description */}
          <p className="tamil text-[#4b5563] text-sm leading-relaxed" style={{ marginBottom: '1.25rem' }}>
            {service.shortDesc}
          </p>

          {/* Applications */}
          {service.applications?.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h3
                className="tamil font-bold text-sm uppercase tracking-wider"
                style={{ color: '#1a5c2e', marginBottom: '0.75rem' }}
              >
                பயன்பாடுகள்
              </h3>
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

          {/* Divider */}
          <div style={{ height: '1px', background: '#e5e7eb', marginBottom: '1.25rem' }} />

          {/* CTA */}
          <a
            href={getServiceWhatsApp(service.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full font-bold rounded-2xl tamil transition-all active:scale-95"
            style={{
              background: '#25d366',
              color: '#fff',
              padding: '0.85rem 1rem',
              fontSize: '0.95rem',
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

export default function ServiceCard({ service }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <article
        className="card flex flex-col h-full group"
        aria-label={service.nameTamil}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ paddingBottom: '60%' }}>
          <img
            src={service.image}
            alt={service.altText}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={400}
            height={240}
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('img-placeholder', 'absolute', 'inset-0');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span
            className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-lg shadow-md"
            aria-hidden="true"
          >
            {service.icon}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1" style={{ padding: '1.25rem' }}>
          <span className="text-xs text-[#4b5563] font-medium" style={{ marginBottom: '0.35rem' }}>
            {service.nameEnglish}
          </span>
          <h3 className="tamil font-bold text-lg text-[#1a1814] leading-snug" style={{ marginBottom: '0.6rem' }}>
            {service.nameTamil}
          </h3>
          <p className="tamil text-[#4b5563] text-sm leading-relaxed flex-1" style={{ marginBottom: '1.25rem' }}>
            {service.shortDesc}
          </p>

          <div className="flex gap-2 mt-auto">
            {/* Details button */}
            <button
              onClick={openModal}
              className="flex-1 inline-flex items-center justify-center gap-1.5 font-bold rounded-xl tamil transition-all active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #1a5c2e, #2d8a4e)',
                color: '#fff',
                padding: '0.6rem 0.75rem',
                fontSize: '0.8rem',
                boxShadow: '0 2px 10px rgba(26,92,46,0.3)',
              }}
            >
              <Info size={14} />
              விவரங்கள்
            </button>

            {/* WhatsApp button */}
            <a
              href={getServiceWhatsApp(service.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-whatsapp text-sm justify-center"
              style={{ padding: '0.6rem 0.75rem' }}
              aria-label={`WhatsApp for ${service.nameTamil}`}
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </article>

      {/* Detail Modal */}
      {showModal && (
        <ServiceModal service={service} onClose={closeModal} />
      )}
    </>
  );
}
