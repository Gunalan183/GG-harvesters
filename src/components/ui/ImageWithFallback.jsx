import { useState } from 'react';
import clsx from 'clsx';

export default function ImageWithFallback({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  fallbackSrc,
  style,
}) {
  const [errored, setErrored] = useState(false);

  const handleError = (e) => {
    if (!errored && fallbackSrc) {
      setErrored(true);
      e.target.src = fallbackSrc;
    } else if (!fallbackSrc) {
      e.target.onerror = null;
      e.target.style.display = 'none';
      const parent = e.target.parentElement;
      if (parent) parent.classList.add('img-placeholder');
    }
  };

  return (
    <img
      src={errored && fallbackSrc ? fallbackSrc : src}
      alt={alt}
      className={clsx(className)}
      width={width}
      height={height}
      loading={loading}
      onError={handleError}
      style={style}
    />
  );
}
