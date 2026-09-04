import React, { useEffect, useRef } from 'react';

/**
 * LusionConnectingLine Component - High-Fidelity Lusion.co Real-Time Canvas Ribbon Engine
 *
 * Authentic Lusion.co Features:
 * - Real-time continuous fluid physics: the line breathes, undulates, and ripples dynamically with multi-octave wave physics.
 * - 3D-like liquid ribbon with variable thickness tapering and chromatic glow.
 * - Dynamic scroll-driven elastic spring drawing that trails gracefully through each card.
 * - Interactive cursor magnetic flex: the line organically bends toward the mouse cursor.
 * - Floating luminescence dust particles riding along the glowing spline.
 * - Layered behind cards (z-index: 1) so it visibly weaves through the translucent glass panels.
 */
export default function LusionConnectingLine() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Physics Anchor Points (discovered dynamically from cards in DOM)
    let baseNodes = [];
    let springNodes = [];

    // Scroll & Mouse Physics State
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;
    let mousePos = { x: -1000, y: -1000 };
    let mouseActive = false;
    let time = 0;

    // Drifting Luminescence Sparks
    const particles = Array.from({ length: 28 }, (_, i) => ({
      t: Math.random(),
      speed: 0.0006 + Math.random() * 0.0012,
      size: 1.5 + Math.random() * 2.5,
      alpha: 0.2 + Math.random() * 0.7,
      color: i % 3 === 0 ? '#38bdf8' : (i % 3 === 1 ? '#2dd4bf' : '#fbbf24'),
      offset: (Math.random() - 0.5) * 14
    }));

    // Discover exact card centers in DOM
    const updateAnchorNodes = () => {
      const mainEl = document.querySelector('main') || document.body;
      const mainRect = mainEl.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const mainTopAbsolute = mainRect.top + scrollTop;

      width = mainEl.clientWidth || window.innerWidth;
      height = mainEl.scrollHeight || mainRect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const anchors = [];

      const getCenter = (el) => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - mainRect.left,
          y: rect.top + rect.height / 2 + scrollTop - mainTopAbsolute
        };
      };

      // 0. Hero Entry
      const heroEl = document.getElementById('hero') || document.querySelector('section');
      let startY = 760;
      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect();
        startY = heroRect.bottom + scrollTop - mainTopAbsolute - 80;
      }
      anchors.push({ x: width * 0.50, y: Math.max(180, startY) });

      // 1. Skills Header & Cards
      const skillsHeader = document.querySelector('#skills .section-tag') || document.getElementById('skills');
      if (skillsHeader) {
        const pt = getCenter(skillsHeader);
        if (pt) anchors.push(pt);
      }

      const skillCards = document.querySelectorAll('#skills .glass-card, #skills [style*="border-radius"]');
      if (skillCards.length >= 2) {
        const pt1 = getCenter(skillCards[0]);
        const pt2 = getCenter(skillCards[Math.min(3, skillCards.length - 1)]);
        if (pt1) anchors.push(pt1);
        if (pt2) anchors.push(pt2);
      }

      // 2. Project Cards (Career_Genie, hi_links, Cura-AI-Health)
      const projectCards = document.querySelectorAll('#projects .glass-card-web, #projects [class*="glass"]');
      if (projectCards && projectCards.length > 0) {
        projectCards.forEach(card => {
          const pt = getCenter(card);
          if (pt) anchors.push(pt);
        });
      } else {
        const projEl = document.getElementById('projects');
        if (projEl) {
          const pt = getCenter(projEl);
          if (pt) anchors.push(pt);
        }
      }

      // 3. DevOps Terminal
      const termEl = document.querySelector('#terminal .glass-card, #terminal') || document.getElementById('terminal');
      if (termEl) {
        const pt = getCenter(termEl);
        if (pt) anchors.push(pt);
      }

      // 4. Certifications & Academics
      const certCards = document.querySelectorAll('#certifications .glass-card-web, #certifications [class*="glass"]');
      if (certCards && certCards.length >= 2) {
        const pt1 = getCenter(certCards[0]);
        const pt2 = getCenter(certCards[certCards.length - 1]);
        if (pt1) anchors.push(pt1);
        if (pt2) anchors.push(pt2);
      }

      // 5. Contact Dispatch Station
      const contactEl = document.querySelector('#contact .glass-card, #contact form, #contact') || document.getElementById('contact');
      if (contactEl) {
        const pt = getCenter(contactEl);
        if (pt) anchors.push(pt);
      }

      // 6. Footer End
      anchors.push({ x: width * 0.50, y: height - 60 });

      baseNodes = anchors;

      // Initialize dense physics spline control points (interpolated with organic wave offsets)
      if (anchors.length >= 2) {
        const dense = [];
        const totalPoints = 140;

        for (let i = 0; i <= totalPoints; i++) {
          const u = i / totalPoints;
          const totalSegments = anchors.length - 1;
          const segFloat = u * totalSegments;
          const segIdx = Math.min(Math.floor(segFloat), totalSegments - 1);
          const t = segFloat - segIdx;

          const p0 = anchors[Math.max(0, segIdx - 1)];
          const p1 = anchors[segIdx];
          const p2 = anchors[Math.min(totalSegments, segIdx + 1)];
          const p3 = anchors[Math.min(totalSegments, segIdx + 2)];

          // Catmull-Rom smooth interpolation
          const t2 = t * t;
          const t3 = t2 * t;

          const x = 0.5 * ((2 * p1.x) +
            (-p0.x + p2.x) * t +
            (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
            (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);

          const y = 0.5 * ((2 * p1.y) +
            (-p0.y + p2.y) * t +
            (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
            (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);

          dense.push({
            baseX: x,
            baseY: y,
            currX: x,
            currY: y,
            vx: 0,
            vy: 0,
            u
          });
        }
        springNodes = dense;
      }
    };

    updateAnchorNodes();

    // Resize listeners
    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      updateAnchorNodes();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    const observer = new ResizeObserver(() => {
      updateAnchorNodes();
    });

    const mainEl = document.querySelector('main');
    if (mainEl) observer.observe(mainEl);

    // Mouse Tracking for Magnetic Flex
    const handleMouseMove = (e) => {
      const mainEl = document.querySelector('main') || document.body;
      const mainRect = mainEl.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const mainTopAbsolute = mainRect.top + scrollTop;

      mousePos = {
        x: e.clientX - mainRect.left,
        y: e.clientY + scrollTop - mainTopAbsolute
      };
      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Scroll Progress
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;

      const raw = Math.max(0, (scrollTop - 120) / (docHeight - 220));
      targetScrollProgress = Math.min(1, Math.max(0, raw));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Main Fluid Physics Render Loop
    const render = () => {
      time += 0.024;
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.085;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      if (springNodes.length > 2) {
        const numDrawn = Math.floor(springNodes.length * currentScrollProgress);

        // 1. Physics update for each node (continuous organic wave ripples + mouse magnetic pull)
        springNodes.forEach((node, i) => {
          const wave1 = Math.sin(time * 1.8 + i * 0.18) * 18;
          const wave2 = Math.cos(time * 0.9 + i * 0.08) * 12;
          const wave3 = Math.sin(time * 3.2 + i * 0.32) * 4;
          const waveTotal = wave1 + wave2 + wave3;

          let targetX = node.baseX + waveTotal;
          let targetY = node.baseY + Math.sin(time * 1.4 + i * 0.12) * 6;

          // Mouse magnetic interaction
          if (mouseActive) {
            const dx = mousePos.x - node.currX;
            const dy = mousePos.y - node.currY;
            const dist = Math.hypot(dx, dy);
            const maxDist = 220;

            if (dist < maxDist && dist > 1) {
              const force = (1 - dist / maxDist) * 48;
              targetX += (dx / dist) * force;
              targetY += (dy / dist) * force;
            }
          }

          // Spring damping physics
          node.vx = (node.vx + (targetX - node.currX) * 0.12) * 0.82;
          node.vy = (node.vy + (targetY - node.currY) * 0.12) * 0.82;
          node.currX += node.vx;
          node.currY += node.vy;
        });

        // 2. Render Full Fluid Lusion Spine Path
        if (numDrawn >= 2) {
          // Dynamic Multi-Stop Gradient along the page
          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0.00, '#38bdf8'); // Ice Cyan
          grad.addColorStop(0.25, '#10b981'); // Emerald
          grad.addColorStop(0.50, '#00f2fe'); // Neon Cyan
          grad.addColorStop(0.75, '#ff2a5f'); // Vibrant Coral
          grad.addColorStop(1.00, '#818cf8'); // Electric Violet

          // Layer A: Wide Ambient Neon Bloom
          ctx.beginPath();
          ctx.moveTo(springNodes[0].currX, springNodes[0].currY);
          for (let i = 1; i < numDrawn; i++) {
            const xc = (springNodes[i].currX + springNodes[i - 1].currX) / 2;
            const yc = (springNodes[i].currY + springNodes[i - 1].currY) / 2;
            ctx.quadraticCurveTo(springNodes[i - 1].currX, springNodes[i - 1].currY, xc, yc);
          }
          ctx.strokeStyle = grad;
          ctx.lineWidth = 7;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowColor = '#00f2fe';
          ctx.shadowBlur = 18;
          ctx.globalAlpha = 0.45;
          ctx.stroke();

          // Layer B: Focused Luminous Core Ribbon (Variable Tapering)
          ctx.beginPath();
          ctx.moveTo(springNodes[0].currX, springNodes[0].currY);
          for (let i = 1; i < numDrawn; i++) {
            const xc = (springNodes[i].currX + springNodes[i - 1].currX) / 2;
            const yc = (springNodes[i].currY + springNodes[i - 1].currY) / 2;
            ctx.quadraticCurveTo(springNodes[i - 1].currX, springNodes[i - 1].currY, xc, yc);
          }
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2.2;
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;
          ctx.globalAlpha = 0.95;
          ctx.stroke();

          // 3. Leading Radiant Laser Light Head
          if (numDrawn < springNodes.length) {
            const headNode = springNodes[numDrawn - 1];
            const prevHead = springNodes[Math.max(0, numDrawn - 2)];

            // Outer Radiant Bloom
            const radGrad = ctx.createRadialGradient(
              headNode.currX, headNode.currY, 2,
              headNode.currX, headNode.currY, 26
            );
            radGrad.addColorStop(0, '#ffffff');
            radGrad.addColorStop(0.3, '#38bdf8');
            radGrad.addColorStop(0.7, 'rgba(0, 242, 254, 0.4)');
            radGrad.addColorStop(1, 'rgba(0, 242, 254, 0)');

            ctx.beginPath();
            ctx.arc(headNode.currX, headNode.currY, 26, 0, Math.PI * 2);
            ctx.fillStyle = radGrad;
            ctx.globalAlpha = 1.0;
            ctx.shadowColor = '#00f2fe';
            ctx.shadowBlur = 24;
            ctx.fill();

            // Core Hotspot
            ctx.beginPath();
            ctx.arc(headNode.currX, headNode.currY, 4.5, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#ffffff';
            ctx.shadowBlur = 12;
            ctx.fill();
          }

          // 4. Drifting Luminescence Sparks along the Spline
          particles.forEach(p => {
            p.t = (p.t + p.speed) % 1;
            if (p.t < currentScrollProgress) {
              const pIdx = Math.floor(p.t * (springNodes.length - 1));
              const node = springNodes[pIdx];
              if (node) {
                const px = node.currX + Math.sin(time * 3 + pIdx) * p.offset;
                const py = node.currY;

                ctx.beginPath();
                ctx.arc(px, py, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 8;
                ctx.globalAlpha = p.alpha * (0.5 + 0.5 * Math.sin(time * 4 + p.t * 10));
                ctx.fill();
              }
            }
          });
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1, // Layered behind cards (cards have z-index: 2+)
        display: 'block'
      }}
      aria-hidden="true"
    />
  );
}
