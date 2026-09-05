import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Layers, 
  Sparkles, 
  Crosshair, 
  Info, 
  X, 
  Zap,
  ExternalLink,
  Flame
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [viewMode, setViewMode] = useState('billiards'); // 'billiards' | 'grid'
  const [pocketedCount, setPocketedCount] = useState(0);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const audioCtxRef = useRef(null);
  const physicsRef = useRef({
    balls: [],
    cueBall: null,
    aiming: false,
    aimStart: { x: 0, y: 0 },
    aimCurrent: { x: 0, y: 0 },
    draggedBall: null,
    dragOffset: { x: 0, y: 0 },
    tableWidth: 960,
    tableHeight: 520,
    cushionInset: 32,
    pockets: [],
    ballRadius: 24,
    scaleFactor: 1
  });

  const categories = [
    { id: 'all', label: 'All Stack', color: '#00f3ff' },
    { id: 'cloud', label: 'Cloud & IaC', color: '#00d2ff' },
    { id: 'cicd', label: 'CI/CD & Linux', color: '#ff2a5f' },
    { id: 'dev', label: 'Full-Stack & APIs', color: '#ffaa00' },
    { id: 'data', label: 'Observability & DBs', color: '#00ff88' },
    { id: 'ai', label: 'Agentic AI & LLMs', color: '#bd34fe' }
  ];

  const skillItems = [
    // Cloud & IaC
    { id: 1, name: 'Kubernetes', cat: 'cloud', level: '85%', num: 1, icon: '☸️', desc: 'AWS EKS clusters, Pod scheduling, Helm charts, ingress controllers & rolling updates', tag: 'Orchestration', color: '#00d2ff', stripe: false },
    { id: 2, name: 'Docker', cat: 'cloud', level: '92%', num: 2, icon: '🐳', desc: 'Multi-stage Dockerfiles, image optimization, Trivy security scans & bridge networks', tag: 'Containers', color: '#00b0ff', stripe: true },
    { id: 3, name: 'AWS Cloud', cat: 'cloud', level: '84%', num: 3, icon: '☁️', desc: 'EKS, EC2, S3, IAM policies, VPC networking, CloudWatch metrics & auto-scaling', tag: 'Cloud', color: '#0088ff', stripe: false },
    { id: 4, name: 'Terraform', cat: 'cloud', level: '82%', num: 4, icon: '🏗️', desc: 'Infrastructure as Code, modular configs, remote S3 state & DynamoDB locking', tag: 'IaC', color: '#00e5ff', stripe: true },

    // CI/CD & Linux
    { id: 5, name: 'GitHub Actions', cat: 'cicd', level: '90%', num: 5, icon: '⚡', desc: 'Automated CI/CD workflows, linting, unit testing, container build & deploy pipelines', tag: 'CI/CD', color: '#ff2a5f', stripe: false },
    { id: 6, name: 'Linux & Bash', cat: 'cicd', level: '88%', num: 6, icon: '🐧', desc: 'Bash scripting, system administration, process management & permissions', tag: 'OS & Scripting', color: '#ff4d79', stripe: true },
    { id: 7, name: 'Git & GitOps', cat: 'cicd', level: '90%', num: 7, icon: '🐙', desc: 'Git branching models, PR workflows, ArgoCD continuous delivery & commit hygiene', tag: 'GitOps', color: '#e6004c', stripe: false },
    { id: 8, name: 'Postman', cat: 'cicd', level: '88%', num: 8, icon: '📮', desc: 'API testing, automated collection runs, webhook integration & endpoint mocking', tag: 'Testing', color: '#ff6685', stripe: true },

    // Full-Stack & APIs
    { id: 9, name: 'FastAPI', cat: 'dev', level: '88%', num: 9, icon: '🚀', desc: 'High-performance async Python REST APIs, Pydantic data validation & JWT auth', tag: 'Backend', color: '#ffaa00', stripe: false },
    { id: 10, name: 'Python', cat: 'dev', level: '90%', num: 10, icon: '🐍', desc: 'Automation scripting, backend engineering, data modeling & AI integrations', tag: 'Language', color: '#ffbe33', stripe: true },
    { id: 11, name: 'React', cat: 'dev', level: '92%', num: 11, icon: '⚛️', desc: 'Vite, hooks, component architecture, responsive UI & state management', tag: 'Frontend', color: '#ffa200', stripe: false },
    { id: 12, name: 'Next.js', cat: 'dev', level: '85%', num: 12, icon: '▲', desc: 'App Router, server-side rendering, API routes, TypeScript & Vercel deployment', tag: 'Full-Stack', color: '#ffd000', stripe: true },
    { id: 13, name: 'TypeScript', cat: 'dev', level: '84%', num: 13, icon: '🔷', desc: 'Type-safe full-stack engineering with Next.js and Drizzle ORM schemas', tag: 'Type-Safety', color: '#ff9000', stripe: false },
    { id: 14, name: 'Flask', cat: 'dev', level: '82%', num: 14, icon: '🌶️', desc: 'Python microservice backends, SQLite/MongoDB models & Jinja templating', tag: 'Microservices', color: '#ffbb44', stripe: true },
    { id: 15, name: 'C++', cat: 'dev', level: '80%', num: 15, icon: '⚡', desc: 'Object-oriented programming, data structures, algorithm efficiency & memory handling', tag: 'Core', color: '#ff8000', stripe: false },

    // Observability & DBs
    { id: 16, name: 'Prometheus & Grafana', cat: 'data', level: '82%', num: 16, icon: '📊', desc: 'Cluster metric scraping, telemetry dashboards, threshold alerts & monitoring', tag: 'Observability', color: '#00ff88', stripe: true },
    { id: 17, name: 'MongoDB Atlas', cat: 'data', level: '86%', num: 17, icon: '🍃', desc: 'NoSQL document schema design, Atlas cloud clusters, aggregation pipelines', tag: 'NoSQL', color: '#00e676', stripe: false },
    { id: 18, name: 'PostgreSQL & MySQL', cat: 'data', level: '82%', num: 18, icon: '🐬', desc: 'Relational DB design, SQL queries, Drizzle ORM migrations & connection pooling', tag: 'RDBMS', color: '#33ff99', stripe: true },

    // Agentic AI & Tools
    { id: 19, name: 'Agentic AI', cat: 'ai', level: '88%', num: 19, icon: '🤖', desc: 'Xebia industry training: designing multi-agent AI execution loops & LLM pipelines', tag: 'Agentic AI', color: '#bd34fe', stripe: false },
    { id: 20, name: 'Gemini API & LLMs', cat: 'ai', level: '86%', num: 20, icon: '✨', desc: 'Context-augmented prompts, health diagnostics & structured JSON chat flows', tag: 'GenAI', color: '#d56aff', stripe: true }
  ];

  // Sound Synthesizer via Web Audio API
  const playSound = useCallback((type, intensity = 1.0) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      const vol = Math.min(Math.max(intensity, 0.1), 1.0);

      if (type === 'clack') {
        // High-frequency wooden/resin billiard ball collision clack
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'triangle';
        const baseFreq = 950 + Math.random() * 450;
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.045);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, now);
        filter.Q.setValueAtTime(4.0, now);

        gain.gain.setValueAtTime(0.35 * vol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.055);

        // Sub click noise
        const bufferSize = Math.floor(ctx.sampleRate * 0.02);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.25 * vol, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
        noise.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noise.start(now);

      } else if (type === 'cushion') {
        // Soft rubber cushion thud
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(55, now + 0.08);

        gain.gain.setValueAtTime(0.28 * vol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);

      } else if (type === 'strike') {
        // Hard cue stick hit
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.09);

        gain.gain.setValueAtTime(0.4 * vol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);

      } else if (type === 'pocket') {
        // Hollow arcade drop chime
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(440, now);
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.16);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(660, now);
        osc2.frequency.exponentialRampToValueAtTime(1320, now + 0.16);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.22);
        osc2.stop(now + 0.22);
      }
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  // Rack Balls in Classic Billiard Triangle
  const rackBalls = useCallback((animateBreak = false) => {
    const p = physicsRef.current;
    const inset = p.cushionInset;
    const availableW = p.tableWidth - inset * 2;
    const availableH = p.tableHeight - inset * 2;
    const r = p.ballRadius;

    // Reset Cue Ball on the left "kitchen" line
    const cueX = inset + availableW * 0.22;
    const cueY = p.tableHeight / 2;
    const cueBall = {
      id: 'cue',
      name: 'CHINNI / CUE',
      cat: 'cue',
      num: 0,
      icon: '🎯',
      isCue: true,
      x: cueX,
      y: cueY,
      vx: animateBreak ? 30 : 0, // High velocity strike for satisfying rack break!
      vy: animateBreak ? (Math.random() - 0.5) * 3.2 : 0,
      radius: r,
      mass: 1.1,
      color: '#ffffff',
      isSunk: false,
      sinkScale: 1.0,
      sinkOpacity: 1.0
    };

    // Pyramid Rack configuration on the right side
    const rackApexX = inset + availableW * 0.65;
    const rackApexY = p.tableHeight / 2;
    const balls = [];

    // Arrange skills into rows: Row 0 (1), Row 1 (2), Row 2 (3), Row 3 (4), Row 4 (5), Row 5 (5 remaining)
    const rowCounts = [1, 2, 3, 4, 5, 5];
    let skillIdx = 0;
    const colSpacing = r * Math.sqrt(3) * 1.02;
    const rowSpacing = r * 2.05;

    for (let col = 0; col < rowCounts.length; col++) {
      const count = rowCounts[col];
      const startY = rackApexY - ((count - 1) * rowSpacing) / 2;
      const colX = rackApexX + col * colSpacing;

      for (let row = 0; row < count; row++) {
        if (skillIdx >= skillItems.length) break;
        const skill = skillItems[skillIdx];
        const ballX = colX + (Math.random() - 0.5) * 1.5;
        const ballY = startY + row * rowSpacing + (Math.random() - 0.5) * 1.5;

        balls.push({
          ...skill,
          isCue: false,
          x: ballX,
          y: ballY,
          vx: 0,
          vy: 0,
          radius: r,
          mass: 1.0,
          isSunk: false,
          sinkScale: 1.0,
          sinkOpacity: 1.0
        });
        skillIdx++;
      }
    }

    p.balls = balls;
    p.cueBall = cueBall;

    if (animateBreak) {
      playSound('strike', 1.0);
    }
  }, [playSound]);

  // Break Rack Button Trigger
  const handleBreakRack = () => {
    rackBalls(true);
  };

  // Re-Rack Clean
  const handleResetRack = () => {
    rackBalls(false);
  };

  // Setup Canvas & Physics Simulation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle High-DPI Scaling & Responsive Sizing
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(340, rect.width);
      // Maintain approx 16:9 to 1.8:1 aspect ratio on desktop, slightly taller on mobile
      const height = Math.min(540, Math.max(360, width * 0.52));

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      const p = physicsRef.current;
      p.tableWidth = width;
      p.tableHeight = height;
      p.cushionInset = Math.max(22, Math.min(36, width * 0.038));
      p.ballRadius = Math.max(16, Math.min(24, width * 0.024));
      p.scaleFactor = width / 960;

      // 6 Table Pockets (4 Corners, 2 Sides)
      const inset = p.cushionInset;
      const pocketR = p.ballRadius * 1.45;
      p.pockets = [
        // Top Left, Top Mid, Top Right
        { x: inset + 4, y: inset + 4, radius: pocketR },
        { x: width / 2, y: inset - 2, radius: pocketR * 0.95 },
        { x: width - inset - 4, y: inset + 4, radius: pocketR },
        // Bottom Left, Bottom Mid, Bottom Right
        { x: inset + 4, y: height - inset - 4, radius: pocketR },
        { x: width / 2, y: height - inset + 2, radius: pocketR * 0.95 },
        { x: width - inset - 4, y: height - inset - 4, radius: pocketR }
      ];

      // If balls not yet initialized, rack them
      if (p.balls.length === 0) {
        rackBalls(false);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initial rack
    rackBalls(false);

    // --- Physics Simulation Loop (60 FPS) ---
    let lastTime = performance.now();

    const updatePhysics = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.032);
      lastTime = now;

      const p = physicsRef.current;
      const allBalls = p.cueBall ? [p.cueBall, ...p.balls] : p.balls;
      const inset = p.cushionInset;
      const minX = inset + p.ballRadius;
      const maxX = p.tableWidth - inset - p.ballRadius;
      const minY = inset + p.ballRadius;
      const maxY = p.tableHeight - inset - p.ballRadius;

      // 1. Position & Velocity Updates with Rolling Friction
      allBalls.forEach((b) => {
        if (b.isSunk) {
          // Animate sinking
          b.sinkScale = Math.max(0, b.sinkScale - dt * 2.8);
          b.sinkOpacity = Math.max(0, b.sinkOpacity - dt * 2.8);
          if (b.sinkScale <= 0.05) {
            // Respawn after short delay
            setTimeout(() => {
              b.isSunk = false;
              b.sinkScale = 1.0;
              b.sinkOpacity = 1.0;
              b.vx = 0;
              b.vy = 0;
              if (b.isCue) {
                b.x = inset + (p.tableWidth - inset * 2) * 0.22;
                b.y = p.tableHeight / 2;
              } else {
                b.x = inset + Math.random() * (p.tableWidth - inset * 2) * 0.8;
                b.y = inset + Math.random() * (p.tableHeight - inset * 2);
              }
            }, 1200);
          }
          return;
        }

        // Apply velocities
        b.x += b.vx;
        b.y += b.vy;

        // Rolling friction damping
        b.vx *= 0.987;
        b.vy *= 0.987;

        if (Math.abs(b.vx) < 0.015) b.vx = 0;
        if (Math.abs(b.vy) < 0.015) b.vy = 0;

        // Category magnetic attraction: when a category is selected, gently attract those balls
        if (activeCategory !== 'all' && b.cat === activeCategory && !b.isCue) {
          const centerX = p.tableWidth * 0.5;
          const centerY = p.tableHeight * 0.5;
          const dx = centerX - b.x;
          const dy = centerY - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 80) {
            b.vx += (dx / dist) * 0.12;
            b.vy += (dy / dist) * 0.12;
          }
        }

        // Pocket sinking detection
        p.pockets.forEach((pocket) => {
          const pdx = b.x - pocket.x;
          const pdy = b.y - pocket.y;
          const pDist = Math.sqrt(pdx * pdx + pdy * pdy);
          if (pDist < pocket.radius * 0.75 && !b.isSunk) {
            b.isSunk = true;
            b.vx *= 0.2;
            b.vy *= 0.2;
            playSound('pocket', 0.9);
            setPocketedCount((prev) => prev + 1);
          }
        });

        if (b.isSunk) return;

        // Cushion Bumper Bouncing with restitution
        let hitCushion = false;
        const restitution = 0.84;

        if (b.x < minX) {
          b.x = minX;
          b.vx = -b.vx * restitution;
          hitCushion = true;
        } else if (b.x > maxX) {
          b.x = maxX;
          b.vx = -b.vx * restitution;
          hitCushion = true;
        }

        if (b.y < minY) {
          b.y = minY;
          b.vy = -b.vy * restitution;
          hitCushion = true;
        } else if (b.y > maxY) {
          b.y = maxY;
          b.vy = -b.vy * restitution;
          hitCushion = true;
        }

        if (hitCushion) {
          const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
          if (speed > 1.2) {
            playSound('cushion', Math.min(speed / 8, 1.0));
          }
        }
      });

      // 2. Elastic Ball-to-Ball Collision Solver
      for (let i = 0; i < allBalls.length; i++) {
        const b1 = allBalls[i];
        if (b1.isSunk) continue;

        for (let j = i + 1; j < allBalls.length; j++) {
          const b2 = allBalls[j];
          if (b2.isSunk) continue;

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const distSq = dx * dx + dy * dy;
          const minDist = b1.radius + b2.radius;

          if (distSq < minDist * minDist && distSq > 0) {
            const dist = Math.sqrt(distSq);
            // Normal vector
            const nx = dx / dist;
            const ny = dy / dist;

            // Relative velocity
            const kx = b1.vx - b2.vx;
            const ky = b1.vy - b2.vy;
            const pComponent = kx * nx + ky * ny;

            // Only collide if moving towards each other
            if (pComponent > 0) {
              const impulse = (2 * pComponent) / (b1.mass + b2.mass) * 0.95;

              b1.vx -= (impulse * b2.mass) * nx;
              b1.vy -= (impulse * b2.mass) * ny;
              b2.vx += (impulse * b1.mass) * nx;
              b2.vy += (impulse * b1.mass) * ny;

              // Play resin clack
              const impactSpeed = Math.abs(pComponent);
              if (impactSpeed > 0.4) {
                playSound('clack', Math.min(impactSpeed / 7.0, 1.0));
              }

              // Positional separation to prevent overlapping/sticking
              const overlap = minDist - dist;
              b1.x -= nx * overlap * 0.5;
              b1.y -= ny * overlap * 0.5;
              b2.x += nx * overlap * 0.5;
              b2.y += ny * overlap * 0.5;
            }
          }
        }
      }

      // --- Rendering Pass ---
      ctx.clearRect(0, 0, p.tableWidth, p.tableHeight);

      // 1. Outer Table Rail (Dark Carbon/Mahogany border)
      ctx.save();
      ctx.fillStyle = '#070b14';
      ctx.fillRect(0, 0, p.tableWidth, p.tableHeight);

      // Wood/Carbon rail border with subtle cyan trim
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.25)';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, p.tableWidth - 2, p.tableHeight - 2);

      // Diamond sighting markers along rails
      const drawDiamonds = () => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        const dotsTop = [0.25, 0.5, 0.75];
        dotsTop.forEach(frac => {
          // Top & Bottom rails
          const dx = inset + (p.tableWidth - inset * 2) * frac;
          ctx.beginPath();
          ctx.arc(dx, inset * 0.45, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(dx, p.tableHeight - inset * 0.45, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });

        // Left & Right rails
        const dotsSide = [0.5];
        dotsSide.forEach(frac => {
          const dy = inset + (p.tableHeight - inset * 2) * frac;
          ctx.beginPath();
          ctx.arc(inset * 0.45, dy, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.tableWidth - inset * 0.45, dy, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      };
      drawDiamonds();

      // 2. Playfield Felt with deep cyber gradient
      const feltX = inset;
      const feltY = inset;
      const feltW = p.tableWidth - inset * 2;
      const feltH = p.tableHeight - inset * 2;

      const feltGrad = ctx.createRadialGradient(
        p.tableWidth / 2, p.tableHeight / 2, 80,
        p.tableWidth / 2, p.tableHeight / 2, p.tableWidth * 0.65
      );
      feltGrad.addColorStop(0, '#0f172a');
      feltGrad.addColorStop(0.65, '#0b1120');
      feltGrad.addColorStop(1, '#060a12');

      ctx.fillStyle = feltGrad;
      ctx.fillRect(feltX, feltY, feltW, feltH);

      // Cushion Bumpers with glowing beveled edge
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(feltX, feltY, feltW, feltH);

      // Subtle table markings (Kitchen Head String line)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      const headStringX = inset + feltW * 0.22;
      ctx.moveTo(headStringX, feltY);
      ctx.lineTo(headStringX, feltY + feltH);
      ctx.stroke();
      ctx.setLineDash([]);

      // Head String Center Spot
      ctx.fillStyle = 'rgba(0, 243, 255, 0.3)';
      ctx.beginPath();
      ctx.arc(headStringX, p.tableHeight / 2, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Foot String Spot (Rack Spot)
      const footSpotX = inset + feltW * 0.65;
      ctx.fillStyle = 'rgba(255, 42, 95, 0.3)';
      ctx.beginPath();
      ctx.arc(footSpotX, p.tableHeight / 2, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw 6 Pockets
      p.pockets.forEach((pocket) => {
        // Metallic outer pocket rim
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(pocket.x, pocket.y, pocket.radius + 3, 0, Math.PI * 2);
        ctx.fill();

        // Dark pocket hole
        const holeGrad = ctx.createRadialGradient(
          pocket.x, pocket.y, 4,
          pocket.x, pocket.y, pocket.radius
        );
        holeGrad.addColorStop(0, '#000000');
        holeGrad.addColorStop(1, '#080d1a');

        ctx.fillStyle = holeGrad;
        ctx.beginPath();
        ctx.arc(pocket.x, pocket.y, pocket.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle neon pocket rim glow
        ctx.strokeStyle = 'rgba(0, 243, 255, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(pocket.x, pocket.y, pocket.radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 4. Render All Billiard Balls
      allBalls.forEach((b) => {
        if (b.sinkOpacity <= 0) return;

        ctx.save();
        ctx.globalAlpha = b.sinkOpacity;

        const r = b.radius * b.sinkScale;

        // Ambient drop shadow onto felt
        ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
        ctx.beginPath();
        ctx.ellipse(b.x + 3, b.y + 4, r * 1.05, r * 0.75, 0, 0, Math.PI * 2);
        ctx.fill();

        // Category Highlight Aura
        const isSelected = selectedSkill && selectedSkill.name === b.name;
        const isCatMatch = activeCategory !== 'all' && b.cat === activeCategory;

        if (isSelected || isCatMatch) {
          ctx.strokeStyle = isSelected ? '#00f3ff' : b.color;
          ctx.lineWidth = isSelected ? 3.5 : 2;
          ctx.beginPath();
          ctx.arc(b.x, b.y, r + 5 + Math.sin(now * 0.008) * 2, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Clip region for ball
        ctx.beginPath();
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.clip();

        if (b.isCue) {
          // --- Pure White Cue Ball ---
          const cueGrad = ctx.createRadialGradient(
            b.x - r * 0.35, b.y - r * 0.35, r * 0.1,
            b.x, b.y, r
          );
          cueGrad.addColorStop(0, '#ffffff');
          cueGrad.addColorStop(0.65, '#e2e8f0');
          cueGrad.addColorStop(1, '#94a3b8');

          ctx.fillStyle = cueGrad;
          ctx.fill();

          // Cyber Reticle on Cue Ball
          ctx.strokeStyle = 'rgba(0, 243, 255, 0.75)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(b.x, b.y, r * 0.45, 0, Math.PI * 2);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(b.x - r * 0.55, b.y);
          ctx.lineTo(b.x + r * 0.55, b.y);
          ctx.moveTo(b.x, b.y - r * 0.55);
          ctx.lineTo(b.x, b.y + r * 0.55);
          ctx.stroke();

        } else {
          // --- Numbered Skill Billiard Ball (Solids & Stripes) ---
          if (b.stripe) {
            // White body with colored center stripe
            const bodyGrad = ctx.createRadialGradient(
              b.x - r * 0.35, b.y - r * 0.35, r * 0.1,
              b.x, b.y, r
            );
            bodyGrad.addColorStop(0, '#ffffff');
            bodyGrad.addColorStop(0.8, '#cbd5e1');
            bodyGrad.addColorStop(1, '#64748b');

            ctx.fillStyle = bodyGrad;
            ctx.fill();

            // Wide center colored stripe
            ctx.fillStyle = b.color;
            ctx.fillRect(b.x - r, b.y - r * 0.48, r * 2, r * 0.96);

          } else {
            // Solid Colored Ball
            const solidGrad = ctx.createRadialGradient(
              b.x - r * 0.35, b.y - r * 0.35, r * 0.1,
              b.x, b.y, r
            );
            solidGrad.addColorStop(0, '#ffffff');
            solidGrad.addColorStop(0.25, b.color);
            solidGrad.addColorStop(0.85, b.color);
            solidGrad.addColorStop(1, '#050a14');

            ctx.fillStyle = solidGrad;
            ctx.fill();
          }

          // Center White Number Badge Circle
          const badgeR = r * 0.48;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(b.x, b.y, badgeR, 0, Math.PI * 2);
          ctx.fill();

          // Black number ring border
          ctx.strokeStyle = 'rgba(0,0,0,0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Skill Number inside center circle
          ctx.fillStyle = '#0f172a';
          ctx.font = `bold ${Math.round(r * 0.48)}px var(--font-mono, monospace)`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${b.num}`, b.x, b.y);
        }

        // Glossy 3D Specular Highlight Arc
        const glossGrad = ctx.createRadialGradient(
          b.x - r * 0.38, b.y - r * 0.38, 1,
          b.x - r * 0.38, b.y - r * 0.38, r * 0.65
        );
        glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
        glossGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.25)');
        glossGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = glossGrad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Skill Label: Sleek Cyber Pill Badge on hover/selected, or clean tag while moving
        const isHovered = p.hoveredBall && p.hoveredBall.id === b.id;
        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);

        if ((isHovered || isSelected || speed > 0.4) && !b.isSunk && b.sinkScale > 0.8) {
          ctx.save();
          const labelText = b.isCue ? '🎯 CUE BALL' : `${b.icon} ${b.name}`;
          ctx.font = `bold 11px var(--font-mono, monospace)`;

          if (isHovered || isSelected) {
            // High-contrast floating pill badge
            const textMetrics = ctx.measureText(labelText);
            const badgeW = textMetrics.width + 16;
            const badgeH = 22;
            const badgeX = b.x - badgeW / 2;
            const badgeY = b.y - r - 26;

            ctx.fillStyle = 'rgba(7, 10, 18, 0.92)';
            ctx.strokeStyle = isSelected ? '#00f3ff' : b.color || '#00f3ff';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            if (ctx.roundRect) {
              ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 6);
            } else {
              ctx.rect(badgeX, badgeY, badgeW, badgeH);
            }
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = isSelected ? '#00f3ff' : '#ffffff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(labelText, b.x, badgeY + badgeH / 2);
          } else if (speed > 0.4) {
            // Gentle label while rolling
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.shadowColor = '#000';
            ctx.shadowBlur = 4;
            ctx.fillText(labelText, b.x, b.y + r + 3);
          }
          ctx.restore();
        }
      });

      // 5. Cue Stick & Aiming Guideline (When dragging to shoot)
      if (p.aiming && p.cueBall && !p.cueBall.isSunk) {
        const cb = p.cueBall;
        const dx = p.aimCurrent.x - p.aimStart.x;
        const dy = p.aimCurrent.y - p.aimStart.y;
        const pullDist = Math.sqrt(dx * dx + dy * dy);

        if (pullDist > 5) {
          // Aim direction (opposite of pull-back)
          const angle = Math.atan2(dy, dx);
          const shotAngle = angle + Math.PI; // Shoot forwards!
          const maxPower = 160;
          const powerFraction = Math.min(pullDist, maxPower) / maxPower;

          // Dotted laser forward trajectory
          ctx.save();
          ctx.strokeStyle = 'rgba(0, 243, 255, 0.7)';
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 6]);
          ctx.beginPath();
          ctx.moveTo(cb.x, cb.y);
          const targetX = cb.x + Math.cos(shotAngle) * (180 + powerFraction * 240);
          const targetY = cb.y + Math.sin(shotAngle) * (180 + powerFraction * 240);
          ctx.lineTo(targetX, targetY);
          ctx.stroke();
          ctx.setLineDash([]);

          // Glowing Power Ring around Cue Ball
          ctx.strokeStyle = `hsl(${180 - powerFraction * 120}, 100%, 50%)`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(cb.x, cb.y, cb.radius + 6, 0, Math.PI * 2 * powerFraction);
          ctx.stroke();

          // Physical Wooden/Carbon Cue Stick behind Cue Ball
          const stickLength = 220;
          const stickGap = cb.radius + 8 + (pullDist * 0.35); // Moves back as you pull
          const stickStartX = cb.x - Math.cos(shotAngle) * stickGap;
          const stickStartY = cb.y - Math.sin(shotAngle) * stickGap;
          const stickEndX = stickStartX - Math.cos(shotAngle) * stickLength;
          const stickEndY = stickStartY - Math.sin(shotAngle) * stickLength;

          // Cue stick shadow
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(stickStartX + 4, stickStartY + 4);
          ctx.lineTo(stickEndX + 4, stickEndY + 4);
          ctx.stroke();

          // Main Cue Stick Body (Tapered)
          const stickGrad = ctx.createLinearGradient(stickStartX, stickStartY, stickEndX, stickEndY);
          stickGrad.addColorStop(0, '#e2e8f0'); // Tip
          stickGrad.addColorStop(0.1, '#00f3ff'); // Cyber ring
          stickGrad.addColorStop(0.15, '#b45309'); // Wood maple
          stickGrad.addColorStop(0.85, '#78350f'); // Dark wood
          stickGrad.addColorStop(1, '#0f172a'); // Carbon grip

          ctx.strokeStyle = stickGrad;
          ctx.lineWidth = 6;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(stickStartX, stickStartY);
          ctx.lineTo(stickEndX, stickEndY);
          ctx.stroke();

          ctx.restore();
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    // --- Pointer / Touch Interaction Handlers ---
    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
      const clientY = e.clientY ?? (e.touches ? e.touches[0].clientY : 0);
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const handlePointerDown = (e) => {
      const pos = getPos(e);
      const p = physicsRef.current;
      const allBalls = p.cueBall ? [p.cueBall, ...p.balls] : p.balls;

      // Check if clicking directly on a ball
      let clickedBall = null;
      for (let b of allBalls) {
        const dx = pos.x - b.x;
        const dy = pos.y - b.y;
        if (Math.sqrt(dx * dx + dy * dy) <= b.radius * 1.25) {
          clickedBall = b;
          break;
        }
      }

      if (clickedBall) {
        if (clickedBall.isCue) {
          // Initiate Cue Aiming
          p.aiming = true;
          p.aimStart = pos;
          p.aimCurrent = pos;
        } else {
          // Select & inspect the skill!
          setSelectedSkill(clickedBall);
          // And allow dragging/flicking it
          p.draggedBall = clickedBall;
          p.dragOffset = { x: pos.x - clickedBall.x, y: pos.y - clickedBall.y };
          p.dragLastPos = pos;
          p.dragLastTime = performance.now();
        }
      } else {
        // Clicking on felt table initiates Cue aiming if cue ball is present
        p.aiming = true;
        p.aimStart = pos;
        p.aimCurrent = pos;
      }
    };

    const handlePointerMove = (e) => {
      const pos = getPos(e);
      const p = physicsRef.current;

      if (p.aiming) {
        p.aimCurrent = pos;
      } else if (p.draggedBall) {
        const b = p.draggedBall;
        const now = performance.now();
        const dt = Math.max(1, now - (p.dragLastTime || now));

        // Calculate flick velocity
        if (p.dragLastPos) {
          b.vx = ((pos.x - p.dragLastPos.x) / dt) * 12.0;
          b.vy = ((pos.y - p.dragLastPos.y) / dt) * 12.0;
        }

        b.x = pos.x - p.dragOffset.x;
        b.y = pos.y - p.dragOffset.y;
        p.dragLastPos = pos;
        p.dragLastTime = now;
      } else {
        // Track hovered ball
        const allBalls = p.cueBall ? [p.cueBall, ...p.balls] : p.balls;
        let foundHover = null;
        for (let b of allBalls) {
          const dx = pos.x - b.x;
          const dy = pos.y - b.y;
          if (Math.sqrt(dx * dx + dy * dy) <= b.radius * 1.3) {
            foundHover = b;
            break;
          }
        }
        p.hoveredBall = foundHover;
        canvas.style.cursor = foundHover ? (foundHover.isCue ? 'crosshair' : 'pointer') : 'crosshair';
      }
    };

    const handlePointerUp = () => {
      const p = physicsRef.current;
      if (p.aiming && p.cueBall) {
        const dx = p.aimCurrent.x - p.aimStart.x;
        const dy = p.aimCurrent.y - p.aimStart.y;
        const pullDist = Math.sqrt(dx * dx + dy * dy);

        if (pullDist > 8) {
          const maxPower = 150;
          const power = Math.min(pullDist, maxPower) / maxPower;
          const angle = Math.atan2(dy, dx) + Math.PI; // Shoot forwards!
          const strikeSpeed = 6 + power * 26; // High energy velocity

          p.cueBall.vx = Math.cos(angle) * strikeSpeed;
          p.cueBall.vy = Math.sin(angle) * strikeSpeed;
          playSound('strike', Math.max(0.4, power));
        }
      }

      p.aiming = false;
      p.draggedBall = null;
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [rackBalls, playSound, activeCategory, selectedSkill]);

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(s => s.cat === activeCategory);

  return (
    <section id="skills" style={{ padding: '90px 0 100px', position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span className="section-tag section-tag-cyan">
              🎱 INTERACTIVE BILLIARD SKILL MATRIX
            </span>
          </div>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
            Mastery &amp; <span className="gradient-text">Engineering Skillset</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '10px', fontSize: '0.96rem', maxWidth: '580px', margin: '10px auto 0' }}>
            Interactive physics arena: Aim the Cue Ball, break the rack, toss skill balls, or inspect deep technical proficiencies.
          </p>
        </div>

        {/* Top Controls Row: Category Filter Badges + Mode Switcher & Audio */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '24px'
          }}
        >
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: activeCategory === cat.id
                    ? 'linear-gradient(135deg, rgba(0, 243, 255, 0.2) 0%, rgba(0, 150, 255, 0.25) 100%)'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: activeCategory === cat.id ? '#00f3ff' : 'var(--text-dim)',
                  border: `1px solid ${activeCategory === cat.id ? 'rgba(0, 243, 255, 0.5)' : 'var(--border-subtle)'}`,
                  padding: '7px 16px',
                  borderRadius: '10px',
                  fontSize: '0.80rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-mono)',
                  boxShadow: activeCategory === cat.id ? '0 0 16px rgba(0, 243, 255, 0.2)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.color }} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Action Tools: Break Rack, Re-Rack, Sound, View Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {viewMode === 'billiards' && (
              <>
                {/* Break Rack Button */}
                <button
                  onClick={handleBreakRack}
                  data-cursor="CLICK"
                  title="Execute an explosive high-velocity Billiard Break!"
                  style={{
                    background: 'linear-gradient(135deg, var(--web-red) 0%, #a8002e 100%)',
                    color: '#fff',
                    border: '1px solid rgba(255, 42, 95, 0.5)',
                    padding: '7px 14px',
                    borderRadius: '10px',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 14px rgba(255, 42, 95, 0.3)'
                  }}
                >
                  <Flame size={13} />
                  <span>BREAK RACK</span>
                </button>

                {/* Reset / Rack 'Em */}
                <button
                  onClick={handleResetRack}
                  data-cursor="CLICK"
                  title="Re-rack balls into pyramid triangle"
                  style={{
                    background: 'rgba(7, 10, 18, 0.75)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)',
                    padding: '7px 12px',
                    borderRadius: '10px',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <RotateCcw size={12} />
                  <span>RACK</span>
                </button>

                {/* Audio Toggle */}
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  data-cursor="CLICK"
                  title={soundEnabled ? 'Mute Billiard Sound' : 'Enable Resin Ball Sound Effects'}
                  style={{
                    background: 'rgba(7, 10, 18, 0.75)',
                    color: soundEnabled ? 'var(--cyber-cyan)' : 'var(--text-dim)',
                    border: '1px solid var(--border-subtle)',
                    padding: '7px 10px',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                </button>
              </>
            )}

            {/* View Mode Toggle */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(7, 10, 18, 0.85)',
                padding: '3px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <button
                onClick={() => setViewMode('billiards')}
                style={{
                  background: viewMode === 'billiards' ? 'rgba(0, 243, 255, 0.15)' : 'transparent',
                  color: viewMode === 'billiards' ? 'var(--cyber-cyan)' : 'var(--text-dim)',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '7px',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                🎱 ARENA
              </button>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  background: viewMode === 'grid' ? 'rgba(0, 243, 255, 0.15)' : 'transparent',
                  color: viewMode === 'grid' ? 'var(--cyber-cyan)' : 'var(--text-dim)',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '7px',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                📋 MATRIX
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Interactive Cyber Billiard Table Arena */}
        {viewMode === 'billiards' && (
          <div style={{ position: 'relative' }}>
            {/* The Pool Table Container */}
            <div
              ref={containerRef}
              className="glass-card-web"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(0, 243, 255, 0.08)',
                border: '2px solid rgba(0, 243, 255, 0.25)',
                background: '#070b14',
                cursor: 'crosshair'
              }}
            >
              <canvas
                ref={canvasRef}
                style={{
                  display: 'block',
                  width: '100%',
                  touchAction: 'none'
                }}
              />

              {/* In-Table Interactive Game Guide Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '16px',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.70rem',
                  color: 'var(--text-muted)',
                  background: 'rgba(7, 10, 18, 0.75)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <span>🎯 DRAG CUE BALL TO AIM &amp; STRIKE</span>
                <span>•</span>
                <span>💥 FLICK ANY BALL</span>
                <span>•</span>
                <span>🔍 CLICK BALL TO INSPECT</span>
              </div>

              {/* In-Table Stats HUD */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '16px',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.70rem',
                  color: 'var(--cyber-cyan)',
                  background: 'rgba(7, 10, 18, 0.75)',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 243, 255, 0.2)'
                }}
              >
                <span>BALLS ON TABLE: {skillItems.length}</span>
                <span>•</span>
                <span>POCKETED: {pocketedCount}</span>
              </div>
            </div>

            {/* Active Selected Skill Inspector HUD Card */}
            {selectedSkill && (
              <div
                className="glass-card-web"
                style={{
                  marginTop: '20px',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 243, 255, 0.35)',
                  background: 'linear-gradient(135deg, rgba(14, 22, 42, 0.95) 0%, rgba(8, 12, 22, 0.98) 100%)',
                  boxShadow: '0 12px 40px rgba(0, 243, 255, 0.12)',
                  position: 'relative'
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSkill(null)}
                  data-cursor="CLICK"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: 'none',
                    color: 'var(--text-muted)',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <X size={15} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  {/* Ball Graphic Avatar */}
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${selectedSkill.color} 55%, #050a14 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${selectedSkill.color}55`,
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      flexShrink: 0
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#ffffff',
                        color: '#0f172a',
                        fontWeight: 900,
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {selectedSkill.num}
                    </div>
                  </div>

                  {/* Title & Domain Tag */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '1.3rem' }}>{selectedSkill.icon}</span>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                        {selectedSkill.name}
                      </h3>
                      <span
                        style={{
                          background: 'rgba(0, 243, 255, 0.12)',
                          border: '1px solid rgba(0, 243, 255, 0.3)',
                          borderRadius: '9999px',
                          padding: '2px 10px',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--cyber-cyan)',
                          fontWeight: 700
                        }}
                      >
                        {selectedSkill.tag}
                      </span>
                    </div>

                    <p style={{ color: 'var(--text-dim)', fontSize: '0.90rem', margin: '6px 0 0', lineHeight: 1.6 }}>
                      {selectedSkill.desc}
                    </p>
                  </div>

                  {/* Proficiency Level Gauge */}
                  <div style={{ minWidth: '160px', textAlign: 'right' }}>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px' }}>
                      PROFICIENCY
                    </div>
                    <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-mono)', fontWeight: 900, color: 'var(--terminal-green)' }}>
                      {selectedSkill.level}
                    </div>
                    <div style={{ height: '6px', width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden', marginTop: '6px' }}>
                      <div
                        style={{
                          height: '100%',
                          width: selectedSkill.level,
                          background: `linear-gradient(90deg, ${selectedSkill.color} 0%, var(--terminal-green) 100%)`,
                          boxShadow: `0 0 10px ${selectedSkill.color}`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* View Mode 2: Compact Matrix Grid View */}
        {viewMode === 'grid' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '18px'
            }}
          >
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="glass-card-web" style={{ padding: '22px', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle at 35% 35%, #fff 0%, ${skill.color} 60%, #000 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0f172a',
                        fontWeight: 900,
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        boxShadow: `0 0 12px ${skill.color}55`
                      }}
                    >
                      {skill.num}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.02rem', fontWeight: '800', color: '#fff', margin: 0 }}>{skill.name}</h3>
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--cyber-cyan)' }}>
                        {skill.tag}
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--terminal-green)',
                      fontWeight: '700',
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.25)',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: '1.6', marginBottom: '16px', minHeight: '44px' }}>
                  {skill.desc}
                </p>

                <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: skill.level,
                      background: `linear-gradient(90deg, ${skill.color} 0%, var(--cyber-cyan) 100%)`,
                      borderRadius: '2px',
                      boxShadow: `0 0 8px ${skill.color}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
