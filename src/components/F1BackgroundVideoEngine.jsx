import React, { useEffect, useRef, useState } from 'react';
import { Film, Eye, EyeOff, Sparkles, Flame } from 'lucide-react';

/**
 * F1BackgroundVideoEngine
 * Renders f1.mp4 in full-screen background loop with an optimized obsidian glass overlay.
 * Features:
 * - High-visibility F1 cinematic backdrop
 * - Dynamic opacity controller
 * - Dark glassmorphic gradient that balances video vibrancy with text readability
 */
export default function F1BackgroundVideoEngine({ isVideoActive = true }) {
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(0.48); // Vibrant visibility

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoActive) {
      video.muted = true;
      video.play().catch((err) => {
        console.log('Autoplay policy caught:', err);
      });
    } else {
      video.pause();
    }
  }, [isVideoActive]);

  return (
    <>
      {/* Fullscreen Looping F1 Cinematic Video */}
      <video
        ref={videoRef}
        src="/f1.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -10,
          opacity: isVideoActive ? videoOpacity : 0,
          filter: 'saturate(1.15) brightness(0.85) contrast(1.15)',
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none'
        }}
      />

      {/* Balanced High-Tech Ambient Overlay: Ensures video action is clearly visible while text stays readable */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: `
            radial-gradient(ellipse at 50% 20%, rgba(7, 10, 18, 0.40) 0%, rgba(7, 10, 18, 0.68) 60%, rgba(7, 10, 18, 0.88) 100%),
            linear-gradient(180deg, rgba(7, 10, 18, 0.35) 0%, rgba(7, 10, 18, 0.65) 50%, rgba(7, 10, 18, 0.85) 100%)
          `,
          zIndex: -9,
          pointerEvents: 'none'
        }}
      />

      {/* Floating F1 Video Visibility HUD Controller (Bottom Left) */}
      <div style={{
        position: 'fixed',
        left: '24px',
        bottom: '24px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(13, 19, 33, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 24, 1, 0.35)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
        borderRadius: '12px',
        padding: '6px 12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isVideoActive ? '#10b981' : '#ff1801', boxShadow: `0 0 8px ${isVideoActive ? '#10b981' : '#ff1801'}` }} />
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#fff', fontWeight: '700' }}>
            🏎️ F1 BACKDROP:
          </span>
        </div>

        {/* Opacity Presets */}
        <div style={{ display: 'flex', gap: '4px' }}>
          {[
            { label: '30%', val: 0.30 },
            { label: '50%', val: 0.50 },
            { label: '75%', val: 0.75 }
          ].map(p => (
            <button
              key={p.label}
              onClick={() => setVideoOpacity(p.val)}
              style={{
                background: Math.abs(videoOpacity - p.val) < 0.05 ? 'var(--f1-red)' : 'rgba(255,255,255,0.06)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '2px 6px',
                fontSize: '0.68rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title={`Set F1 video opacity to ${p.label}`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
