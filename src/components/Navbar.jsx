import React from 'react';
import { Zap, Terminal as TerminalIcon, Film, ShieldCheck } from 'lucide-react';

export default function Navbar({ isVideoActive, setIsVideoActive }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="glass-nav" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 28px', height: '70px',
      display: 'flex', alignItems: 'center'
    }}>
      <div className="max-w-7xl mx-auto" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand Identity & Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          {/* Glowing CK Monogram Badge */}
          <div style={{
            width: '42px', height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--f1-red) 0%, #0d1321 100%)',
            border: '1.5px solid rgba(255, 24, 1, 0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 18px var(--f1-red-glow)',
            fontWeight: '900', fontSize: '1rem', color: '#fff',
            fontFamily: 'var(--font-heading)'
          }}>
            CK
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.02em' }}>
                Chinni <span className="gradient-text">Krishna</span>
              </span>
              <span style={{
                fontSize: '0.66rem', fontFamily: 'var(--font-mono)',
                background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.35)',
                color: 'var(--terminal-green)', padding: '2px 8px', borderRadius: '9999px',
                fontWeight: '700', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                SYSTEMS OPERATIONAL
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '1px' }}>
              DevOps Engineer &amp; Full-Stack Specialist · @GrayViper
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
          {[
            { id: 'skills', label: 'Skills Matrix' },
            { id: 'projects', label: 'Projects' },
            { id: 'terminal', label: 'CLI Console' },
            { id: 'certs', label: 'Education' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{
                color: 'var(--text-dim)',
                textDecoration: 'none',
                fontSize: '0.86rem',
                fontWeight: '600',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-body)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--cyber-cyan)';
                e.target.style.textShadow = '0 0 10px var(--cyber-cyan-glow)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-dim)';
                e.target.style.textShadow = 'none';
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls: F1 Video Toggle + CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* F1 Backdrop Video Toggle Button */}
          <button
            onClick={() => setIsVideoActive(!isVideoActive)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '10px',
              background: isVideoActive ? 'rgba(255, 24, 1, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${isVideoActive ? 'var(--f1-red)' : 'var(--border-subtle)'}`,
              color: isVideoActive ? 'var(--f1-red)' : 'var(--text-dim)',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            title={isVideoActive ? 'Pause F1 Background Video' : 'Resume F1 Background Video'}
          >
            <span>🏎️</span>
            <span>{isVideoActive ? 'F1 VIDEO: ON' : 'F1 VIDEO: OFF'}</span>
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.84rem' }}
          >
            <Zap size={15} /> Hire Me
          </a>
        </div>

      </div>
    </header>
  );
}
