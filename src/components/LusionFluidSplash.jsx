import React, { useEffect, useRef } from 'react';

/**
 * LusionFluidSplash Component - Real-Time Interactive Fluid Splash & Shockwave Engine
 * (Inspired by the iconic click/drag fluid splash physics on lusion.co)
 *
 * Features:
 * - Click anywhere to trigger an explosive liquid neon splash with chromatic droplets and expanding shockwave rings.
 * - Mouse drag / cursor sweep leaves a fluid liquid wake with trailing droplets and micro-sparks.
 * - Physics simulation: velocity, gravity, viscosity drag, elastic dispersion, and alpha decay.
 * - Additive screen blend modes for radiant optical glow without obstructing content.
 * - Non-intrusive transparent canvas with pointer-events: none for 100% click-through functionality.
 */
export default function LusionFluidSplash() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);

    // Liquid Droplets & Shockwave Rings Pools
    const droplets = [];
    const shockwaves = [];

    // Curated Lusion Fluid Palette
    const splashColors = [
      '#00f2fe', // Electric Cyan
      '#10b981', // Emerald Mint
      '#fdb813', // Champagne Amber
      '#ff1801', // F1 Neon Red
      '#a855f7', // Electric Violet
      '#38bdf8', // Ice Cyan
      '#ffffff'  // Pure White Hotspot
    ];

    // Trigger Splash Explosion
    const createSplash = (x, y, intensity = 1.0, count = 42) => {
      // 1. Expanding Fluid Shockwave Rings
      shockwaves.push({
        x,
        y,
        radius: 4,
        maxRadius: 70 * intensity + Math.random() * 30,
        speed: 3.5 * intensity,
        alpha: 0.85,
        color: splashColors[Math.floor(Math.random() * splashColors.length)],
        lineWidth: 3 * intensity
      });

      shockwaves.push({
        x,
        y,
        radius: 2,
        maxRadius: 110 * intensity,
        speed: 5.2 * intensity,
        alpha: 0.6,
        color: '#ffffff',
        lineWidth: 1.5 * intensity
      });

      // 2. Liquid Droplet Particles
      const numDroplets = Math.floor(count * intensity);
      for (let i = 0; i < numDroplets; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (2 + Math.random() * 9.5) * intensity;
        const color = splashColors[Math.floor(Math.random() * splashColors.length)];

        droplets.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: (1.5 + Math.random() * 4.5) * intensity,
          color,
          alpha: 0.95,
          decay: 0.014 + Math.random() * 0.022,
          gravity: 0.12,
          friction: 0.94,
          trail: []
        });
      }
    };

    // Global Click Listener
    const handlePointerDown = (e) => {
      createSplash(e.clientX, e.clientY, 1.1, 48);
    };

    // Drag Velocity Sweep Splash
    let lastPos = { x: 0, y: 0 };
    let lastTime = 0;

    const handlePointerMove = (e) => {
      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 16) {
        const dx = e.clientX - lastPos.x;
        const dy = e.clientY - lastPos.y;
        const dist = Math.hypot(dx, dy);

        // If cursor moves fast (> 24px per frame), emit micro-splash wake
        if (dist > 24) {
          const count = Math.min(6, Math.floor(dist / 14));
          for (let i = 0; i < count; i++) {
            const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.5;
            const speed = (1 + Math.random() * 4);
            const color = splashColors[Math.floor(Math.random() * splashColors.length)];

            droplets.push({
              x: e.clientX + (Math.random() - 0.5) * 10,
              y: e.clientY + (Math.random() - 0.5) * 10,
              vx: -Math.cos(angle) * speed + (Math.random() - 0.5) * 2,
              vy: -Math.sin(angle) * speed + (Math.random() - 0.5) * 2,
              radius: 1.2 + Math.random() * 2.5,
              color,
              alpha: 0.75,
              decay: 0.025 + Math.random() * 0.03,
              gravity: 0.08,
              friction: 0.92,
              trail: []
            });
          }
        }

        lastPos = { x: e.clientX, y: e.clientY };
        lastTime = now;
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Render & Physics Loop
    const render = () => {
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Blend mode for luminous liquid bloom
      ctx.globalCompositeOperation = 'screen';

      // 1. Render Shockwave Rings
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha *= 0.94;

        if (sw.alpha < 0.01 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.lineWidth = sw.lineWidth * (sw.radius / sw.maxRadius);
        ctx.globalAlpha = sw.alpha;
        ctx.shadowColor = sw.color;
        ctx.shadowBlur = 12;
        ctx.stroke();
      }

      // 2. Render Liquid Droplet Particles with Fluid Tails
      for (let i = droplets.length - 1; i >= 0; i--) {
        const p = droplets[i];

        // Physics
        p.vx *= p.friction;
        p.vy = (p.vy + p.gravity) * p.friction;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.radius *= 0.985;

        // Save trail history for fluid elongation
        p.trail.unshift({ x: p.x, y: p.y });
        if (p.trail.length > 4) p.trail.pop();

        if (p.alpha <= 0 || p.radius < 0.3) {
          droplets.splice(i, 1);
          continue;
        }

        // Draw elongated fluid droplet body
        ctx.beginPath();
        if (p.trail.length > 1) {
          ctx.moveTo(p.trail[p.trail.length - 1].x, p.trail[p.trail.length - 1].y);
          for (let t = p.trail.length - 2; t >= 0; t--) {
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
          }
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.radius * 1.8;
          ctx.lineCap = 'round';
          ctx.globalAlpha = p.alpha;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.stroke();
        }

        // Core Glowing Droplet Head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 14;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('orientationchange', resize);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999, // Overlays entire viewport seamlessly
        display: 'block'
      }}
      aria-hidden="true"
    />
  );
}
