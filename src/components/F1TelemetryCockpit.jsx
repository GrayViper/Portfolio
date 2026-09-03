import React, { useState, useEffect } from 'react';
import { Gauge, Zap, Cpu, Activity, Radio, Shield, Flag } from 'lucide-react';

/**
 * F1 Steering Wheel Telemetry Dashboard Component
 * Modeled after the Red Bull F1 Steering Wheel HUD in reference video f1.mp4.
 */
export default function F1TelemetryCockpit() {
  const [speed, setSpeed] = useState(314);
  const [mode, setMode] = useState('PUSH');
  const [rpmStep, setRpmStep] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => 310 + Math.floor(Math.random() * 12));
      setRpmStep(prev => (prev % 9) + 1);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-f1-panel p-6" style={{ borderRadius: '24px', position: 'relative' }}>
      
      {/* Top F1 Shift Rev Light Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        {[1, 2, 3].map(i => (
          <div key={`g-${i}`} className={`f1-rev-light ${rpmStep >= i ? 'f1-rev-green' : ''}`} />
        ))}
        {[4, 5, 6].map(i => (
          <div key={`y-${i}`} className={`f1-rev-light ${rpmStep >= i ? 'f1-rev-yellow' : ''}`} />
        ))}
        {[7, 8, 9].map(i => (
          <div key={`r-${i}`} className={`f1-rev-light ${rpmStep >= i ? 'f1-rev-red' : ''}`} />
        ))}
      </div>

      {/* Main Cockpit Dashboard Display */}
      <div style={{
        background: '#04060b',
        borderRadius: '16px',
        border: '1px solid rgba(255, 24, 1, 0.3)',
        padding: '20px',
        marginTop: '16px',
        fontFamily: 'var(--font-mono)'
      }}>
        
        {/* Top Telemetry Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio size={16} color="var(--f1-red)" className="animate-pulse" />
            <span style={{ fontSize: '0.8rem', color: 'var(--f1-red)', fontWeight: '700', letterSpacing: '0.08em' }}>
              CHINNI KRISHNA PORTFOLIO TELEMETRY
            </span>
          </div>

          <span style={{
            fontSize: '0.74rem',
            padding: '3px 10px',
            borderRadius: '6px',
            background: 'rgba(253, 184, 19, 0.15)',
            color: 'var(--f1-yellow)',
            border: '1px solid rgba(253, 184, 19, 0.3)',
            fontWeight: '700'
          }}>
            MODE: {mode}
          </span>
        </div>

        {/* Center Digital Gear & Speedometer Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr 1fr',
          gap: '12px',
          alignItems: 'center',
          textAlign: 'center',
          padding: '14px 0',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '12px',
          marginBottom: '16px'
        }}>
          
          {/* Left Metric: Projects Live */}
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block' }}>LIVE PROJECTS</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--f1-yellow)' }}>3 PROD</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>Vercel & Render</span>
          </div>

          {/* Center Main Speed Indicator */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 24, 1, 0.2) 0%, rgba(0, 85, 255, 0.2) 100%)',
            border: '2px solid var(--f1-red)',
            borderRadius: '16px',
            padding: '10px'
          }}>
            <span style={{ fontSize: '0.72rem', color: '#fff', display: 'block', letterSpacing: '0.05em' }}>CGPA SCORE</span>
            <span style={{ fontSize: '3.2rem', fontWeight: '900', color: '#fff', lineHeight: '1' }}>7.2</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--cyber-cyan)', fontWeight: '700' }}>LPU B.Tech CSE</span>
          </div>

          {/* Right Metric: Certs */}
          <div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', display: 'block' }}>CERTS</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#10b981' }}>4 ✔</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block' }}>VERIFIED</span>
          </div>

        </div>

        {/* Bottom Telemetry Channel Status */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          fontSize: '0.76rem'
        }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '8px' }}>
            <span style={{ color: 'var(--text-dim)', display: 'block' }}>FRONTEND (FRAMEWORK)</span>
            <span style={{ color: 'var(--cyber-cyan)', fontWeight: '700' }}>React • Next.js • TypeScript</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '8px' }}>
            <span style={{ color: 'var(--text-dim)', display: 'block' }}>BACKEND / DATABASE</span>
            <span style={{ color: 'var(--f1-yellow)', fontWeight: '700' }}>FastAPI • Flask • MongoDB</span>
          </div>
        </div>

      </div>

      {/* Telemetry Mode Selector Buttons */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        {['PUSH', 'QUALIFY', 'OVERTAKE', 'PITSTOP'].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              flex: 1,
              background: mode === m ? 'var(--f1-red)' : 'rgba(255, 255, 255, 0.04)',
              color: mode === m ? '#fff' : 'var(--text-muted)',
              border: `1px solid ${mode === m ? 'var(--f1-red)' : 'var(--border-subtle)'}`,
              padding: '6px 0',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {m}
          </button>
        ))}
      </div>

    </div>
  );
}
