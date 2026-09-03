import React, { useState, useEffect } from 'react';
import { Gauge, Cpu, Layers, Activity, Zap, CheckCircle2, ChevronRight } from 'lucide-react';

/**
 * F1TurntableShowcase Component
 * Modeled directly after 0:06 of reference video f1.mp4.
 * Features a revolving 3D Red Bull F1 Podium with glowing concentric rings,
 * interactive car telemetry hotspot nodes (Front Wing, Cockpit, Sidepod, Rear Wing),
 * and dynamic camera sweeps to DevOps specifications.
 */
export default function F1TurntableShowcase() {
  const [activeHotspot, setActiveHotspot] = useState('cockpit');
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setRotationAngle(prev => (prev + 0.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const hotspots = {
    cockpit: {
      title: 'KUBERNETES CONTROL PLANE',
      subtitle: 'Driver Cockpit & Central Telemetry',
      specs: [
        'AWS EKS 1.30 Cluster Management',
        'ArgoCD GitOps Sync (1.82s SLA)',
        'Zero-downtime rolling updates',
        'RBAC & Namespace Security'
      ],
      icon: '☸️',
      color: '#ff1801',
      x: 50,
      y: 42
    },
    frontwing: {
      title: 'CI/CD INGRESS & RELEASE PIPELINES',
      subtitle: 'Aerodynamic Front Wing & Inflow',
      specs: [
        'GitHub Actions Automated Testing',
        'Trivy Container Vulnerability Scan',
        'Multi-stage Docker Image Builds',
        'Automated Helm Value Templating'
      ],
      icon: '⚡',
      color: '#fdb813',
      x: 20,
      y: 65
    },
    sidepod: {
      title: 'TERRAFORM INFRASTRUCTURE AS CODE',
      subtitle: 'Engine Air Intake & Cooling Chassis',
      specs: [
        'Modular AWS VPC Peering & IAM',
        'S3 Remote State + DynamoDB Lock',
        'EC2 Auto-Scaling Groups',
        'CloudFormation & Ansible Playbooks'
      ],
      icon: '🏗️',
      color: '#00f2fe',
      x: 52,
      y: 58
    },
    rearwing: {
      title: 'FULL-STACK OBSERVABILITY & ALERTS',
      subtitle: 'Rear Wing Exhaust & Downforce',
      specs: [
        'Prometheus Metrics Scraping',
        'Grafana Real-time Telemetry Panels',
        'Loki Centralized Log Aggregation',
        'Slack & PagerDuty AlertManager'
      ],
      icon: '📊',
      color: '#10b981',
      x: 82,
      y: 35
    }
  };

  const currentData = hotspots[activeHotspot];

  return (
    <div className="glass-f1-panel p-6" style={{ borderRadius: '24px', overflow: 'hidden' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div>
          <div className="f1-sector-badge" style={{ fontSize: '0.72rem', marginBottom: '4px' }}>
            🏁 TURNTABLE TELEMETRY REVEAL (MATCHING F1.MP4 0:06)
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#fff', textTransform: 'uppercase' }}>
            RB21 DevOps <span className="gradient-text-f1">Chassis Architecture</span>
          </h3>
        </div>

        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          style={{
            background: isAutoRotating ? 'rgba(255,24,1,0.15)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isAutoRotating ? 'var(--f1-red)' : 'var(--border-subtle)'}`,
            color: isAutoRotating ? 'var(--f1-red)' : 'var(--text-muted)',
            borderRadius: '8px',
            padding: '6px 14px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          {isAutoRotating ? 'PAUSE ROTATION ⏸' : 'ROTATE PODIUM ▶'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '24px', alignItems: 'center' }}>
        
        {/* Left: Interactive 3D Turntable Stage */}
        <div style={{
          position: 'relative',
          height: '340px',
          background: 'radial-gradient(circle at 50% 60%, rgba(255, 24, 1, 0.15) 0%, rgba(4, 6, 11, 0.95) 75%)',
          borderRadius: '18px',
          border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
          {/* Concentric Glowing Red Bull Podium Rings (0:06 of video) */}
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '140px',
            borderRadius: '50%',
            border: '2px solid var(--f1-red)',
            boxShadow: '0 0 30px var(--f1-red-glow)',
            transform: 'rotateX(65deg)',
            bottom: '40px'
          }} />

          <div style={{
            position: 'absolute',
            width: '200px',
            height: '100px',
            borderRadius: '50%',
            border: '2px solid var(--f1-yellow)',
            boxShadow: '0 0 25px var(--f1-yellow-glow)',
            transform: 'rotateX(65deg)',
            bottom: '60px'
          }} />

          {/* Glowing Red Bull Sun Disk Projection */}
          <div style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fdb813 0%, rgba(255,24,1,0.6) 60%, transparent 100%)',
            opacity: 0.4,
            filter: 'blur(8px)',
            bottom: '50px'
          }} />

          {/* F1 Car Render Image with 3D Perspective Spin */}
          <div style={{
            transform: `perspective(600px) rotateY(${rotationAngle * 0.3}deg)`,
            transition: isAutoRotating ? 'none' : 'transform 0.5s ease',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center'
          }}>
            <img
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&auto=format&fit=crop&q=80"
              alt="Red Bull Racing F1 Car"
              style={{
                width: '320px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
              }}
            />
          </div>

          {/* Interactive Telemetry Hotspot Buttons */}
          {Object.entries(hotspots).map(([key, item]) => (
            <button
              key={key}
              onClick={() => {
                setActiveHotspot(key);
                setIsAutoRotating(false);
              }}
              style={{
                position: 'absolute',
                left: `${item.x}%`,
                top: `${item.y}%`,
                zIndex: 20,
                background: activeHotspot === key ? item.color : 'rgba(10, 14, 23, 0.85)',
                color: '#fff',
                border: `2px solid ${item.color}`,
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: activeHotspot === key ? `0 0 20px ${item.color}` : 'none',
                transform: activeHotspot === key ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              title={`Inspect ${item.title}`}
            >
              <span style={{ fontSize: '1rem' }}>{item.icon}</span>
            </button>
          ))}

        </div>

        {/* Right: Detailed Telemetry Hotspot Data Panel */}
        <div style={{
          background: '#04060b',
          border: `1px solid ${currentData.color}`,
          borderRadius: '16px',
          padding: '22px',
          boxShadow: `0 0 25px ${currentData.color}25`
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '1.8rem' }}>{currentData.icon}</span>
            <div>
              <span style={{ fontSize: '0.74rem', color: currentData.color, fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                {currentData.subtitle}
              </span>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#fff' }}>
                {currentData.title}
              </h4>
            </div>
          </div>

          <div style={{
            height: '1px',
            background: `linear-gradient(90deg, ${currentData.color} 0%, transparent 100%)`,
            margin: '12px 0 16px'
          }} />

          {/* Specs Checklist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {currentData.specs.map((spec, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={16} color={currentData.color} style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)' }}>{spec}</span>
              </div>
            ))}
          </div>

          {/* Hotspot Selector Switcher */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginTop: '20px' }}>
            {Object.keys(hotspots).map(key => (
              <button
                key={key}
                onClick={() => {
                  setActiveHotspot(key);
                  setIsAutoRotating(false);
                }}
                style={{
                  background: activeHotspot === key ? hotspots[key].color : 'rgba(255,255,255,0.04)',
                  color: activeHotspot === key ? '#fff' : 'var(--text-dim)',
                  border: `1px solid ${activeHotspot === key ? hotspots[key].color : 'var(--border-subtle)'}`,
                  borderRadius: '6px',
                  padding: '6px 0',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                {key}
              </button>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
