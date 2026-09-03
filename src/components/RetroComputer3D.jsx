import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Volume2, VolumeX, RefreshCw } from 'lucide-react';

/**
 * RetroComputer3D Component - Full 3D Computer Landing Stage
 *
 * Features:
 * - Edge-to-edge canvas displaying the FULL 3D Commodore PET 8296 Computer on initial page load.
 * - 1024x768 High-Definition CRT Texture for crystal-clear text readability.
 * - 360° mouse drag orbit with physics momentum + subtle cursor parallax.
 * - Interactive Amber/Cyan/Green phosphor selector.
 * - Web Audio API synthesized mechanical keyboard clicks.
 */
export default function RetroComputer3D({ isFullScreenLanding = true, onEnterPortfolio }) {
  const mountRef = useRef(null);
  const [crtColor, setCrtColor] = useState('amber'); // 'amber' (edh.dev default) | 'cyan' | 'green' | 'red'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [shellInput, setShellInput] = useState('');
  const [shellHistory, setShellHistory] = useState([
    'COMMODORE PET 8296 DEVOPS OS v5.0',
    'TYPE COMMANDS ON YOUR KEYBOARD ("skills", "projects", "status", "clear"):',
    ''
  ]);

  const onEnterPortfolioRef = useRef(onEnterPortfolio);
  onEnterPortfolioRef.current = onEnterPortfolio;

  const crtColorRef = useRef(crtColor);
  crtColorRef.current = crtColor;

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

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    // Framed to showcase the entire 3D computer (monitor + keyboard + chassis + desk shadow)
    const defaultCameraPos = new THREE.Vector3(0, 0.38, 5.3);
    const scrolledCameraPos = new THREE.Vector3(0, 0.48, 6.2);
    camera.position.copy(defaultCameraPos);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    // 2. High-Definition 1024x768 Dynamic 2D Canvas for CRT Screen Texture
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 768;
    const screenCtx = screenCanvas.getContext('2d');
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;

    // 3. Materials
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x161e2e,
      roughness: 0.42,
      metalness: 0.28,
    });

    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x080d16,
      roughness: 0.65,
      metalness: 0.15,
    });

    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false,
    });

    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x243044,
      roughness: 0.5,
      metalness: 0.2,
    });

    const redKeyMat = new THREE.MeshStandardMaterial({
      color: 0xff1801,
      roughness: 0.35,
      metalness: 0.35,
    });

    const cyanKeyMat = new THREE.MeshStandardMaterial({
      color: 0xfdb813,
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

    // Contact Ground Shadow
    const shadowGeo = new THREE.PlaneGeometry(4.8, 4.2);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const shadowCtx = shadowCanvas.getContext('2d');
    const radGrad = shadowCtx.createRadialGradient(128, 128, 20, 128, 128, 120);
    radGrad.addColorStop(0, 'rgba(0,0,0,0.92)');
    radGrad.addColorStop(0.5, 'rgba(0,0,0,0.45)');
    radGrad.addColorStop(1, 'rgba(0,0,0,0)');
    shadowCtx.fillStyle = radGrad;
    shadowCtx.fillRect(0, 0, 256, 256);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.82, depthWrite: false });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -1.18, 0.2);
    computerGroup.add(shadowMesh);

    // Base Chassis
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

    // Keyboard Slanted Deck
    const deckGeo = new THREE.BoxGeometry(3.4, 0.28, 1.4);
    const deckMesh = new THREE.Mesh(deckGeo, chassisMat);
    deckMesh.position.set(0, -0.73, 1.1);
    deckMesh.rotation.x = 0.16;
    deckMesh.castShadow = true;
    deckMesh.receiveShadow = true;
    computerGroup.add(deckMesh);

    // 3D Keycaps
    const keyRows = 4;
    const keyCols = 12;
    const keyGeo = new THREE.BoxGeometry(0.18, 0.12, 0.18);
    const keyMeshes = [];

    for (let r = 0; r < keyRows; r++) {
      for (let c = 0; c < keyCols; c++) {
        const isEnter = (r === 2 && c === keyCols - 1);
        const isSpace = (r === 3 && c >= 4 && c <= 7);
        const isEsc = (r === 0 && c === 0);

        if (isSpace && c > 4) continue;

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

    keypressAnimationTriggerRef.current = () => {
      const randKey = keyMeshes[Math.floor(Math.random() * keyMeshes.length)];
      if (randKey) randKey.userData.depressTimer = 8;
    };

    // Monitor Hood Enclosure
    const hoodGeo = new THREE.BoxGeometry(3.2, 2.3, 2.2);
    const hoodMesh = new THREE.Mesh(hoodGeo, chassisMat);
    hoodMesh.position.set(0, 0.55, -0.2);
    hoodMesh.castShadow = true;
    computerGroup.add(hoodMesh);

    // Ventilation Slits
    for (let s = 0; s < 6; s++) {
      const ventGeo = new THREE.BoxGeometry(2.4, 0.04, 0.04);
      const ventMesh = new THREE.Mesh(ventGeo, bezelMat);
      ventMesh.position.set(0, 1.2 - s * 0.14, -1.31);
      computerGroup.add(ventMesh);
    }

    // Monitor Front Bezel
    const bezelGeo = new THREE.BoxGeometry(2.9, 2.0, 0.25);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.set(0, 0.55, 0.9);
    computerGroup.add(bezelMesh);

    // Curved CRT Screen Surface
    const screenGeo = new THREE.PlaneGeometry(2.4, 1.6, 8, 8);
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

    // Dual Floppy Disk Unit
    const driveBayGeo = new THREE.BoxGeometry(1.2, 0.22, 0.1);
    const driveBayMesh = new THREE.Mesh(driveBayGeo, bezelMat);
    driveBayMesh.position.set(-0.85, -0.88, 1.76);
    computerGroup.add(driveBayMesh);

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

    const ledGeo = new THREE.SphereGeometry(0.032, 16, 16);
    const driveLed1 = new THREE.Mesh(ledGeo, new THREE.MeshBasicMaterial({ color: 0x10b981 }));
    driveLed1.position.set(-0.35, -0.84, 1.82);
    computerGroup.add(driveLed1);

    const driveLed2 = new THREE.Mesh(ledGeo, new THREE.MeshBasicMaterial({ color: 0xff1801 }));
    driveLed2.position.set(-0.35, -0.93, 1.82);
    computerGroup.add(driveLed2);

    // Front Commodore PET 8296 Aluminum Badge
    const badgeGeo = new THREE.BoxGeometry(1.0, 0.14, 0.02);
    const badgeMesh = new THREE.Mesh(badgeGeo, metallicMat);
    badgeMesh.position.set(0.85, -0.88, 1.78);
    computerGroup.add(badgeMesh);

    // 5. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffb000, 1.9);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00f2fe, 1.3);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    const topRimLight = new THREE.DirectionalLight(0xffffff, 1.0);
    topRimLight.position.set(0, 6, -3);
    scene.add(topRimLight);

    const screenGlowLight = new THREE.PointLight(0xffb000, 2.2, 4.2);
    screenGlowLight.position.set(0, 0.6, 1.3);
    scene.add(screenGlowLight);

    // 6. Interactive 3D Orbit Drag & Inertia Physics Controls
    let isDragging = false;
    let previousMousePos = { x: 0, y: 0 };
    let mouseDownPos = { x: 0, y: 0 };
    let mouseDownTime = 0;
    let angularVelocity = { x: 0, y: 0 };
    let currentRotation = { x: 0.06, y: -0.12 }; // Default perspective showing the full body
    let mouseParallax = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePos = { x: e.clientX, y: e.clientY };
      mouseDownPos = { x: e.clientX, y: e.clientY };
      mouseDownTime = Date.now();
      angularVelocity = { x: 0, y: 0 };
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseParallax = { x: normX * 0.28, y: normY * 0.20 };

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

    const onMouseUp = (e) => {
      isDragging = false;
      const dist = Math.hypot(e.clientX - mouseDownPos.x, e.clientY - mouseDownPos.y);
      const duration = Date.now() - mouseDownTime;
      // Quick click without drag triggers portfolio transition
      if (dist < 10 && duration < 500) {
        playKeyClick(true);
        if (onEnterPortfolioRef.current) {
          onEnterPortfolioRef.current();
        }
      }
    };

    // Touch controls
    let touchStartPos = { x: 0, y: 0 };
    let touchStartTime = 0;

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        touchStartTime = Date.now();
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

    const onTouchEnd = (e) => {
      isDragging = false;
      if (e.changedTouches && e.changedTouches.length > 0) {
        const t = e.changedTouches[0];
        const dist = Math.hypot(t.clientX - touchStartPos.x, t.clientY - touchStartPos.y);
        const duration = Date.now() - touchStartTime;
        if (dist < 14 && duration < 500) {
          playKeyClick(true);
          if (onEnterPortfolioRef.current) {
            onEnterPortfolioRef.current();
          }
        }
      }
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Global Keydown Listener
    const handleGlobalKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (keypressAnimationTriggerRef.current) {
        keypressAnimationTriggerRef.current();
      }

      if (e.key === 'Enter') {
        playKeyClick(true);
        const cmd = shellInputRef.current.trim().toLowerCase();
        if (!cmd || cmd === 'enter' || cmd === 'start' || cmd === 'portfolio' || cmd === 'scroll') {
          if (onEnterPortfolioRef.current) {
            onEnterPortfolioRef.current();
          }
        } else if (cmd === 'help') {
          setShellHistory(prev => [...prev, 'COMMANDS: skills, projects, status, certs, enter, clear']);
          setShellInput('');
        } else if (cmd === 'skills') {
          setShellHistory(prev => [...prev, 'STACK: AWS (EKS), Kubernetes, Docker, Terraform, FastAPI, Next.js']);
          setShellInput('');
        } else if (cmd === 'projects') {
          setShellHistory(prev => [...prev, 'PROJECTS: Career_Genie, hi_links, Cura-AI-Health']);
          setShellInput('');
        } else if (cmd === 'status') {
          setShellHistory(prev => [...prev, 'STATUS: 100% Cluster Health · 99.9% Uptime']);
          setShellInput('');
        } else if (cmd === 'clear') {
          setShellHistory(['COMMODORE PET 8296 DEVOPS OS v5.0', '']);
          setShellInput('');
        } else {
          setShellHistory(prev => [...prev, `devops@GrayViper:~$ ${shellInputRef.current}`, `Executed: "${cmd}"`]);
          setShellInput('');
        }
      } else if (e.key === 'Backspace') {
        playKeyClick(false);
        setShellInput(prev => prev.slice(0, -1));
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        playKeyClick(false);
        setShellInput(prev => prev + e.key);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);

    // Recenter view
    recenterCameraRef.current = () => {
      currentRotation = { x: 0.06, y: -0.12 };
      angularVelocity = { x: 0, y: 0 };
    };

    // 7. Dynamic 1024x768 High-Definition CRT Screen Drawing Loop
    let tick = 0;

    const renderScreen = () => {
      tick++;

      // Color Theme Palette
      const colorScheme = crtColorRef.current;
      let primaryColor = '#ffb000'; // Amber gold default
      let secondaryColor = '#00f2fe';
      let accentColor = '#10b981';

      if (colorScheme === 'cyan') {
        primaryColor = '#00f2fe';
        secondaryColor = '#ff1801';
        accentColor = '#10b981';
      } else if (colorScheme === 'green') {
        primaryColor = '#10b981';
        secondaryColor = '#4ade80';
        accentColor = '#22c55e';
      } else if (colorScheme === 'red') {
        primaryColor = '#ff1801';
        secondaryColor = '#fdb813';
        accentColor = '#00f2fe';
      }

      screenGlowLight.color.set(primaryColor);
      keyLight.color.set(primaryColor);

      // Clear Screen with Vintage CRT Obsidian
      screenCtx.fillStyle = '#02050b';
      screenCtx.fillRect(0, 0, 1024, 768);

      // CRT Scanlines
      screenCtx.fillStyle = `${primaryColor}0d`;
      for (let y = 0; y < 768; y += 8) {
        screenCtx.fillRect(0, y, 1024, 3);
      }

      // CRT Curved Screen Vignette & Outer Border
      screenCtx.strokeStyle = `${primaryColor}45`;
      screenCtx.lineWidth = 10;
      screenCtx.strokeRect(16, 16, 992, 736);

      // Top Vintage Header Bar
      screenCtx.fillStyle = `${primaryColor}30`;
      screenCtx.fillRect(28, 28, 968, 56);
      screenCtx.fillStyle = primaryColor;
      screenCtx.font = 'bold 24px "Fira Code", monospace';
      screenCtx.fillText('*** COMMODORE PET 8296 DEVOPS OS // 64K RAM ***', 48, 65);

      // Basic Operator Bio (Left Side) - Large & High Contrast
      screenCtx.font = '22px "Fira Code", monospace';
      screenCtx.fillStyle = accentColor;
      screenCtx.fillText('64K RAM SYSTEM  38911 BYTES FREE', 48, 126);

      screenCtx.fillStyle = '#ffffff';
      screenCtx.font = 'bold 26px "Fira Code", monospace';
      screenCtx.fillText('OPERATOR : CHAKKA CHINNI KRISHNA', 48, 172);

      screenCtx.font = '22px "Fira Code", monospace';
      screenCtx.fillStyle = primaryColor;
      screenCtx.fillText('HANDLE   : @GrayViper', 48, 218);
      screenCtx.fillText('ROLE     : DevOps Engineer & Full-Stack Specialist', 48, 264);

      screenCtx.fillStyle = '#cbd5e1';
      screenCtx.fillText('ACADEMIC : B.Tech CSE @ LPU (CGPA: 7.2)', 48, 310);
      screenCtx.fillText('CLOUD/IaC: AWS (EKS) · Kubernetes · Terraform', 48, 356);
      screenCtx.fillText('CI/CD/OS : GitHub Actions · Docker · Linux/Bash', 48, 402);
      screenCtx.fillText('STACK    : FastAPI · Next.js · TypeScript · Mongo', 48, 448);
      screenCtx.fillText('AGENTIC  : Multi-Agent Workflows & LLMs (Xebia)', 48, 494);

      screenCtx.fillStyle = accentColor;
      screenCtx.fillText('STATUS   : ALL SYSTEMS ONLINE · 99.9% CLUSTER UPTIME', 48, 540);

      // ASCII Dithered Tech Badge (Right Side)
      screenCtx.fillStyle = `${primaryColor}80`;
      screenCtx.font = '18px "Fira Code", monospace';
      const asciiArt = [
        '┌─────────────────┐',
        '│   [CK-DEVOPS]   │',
        '│   AWS  ·  EKS   │',
        '│   ☸️  🐳  ⚡  🚀 │',
        '│   GITOPS 100%   │',
        '└─────────────────┘'
      ];
      asciiArt.forEach((line, idx) => {
        screenCtx.fillText(line, 730, 160 + idx * 28);
      });

      // Interactive Shell Input Prompt
      screenCtx.fillStyle = primaryColor;
      screenCtx.font = 'bold 24px "Fira Code", monospace';
      screenCtx.fillText(`devops@GrayViper:~$ ${shellInputRef.current}`, 48, 600);

      if (Math.floor(tick / 15) % 2 === 0) {
        const textWidth = screenCtx.measureText(`devops@GrayViper:~$ ${shellInputRef.current}`).width;
        screenCtx.fillRect(52 + textWidth, 576, 16, 28);
      }

      // Blinking Scroll / Enter Invitation Bar (Bottom CRT)
      screenCtx.fillStyle = `${primaryColor}22`;
      screenCtx.fillRect(28, 638, 968, 88);
      screenCtx.strokeStyle = primaryColor;
      screenCtx.lineWidth = 2.5;
      screenCtx.strokeRect(28, 638, 968, 88);

      if (Math.floor(tick / 18) % 2 === 0) {
        screenCtx.fillStyle = primaryColor;
      } else {
        screenCtx.fillStyle = '#ffffff';
      }
      screenCtx.font = 'bold 23px "Fira Code", monospace';
      screenCtx.fillText('▶ SCROLL DOWN OR CLICK TO ENTER PORTFOLIO █', 120, 692);

      screenTexture.needsUpdate = true;

      // Animate Activity LED
      if (tick % 24 === 0) {
        driveLed1.material.color.set(Math.random() > 0.35 ? 0x10b981 : 0x053018);
      }

      // Animate Key Depression
      keyMeshes.forEach(k => {
        if (k.userData.depressTimer > 0) {
          k.userData.depressTimer--;
          k.position.y = k.userData.originalY - 0.04;
        } else {
          k.position.y = k.userData.originalY;
        }
      });
    };

    // 8. Main Render Loop
    let animationFrameId;
    const animate = () => {
      renderScreen();

      // Inertia decay
      if (!isDragging) {
        angularVelocity.x *= 0.94;
        angularVelocity.y *= 0.94;
        currentRotation.x += angularVelocity.x;
        currentRotation.y += angularVelocity.y;
      }

      // Calculate scroll progress (0 to 1 over first 450px of window scroll)
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollProgress = Math.min(1, Math.max(0, scrollY / 450));

      const targetCamPos = new THREE.Vector3();
      targetCamPos.lerpVectors(defaultCameraPos, scrolledCameraPos, scrollProgress);
      camera.position.lerp(targetCamPos, 0.08);

      const effectiveRotY = currentRotation.y + mouseParallax.x + (isDragging ? 0 : Math.sin(tick * 0.015) * 0.02);
      const effectiveRotX = currentRotation.x - mouseParallax.y;

      computerGroup.rotation.y += (effectiveRotY - computerGroup.rotation.y) * 0.08;
      computerGroup.rotation.x += (effectiveRotX - computerGroup.rotation.x) * 0.08;
      computerGroup.position.y = -0.06 + Math.sin(tick * 0.02) * 0.025;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
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

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: isFullScreenLanding ? 'pointer' : 'grab',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none'
        }}
        title="Click to enter portfolio, or drag to rotate 3D computer in 360°!"
      />

      {/* Floating Minimalist Ambient Controls (Bottom Right Corner) */}
      <div style={{
        position: 'absolute',
        right: '24px',
        bottom: '24px',
        zIndex: 30,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(7, 10, 18, 0.75)',
        backdropFilter: 'blur(16px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '12px',
        padding: '6px 10px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)'
      }}>
        {/* Phosphor Color Selector */}
        <div style={{ display: 'flex', gap: '5px', paddingRight: '6px', borderRight: '1px solid var(--border-subtle)' }}>
          {[
            { id: 'amber', color: '#ffb000', label: 'Amber Phosphor' },
            { id: 'cyan', color: '#00f2fe', label: 'Cyan Phosphor' },
            { id: 'green', color: '#10b981', label: 'Green Phosphor' },
            { id: 'red', color: '#ff1801', label: 'Red Phosphor' }
          ].map(c => (
            <button
              key={c.id}
              onClick={() => { playKeyClick(); setCrtColor(c.id); }}
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: c.color,
                border: crtColor === c.id ? '2px solid #fff' : 'none',
                cursor: 'pointer',
                padding: 0
              }}
              title={c.label}
            />
          ))}
        </div>

        {/* Sound Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          style={{
            background: 'transparent',
            border: 'none',
            color: soundEnabled ? 'var(--cyber-cyan)' : 'var(--text-dim)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '2px'
          }}
          title={soundEnabled ? 'Mute Mechanical Key Clicks' : 'Enable Key Clicks'}
        >
          {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
        </button>

        {/* Recenter 3D View */}
        <button
          onClick={() => recenterCameraRef.current && recenterCameraRef.current()}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-dim)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '2px'
          }}
          title="Reset 3D camera angle"
        >
          <RefreshCw size={13} />
        </button>
      </div>
    </div>
  );
}
