import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Zap, Terminal as TerminalIcon, ShieldCheck, Activity, Layers, Sparkles, ChevronDown, Monitor } from 'lucide-react';
import RetroComputer3D from './RetroComputer3D';

/**
 * Hero Component - Full-Screen 3D Retro Computer Landing Stage
 * Inspired by edh.dev (Commodore PET 8296)
 * Features:
 * - 100vh Fullscreen 3D Retro Computer experience on page load
 * - Retro Commodore Basic HUD & vintage CRT overlays
 * - Interactive 360° mouse drag, direct keyboard typing & phosphor modes
 * - Smooth "ENTER PORTFOLIO" transition into the rest of the site
 */
export default function Hero() {
  const handleEnterPortfolio = (e) => {
    if (e) e.preventDefault();
    const targetElement = document.getElementById('skills');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{
      width: '100vw',
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '75px 20px 24px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>

      {/* Top Retro HUD Bar */}
      <div style={{
        width: '100%',
        maxWidth: '1280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        zIndex: 20
      }}>
        {/* Vintage Commodore PET Header */}
        <div style={{
          background: 'rgba(7, 10, 18, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          borderRadius: '12px',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--cyber-cyan)', fontWeight: '700' }}>
            *** COMMODORE PET 8296 DEVOPS OS // 64K RAM READY ***
          </span>
        </div>

        {/* Developer Bio Tag */}
        <div style={{
          background: 'rgba(7, 10, 18, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 24, 1, 0.3)',
          borderRadius: '12px',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.76rem'
        }}>
          <span style={{ color: '#fff' }}>
            OPERATOR: <strong style={{ color: 'var(--f1-red)' }}>CHINNI KRISHNA</strong> (@GrayViper)
          </span>
          <span style={{ color: 'var(--text-dim)' }}>|</span>
          <span style={{ color: 'var(--terminal-green)' }}>B.TECH CSE @ LPU (CGPA 7.2)</span>
        </div>
      </div>

      {/* Centerpiece: Full-Screen 3D Retro Computer Stage */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
        margin: '10px 0'
      }}>
        <RetroComputer3D isFullScreenLanding={true} />
      </div>

      {/* Bottom Retro Navigation & "ENTER PORTFOLIO" Action Bar */}
      <div style={{
        width: '100%',
        maxWidth: '1280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        zIndex: 20
      }}>
        {/* Main Glowing "ENTER PORTFOLIO" Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={handleEnterPortfolio}
            className="btn-primary"
            style={{
              padding: '14px 36px',
              fontSize: '1rem',
              letterSpacing: '0.04em',
              boxShadow: '0 8px 30px var(--f1-red-glow)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <span>▶ ENTER FULL PORTFOLIO</span>
            <ArrowDown size={18} className="animate-bounce" />
          </button>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <a href="https://github.com/GrayViper" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dim)',
              textDecoration: 'none', padding: '10px 16px',
              border: '1px solid var(--border-subtle)', borderRadius: '12px',
              background: 'rgba(7, 10, 18, 0.85)', backdropFilter: 'blur(12px)',
              transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--f1-red)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-dim)'; }}
            >
              <Github size={16} /> @GrayViper
            </a>

            <a href="https://www.linkedin.com/in/chinni-krishna8" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-dim)',
              textDecoration: 'none', padding: '10px 16px',
              border: '1px solid var(--border-subtle)', borderRadius: '12px',
              background: 'rgba(7, 10, 18, 0.85)', backdropFilter: 'blur(12px)',
              transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyber-cyan)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-dim)'; }}
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Pulsing Scroll Indicator */}
        <div style={{
          fontSize: '0.74rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-dim)',
          letterSpacing: '0.08em',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer'
        }}
          onClick={handleEnterPortfolio}
        >
          <span style={{ color: 'var(--cyber-cyan)' }}>▼</span>
          <span>SCROLL OR CLICK TO ENTER SYSTEM</span>
          <span style={{ color: 'var(--cyber-cyan)' }}>▼</span>
        </div>
      </div>

    </section>
  );
}
