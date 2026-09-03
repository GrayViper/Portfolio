import React, { useEffect, useRef } from 'react';

/**
 * F1 Red Bull Telemetry & Racing Light Canvas Engine v5.0
 * Renders high-speed telemetry streaks, brake rotor sparks, and F1 apex speed vectors.
 * 100% Clean F1 Telemetry Physics Engine.
 */
export default function F1TelemetryCanvas({ telemetryFXEnabled }) {
  const canvasRef = useRef(null);
  const streaksRef = useRef([]);
  const sparksRef = useRef([]);
  const lastScrollY = useRef(0);
  const scrollThrottle = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Scroll-Driven F1 Racing Apex Streaks 🏎️💨
    const handleScroll = () => {
      if (!telemetryFXEnabled) return;
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY.current);
      const now = Date.now();

      if (delta > 20 && now - scrollThrottle.current > 180) {
        scrollThrottle.current = now;

        const sections = document.querySelectorAll('section, h1, h2');
        let targetPoint = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        sections.forEach(sec => {
          const rect = sec.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.85) {
            targetPoint = {
              x: rect.left + rect.width / 2,
              y: rect.top + 40
            };
          }
        });

        // Launch F1 Racing Apex Streak
        streaksRef.current.push({
          startX: window.innerWidth - 60,
          startY: window.innerHeight - 60,
          endX: targetPoint.x + (Math.random() * 80 - 40),
          endY: targetPoint.y,
          progress: 0,
          speed: 0.1,
          life: 1.0,
          color: Math.random() > 0.5 ? '#ff1801' : '#fdb813'
        });

        // Spawn Brake Rotor Sparks
        for (let i = 0; i < 10; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 3 + Math.random() * 6;
          sparksRef.current.push({
            x: targetPoint.x,
            y: targetPoint.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 2 + Math.random() * 2.5,
            life: 1.0,
            color: Math.random() > 0.5 ? 'rgba(255, 24, 1, 1)' : 'rgba(253, 184, 19, 1)'
          });
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Render Animation Loop
    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render F1 Apex Light Streaks
      for (let i = streaksRef.current.length - 1; i >= 0; i--) {
        const streak = streaksRef.current[i];
        streak.progress += streak.speed;

        if (streak.progress > 1) {
          streak.progress = 1;
          streak.life -= 0.03;
        }

        const currentX = streak.startX + (streak.endX - streak.startX) * streak.progress;
        const currentY = streak.startY + (streak.endY - streak.startY) * streak.progress;

        const midX = (streak.startX + currentX) / 2;
        const midY = (streak.startY + currentY) / 2 + Math.sin(streak.progress * Math.PI) * 30;

        // Draw Telemetry Line
        ctx.beginPath();
        ctx.moveTo(streak.startX, streak.startY);
        ctx.quadraticCurveTo(midX, midY, currentX, currentY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${streak.life * 0.95})`;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = streak.color;
        ctx.shadowBlur = 18;
        ctx.stroke();

        // Draw Red Bull Neon Edge
        ctx.beginPath();
        ctx.moveTo(streak.startX + 3, streak.startY - 3);
        ctx.quadraticCurveTo(midX + 3, midY - 3, currentX + 3, currentY - 3);
        ctx.strokeStyle = `rgba(255, 24, 1, ${streak.life * 0.7})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw Gliding F1 Nose Cone Sprite 🏎️
        if (streak.progress < 0.94 && streak.life > 0.4) {
          ctx.save();
          ctx.translate(currentX, currentY);

          ctx.beginPath();
          ctx.moveTo(14, 0);
          ctx.lineTo(-10, -7);
          ctx.lineTo(-6, 0);
          ctx.lineTo(-10, 7);
          ctx.closePath();
          ctx.fillStyle = '#ff1801';
          ctx.fill();
          ctx.strokeStyle = '#fdb813';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.restore();
        }

        // Draw Apex Target Indicator Ring
        if (streak.progress >= 0.8) {
          const radius = 24 * (1 - streak.life * 0.2);
          ctx.save();
          ctx.translate(streak.endX, streak.endY);
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(253, 184, 19, ${streak.life * 0.8})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        }

        if (streak.life <= 0) {
          streaksRef.current.splice(i, 1);
        }
      }

      // Render Brake Sparks
      for (let i = sparksRef.current.length - 1; i >= 0; i--) {
        const s = sparksRef.current[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.04;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color.replace('1)', `${s.life})`);
        ctx.fill();

        if (s.life <= 0) {
          sparksRef.current.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Global Telemetry Dispatcher
    window.shootTelemetry = (startX, startY, endX, endY, targetElement = null) => {
      if (!telemetryFXEnabled) {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      streaksRef.current.push({
        startX,
        startY,
        endX,
        endY,
        progress: 0,
        speed: 0.08,
        life: 1.0,
        color: '#ff1801'
      });

      for (let i = 0; i < 16; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 6;
        sparksRef.current.push({
          x: endX,
          y: endY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2 + Math.random() * 3,
          life: 1.0,
          color: Math.random() > 0.5 ? 'rgba(255, 24, 1, 1)' : 'rgba(253, 184, 19, 1)'
        });
      }

      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [telemetryFXEnabled]);

  return <canvas id="f1-telemetry-canvas" ref={canvasRef} />;
}
