import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(7, 10, 18, 0.95)',
      padding: '44px 0 30px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="max-w-7xl mx-auto px-6">

        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '24px', paddingBottom: '28px',
          borderBottom: '1px solid var(--border-subtle)'
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--f1-red) 0%, var(--cyber-cyan) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: '900', fontSize: '0.92rem', color: '#fff',
                fontFamily: 'var(--font-heading)'
              }}>CK</div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.15rem', color: '#fff' }}>
                Chakka Chinni <span className="gradient-text">Krishna</span>
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              DevOps &amp; Cloud Engineer · Full-Stack &amp; Agentic AI Specialist · @GrayViper
            </p>
          </div>

          {/* Metrics & Commit Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.74rem', fontFamily: 'var(--font-mono)',
              background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)',
              color: 'var(--terminal-green)', padding: '4px 10px', borderRadius: '8px',
              display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '700'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
              99.9% CLUSTER UPTIME
            </span>
            <span style={{
              fontSize: '0.74rem', fontFamily: 'var(--font-mono)',
              background: 'rgba(255, 24, 1, 0.1)', border: '1px solid rgba(255, 24, 1, 0.3)',
              color: 'var(--f1-red)', padding: '4px 10px', borderRadius: '8px', fontWeight: '700'
            }}>
              BUILD: v2.0.0-f1-retro
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {[
              { href: 'https://github.com/GrayViper', icon: <Github size={17} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/chinni-krishna8', icon: <Linkedin size={17} />, label: 'LinkedIn' },
              { href: 'mailto:chakkaanil6@gmail.com', icon: <Mail size={17} />, label: 'Email' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                title={s.label}
                style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-dim)', transition: 'all 0.2s', textDecoration: 'none'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--f1-red)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,24,1,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                {s.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'rgba(255, 24, 1, 0.12)', border: '1px solid rgba(255, 24, 1, 0.35)',
                color: 'var(--f1-red)', borderRadius: '10px',
                padding: '9px 18px', fontSize: '0.82rem', cursor: 'pointer',
                fontFamily: 'var(--font-heading)', fontWeight: '700', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 24, 1, 0.22)'; e.currentTarget.style.borderColor = 'var(--f1-red)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 24, 1, 0.12)'; e.currentTarget.style.borderColor = 'rgba(255, 24, 1, 0.35)'; }}
            >
              <ArrowUp size={15} /> Back to Top 🏁
            </button>
          </div>

        </div>

        <div style={{
          textAlign: 'center', marginTop: '22px',
          fontSize: '0.80rem', color: 'var(--text-faint)',
          fontFamily: 'var(--font-mono)'
        }}>
          © 2026 Chakka Chinni Krishna (@GrayViper) · Engineered with React + Vite + Three.js · Deployed on Vercel
        </div>

      </div>
    </footer>
  );
}
