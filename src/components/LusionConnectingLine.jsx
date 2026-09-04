import React, { useEffect, useRef, useState } from 'react';

/**
 * LusionConnectingLine Component - High-Performance SVG Fluid Ribbon Engine
 *
 * Ultra-Smooth Architecture:
 * - Pure SVG Vector Spline with GPU-accelerated path rasterization (0 Megapixel memory overhead).
 * - Multi-stop vibrant luminous gradient (#38bdf8 -> #10b981 -> #00f2fe -> #ff2a5f -> #818cf8).
 * - Smooth scroll-driven stroke-dashoffset interpolation.
 * - Dynamic anchor points linking Hero -> Skills -> Projects -> Terminal -> Certifications -> Contact.
 * - Layered behind cards (z-index: 1) with zero frame drops or CPU stutter.
 */
export default function LusionConnectingLine() {
  const [pathData, setPathData] = useState('');
  const [totalLength, setTotalLength] = useState(1000);
  const [dimensions, setDimensions] = useState({ width: 1400, height: 4000 });
  const pathRef = useRef(null);
  const glowPathRef = useRef(null);
  const headCircleRef = useRef(null);

  useEffect(() => {
    let animId;
    let targetProgress = 0;
    let currentProgress = 0;

    const computeAnchorsAndPath = () => {
      const mainEl = document.querySelector('main') || document.body;
      const mainRect = mainEl.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const mainTopAbsolute = mainRect.top + scrollTop;

      const w = mainEl.clientWidth || window.innerWidth;
      const h = mainEl.scrollHeight || mainRect.height;
      setDimensions({ width: w, height: h });

      const anchors = [];

      const getCenter = (el) => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          x: Math.round(rect.left + rect.width / 2 - mainRect.left),
          y: Math.round(rect.top + rect.height / 2 + scrollTop - mainTopAbsolute)
        };
      };

      // 0. Hero Entry
      const heroEl = document.getElementById('hero') || document.querySelector('section');
      let startY = 760;
      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect();
        startY = heroRect.bottom + scrollTop - mainTopAbsolute - 80;
      }
      anchors.push({ x: Math.round(w * 0.50), y: Math.max(180, Math.round(startY)) });

      // 1. Skills Header & Cards
      const skillsHeader = document.querySelector('#skills .section-tag') || document.getElementById('skills');
      if (skillsHeader) {
        const pt = getCenter(skillsHeader);
        if (pt) anchors.push(pt);
      }

      const skillCards = document.querySelectorAll('#skills .glass-card-web, #skills .glass-card');
      if (skillCards.length >= 2) {
        const pt1 = getCenter(skillCards[0]);
        const pt2 = getCenter(skillCards[Math.min(3, skillCards.length - 1)]);
        if (pt1) anchors.push(pt1);
        if (pt2) anchors.push(pt2);
      }

      // 2. Project Cards
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
      const termEl = document.querySelector('#terminal .glass-card-web, #terminal .glass-card, #terminal') || document.getElementById('terminal');
      if (termEl) {
        const pt = getCenter(termEl);
        if (pt) anchors.push(pt);
      }

      // 4. Certifications & Academics
      const certCards = document.querySelectorAll('#certs .glass-card-web, #certs [class*="glass"]');
      if (certCards && certCards.length >= 2) {
        const pt1 = getCenter(certCards[0]);
        const pt2 = getCenter(certCards[certCards.length - 1]);
        if (pt1) anchors.push(pt1);
        if (pt2) anchors.push(pt2);
      }

      // 5. Contact Station
      const contactEl = document.querySelector('#contact .glass-card-web, #contact .glass-card, #contact form, #contact') || document.getElementById('contact');
      if (contactEl) {
        const pt = getCenter(contactEl);
        if (pt) anchors.push(pt);
      }

      // 6. Footer End
      anchors.push({ x: Math.round(w * 0.50), y: h - 60 });

      if (anchors.length < 2) return;

      // Construct Smooth Cubic Bezier Spline
      let d = `M ${anchors[0].x} ${anchors[0].y}`;
      for (let i = 0; i < anchors.length - 1; i++) {
        const p0 = anchors[i];
        const p1 = anchors[i + 1];
        const cpY = (p0.y + p1.y) / 2;
        d += ` C ${p0.x} ${cpY}, ${p1.x} ${cpY}, ${p1.x} ${p1.y}`;
      }

      setPathData(d);
    };

    computeAnchorsAndPath();

    const handleResize = () => {
      computeAnchorsAndPath();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    const observer = new ResizeObserver(() => {
      computeAnchorsAndPath();
    });

    const mainEl = document.querySelector('main');
    if (mainEl) observer.observe(mainEl);

    // Scroll tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const raw = Math.max(0, (scrollTop - 120) / (docHeight - 240));
      targetProgress = Math.min(1, Math.max(0, raw));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 60FPS Smooth Progress Interpolator
    const updateProgress = () => {
      currentProgress += (targetProgress - currentProgress) * 0.12;

      if (pathRef.current) {
        const len = pathRef.current.getTotalLength ? pathRef.current.getTotalLength() : 4000;
        if (len > 0) {
          const drawLen = len * currentProgress;
          const offset = len - drawLen;

          pathRef.current.style.strokeDasharray = `${len}`;
          pathRef.current.style.strokeDashoffset = `${offset}`;

          if (glowPathRef.current) {
            glowPathRef.current.style.strokeDasharray = `${len}`;
            glowPathRef.current.style.strokeDashoffset = `${offset}`;
          }

          if (headCircleRef.current && currentProgress > 0.01) {
            const pt = pathRef.current.getPointAtLength(drawLen);
            headCircleRef.current.setAttribute('cx', pt.x);
            headCircleRef.current.setAttribute('cy', pt.y);
            headCircleRef.current.style.opacity = currentProgress >= 0.99 ? '0' : '1';
          }
        }
      }

      animId = requestAnimationFrame(updateProgress);
    };

    animId = requestAnimationFrame(updateProgress);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${dimensions.height}px`,
        pointerEvents: 'none',
        zIndex: 1, // Layered behind cards (cards have z-index: 2+)
        overflow: 'visible'
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lusionSplineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="25%" stopColor="#10b981" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#00f2fe" stopOpacity="1" />
          <stop offset="75%" stopColor="#ff2a5f" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.85" />
        </linearGradient>

        <filter id="splineGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="headGlow">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="40%" stopColor="#00f2fe" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
        </radialGradient>
      </defs>

      {pathData && (
        <>
          {/* Layer A: Ambient Luminescence Glow */}
          <path
            ref={glowPathRef}
            d={pathData}
            fill="none"
            stroke="url(#lusionSplineGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
            filter="url(#splineGlow)"
          />

          {/* Layer B: Crisp Liquid Core Fiber */}
          <path
            ref={pathRef}
            d={pathData}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
          />

          {/* Leading Radiant Light Head */}
          <circle
            ref={headCircleRef}
            r="16"
            fill="url(#headGlow)"
            style={{ transition: 'opacity 0.2s ease', opacity: 0 }}
          />
        </>
      )}
    </svg>
  );
}
