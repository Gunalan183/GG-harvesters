import clsx from 'clsx';

export default function SectionHeader({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={clsx('mb-10', center && 'text-center')}>
      {badge && (
        <span
          className={clsx(
            'badge-green mb-3 inline-block',
            light && 'bg-white/20 text-white border border-white/30'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        id="section-heading"
        className={clsx('section-title mb-3', light && 'text-white')}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'section-subtitle',
            center && 'mx-auto',
            light ? 'text-white/80' : 'text-[#4b5563]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
