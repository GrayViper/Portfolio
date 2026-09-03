import React from 'react';

/**
 * F1SponsorLivery Component
 * Modeled directly after 0:08 - 0:12 of reference video f1.mp4.
 * Displays high-speed F1 sponsor & DevOps tech stack ticker strip.
 */
export default function F1SponsorLivery() {
  const sponsors = [
    { brand: 'ORACLE', tech: 'AWS CLOUD EKS', badge: '☁️' },
    { brand: 'TAG HEUER', tech: '1.82s PITSTOP SLA', badge: '⏱️' },
    { brand: 'MOBIL 1', tech: 'KUBERNETES 1.30', badge: '☸️' },
    { brand: 'VISA', tech: 'TERRAFORM IaC', badge: '🏗️' },
    { brand: 'AT&T', tech: 'ARGOCD GITOPS', badge: '🐙' },
    { brand: 'FORD RACING', tech: 'PROMETHEUS & GRAFANA', badge: '📊' },
    { brand: 'HONDA RBPT', tech: 'DOCKER & TRIVY SCAN', badge: '🐳' }
  ];

  return (
    <div style={{
      background: 'linear-gradient(90deg, rgba(255, 24, 1, 0.15) 0%, rgba(253, 184, 19, 0.15) 50%, rgba(0, 85, 255, 0.15) 100%)',
      borderTop: '1px solid rgba(255, 24, 1, 0.3)',
      borderBottom: '1px solid rgba(253, 184, 19, 0.3)',
      padding: '14px 0',
      overflow: 'hidden',
      position: 'relative',
      margin: '40px 0 60px'
    }}>
      <div style={{
        display: 'flex',
        gap: '40px',
        animation: 'f1-ticker 25s linear infinite',
        whiteSpace: 'nowrap',
        width: 'max-content'
      }}>
        {[...sponsors, ...sponsors].map((item, idx) => (
          <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.1rem' }}>{item.badge}</span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: '900',
              fontSize: '1rem',
              color: '#fff',
              letterSpacing: '0.06em'
            }}>
              {item.brand}
            </span>
            <span style={{ color: 'var(--f1-yellow)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
              // {item.tech}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 10px' }}>|</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes f1-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
