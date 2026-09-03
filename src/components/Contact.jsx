import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, Github, Linkedin, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Internship Opportunity', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chakkaanil6@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Internship Opportunity', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '100px 0 120px' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag section-tag-cyan" style={{ marginBottom: '14px' }}>
            📬 GET IN TOUCH
          </span>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '900', letterSpacing: '-0.03em' }}>
            Contact <span className="gradient-text">Chinni Krishna</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '10px', fontSize: '0.96rem' }}>
            Available for DevOps &amp; Cloud internships, graduate engineering roles &amp; open source projects
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          maxWidth: '920px',
          margin: '0 auto'
        }}>

          {/* Left: Contact Info */}
          <div className="glass-card-web" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                Direct Channels
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: '1.65' }}>
                Feel free to connect for internships, cloud infrastructure projects, or technical collaboration.
              </p>
            </div>

            {/* Email Box */}
            <div style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)',
              borderRadius: '12px', padding: '14px 18px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px'
            }}>
              <div>
                <span style={{ fontSize: '0.70rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', display: 'block', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Email Address
                </span>
                <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: 'var(--cyber-cyan)', fontWeight: '700' }}>
                  chakkaanil6@gmail.com
                </span>
              </div>
              <button onClick={handleCopyEmail} style={{
                background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.06)',
                border: `1px solid ${copied ? 'var(--terminal-green)' : 'var(--border-subtle)'}`,
                color: copied ? 'var(--terminal-green)' : 'var(--text-muted)',
                borderRadius: '8px', padding: '7px 12px', cursor: 'pointer',
                fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '5px', transition: 'all 0.2s',
                fontFamily: 'var(--font-mono)'
              }}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Phone Box */}
            <div style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)',
              borderRadius: '12px', padding: '14px 18px',
              display: 'flex', alignItems: 'center', gap: '12px'
            }}>
              <Phone size={16} color="var(--f1-red)" />
              <div>
                <span style={{ fontSize: '0.70rem', color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', display: 'block', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Mobile Contact</span>
                <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-mono)', color: 'var(--f1-red)', fontWeight: '700' }}>+91 8135839393</span>
              </div>
            </div>

            {/* Social Link Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://github.com/GrayViper" target="_blank" rel="noreferrer"
                className="btn-primary" style={{ justifyContent: 'center', padding: '11px 14px', fontSize: '0.86rem' }}>
                <Github size={16} /> @GrayViper on GitHub
              </a>
              <a href="https://www.linkedin.com/in/chinni-krishna8" target="_blank" rel="noreferrer"
                className="btn-secondary" style={{ justifyContent: 'center', padding: '11px 14px', fontSize: '0.86rem' }}>
                <Linkedin size={16} /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card-web" style={{ padding: '30px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,24,1,0.2), rgba(0,242,254,0.2))',
                  border: '1.5px solid var(--f1-red)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px', color: 'var(--f1-red)'
                }}>
                  <Sparkles size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>
                  Message Transmitted! ⚡
                </h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem' }}>
                  Thanks for reaching out! I'll get back to your inbox as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Your Name', key: 'name', type: 'text', placeholder: 'e.g. Alex Mercer' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'alex@company.com' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '6px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      style={{
                        width: '100%', background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-subtle)', borderRadius: '10px',
                        padding: '10px 14px', color: '#fff', fontSize: '0.88rem', outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '6px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Purpose of Message
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%', background: '#0b101c',
                      border: '1px solid var(--border-subtle)', borderRadius: '10px',
                      padding: '10px 14px', color: '#fff', fontSize: '0.88rem', outline: 'none'
                    }}
                  >
                    <option value="Internship Opportunity">DevOps / Cloud Internship Opportunity</option>
                    <option value="Full-Time Role">Full-Time / Graduate Engineering Role</option>
                    <option value="Cloud Architecture">Cloud Infrastructure &amp; CI/CD Project</option>
                    <option value="Collaboration">Open Source Collaboration</option>
                    <option value="General">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '6px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role specifications, project requirements, or questions..."
                    style={{
                      width: '100%', background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-subtle)', borderRadius: '10px',
                      padding: '10px 14px', color: '#fff', fontSize: '0.88rem', outline: 'none',
                      resize: 'none', transition: 'border-color 0.2s'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '4px' }}>
                  <Send size={16} /> Send Message ⚡
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
