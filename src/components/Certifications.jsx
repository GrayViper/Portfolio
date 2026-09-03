import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen, Bot } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'Python: Basics to Advance',
      issuer: 'Edtechniketan',
      date: 'July 2026',
      icon: '🐍',
      color: 'var(--cyber-cyan)',
      colorBg: 'rgba(0, 242, 254, 0.08)',
      colorBorder: 'rgba(0, 242, 254, 0.25)',
    },
    {
      title: 'Database Management',
      issuer: 'Infosys Springboard',
      date: 'June 2026',
      icon: '🗄️',
      color: 'var(--terminal-green)',
      colorBg: 'rgba(16, 185, 129, 0.08)',
      colorBorder: 'rgba(16, 185, 129, 0.25)',
    },
    {
      title: 'Linux Commands & Shell Scripting',
      issuer: 'Skillera',
      date: 'March 2025',
      icon: '🐧',
      color: 'var(--web-red)',
      colorBg: 'rgba(255, 42, 95, 0.08)',
      colorBorder: 'rgba(255, 42, 95, 0.25)',
    },
    {
      title: 'Introduction to C',
      issuer: 'Udemy',
      date: 'January 2025',
      icon: '💻',
      color: 'var(--warning-amber)',
      colorBg: 'rgba(253, 184, 19, 0.08)',
      colorBorder: 'rgba(253, 184, 19, 0.25)',
    }
  ];

  const education = [
    {
      degree: 'B.Tech — Computer Science & Engineering',
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      period: 'Aug 2024 – Present',
      grade: 'CGPA: 7.2',
      icon: '🎓',
      color: 'var(--web-red)'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Kendriya Vidyalaya NFR Maligaon',
      location: 'Guwahati, Assam',
      period: 'Aug 2022 – May 2024',
      grade: '84%',
      icon: '🏫',
      color: 'var(--cyber-cyan)'
    },
    {
      degree: 'Matriculation (Class X)',
      institution: "St. Basil's Academy",
      location: 'Nagaon, Assam',
      period: 'Completed June 2022',
      grade: '80%',
      icon: '📚',
      color: 'var(--terminal-green)'
    }
  ];

  return (
    <section id="certs" style={{ padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag section-tag-cyan" style={{ marginBottom: '14px' }}>
            🏆 ACADEMICS &amp; CERTIFICATIONS
          </span>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '900', letterSpacing: '-0.03em' }}>
            Education &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '10px', fontSize: '0.96rem' }}>
            Continuous learning across Cloud Infrastructure, Full-Stack and Agentic AI
          </p>
        </div>

        {/* ===== XEBIA FEATURED INDUSTRY TRAINING CARD ===== */}
        <div className="glass-card-web" style={{
          padding: '28px', marginBottom: '36px',
          background: 'linear-gradient(135deg, rgba(255, 42, 95, 0.08) 0%, rgba(0, 242, 254, 0.06) 100%)',
          border: '1px solid rgba(255, 42, 95, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{
              width: '58px', height: '58px', borderRadius: '16px', flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(255, 42, 95, 0.3), rgba(0, 242, 254, 0.3))',
              border: '1.5px solid rgba(255, 42, 95, 0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem'
            }}>🤖</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff' }}>
                  Fullstack using Agentic A.I
                </h3>
                <span style={{
                  fontSize: '0.72rem', fontFamily: 'var(--font-mono)',
                  background: 'rgba(255, 42, 95, 0.15)', border: '1px solid rgba(255, 42, 95, 0.35)',
                  color: 'var(--web-red)', padding: '3px 10px', borderRadius: '9999px', fontWeight: '700'
                }}>
                  Jun 2026 – Jul 2026
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--cyber-cyan)', fontFamily: 'var(--font-mono)', fontWeight: '700', marginBottom: '10px' }}>
                Xebia · Industry Training Specialization
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: '1.7', marginBottom: '14px' }}>
                Worked with Notion, Notebook LLM, and Postman for designing Agentic AI workflows. Explored GitHub Copilot, Kiro, and Antigravity across platforms. Deployed containerized backends and microservices to MongoDB Atlas, Render, and Vercel with structured GitHub CI/CD commit pipelines.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Notion', 'Notebook LLM', 'Postman', 'GitHub Copilot', 'Antigravity', 'MongoDB Atlas', 'Render', 'Vercel', 'Agentic Workflows'].map((tag, i) => (
                  <span key={i} style={{
                    fontSize: '0.72rem', fontFamily: 'var(--font-mono)',
                    padding: '3px 9px', borderRadius: '6px',
                    background: 'rgba(255, 42, 95, 0.08)', border: '1px solid rgba(255, 42, 95, 0.2)',
                    color: 'var(--web-red)'
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline & Certs Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>

          {/* Education Timeline Card */}
          <div className="glass-card-web" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255, 42, 95, 0.25), rgba(0, 242, 254, 0.25))',
                border: '1px solid rgba(255, 42, 95, 0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--web-red)'
              }}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#fff' }}>Academic Journey</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Education degrees &amp; school record</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {education.map((edu, i) => (
                <div key={i} style={{
                  padding: '16px', borderRadius: '14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex', gap: '12px'
                }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{edu.icon}</span>
                  <div>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#fff', marginBottom: '3px' }}>{edu.degree}</h4>
                    <p style={{ fontSize: '0.80rem', color: edu.color, fontFamily: 'var(--font-mono)', fontWeight: '600' }}>{edu.institution}</p>
                    <p style={{ fontSize: '0.74rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>{edu.location}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.73rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{edu.period}</span>
                      <span style={{ fontSize: '0.73rem', color: edu.color, fontFamily: 'var(--font-mono)', fontWeight: '700' }}>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '0.84rem', fontWeight: '700', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              🏆 Verified Credentials
            </h3>
            {certs.map((cert, idx) => (
              <div key={idx} className="glass-card-web" style={{
                padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start',
                border: `1px solid ${cert.colorBorder}`,
                background: cert.colorBg
              }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '11px', flexShrink: 0,
                  background: cert.colorBg, border: `1px solid ${cert.colorBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem'
                }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: '700', color: '#fff' }}>{cert.title}</h4>
                    <span style={{
                      fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: cert.color,
                      background: cert.colorBg, padding: '2px 8px', borderRadius: '6px', whiteSpace: 'nowrap',
                      border: `1px solid ${cert.colorBorder}`, fontWeight: '700'
                    }}>{cert.date}</span>
                  </div>
                  <p style={{ fontSize: '0.80rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
