import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #0a2d16 0%, #1a5c2e 60%, #0f3d1e 100%)',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Logo */}
      <div
        style={{
          animation: 'splashPop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
          marginBottom: '1.5rem',
        }}
      >
        <img
          src="/GG_harvester_and_Earth_Movers_Logo_BG.png"
          alt="GG Harvester and Earth Movers"
          style={{ width: '120px', height: 'auto', objectFit: 'contain' }}
        />
      </div>

      {/* Brand name */}
      <div
        style={{
          textAlign: 'center',
          animation: 'splashFadeUp 0.7s 0.3s ease forwards',
          opacity: 0,
          marginBottom: '0.75rem',
        }}
      >
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontWeight: 800,
          fontSize: '1.6rem',
          letterSpacing: '0.02em',
          lineHeight: 1.1,
          color: '#fff',
        }}>
          <span style={{ color: '#d4a017' }}>GG </span>HARVESTERS
        </p>
        <p style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.75)',
          marginTop: '0.3rem',
        }}>
          &amp; Earth Movers
        </p>
      </div>

      {/* Location */}
      <div
        style={{
          animation: 'splashFadeUp 0.7s 0.45s ease forwards',
          opacity: 0,
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
        }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d4a017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
        }}>
          Pambapadiyur
        </span>
      </div>

      {/* Loading dots */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          animation: 'splashFadeUp 0.7s 0.5s ease forwards',
          opacity: 0,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#d4a017',
              animation: `splashDot 0.9s ${i * 0.2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
