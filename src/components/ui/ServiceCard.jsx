import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getServiceWhatsApp } from '../../utils/whatsapp';

export default function ServiceCard({ service }) {
  return (
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
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {/* Icon badge */}
        <span
          className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-lg shadow-md"
          aria-hidden="true"
        >
          {service.icon}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs text-[#4b5563] font-medium">{service.nameEnglish}</span>
        </div>
        <h3 className="tamil font-bold text-lg text-[#1a2e1a] mb-2 leading-snug">
          {service.nameTamil}
        </h3>
        <p className="tamil text-[#4b5563] text-sm leading-relaxed flex-1 mb-4">
          {service.shortDesc}
        </p>

        <div className="flex gap-2 mt-auto">
          <Link
            to={`/services/${service.slug}`}
            className="flex-1 btn-outline text-sm py-2.5 px-3 justify-center"
            aria-label={`${service.nameTamil} பற்றி மேலும் அறிய`}
          >
            மேலும் அறிய
            <ArrowRight size={14} />
          </Link>
          <a
            href={getServiceWhatsApp(service.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-whatsapp text-sm py-2.5 px-3 justify-center"
            aria-label={`WhatsApp for ${service.nameTamil}`}
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
