import React, { useState } from 'react';
import LusionAstronaut3D from './LusionAstronaut3D';
import { Sparkles, Mail, Copy, Check, ArrowRight, ShieldCheck, Terminal, Cpu, GraduationCap, Globe, HeartHandshake } from 'lucide-react';

/**
 * AboutAstronaut Component - "About Me & Let's Work Together"
 * Features:
 * - Left side: 3D interactive Lusion Zero-G Astronaut tracking user cursor
 * - Right side: Developer profile, B.Tech specs, DevOps/AI mission, and "Let's Work Together" action deck
 */
export default function AboutAstronaut() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chakkaanil6@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      style={{
        padding: '110px 0 100px',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="section-tag section-tag-cyan">
              👨‍🚀 MISSION PROFILE // ABOUT ME
            </span>
          </div>
          <h2 style={{ fontSize: '2.7rem', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            Exploring Cloud Space &amp; <span className="gradient-text">Building Scalable Systems</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '12px', fontSize: '1rem', maxWidth: '640px', margin: '12px auto 0' }}>
            A journey through automated infrastructure, high-availability Kubernetes clusters, and cutting-edge Agentic AI.
          </p>
        </div>

        {/* 2-Column Split: Interactive 3D Astronaut + About Me & Collaboration Deck */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Column 1: Interactive Lusion 3D Astronaut Container */}
          <div
            className="glass-card-web"
            style={{
              padding: '12px',
              borderRadius: '24px',
              position: 'relative',
              background: 'radial-gradient(circle at 30% 30%, rgba(14, 22, 42, 0.6) 0%, rgba(6, 9, 16, 0.9) 100%)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65)'
            }}
          >
            {/* Top Accent Badge */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 30,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(7, 10, 18, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 243, 255, 0.25)',
                borderRadius: '9999px',
                padding: '4px 10px',
                fontSize: '0.66rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--cyber-cyan)',
                fontWeight: 700
              }}
            >
              <Sparkles size={11} />
              <span>3D ZERO-G SIMULATION</span>
            </div>

            {/* Embedded 3D Astronaut Canvas */}
            <LusionAstronaut3D
              isFullScreen={false}
              height="520px"
              showTelemetryOverlay={true}
              showActionButtons={true}
            />

            {/* Micro Interaction Guide */}
            <div
              style={{
                textAlign: 'center',
                padding: '8px 12px 6px',
                fontSize: '0.70rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em'
              }}
            >
              MOVE CURSOR TO TRACK • DRAG TO ROTATE • TEST THRUSTERS &amp; SHATTER
            </div>
          </div>

          {/* Column 2: About Me Narrative & "Let's Work Together" Action Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Bio Story Card */}
            <div
              className="glass-card-web"
              style={{
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(0, 243, 255, 0.1)',
                    border: '1px solid rgba(0, 243, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyber-cyan)'
                  }}
                >
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                    Chakka Chinni Krishna
                  </h3>
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--cyber-cyan)' }}>
                    @GrayViper • DevOps &amp; Cloud Engineer
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--text-dim)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '16px' }}>
                I am a passionate DevOps Engineer and Full-Stack Developer pursuing my B.Tech in Computer Science &amp;
                Engineering at <strong>Lovely Professional University (CGPA 7.2)</strong>. I specialize in building
                production-grade automated CI/CD pipelines, containerizing resilient microservices on Kubernetes, and
                architecting cloud infrastructure with Terraform.
              </p>

              <p style={{ color: 'var(--text-dim)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '20px' }}>
                With verified industry training in <strong>Agentic AI &amp; Fullstack Engineering from Xebia</strong>, I
                combine autonomous AI workflows with robust systems architecture to deploy high-availability web platforms.
              </p>

              {/* Core Skill Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="skill-chip">
                  <GraduationCap size={13} style={{ color: 'var(--f1-yellow)' }} />
                  B.Tech CSE @ LPU (CGPA 7.2)
                </span>
                <span className="skill-chip">
                  <Terminal size={13} style={{ color: 'var(--cyber-cyan)' }} />
                  AWS &amp; Kubernetes (EKS)
                </span>
                <span className="skill-chip">
                  <ShieldCheck size={13} style={{ color: '#00ff66' }} />
                  Terraform &amp; GitOps CI/CD
                </span>
                <span className="skill-chip">
                  <Globe size={13} style={{ color: '#ff6600' }} />
                  Agentic AI (Xebia)
                </span>
              </div>
            </div>

            {/* "Let's Work Together" Collaboration Spotlight Card */}
            <div
              className="glass-card-web"
              style={{
                padding: '30px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(14, 22, 42, 0.85) 0%, rgba(10, 16, 28, 0.95) 100%)',
                border: '1px solid rgba(0, 243, 255, 0.3)',
                boxShadow: '0 12px 40px rgba(0, 243, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <HeartHandshake size={24} style={{ color: 'var(--cyber-cyan)' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', margin: 0 }}>
                  Let's Work Together
                </h4>
              </div>

              <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '20px' }}>
                Have an exciting project, cloud infrastructure to scale, or looking for a dedicated <strong>DevOps &amp; Cloud Intern</strong>?
                I'm open for immediate opportunities and innovative engineering collaborations.
              </p>

              {/* Collaboration CTA Action Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={handleScrollToContact}
                  data-cursor="CONNECT"
                  className="btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 22px',
                    fontSize: '0.85rem',
                    fontWeight: '800',
                    letterSpacing: '0.04em',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <span>START A CONVERSATION</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '10px 18px',
                    fontSize: '0.84rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#fff',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--cyber-cyan)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                >
                  {copied ? <Check size={15} style={{ color: '#00ff66' }} /> : <Copy size={15} />}
                  <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
                </button>
              </div>

              {/* Response Time Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '16px',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#00ff66',
                    boxShadow: '0 0 8px #00ff66'
                  }}
                />
                <span>Direct response within 24 hours: chakkaanil6@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
