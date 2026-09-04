import React, { useEffect, useRef, useState } from 'react';

/**
 * LusionConnectingLine Component (Inspired by lusion.co)
 *
 * Features:
 * - Continuous, fluid SVG Bezier spline that snakes vertically through the entire page.
 * - Scroll-driven drawing progress (stroke-dashoffset) that dynamically connects
 *   every milestone section: Hero -> Skills -> Projects -> Terminal -> Certifications -> Contact.
 * - Leading neon laser beacon head with radial glow filter that traces the exact scroll position.
 * - Interactive pulsing milestone circuit nodes with expanding sonar ripples when reached.
 * - Adaptive multi-resolution geometry recalculation on window resize / layout shifts.
 */
export default function LusionConnectingLine() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const glowPathRef = useRef(null);
  const headPointRef = useRef(null);

  const [pathData, setPathData] = useState('');
  const [nodes, setNodes] = useState([]);
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Section landmark definitions
  const sectionLandmarks = [
    { id: 'skills', label: '01 // SKILLS MATRIX', color: '#00f2fe', xBias: 0.18 },
    { id: 'projects', label: '02 // FEATURED PROJECTS', color: '#fdb813', xBias: 0.82 },
    { id: 'terminal', label: '03 // DEVOPS CONSOLE', color: '#00ff66', xBias: 0.22 },
    { id: 'certifications', label: '04 // CREDENTIALS & EDU', color: '#ff1801', xBias: 0.78 },
    { id: 'contact', label: '05 // DISPATCH STATION', color: '#a855f7', xBias: 0.50 }
  ];

  // Recalculate spline path coordinates based on DOM landmarks
  const recalculateSpline = () => {
    if (!svgRef.current) return;

    const mainElement = document.querySelector('main') || document.body;
    const mainRect = mainElement.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const mainTopAbsolute = mainRect.top + scrollTop;
    const mainWidth = mainElement.clientWidth || window.innerWidth;
    const totalHeight = mainElement.scrollHeight || mainRect.height;

    // Build anchor points array
    const calculatedNodes = [];

    // Anchor 0: Top Entry Point (from Hero bottom)
    const heroEl = document.getElementById('hero') || document.querySelector('section');
    let startY = 800;
    if (heroEl) {
      const heroRect = heroEl.getBoundingClientRect();
      startY = heroRect.bottom + scrollTop - mainTopAbsolute - 60;
    }
    calculatedNodes.push({
      x: mainWidth * 0.50,
      y: Math.max(200, startY),
      label: 'INIT // STAGE',
      color: '#00f2fe',
      index: 0
    });

    // Anchors 1 to N: Landmarks for each section
    sectionLandmarks.forEach((lm, idx) => {
      const el = document.getElementById(lm.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop - mainTopAbsolute;
        // Position node near section header tag (approx 120px into the section)
        const nodeY = sectionTop + 130;
        // Calculate X based on screen size (constrain x on narrow mobile)
        const isMobile = mainWidth < 768;
        const xPercent = isMobile ? (idx % 2 === 0 ? 0.28 : 0.72) : lm.xBias;
        const nodeX = mainWidth * xPercent;

        calculatedNodes.push({
          x: nodeX,
          y: nodeY,
          label: lm.label,
          color: lm.color,
          id: lm.id,
          index: idx + 1
        });
      }
    });

    // Anchor End: Footer transition
    const lastNode = calculatedNodes[calculatedNodes.length - 1];
    calculatedNodes.push({
      x: mainWidth * 0.50,
      y: totalHeight - 80,
      label: 'EOF // END OF FLOW',
      color: '#ff1801',
      index: calculatedNodes.length
    });

    setNodes(calculatedNodes);

    // Generate smooth cubic Bezier spline path (M x0 y0 C cp1x cp1y, cp2x cp2y, x1 y1 ...)
    if (calculatedNodes.length < 2) return;

    let d = `M ${calculatedNodes[0].x} ${calculatedNodes[0].y}`;

    for (let i = 0; i < calculatedNodes.length - 1; i++) {
      const p0 = calculatedNodes[i];
      const p1 = calculatedNodes[i + 1];

      const dy = p1.y - p0.y;
      const cpY1 = p0.y + dy * 0.45;
      const cpY2 = p1.y - dy * 0.45;

      // S-curve wave tension
      d += ` C ${p0.x} ${cpY1}, ${p1.x} ${cpY2}, ${p1.x} ${p1.y}`;
    }

    setPathData(d);
  };

  useEffect(() => {
    recalculateSpline();

    const handleResize = () => {
      recalculateSpline();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Observe DOM mutations to adjust on dynamic content expansion
    const observer = new ResizeObserver(() => {
      recalculateSpline();
    });

    const mainEl = document.querySelector('main');
    if (mainEl) observer.observe(mainEl);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      observer.disconnect();
    };
  }, []);

  // Update line progress and glowing head beacon position on scroll
  useEffect(() => {
    let animId;

    const onScroll = () => {
      if (!pathRef.current) return;

      const path = pathRef.current;
      const pathLength = path.getTotalLength();
      if (!pathLength || pathLength === 0) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;

      // Scroll progress mapping (starts unfolding after hero scroll > 300px)
      const rawProgress = Math.max(0, (scrollTop - 200) / (docHeight - 350));
      const progress = Math.min(1, Math.max(0, rawProgress));
      setScrollProgress(progress);

      // Dash offset drawing
      const drawLength = pathLength * progress;
      path.style.strokeDasharray = `${pathLength} ${pathLength}`;
      path.style.strokeDashoffset = `${pathLength - drawLength}`;

      if (glowPathRef.current) {
        glowPathRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
        glowPathRef.current.style.strokeDashoffset = `${pathLength - drawLength}`;
      }

      // Position glowing head beacon at exact leading tip
      if (headPointRef.current && drawLength > 0) {
        try {
          const pt = path.getPointAtLength(Math.min(drawLength, pathLength - 1));
          headPointRef.current.style.transform = `translate3d(${pt.x}px, ${pt.y}px, 0)`;
          headPointRef.current.style.opacity = progress > 0.01 && progress < 0.99 ? '1' : '0';
        } catch {
          // ignore point query edge cases
        }
      }

      // Check which section landmark node is currently activated
      const currentScrollMiddle = scrollTop + winHeight * 0.45;
      let highestPassed = -1;

      nodes.forEach((n, idx) => {
        if (currentScrollMiddle >= n.y - 100) {
          highestPassed = idx;
        }
      });

      setActiveNodeIndex(highestPassed);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, [pathData, nodes]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 15,
        overflow: 'visible'
      }}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible'
        }}
      >
        <defs>
          {/* Lusion Neon Gradient Spine */}
          <linearGradient id="lusionSpineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#00ff66" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#fdb813" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#ff1801" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.95" />
          </linearGradient>

          {/* Faint Background Track Gradient */}
          <linearGradient id="lusionTrackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 242, 254, 0.15)" />
            <stop offset="30%" stopColor="rgba(0, 255, 102, 0.12)" />
            <stop offset="60%" stopColor="rgba(253, 184, 19, 0.12)" />
            <stop offset="100%" stopColor="rgba(255, 24, 1, 0.15)" />
          </linearGradient>

          {/* Neon Bloom Glow Filter */}
          <filter id="lusionGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="beaconGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {pathData && (
          <>
            {/* 1. Subtle Guide Track (Faint Dashed Path) */}
            <path
              d={pathData}
              fill="none"
              stroke="url(#lusionTrackGrad)"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />

            {/* 2. Deep Neon Bloom Layer */}
            <path
              ref={glowPathRef}
              d={pathData}
              fill="none"
              stroke="url(#lusionSpineGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              filter="url(#lusionGlow)"
              style={{
                opacity: 0.65,
                transition: 'stroke-dashoffset 0.08s ease-out'
              }}
            />

            {/* 3. Razor-Sharp Foreground Core Luminous Spline */}
            <path
              ref={pathRef}
              d={pathData}
              fill="none"
              stroke="url(#lusionSpineGrad)"
              strokeWidth="3.2"
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 0.08s ease-out'
              }}
            />
          </>
        )}
      </svg>

      {/* 4. Leading Laser Beacon Head (Travels with the exact tip of the drawing line) */}
      <div
        ref={headPointRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          marginLeft: '-12px',
          marginTop: '-12px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffffff 20%, #00f2fe 60%, rgba(0,242,254,0) 100%)',
          boxShadow: '0 0 20px #00f2fe, 0 0 40px #00ff66',
          pointerEvents: 'none',
          zIndex: 25,
          opacity: 0,
          transition: 'opacity 0.2s ease-out'
        }}
      >
        {/* Pulsing Sonar Ring */}
        <div
          style={{
            position: 'absolute',
            inset: '-8px',
            borderRadius: '50%',
            border: '1.5px solid #00f2fe',
            animation: 'lusionPulse 1.8s infinite cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        />
      </div>

      {/* 5. Interactive Section Landmark Circuit Pins / Milestones */}
      {nodes.map((node, idx) => {
        const isPassed = activeNodeIndex >= idx;
        const isCurrent = activeNodeIndex === idx;

        // Skip start and end dummy anchors
        if (idx === 0 || idx === nodes.length - 1) return null;

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              top: `${node.y}px`,
              left: `${node.x}px`,
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
              display: 'flex',
              alignItems: 'center',
              pointerEvents: 'none'
            }}
          >
            {/* Outer Orbital Ring */}
            <div
              style={{
                width: isCurrent ? '34px' : '24px',
                height: isCurrent ? '34px' : '24px',
                borderRadius: '50%',
                background: isPassed ? 'rgba(7, 10, 18, 0.92)' : 'rgba(7, 10, 18, 0.65)',
                border: `2px solid ${isPassed ? node.color : 'rgba(255, 255, 255, 0.15)'}`,
                boxShadow: isPassed ? `0 0 24px ${node.color}, inset 0 0 12px ${node.color}` : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              {/* Inner Core Light Pin */}
              <div
                style={{
                  width: isCurrent ? '10px' : '6px',
                  height: isCurrent ? '10px' : '6px',
                  borderRadius: '50%',
                  background: isPassed ? node.color : 'rgba(255, 255, 255, 0.3)',
                  boxShadow: isPassed ? `0 0 10px ${node.color}` : 'none',
                  transition: 'all 0.3s ease-out'
                }}
              />
            </div>

            {/* Expanding Sonar Waves when reached */}
            {isCurrent && (
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '50%',
                  border: `1.5px solid ${node.color}`,
                  animation: 'lusionPulse 2s infinite ease-out'
                }}
              />
            )}

            {/* Floating Milestone Telemetry Label */}
            <div
              style={{
                position: 'absolute',
                left: idx % 2 === 0 ? '42px' : 'auto',
                right: idx % 2 !== 0 ? '42px' : 'auto',
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                color: isPassed ? node.color : 'var(--text-faint)',
                textShadow: isPassed ? `0 0 12px ${node.color}` : 'none',
                background: isPassed ? 'rgba(7, 10, 18, 0.85)' : 'rgba(7, 10, 18, 0.4)',
                border: `1px solid ${isPassed ? `${node.color}50` : 'rgba(255, 255, 255, 0.06)'}`,
                borderRadius: '8px',
                padding: '4px 8px',
                backdropFilter: 'blur(10px)',
                opacity: isPassed ? 1 : 0.4,
                transition: 'all 0.4s ease-out'
              }}
            >
              {node.label}
            </div>
          </div>
        );
      })}

      {/* Global CSS for Keyframe Pulse */}
      <style>{`
        @keyframes lusionPulse {
          0% { transform: scale(0.9); opacity: 0.9; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
