import clsx from 'clsx';

export default function SectionHeader({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={clsx('mb-12', center && 'text-center')}>
      {badge && (
        <span
          className={clsx(
            'badge-green inline-block',
            light && 'bg-white/20 text-white border border-white/30'
          )}
          style={{ marginBottom: '1rem' }}
        >
          {badge}
        </span>
      )}
      <h2
        className={clsx('section-title', light && 'text-white')}
        style={{ marginBottom: '1rem' }}
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
          style={{ marginTop: '0.5rem' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
