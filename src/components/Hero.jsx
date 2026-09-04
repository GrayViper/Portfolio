import React from 'react';
import RetroComputer3D from './RetroComputer3D';

/**
 * Hero Component - edh.dev Authentic 3D Retro Stage
 * Features:
 * - Edge-to-edge full-viewport 3D canvas (Commodore PET 8296 Terminal)
 * - Real-time cmatrix Terminal Typing Engine
 * - Blinking minimal scroll-to-enter hint
 */
export default function Hero() {
  const handleEnterPortfolio = (e) => {
    if (e) e.preventDefault();
    const targetElement = document.getElementById('about');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      const fallback = document.getElementById('skills');
      if (fallback) fallback.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent'
      }}
    >
      {/* Edge-to-Edge 3D Commodore PET Computer Canvas */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10
        }}
      >
        <RetroComputer3D isFullScreenLanding={true} onEnterPortfolio={handleEnterPortfolio} />
      </div>

      {/* Floating Subtle Vintage Scroll / Enter Indicator */}
      <div
        onClick={handleEnterPortfolio}
        role="button"
        data-cursor="ENTER"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          background: 'rgba(7, 10, 18, 0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '9999px',
          padding: '8px 20px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
          transition: 'all 0.25s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--cyber-cyan)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-subtle)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(0px)';
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            color: '#fff',
            fontWeight: '700',
            letterSpacing: '0.04em'
          }}
        >
          <span style={{ color: 'var(--f1-yellow)' }}>▼</span>
          <span>SCROLL OR CLICK TO ENTER PORTFOLIO</span>
          <span style={{ color: 'var(--f1-yellow)' }}>▼</span>
        </div>
      </div>
    </section>
  );
}
