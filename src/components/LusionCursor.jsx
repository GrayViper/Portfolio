import React, { useEffect, useRef } from 'react';

/**
 * LusionCursor Component - Authentic Lusion.co Fluid Magnetic Cursor Engine
 *
 * Ultra-Smooth High-Performance Mechanics:
 * - Direct GPU Compositor: Zero React re-renders, 100% requestAnimationFrame lerp loop.
 * - Dual-Element System:
 *     1. Inner Core Dot: Pure cyan precision point with instantaneous tracking.
 *     2. Outer Fluid Ring: Smooth inertia lerp (factor: 0.22) with velocity-based fluid elongation & magnetic snapping.
 * - Hardware Accelerated Transforms: Matrix transforms (translate3d, scale, rotate) preventing expensive browser layout reflows.
 * - Magnetic Hover States: Automatically detects buttons, links, cards, and input elements.
 */
export default function LusionCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    let isVisible = false;
    let isHovering = false;
    let currentLabel = '';
    let isClicking = false;
    let animId;

    // Velocity & Fluid Elongation
    let prevRingX = -100;
    let prevRingY = -100;
    let currentScaleX = 1;
    let currentScaleY = 1;
    let currentAngle = 0;

    const onPointerMove = (e) => {
      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        ringX = e.clientX;
        ringY = e.clientY;
      }

      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check if hovering over interactive elements or elements with data-cursor
      const cursorEl = e.target.closest('[data-cursor]');
      const interactiveEl = e.target.closest('button, a, .glass-card-web, .glass-card, [role="button"], input, textarea');

      if (cursorEl) {
        const text = cursorEl.getAttribute('data-cursor') || '';
        if (text !== currentLabel) {
          currentLabel = text;
          label.textContent = text;
        }
        isHovering = true;
      } else if (interactiveEl) {
        currentLabel = '';
        label.textContent = '';
        isHovering = true;
      } else {
        currentLabel = '';
        label.textContent = '';
        isHovering = false;
      }
    };

    const onPointerDown = () => {
      isClicking = true;
    };

    const onPointerUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      label.style.opacity = '0';
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // 60-120FPS GPU Animation Loop
    const loop = () => {
      if (isVisible) {
        const hasBadge = Boolean(currentLabel);

        // 1. Inner Dot follows cursor immediately (fades out when badge is active)
        if (hasBadge) {
          dot.style.opacity = '0';
        } else if (isHovering) {
          dot.style.opacity = '0.6';
        } else {
          dot.style.opacity = '1';
        }
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

        // 2. Outer Ring follows with smooth fluid lerp
        const lerpFactor = hasBadge ? 0.32 : isHovering ? 0.28 : 0.20;
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;

        // Calculate velocity for subtle fluid stretch
        const vx = ringX - prevRingX;
        const vy = ringY - prevRingY;
        const speed = Math.hypot(vx, vy);

        prevRingX = ringX;
        prevRingY = ringY;

        // Velocity stretch (subtle and calibrated for ultra-smoothness)
        const targetAngle = speed > 1 ? Math.atan2(vy, vx) : currentAngle;
        currentAngle += (targetAngle - currentAngle) * 0.2;

        const stretch = hasBadge ? Math.min(0.15, speed * 0.008) : Math.min(0.35, speed * 0.015);

        let baseScale = 1.0;
        if (hasBadge) {
          baseScale = Math.max(2.2, 1.8 + currentLabel.length * 0.18);
        } else if (isHovering) {
          baseScale = 1.6;
        }

        if (isClicking) baseScale *= 0.78;

        const targetScaleX = baseScale * (1 + stretch);
        const targetScaleY = baseScale * (1 - stretch * 0.7);

        currentScaleX += (targetScaleX - currentScaleX) * 0.22;
        currentScaleY += (targetScaleY - currentScaleY) * 0.22;

        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) rotate(${currentAngle}rad) scale(${currentScaleX}, ${currentScaleY})`;

        // Counter-rotate badge label so text remains horizontally legible
        label.style.transform = `rotate(${-currentAngle}rad)`;

        // Dynamic styling on hover & badge states
        if (hasBadge) {
          ring.style.borderColor = '#00f2fe';
          ring.style.backgroundColor = 'rgba(7, 10, 18, 0.88)';
          ring.style.boxShadow = '0 0 16px rgba(0, 242, 254, 0.5), inset 0 0 8px rgba(0, 242, 254, 0.25)';
          label.style.opacity = '1';
        } else if (isHovering) {
          ring.style.borderColor = '#00f2fe';
          ring.style.backgroundColor = 'rgba(0, 242, 254, 0.12)';
          ring.style.boxShadow = '0 0 12px rgba(0, 242, 254, 0.4)';
          label.style.opacity = '0';
        } else {
          ring.style.borderColor = 'rgba(0, 242, 254, 0.65)';
          ring.style.backgroundColor = 'rgba(0, 242, 254, 0.02)';
          ring.style.boxShadow = '0 0 6px rgba(0, 242, 254, 0.2)';
          label.style.opacity = '0';
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* 1. Precision Cyan Optical Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: '#00f2fe',
          boxShadow: '0 0 6px #00f2fe',
          pointerEvents: 'none',
          zIndex: 100000,
          opacity: 0,
          willChange: 'transform, opacity',
          transition: 'opacity 0.2s ease'
        }}
        aria-hidden="true"
      />

      {/* 2. Fluid Magnetic Trailing Halo with Dynamic Lusion Badge */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1.2px solid rgba(0, 242, 254, 0.65)',
          background: 'rgba(0, 242, 254, 0.02)',
          boxShadow: '0 0 6px rgba(0, 242, 254, 0.2)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform, border-color, background-color, box-shadow',
          transition: 'opacity 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease'
        }}
        aria-hidden="true"
      >
        <span
          ref={labelRef}
          style={{
            opacity: 0,
            fontSize: '7.5px',
            fontFamily: 'var(--font-mono, monospace)',
            fontWeight: '800',
            letterSpacing: '0.06em',
            color: '#ffffff',
            textShadow: '0 0 6px #00f2fe',
            pointerEvents: 'none',
            userSelect: 'none',
            transition: 'opacity 0.15s ease',
            whiteSpace: 'nowrap'
          }}
        />
      </div>
    </>
  );
}
