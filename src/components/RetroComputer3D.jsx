import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Terminal, Cpu, Zap, Activity, HardDrive, RefreshCw, Volume2, VolumeX, Maximize2, Minimize2, Move3d, Sparkles } from 'lucide-react';

/**
 * RetroComputer3D Component v5.0 (High-Fidelity edh.dev Edition)
 * Inspired by the Commodore PET 8296 3D Computer on edh.dev
 *
 * Features:
 * - High-Detail 3D Mesh: Sculpted curved CRT monitor hood, deep bezel, curved CRT glass, dual floppy bays, individual mechanical keycaps, and soft contact shadow.
 * - Physics Drag Orbit & Inertia: Smooth 360° rotational momentum when dragging, plus cursor parallax tilt and idle floating bob.
 * - Interactive 3D Keyboard: Typing on real keyboard physically depresses the 3D keycaps and types directly onto the CRT screen!
 * - Camera Zoom / Inspect Mode: Smoothly zooms directly into the CRT display for an immersive vintage terminal experience.
 * - Dynamic CRT Canvas Engine: Scanlines, screen curvature vignette, blinking cursor, and 5 interactive modes.
 * - 4 Phosphor Color Presets & Web Audio API Mechanical Sound Synthesizer.
 */
export default function RetroComputer3D({ isFullScreenLanding = false }) {
  const mountRef = useRef(null);
  const [screenMode, setScreenMode] = useState('telemetry'); // 'telemetry' | 'shell' | 'cluster' | 'f1' | 'matrix'
  const [crtColor, setCrtColor] = useState('cyan'); // 'cyan' | 'green' | 'amber' | 'red'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [shellInput, setShellInput] = useState('');
  const [shellHistory, setShellHistory] = useState([
    'COMMODORE PET 8296 DEVOPS OS v5.0',
    'TYPE COMMANDS ON YOUR KEYBOARD ("skills", "projects", "status", "f1", "clear"):',
    ''
  ]);

  const screenModeRef = useRef(screenMode);
  screenModeRef.current = screenMode;

  const crtColorRef = useRef(crtColor);
  crtColorRef.current = crtColor;

  const isZoomedRef = useRef(isZoomed);
  isZoomedRef.current = isZoomed;

  const shellInputRef = useRef(shellInput);
  shellInputRef.current = shellInput;

  const shellHistoryRef = useRef(shellHistory);
  shellHistoryRef.current = shellHistory;

  const soundEnabledRef = useRef(soundEnabled);
  soundEnabledRef.current = soundEnabled;

  const keypressAnimationTriggerRef = useRef(null);
  const recenterCameraRef = useRef(null);

  // Web Audio API Synthesizer for Mechanical Keyboard Keypresses
  const playKeyClick = (isEnter = false) => {
    if (!soundEnabledRef.current) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = isEnter ? 'sawtooth' : 'square';
      const startFreq = isEnter ? 240 : 360 + Math.random() * 80;
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + (isEnter ? 0.07 : 0.04));

      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (isEnter ? 0.07 : 0.04));

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (isEnter ? 0.08 : 0.05));
    } catch {
      // ignore audio context restrictions
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 420;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    const defaultCameraPos = new THREE.Vector3(0, 0.35, 6.2);
    const zoomedCameraPos = new THREE.Vector3(0, 0.55, 3.1);
    camera.position.copy(defaultCameraPos);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Dynamic 2D Canvas for CRT Screen Texture
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 384;
    const screenCtx = screenCanvas.getContext('2d');
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;

    // 3. Materials
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1a2436,
      roughness: 0.42,
      metalness: 0.28,
    });

    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x090f1a,
      roughness: 0.65,
      metalness: 0.15,
    });

    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false,
    });

    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x2e3a4e,
      roughness: 0.48,
      metalness: 0.22,
    });

    const redKeyMat = new THREE.MeshStandardMaterial({
      color: 0xff1801,
      roughness: 0.35,
      metalness: 0.35,
    });

    const cyanKeyMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.35,
      metalness: 0.35,
    });

    const metallicMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.2,
      metalness: 0.85,
    });

    // 4. Procedural 3D Commodore PET 8296 Model Group
    const computerGroup = new THREE.Group();
    scene.add(computerGroup);

    // A. Contact Ground Shadow (Soft ambient occlusion beneath computer)
    const shadowGeo = new THREE.PlaneGeometry(4.2, 3.8);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const shadowCtx = shadowCanvas.getContext('2d');
    const radGrad = shadowCtx.createRadialGradient(64, 64, 10, 64, 64, 60);
    radGrad.addColorStop(0, 'rgba(0,0,0,0.85)');
    radGrad.addColorStop(0.5, 'rgba(0,0,0,0.4)');
    radGrad.addColorStop(1, 'rgba(0,0,0,0)');
    shadowCtx.fillStyle = radGrad;
    shadowCtx.fillRect(0, 0, 128, 128);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.75, depthWrite: false });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -1.18, 0.2);
    computerGroup.add(shadowMesh);

    // B. Base Chassis (Wedge Body)
    const baseGeo = new THREE.BoxGeometry(3.6, 0.55, 3.2);
    const baseMesh = new THREE.Mesh(baseGeo, chassisMat);
    baseMesh.position.set(0, -0.9, 0.2);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    computerGroup.add(baseMesh);

    // Rubber Feet
    const footGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.06, 16);
    const footMat = new THREE.MeshStandardMaterial({ color: 0x050810, roughness: 0.9 });
    [
      [-1.6, -1.19, 1.4],
      [1.6, -1.19, 1.4],
      [-1.6, -1.19, -1.2],
      [1.6, -1.19, -1.2]
    ].forEach(([x, y, z]) => {
      const foot = new THREE.Mesh(footGeo, footMat);
      foot.position.set(x, y, z);
      computerGroup.add(foot);
    });

    // C. Keyboard Slanted Deck
    const deckGeo = new THREE.BoxGeometry(3.4, 0.28, 1.4);
    const deckMesh = new THREE.Mesh(deckGeo, chassisMat);
    deckMesh.position.set(0, -0.73, 1.1);
    deckMesh.rotation.x = 0.16;
    deckMesh.castShadow = true;
    deckMesh.receiveShadow = true;
    computerGroup.add(deckMesh);

    // D. 3D Keycaps (With Physical Depression Animation Array)
    const keyRows = 4;
    const keyCols = 12;
    const keyGeo = new THREE.BoxGeometry(0.18, 0.12, 0.18);
    const keyMeshes = [];

    for (let r = 0; r < keyRows; r++) {
      for (let c = 0; c < keyCols; c++) {
        const isEnter = (r === 2 && c === keyCols - 1);
        const isSpace = (r === 3 && c >= 4 && c <= 7);
        const isEsc = (r === 0 && c === 0);

        if (isSpace && c > 4) continue; // single wide spacebar

        let kMesh;
        if (isSpace) {
          const spaceGeo = new THREE.BoxGeometry(0.85, 0.12, 0.18);
          kMesh = new THREE.Mesh(spaceGeo, keyMat);
        } else {
          kMesh = new THREE.Mesh(keyGeo, isEnter ? redKeyMat : (isEsc ? cyanKeyMat : keyMat));
        }

        const xPos = isSpace ? 0 : (c - (keyCols - 1) / 2) * 0.24;
        const zPos = 0.65 + r * 0.24;
        const originalY = -0.64 - r * 0.035;

        kMesh.position.set(xPos, originalY, zPos);
        kMesh.rotation.x = 0.16;
        kMesh.userData = { originalY, depressTimer: 0 };
        computerGroup.add(kMesh);
        keyMeshes.push(kMesh);
      }
    }

    // Trigger Key Press Animation
    keypressAnimationTriggerRef.current = () => {
      const randKey = keyMeshes[Math.floor(Math.random() * keyMeshes.length)];
      if (randKey) {
        randKey.userData.depressTimer = 8;
      }
    };

    // E. Monitor Hood Enclosure (Sculpted Commodore PET Trapezoid)
    const hoodGeo = new THREE.BoxGeometry(3.2, 2.3, 2.2);
    const hoodMesh = new THREE.Mesh(hoodGeo, chassisMat);
    hoodMesh.position.set(0, 0.55, -0.2);
    hoodMesh.castShadow = true;
    computerGroup.add(hoodMesh);

    // Rear Ventilation Slits
    for (let s = 0; s < 6; s++) {
      const ventGeo = new THREE.BoxGeometry(2.4, 0.04, 0.04);
      const ventMesh = new THREE.Mesh(ventGeo, bezelMat);
      ventMesh.position.set(0, 1.2 - s * 0.14, -1.31);
      computerGroup.add(ventMesh);
    }

    // F. Monitor Front Bezel
    const bezelGeo = new THREE.BoxGeometry(2.9, 2.0, 0.25);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.set(0, 0.55, 0.9);
    computerGroup.add(bezelMesh);

    // G. Curved CRT Screen Surface (Subtly curved cylinder face for authentic CRT glare)
    const screenGeo = new THREE.PlaneGeometry(2.4, 1.6, 8, 8);
    // Add subtle spherical bulge
    const posAttr = screenGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const dist = Math.sqrt(x * x + y * y);
      posAttr.setZ(i, Math.cos(dist * 0.7) * 0.06 - 0.06);
    }
    screenGeo.computeVertexNormals();

    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.58, 1.04);
    computerGroup.add(screenMesh);

    // H. Dual Floppy Disk Unit (Commodore 8050 Style)
    const driveBayGeo = new THREE.BoxGeometry(1.2, 0.22, 0.1);
    const driveBayMesh = new THREE.Mesh(driveBayGeo, bezelMat);
    driveBayMesh.position.set(-0.85, -0.88, 1.76);
    computerGroup.add(driveBayMesh);

    // Silver Drive Labels
    const labelGeo = new THREE.BoxGeometry(0.3, 0.06, 0.02);
    const label0 = new THREE.Mesh(labelGeo, metallicMat);
    label0.position.set(-1.25, -0.84, 1.82);
    computerGroup.add(label0);

    const label1 = new THREE.Mesh(labelGeo, metallicMat);
    label1.position.set(-1.25, -0.93, 1.82);
    computerGroup.add(label1);

    const slot1Geo = new THREE.BoxGeometry(0.7, 0.03, 0.02);
    const slot1Mesh = new THREE.Mesh(slot1Geo, new THREE.MeshBasicMaterial({ color: 0x03050a }));
    slot1Mesh.position.set(-0.75, -0.84, 1.82);
    computerGroup.add(slot1Mesh);

    const slot2Mesh = new THREE.Mesh(slot1Geo, new THREE.MeshBasicMaterial({ color: 0x03050a }));
    slot2Mesh.position.set(-0.75, -0.93, 1.82);
    computerGroup.add(slot2Mesh);

    // Animated Activity LEDs (Drive 0 and Drive 1)
    const ledGeo = new THREE.SphereGeometry(0.032, 16, 16);
    const driveLedMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const driveLed1 = new THREE.Mesh(ledGeo, driveLedMat);
    driveLed1.position.set(-0.35, -0.84, 1.82);
    computerGroup.add(driveLed1);

    const driveLed2 = new THREE.Mesh(ledGeo, new THREE.MeshBasicMaterial({ color: 0xff1801 }));
    driveLed2.position.set(-0.35, -0.93, 1.82);
    computerGroup.add(driveLed2);

    // I. Front Commodore PET 8296 Aluminum Badge
    const badgeGeo = new THREE.BoxGeometry(1.0, 0.14, 0.02);
    const badgeMesh = new THREE.Mesh(badgeGeo, metallicMat);
    badgeMesh.position.set(0.85, -0.88, 1.78);
    computerGroup.add(badgeMesh);

    // 5. Studio 3-Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f2fe, 1.9);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xff1801, 1.3);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    const topRimLight = new THREE.DirectionalLight(0xffffff, 0.9);
    topRimLight.position.set(0, 6, -3);
    scene.add(topRimLight);

    const screenGlowLight = new THREE.PointLight(0x00f2fe, 1.8, 3.8);
    screenGlowLight.position.set(0, 0.6, 1.3);
    scene.add(screenGlowLight);

    // 6. Interactive 3D Orbit Drag & Inertia Physics Controls
    let isDragging = false;
    let previousMousePos = { x: 0, y: 0 };
    let angularVelocity = { x: 0, y: 0 };
    let currentRotation = { x: 0.06, y: -0.15 };
    let mouseParallax = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePos = { x: e.clientX, y: e.clientY };
      angularVelocity = { x: 0, y: 0 };
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseParallax = { x: normX * 0.35, y: normY * 0.25 };

      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePos.x;
      const deltaY = e.clientY - previousMousePos.y;

      angularVelocity.y = deltaX * 0.007;
      angularVelocity.x = deltaY * 0.007;

      currentRotation.y += angularVelocity.y;
      currentRotation.x += angularVelocity.x;
      currentRotation.x = Math.max(-0.45, Math.min(0.5, currentRotation.x));

      previousMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch controls for mobile/tablet
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        angularVelocity = { x: 0, y: 0 };
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePos.x;
      const deltaY = e.touches[0].clientY - previousMousePos.y;

      angularVelocity.y = deltaX * 0.007;
      angularVelocity.x = deltaY * 0.007;

      currentRotation.y += angularVelocity.y;
      currentRotation.x += angularVelocity.x;
      currentRotation.x = Math.max(-0.45, Math.min(0.5, currentRotation.x));

      previousMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Global Keydown Listener (typing directly on physical keyboard animates 3D PET keys)
    const handleGlobalKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (keypressAnimationTriggerRef.current) {
        keypressAnimationTriggerRef.current();
      }

      if (e.key === 'Enter') {
        playKeyClick(true);
        if (screenModeRef.current === 'shell') {
          const cmd = shellInputRef.current.trim().toLowerCase();
          const newHist = [...shellHistoryRef.current, `devops@GrayViper:~$ ${shellInputRef.current}`];

          if (cmd === 'help') {
            newHist.push('COMMANDS: skills, projects, status, f1, whoami, clear');
          } else if (cmd === 'skills') {
            newHist.push('STACK: Kubernetes, Docker, Terraform, FastAPI, Next.js');
          } else if (cmd === 'projects') {
            newHist.push('REPOS: Career_Genie, hi_links, Cura-AI-Health');
          } else if (cmd === 'status') {
            newHist.push('STATUS: 100% Cluster Health · 99.9% Uptime · 6/6 Pods');
          } else if (cmd === 'f1') {
            newHist.push('F1 SPEED: 328 km/h · DRS OPEN · 1.82s Pitstop Deploy');
          } else if (cmd === 'whoami') {
            newHist.push('USER: Chakka Chinni Krishna (@GrayViper) · LPU B.Tech CSE');
          } else if (cmd === 'clear') {
            setShellHistory(['COMMODORE PET 8296 DEVOPS OS v5.0', '']);
            setShellInput('');
            return;
          } else if (cmd) {
            newHist.push(`COMMAND EXECUTED: "${cmd}"`);
          }

          setShellHistory(newHist);
          setShellInput('');
        }
      } else if (e.key === 'Backspace') {
        playKeyClick(false);
        if (screenModeRef.current === 'shell') {
          setShellInput(prev => prev.slice(0, -1));
        }
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        playKeyClick(false);
        if (screenModeRef.current === 'shell') {
          setShellInput(prev => prev + e.key);
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);

    // Recenter view function
    recenterCameraRef.current = () => {
      currentRotation = { x: 0.06, y: -0.15 };
      angularVelocity = { x: 0, y: 0 };
    };

    // 7. Dynamic CRT Screen Content Drawing Loop
    let tick = 0;

    const telemetryLines = [
      '> COMMODORE PET 8296 DEVOPS OS [ONLINE]',
      '> OPERATOR: CHINNI KRISHNA (@GrayViper)',
      '> ORCHESTRATION: AWS EKS 1.30 (ACTIVE)',
      '> GITOPS: ARGOCD SYNCHRONIZED [1.82s SLA]',
      '> CI/CD: GITHUB ACTIONS PIPELINES (99.9%)',
      '> BACKEND: FASTAPI REST + MONGODB ATLAS',
      '> AGENTIC AI: MULTI-AGENT WORKFLOWS (XEBIA)',
      '> READY FOR COMMAND INPUT...'
    ];

    const clusterNodes = [
      'NODE-EKS-01 [READY] 2.4GHz / 8GB RAM',
      'NODE-EKS-02 [READY] 2.4GHz / 8GB RAM',
      'POD-CAREER-GENIE [RUNNING] 100% HEALTH',
      'POD-HI-LINKS-WEB [RUNNING] 100% HEALTH',
      'POD-CURA-AI-SVC [RUNNING] 100% HEALTH',
      'INGRESS-ALB [HEALTHY] 0 DOWNTIME'
    ];

    const matrixChars = '01010110 K8S DOCKER TF AWS NEXT FASTAPI REPO GITHUB 01';

    const renderScreen = () => {
      tick++;

      // Color Theme Palette
      const colorScheme = crtColorRef.current;
      let primaryColor = '#00f2fe';
      let secondaryColor = '#ff1801';
      let accentColor = '#10b981';

      if (colorScheme === 'green') {
        primaryColor = '#10b981';
        secondaryColor = '#4ade80';
        accentColor = '#22c55e';
      } else if (colorScheme === 'amber') {
        primaryColor = '#fdb813';
        secondaryColor = '#ff8800';
        accentColor = '#fbbf24';
      } else if (colorScheme === 'red') {
        primaryColor = '#ff1801';
        secondaryColor = '#fdb813';
        accentColor = '#00f2fe';
      }

      screenGlowLight.color.set(primaryColor);

      // Clear Screen with Retro Dark CRT Background
      screenCtx.fillStyle = '#03060f';
      screenCtx.fillRect(0, 0, 512, 384);

      // CRT Scanlines
      screenCtx.fillStyle = 'rgba(0, 242, 254, 0.04)';
      for (let y = 0; y < 384; y += 4) {
        screenCtx.fillRect(0, y, 512, 1.5);
      }

      // CRT Curved Screen Vignette & Border
      screenCtx.strokeStyle = `${primaryColor}40`;
      screenCtx.lineWidth = 6;
      screenCtx.strokeRect(8, 8, 496, 368);

      const mode = screenModeRef.current;

      if (mode === 'telemetry') {
        // Screen Header Bar
        screenCtx.fillStyle = `${primaryColor}25`;
        screenCtx.fillRect(14, 14, 484, 32);
        screenCtx.fillStyle = primaryColor;
        screenCtx.font = 'bold 15px "Fira Code", monospace';
        screenCtx.fillText('🏁 DEVOPS & FULL-STACK TELEMETRY HUD', 24, 36);

        screenCtx.font = '14px "Fira Code", monospace';
        const visibleLines = Math.min(telemetryLines.length, Math.floor(tick / 16) + 1);

        for (let i = 0; i < visibleLines; i++) {
          const yPos = 76 + i * 28;
          if (i === 0) screenCtx.fillStyle = accentColor;
          else if (i === 1) screenCtx.fillStyle = secondaryColor;
          else if (i === 2) screenCtx.fillStyle = primaryColor;
          else screenCtx.fillStyle = '#cbd5e1';

          screenCtx.fillText(telemetryLines[i], 24, yPos);
        }

        if (Math.floor(tick / 15) % 2 === 0) {
          screenCtx.fillStyle = primaryColor;
          const cursorY = 76 + Math.min(visibleLines, telemetryLines.length - 1) * 28;
          screenCtx.fillRect(470, cursorY - 12, 10, 15);
        }
      } else if (mode === 'cluster') {
        screenCtx.fillStyle = `${primaryColor}25`;
        screenCtx.fillRect(14, 14, 484, 32);
        screenCtx.fillStyle = primaryColor;
        screenCtx.font = 'bold 15px "Fira Code", monospace';
        screenCtx.fillText('☸️ KUBERNETES CLUSTER & POD TOPOLOGY', 24, 36);

        screenCtx.font = '13px "Fira Code", monospace';
        for (let i = 0; i < clusterNodes.length; i++) {
          screenCtx.fillStyle = accentColor;
          screenCtx.fillText(`✔ ${clusterNodes[i]}`, 24, 80 + i * 32);
        }

        screenCtx.fillStyle = secondaryColor;
        screenCtx.fillText('> ALL 6/6 MICROSERVICES HEALTHY', 24, 300);
      } else if (mode === 'f1') {
        screenCtx.fillStyle = 'rgba(255, 24, 1, 0.25)';
        screenCtx.fillRect(14, 14, 484, 32);
        screenCtx.fillStyle = '#ff1801';
        screenCtx.font = 'bold 15px "Fira Code", monospace';
        screenCtx.fillText('🏎️ ORACLE RED BULL TELEMETRY FEED', 24, 36);

        screenCtx.fillStyle = '#fff';
        screenCtx.font = 'bold 36px "Fira Code", monospace';
        screenCtx.fillText('328 KM/H', 24, 110);

        screenCtx.fillStyle = primaryColor;
        screenCtx.font = '14px "Fira Code", monospace';
        screenCtx.fillText('GEAR: 7 | RPM: 11,400 | DRS: ACTIVE', 24, 150);
        screenCtx.fillText('PITSTOP DEPLOYMENT SLA: 1.82s', 24, 185);
        screenCtx.fillText('PROMETHEUS SCRAPING: 60 FPS', 24, 220);
        screenCtx.fillText('DRIVER: @GrayViper (CHINNI KRISHNA)', 24, 255);
      } else if (mode === 'matrix') {
        screenCtx.fillStyle = accentColor;
        screenCtx.font = '13px "Fira Code", monospace';
        screenCtx.fillText('// STREAMING LIVE CLOUD LOGS...', 24, 40);
        for (let r = 0; r < 10; r++) {
          const text = matrixChars.substring((tick + r * 5) % 30, (tick + r * 5) % 30 + 26);
          screenCtx.fillStyle = r % 2 === 0 ? accentColor : primaryColor;
          screenCtx.fillText(`> [LOG_${r + 100}] ${text}`, 24, 75 + r * 28);
        }
      } else {
        // Direct Interactive Shell Mode
        screenCtx.fillStyle = `${primaryColor}25`;
        screenCtx.fillRect(14, 14, 484, 32);
        screenCtx.fillStyle = primaryColor;
        screenCtx.font = 'bold 15px "Fira Code", monospace';
        screenCtx.fillText('💻 DIRECT KEYBOARD SHELL (TYPE ANYWHERE)', 24, 36);

        const history = shellHistoryRef.current;
        screenCtx.font = '13px "Fira Code", monospace';

        const maxShow = 7;
        const startIdx = Math.max(0, history.length - maxShow);

        for (let i = startIdx; i < history.length; i++) {
          screenCtx.fillStyle = '#94a3b8';
          screenCtx.fillText(history[i], 24, 76 + (i - startIdx) * 26);
        }

        const promptY = 76 + Math.min(history.length - startIdx, maxShow) * 26;
        screenCtx.fillStyle = primaryColor;
        screenCtx.fillText(`devops@GrayViper:~$ ${shellInputRef.current}`, 24, promptY);

        if (Math.floor(tick / 15) % 2 === 0) {
          const textWidth = screenCtx.measureText(`devops@GrayViper:~$ ${shellInputRef.current}`).width;
          screenCtx.fillRect(26 + textWidth, promptY - 12, 9, 15);
        }
      }

      screenTexture.needsUpdate = true;

      // Animate Drive LED activity blink
      if (tick % 20 === 0) {
        driveLed1.material.color.set(Math.random() > 0.35 ? 0x10b981 : 0x053018);
      }

      // Animate 3D physical keycap depression bounce
      keyMeshes.forEach(k => {
        if (k.userData.depressTimer > 0) {
          k.userData.depressTimer--;
          k.position.y = k.userData.originalY - 0.04;
        } else {
          k.position.y = k.userData.originalY;
        }
      });
    };

    // 8. Main Render Loop with Physics Inertia Damping & Camera Zoom Lerp
    let animationFrameId;
    const animate = () => {
      renderScreen();

      // Inertia decay when not dragging
      if (!isDragging) {
        angularVelocity.x *= 0.94;
        angularVelocity.y *= 0.94;
        currentRotation.x += angularVelocity.x;
        currentRotation.y += angularVelocity.y;
      }

      // Smooth camera zoom transition
      const targetCamPos = isZoomedRef.current ? zoomedCameraPos : defaultCameraPos;
      camera.position.lerp(targetCamPos, 0.08);

      // Auto idle sway + parallax
      const effectiveRotY = currentRotation.y + mouseParallax.x + (isDragging || isZoomedRef.current ? 0 : Math.sin(tick * 0.015) * 0.035);
      const effectiveRotX = currentRotation.x - mouseParallax.y;

      computerGroup.rotation.y += (effectiveRotY - computerGroup.rotation.y) * 0.08;
      computerGroup.rotation.x += (effectiveRotX - computerGroup.rotation.x) * 0.08;
      computerGroup.position.y = -0.08 + Math.sin(tick * 0.025) * 0.04;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 540;
      const newHeight = container.clientHeight || 420;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', handleGlobalKeyDown);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleModeChange = (mode) => {
    playKeyClick();
    setScreenMode(mode);
  };

  const handleColorChange = (color) => {
    playKeyClick();
    setCrtColor(color);
  };

  const toggleZoom = () => {
    playKeyClick();
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="glass-card-web" style={{
      padding: '24px',
      borderRadius: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Header Bar & Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '14px',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="section-tag" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
            🖥️ COMMODORE PET 8296 (EDH.DEV 3D)
          </span>
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--cyber-cyan)' }}>
            THREE.JS INTERACTIVE
          </span>
        </div>

        {/* Phosphor Colors & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* Phosphor Color Selector */}
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.05)', padding: '3px 6px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
            {[
              { id: 'cyan', color: '#00f2fe' },
              { id: 'green', color: '#10b981' },
              { id: 'amber', color: '#fdb813' },
              { id: 'red', color: '#ff1801' }
            ].map(c => (
              <button
                key={c.id}
                onClick={() => handleColorChange(c.id)}
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: c.color,
                  border: crtColor === c.id ? '2px solid #fff' : 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
                title={`${c.id} phosphor CRT mode`}
              />
            ))}
          </div>

          {/* Zoom / Inspect Screen Button */}
          <button
            onClick={toggleZoom}
            style={{
              background: isZoomed ? 'var(--f1-red)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${isZoomed ? 'var(--f1-red)' : 'var(--border-subtle)'}`,
              color: '#fff',
              borderRadius: '8px',
              padding: '5px 8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)'
            }}
            title={isZoomed ? 'Zoom Out to Full Computer' : 'Inspect Screen Up Close'}
          >
            {isZoomed ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
            <span>{isZoomed ? 'Zoom Out' : 'Inspect'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-subtle)',
              color: soundEnabled ? 'var(--cyber-cyan)' : 'var(--text-dim)',
              borderRadius: '8px',
              padding: '5px 8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            title={soundEnabled ? 'Mute Key Clicks' : 'Enable Key Clicks'}
          >
            {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
          </button>

          {/* Recenter 3D View */}
          <button
            onClick={() => recenterCameraRef.current && recenterCameraRef.current()}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-dim)',
              borderRadius: '8px',
              padding: '5px 8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)'
            }}
            title="Reset 3D camera angle"
          >
            <RefreshCw size={12} />
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: isFullScreenLanding ? 'clamp(400px, 54vh, 580px)' : '440px',
          cursor: 'grab',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none'
        }}
        title="Click and drag to rotate the 3D computer in 360°!"
      />

      {/* Screen Mode Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginTop: '12px' }}>
        {[
          { id: 'telemetry', label: 'Telemetry', icon: <Terminal size={12} /> },
          { id: 'shell', label: 'Shell (Type)', icon: <Activity size={12} /> },
          { id: 'cluster', label: 'Cluster', icon: <Cpu size={12} /> },
          { id: 'f1', label: 'F1 Speed', icon: <Zap size={12} /> },
          { id: 'matrix', label: 'Logs', icon: <Sparkles size={12} /> }
        ].map(btn => (
          <button
            key={btn.id}
            onClick={() => handleModeChange(btn.id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              background: screenMode === btn.id ? 'var(--f1-red)' : 'rgba(255,255,255,0.04)',
              color: screenMode === btn.id ? '#fff' : 'var(--text-dim)',
              border: `1px solid ${screenMode === btn.id ? 'var(--f1-red)' : 'var(--border-subtle)'}`,
              padding: '7px 0',
              borderRadius: '8px',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {btn.icon} {btn.label}
          </button>
        ))}
      </div>

      {/* Footer Instruction Hint */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '12px',
        paddingTop: '12px',
        borderTop: '1px solid var(--border-subtle)',
        fontSize: '0.74rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-dim)'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Move3d size={13} color="var(--cyber-cyan)" /> Drag to spin 3D model · Type on keyboard to interact
        </span>
        <span style={{ color: 'var(--terminal-green)', fontWeight: '700' }}>● THREE.JS 3D WEBGL</span>
      </div>
    </div>
  );
}
