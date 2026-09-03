import React, { useState } from 'react';
import { Menu, X, Zap, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

/**
 * Navbar Component - edh.dev Style Minimalist Navigation
 * Features:
 * - Minimalist glass floating header
 * - Slide-out / Fullscreen Retro Drawer Menu (triggered by ≡ button)
 * - F1 Background video toggle switch
 */
export default function Navbar({ isVideoActive, setIsVideoActive }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', num: '01', label: 'RETRO 3D TERMINAL', desc: 'Commodore PET 8296 Interactive Stage' },
    { id: 'skills', num: '02', label: 'SKILLS & CLOUD MATRIX', desc: 'AWS, Kubernetes, Terraform, Docker, CI/CD, FastAPI' },
    { id: 'projects', num: '03', label: 'FEATURED PROJECTS', desc: 'Career_Genie, hi_links, Cura-AI-Health' },
    { id: 'terminal', num: '04', label: 'DEVOPS CLI CONSOLE', desc: 'Interactive Linux & GitOps terminal' },
    { id: 'certs', num: '05', label: 'EDUCATION & CERTS', desc: 'LPU B.Tech CSE (7.2 CGPA) & Xebia Agentic AI' },
    { id: 'contact', num: '06', label: 'GET IN TOUCH', desc: 'Hire Me / Contact Chinni Krishna' }
  ];

  return (
    <>
      {/* Pinned Minimalist Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pointerEvents: 'none' // Allow click-throughs except on buttons
      }}>
        {/* Brand Monogram (Left) */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            pointerEvents: 'auto',
            background: 'rgba(7, 10, 18, 0.75)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '6px 14px',
            transition: 'all 0.2s'
          }}
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--f1-red) 0%, #0d1321 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '900',
            fontSize: '0.78rem',
            color: '#fff',
            fontFamily: 'var(--font-heading)'
          }}>
            CK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '0.86rem', color: '#fff', letterSpacing: '-0.01em' }}>
              Chinni Krishna
            </span>
            <span style={{ fontSize: '0.66rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
              @GrayViper
            </span>
          </div>
        </a>

        {/* Right Controls: F1 Video Toggle + Menu Hamburger Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', pointerEvents: 'auto' }}>
          {/* F1 Video Toggle */}
          <button
            onClick={() => setIsVideoActive(!isVideoActive)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '12px',
              background: 'rgba(7, 10, 18, 0.75)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${isVideoActive ? 'var(--f1-red)' : 'var(--border-subtle)'}`,
              color: isVideoActive ? 'var(--f1-red)' : 'var(--text-dim)',
              fontSize: '0.76rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            title={isVideoActive ? 'Pause F1 Cinematic Video' : 'Play F1 Cinematic Video'}
          >
            <span>🏎️</span>
            <span>{isVideoActive ? 'F1: ON' : 'F1: OFF'}</span>
          </button>

          {/* Minimalist Slide-Out Menu Button (≡) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '12px',
              background: isMenuOpen ? 'var(--f1-red)' : 'rgba(7, 10, 18, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-subtle)',
              color: '#fff',
              fontSize: '0.84rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: isMenuOpen ? '0 0 20px var(--f1-red-glow)' : 'none'
            }}
            title="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </header>

      {/* Slide-Out Retro Fullscreen Drawer Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 99,
          background: 'rgba(5, 7, 13, 0.95)',
          backdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
          boxSizing: 'border-box',
          animation: 'fadeIn 0.25s ease'
        }}>
          {/* Menu Card Container */}
          <div style={{
            width: '100%',
            maxWidth: '720px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '8px'
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--f1-yellow)', letterSpacing: '0.08em' }}>
                *** DEVOPS PORTFOLIO NAVIGATION // INDEX ***
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--terminal-green)' }}>
                ● ONLINE (EKS 1.30)
              </span>
            </div>

            {/* Navigation List Items */}
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s',
                  color: '#fff'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 24, 1, 0.12)';
                  e.currentTarget.style.borderColor = 'var(--f1-red)';
                  e.currentTarget.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateX(0px)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: 'var(--f1-yellow)', fontWeight: '700' }}>
                    {item.num}
                  </span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: '800', letterSpacing: '-0.01em' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={18} color="var(--cyber-cyan)" />
              </a>
            ))}

            {/* Bottom Drawer Footer: Social Links & Direct Action */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="https://github.com/GrayViper" target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none',
                  padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <Github size={14} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/chinni-krishna8" target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none',
                  padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="btn-primary"
                style={{ padding: '8px 20px', fontSize: '0.84rem' }}
              >
                <Zap size={14} /> Hire Chinni Krishna
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
