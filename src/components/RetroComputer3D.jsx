import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Volume2, VolumeX, RefreshCw, Play } from 'lucide-react';

/**
 * RetroComputer3D Component - Real-time cmatrix Terminal Typing Engine
 *
 * Features:
 * - cmatrix Style Text Typing: Deciphers and types text with streaming matrix glyphs,
 *   faint background digital matrix rain, and phosphor matrix green styling.
 * - Calibrated Slower Typing Speed: Smooth, readable character-by-character pacing.
 * - Synchronized 3D physical keycap depressions and mechanical keyboard audio clicks.
 * - Interactive shell prompt with blinking cursor once typing completes.
 * - Instant skip on click/keypress, plus "Replay Typing" button.
 * - Calibrated 0.82x 3D model scale for desktop screen containment.
 */
export default function RetroComputer3D({ isFullScreenLanding = true, onEnterPortfolio }) {
  const mountRef = useRef(null);
  const [crtColor, setCrtColor] = useState('green'); // 'green' (cmatrix default) | 'amber' | 'cyan' | 'red'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [shellInput, setShellInput] = useState('');
  const [shellHistory, setShellHistory] = useState([
    'COMMODORE PET 8296 DEVOPS OS v5.0 (CMATRIX EDITION)',
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
  const restartTypewriterRef = useRef(null);

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
      const startFreq = isEnter ? 240 : 340 + Math.random() * 80;
      osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + (isEnter ? 0.07 : 0.035));

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (isEnter ? 0.07 : 0.035));

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + (isEnter ? 0.08 : 0.04));
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

    const camera = new THREE.PerspectiveCamera(37, width / height, 0.1, 100);
    const defaultCameraPos = new THREE.Vector3(0, 0.20, 5.75);
    const scrolledCameraPos = new THREE.Vector3(0, 0.30, 6.65);
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
      color: 0x10b981,
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
    computerGroup.scale.set(0.82, 0.82, 0.82);
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
        kMesh.userData = { originalY, depressTimer: 0, isEnter };
        computerGroup.add(kMesh);
        keyMeshes.push(kMesh);
      }
    }

    keypressAnimationTriggerRef.current = (pressEnter = false) => {
      if (pressEnter) {
        const enterKey = keyMeshes.find(k => k.userData.isEnter);
        if (enterKey) enterKey.userData.depressTimer = 8;
      } else {
        const randKey = keyMeshes[Math.floor(Math.random() * keyMeshes.length)];
        if (randKey) randKey.userData.depressTimer = 6;
      }
    };

    // Monitor Hood Enclosure
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

    // Monitor Front Bezel & Outer Frame
    const bezelBackGeo = new THREE.BoxGeometry(2.95, 2.05, 0.2);
    const bezelBackMesh = new THREE.Mesh(bezelBackGeo, bezelMat);
    bezelBackMesh.position.set(0, 0.55, 0.9);
    computerGroup.add(bezelBackMesh);

    // Flat Edge-to-Edge Rectangular Screen Face (100% Full-Screen)
    const screenGeo = new THREE.PlaneGeometry(2.68, 1.84);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.55, 1.01);
    computerGroup.add(screenMesh);

    // Bezel Border Framing (Top, Bottom, Left, Right)
    const tbTrimGeo = new THREE.BoxGeometry(2.95, 0.11, 0.06);
    const topTrim = new THREE.Mesh(tbTrimGeo, bezelMat);
    topTrim.position.set(0, 1.51, 1.03);
    computerGroup.add(topTrim);

    const btmTrim = new THREE.Mesh(tbTrimGeo, bezelMat);
    btmTrim.position.set(0, -0.41, 1.03);
    computerGroup.add(btmTrim);

    const lrTrimGeo = new THREE.BoxGeometry(0.14, 2.05, 0.06);
    const leftTrim = new THREE.Mesh(lrTrimGeo, bezelMat);
    leftTrim.position.set(-1.41, 0.55, 1.03);
    computerGroup.add(leftTrim);

    const rightTrim = new THREE.Mesh(lrTrimGeo, bezelMat);
    rightTrim.position.set(1.41, 0.55, 1.03);
    computerGroup.add(rightTrim);

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

    // Front Aluminum Badge
    const badgeGeo = new THREE.BoxGeometry(1.0, 0.14, 0.02);
    const badgeMesh = new THREE.Mesh(badgeGeo, metallicMat);
    badgeMesh.position.set(0.85, -0.88, 1.78);
    computerGroup.add(badgeMesh);

    // 5. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00ff66, 2.0);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00f2fe, 1.3);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    const topRimLight = new THREE.DirectionalLight(0xffffff, 1.0);
    topRimLight.position.set(0, 6, -3);
    scene.add(topRimLight);

    const screenGlowLight = new THREE.PointLight(0x00ff66, 2.4, 4.4);
    screenGlowLight.position.set(0, 0.6, 1.3);
    scene.add(screenGlowLight);

    // 6. Interactive 3D Orbit Drag & Inertia Physics Controls
    let isDragging = false;
    let previousMousePos = { x: 0, y: 0 };
    let mouseDownPos = { x: 0, y: 0 };
    let mouseDownTime = 0;
    let angularVelocity = { x: 0, y: 0 };
    let currentRotation = { x: 0.05, y: -0.10 };
    let mouseParallax = { x: 0, y: 0 };

    // Typewriter Animation State & Matrix Rain Streams
    let typeTick = 0;
    let isTypewriterFinished = false;
    const matrixRainDrops = Array(32).fill(0).map(() => Math.floor(Math.random() * 768));
    const matrixGlyphs = '0123456789ABCDEF!@#$%^&*<>[]{}/\\~+=µ§λ∆¥¢';

    restartTypewriterRef.current = () => {
      typeTick = 0;
      isTypewriterFinished = false;
    };

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

      // Quick click
      if (dist < 10 && duration < 500) {
        if (!isTypewriterFinished && typeTick < 550) {
          typeTick = 560;
          isTypewriterFinished = true;
          playKeyClick(true);
        } else {
          playKeyClick(true);
          if (onEnterPortfolioRef.current) {
            onEnterPortfolioRef.current();
          }
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
          if (!isTypewriterFinished && typeTick < 550) {
            typeTick = 560;
            isTypewriterFinished = true;
            playKeyClick(true);
          } else {
            playKeyClick(true);
            if (onEnterPortfolioRef.current) {
              onEnterPortfolioRef.current();
            }
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
        keypressAnimationTriggerRef.current(e.key === 'Enter');
      }

      if (e.key === 'Enter') {
        playKeyClick(true);
        if (!isTypewriterFinished && typeTick < 550) {
          typeTick = 560;
          isTypewriterFinished = true;
          return;
        }

        const cmd = shellInputRef.current.trim().toLowerCase();
        if (!cmd || cmd === 'enter' || cmd === 'start' || cmd === 'portfolio' || cmd === 'scroll') {
          if (onEnterPortfolioRef.current) {
            onEnterPortfolioRef.current();
          }
        } else if (cmd === 'help') {
          setShellHistory(prev => [...prev, 'COMMANDS: skills, projects, status, certs, enter, clear, replay']);
          setShellInput('');
        } else if (cmd === 'replay') {
          if (restartTypewriterRef.current) restartTypewriterRef.current();
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
      currentRotation = { x: 0.05, y: -0.10 };
      angularVelocity = { x: 0, y: 0 };
    };

    // Helper for cmatrix decipher typewriter (with a slower, authentic pacing)
    const getMatrixTypewritten = (fullText, currentTick, startTick, charsPerTick = 0.85) => {
      if (currentTick < startTick) return { text: '', isDone: false, isTyping: false, decryptTail: '' };
      const numChars = Math.floor((currentTick - startTick) * charsPerTick);
      if (numChars >= fullText.length) {
        return { text: fullText, isDone: true, isTyping: false, decryptTail: '' };
      }
      const solved = fullText.substring(0, numChars);
      let decryptTail = '';
      const remainingLen = Math.min(2, fullText.length - numChars);
      for (let i = 0; i < remainingLen; i++) {
        decryptTail += matrixGlyphs[(currentTick * 3 + i * 7) % matrixGlyphs.length];
      }
      return { text: solved, isDone: false, isTyping: true, decryptTail };
    };

    // 7. Dynamic cmatrix 1024x768 High-Definition CRT Screen Drawing Loop
    let tick = 0;

    const renderScreen = () => {
      tick++;
      typeTick++;

      if (typeTick >= 560) {
        isTypewriterFinished = true;
      }

      // Trigger 3D keycap depression & click sounds during active typing
      if (!isTypewriterFinished && typeTick < 550) {
        if (typeTick % 5 === 0) {
          if (keypressAnimationTriggerRef.current) {
            keypressAnimationTriggerRef.current(false);
          }
          if (typeTick % 10 === 0) {
            playKeyClick(false);
          }
        }
      }

      // Color Theme Palette (cmatrix Green default)
      const colorScheme = crtColorRef.current;
      let primaryColor = '#00ff66'; // Matrix phosphor green
      let secondaryColor = '#38ef7d';
      let accentColor = '#a3ff00';

      if (colorScheme === 'amber') {
        primaryColor = '#ffb000';
        secondaryColor = '#ff8800';
        accentColor = '#fdb813';
      } else if (colorScheme === 'cyan') {
        primaryColor = '#00f2fe';
        secondaryColor = '#ff1801';
        accentColor = '#10b981';
      } else if (colorScheme === 'red') {
        primaryColor = '#ff1801';
        secondaryColor = '#fdb813';
        accentColor = '#00f2fe';
      }

      screenGlowLight.color.set(primaryColor);
      keyLight.color.set(primaryColor);

      // 1. Clear Screen with Vintage CRT Obsidian
      screenCtx.fillStyle = '#02050b';
      screenCtx.fillRect(0, 0, 1024, 768);

      // 2. Subtle cmatrix Digital Rain Streaming in Background
      screenCtx.font = '13px "Fira Code", monospace';
      screenCtx.fillStyle = `${primaryColor}12`;
      for (let col = 0; col < 32; col++) {
        const x = 32 * col + 14;
        const y = matrixRainDrops[col];
        const glyph = matrixGlyphs[(tick + col * 7) % matrixGlyphs.length];
        screenCtx.fillText(glyph, x, y);
        matrixRainDrops[col] = (y + 10 > 768) ? 0 : y + 10;
      }

      // 3. Full-Screen CRT Scanlines
      screenCtx.fillStyle = `${primaryColor}0e`;
      for (let y = 0; y < 768; y += 8) {
        screenCtx.fillRect(0, y, 1024, 3);
      }

      // 4. CRT Outer Vignette Border
      screenCtx.strokeStyle = `${primaryColor}45`;
      screenCtx.lineWidth = 10;
      screenCtx.strokeRect(10, 10, 1004, 748);

      // --- SECTION 1: TOP SYSTEM HEADER BANNER ---
      const headerObj = getMatrixTypewritten('*** COMMODORE PET 8296 DEVOPS OS (CMATRIX) // 64K RAM READY ***', typeTick, 15, 0.95);

      if (typeTick >= 15) {
        screenCtx.fillStyle = `${primaryColor}24`;
        screenCtx.fillRect(20, 20, 984, 52);
        screenCtx.strokeStyle = `${primaryColor}60`;
        screenCtx.lineWidth = 1.5;
        screenCtx.strokeRect(20, 20, 984, 52);

        screenCtx.fillStyle = primaryColor;
        screenCtx.font = 'bold 21px "Fira Code", monospace';
        screenCtx.fillText(headerObj.text, 36, 54);

        if (headerObj.isTyping) {
          screenCtx.fillStyle = '#ffffff';
          screenCtx.fillText(headerObj.decryptTail + '█', 36 + screenCtx.measureText(headerObj.text).width, 54);
        }

        if (headerObj.isDone || typeTick >= 85) {
          screenCtx.fillStyle = accentColor;
          screenCtx.font = 'bold 18px "Fira Code", monospace';
          screenCtx.fillText('● SYSTEM 100% HEALTHY', 760, 54);
        }
      }

      // --- SECTION 2: OPERATOR IDENTITY CARD ---
      if (typeTick >= 70) {
        screenCtx.fillStyle = 'rgba(255, 255, 255, 0.04)';
        screenCtx.fillRect(20, 82, 984, 114);
        screenCtx.strokeStyle = `${primaryColor}35`;
        screenCtx.strokeRect(20, 82, 984, 114);

        // Operator Name & Handle (cmatrix Decrypt Effect)
        const nameObj = getMatrixTypewritten('CHAKKA CHINNI KRISHNA', typeTick, 75, 0.85);
        const handleObj = getMatrixTypewritten('(@GrayViper)', typeTick, 105, 0.85);

        screenCtx.fillStyle = '#ffffff';
        screenCtx.font = 'bold 30px "Fira Code", monospace';
        screenCtx.fillText(nameObj.text, 40, 122);

        if (nameObj.isTyping) {
          screenCtx.fillStyle = accentColor;
          screenCtx.fillText(nameObj.decryptTail + '█', 40 + screenCtx.measureText(nameObj.text).width, 122);
        }

        if (nameObj.isDone) {
          screenCtx.fillStyle = secondaryColor;
          screenCtx.font = 'bold 22px "Fira Code", monospace';
          screenCtx.fillText(handleObj.text, 480, 122);

          if (handleObj.isTyping) {
            screenCtx.fillStyle = '#ffffff';
            screenCtx.fillText(handleObj.decryptTail + '█', 480 + screenCtx.measureText(handleObj.text).width, 122);
          }
        }

        // Role & Education
        const roleObj = getMatrixTypewritten('ROLE : DevOps Engineer · Cloud Infrastructure & Full-Stack Specialist', typeTick, 125, 1.0);
        if (roleObj.text || roleObj.isTyping) {
          screenCtx.fillStyle = primaryColor;
          screenCtx.font = '20px "Fira Code", monospace';
          screenCtx.fillText(roleObj.text, 40, 154);

          if (roleObj.isTyping) {
            screenCtx.fillStyle = '#ffffff';
            screenCtx.fillText(roleObj.decryptTail + '█', 40 + screenCtx.measureText(roleObj.text).width, 154);
          }
        }

        const eduObj = getMatrixTypewritten('EDU  : B.Tech CSE @ Lovely Professional University (CGPA 7.2)', typeTick, 185, 1.0);
        if (eduObj.text || eduObj.isTyping) {
          screenCtx.fillStyle = '#cbd5e1';
          screenCtx.font = '19px "Fira Code", monospace';
          screenCtx.fillText(eduObj.text, 40, 182);

          if (eduObj.isTyping) {
            screenCtx.fillStyle = '#ffffff';
            screenCtx.fillText(eduObj.decryptTail + '█', 40 + screenCtx.measureText(eduObj.text).width, 182);
          }
        }
      }

      // --- SECTION 3: TWO-COLUMN TECHNICAL MATRIX ---
      const cloudLines = [
        '• AWS Cloud (EKS 1.30, EC2, S3, VPC, IAM)',
        '• Kubernetes Cluster Management & Helm',
        '• Terraform Infrastructure as Code (IaC)',
        '• Docker Multi-Stage Builds & Optimization',
        '• Prometheus Metrics & Grafana Dashboards',
        '• Linux / Unix Administration & Bash Shell',
        '• Zero-Downtime Rolling Release Strategies'
      ];

      const devLines = [
        '• GitHub Actions Automated CI/CD Pipelines',
        '• ArgoCD GitOps Continuous Delivery',
        '• FastAPI High-Performance Python APIs',
        '• Next.js · React · TypeScript Frontends',
        '• MongoDB Atlas & PostgreSQL Databases',
        '• Agentic AI & Multi-Agent Systems (Xebia)',
        '• RESTful APIs, JWT Auth & WebSockets'
      ];

      // Left Column: Cloud & IaC
      if (typeTick >= 235) {
        screenCtx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        screenCtx.fillRect(20, 206, 482, 336);
        screenCtx.strokeStyle = `${primaryColor}30`;
        screenCtx.strokeRect(20, 206, 482, 336);

        screenCtx.fillStyle = primaryColor;
        screenCtx.font = 'bold 20px "Fira Code", monospace';
        screenCtx.fillText('⚡ [01] CLOUD, CONTAINERS & IaC', 36, 240);

        screenCtx.font = '18px "Fira Code", monospace';
        cloudLines.forEach((item, idx) => {
          const lineObj = getMatrixTypewritten(item, typeTick, 245 + idx * 24, 1.1);
          if (lineObj.text || lineObj.isTyping) {
            screenCtx.fillStyle = idx === 0 ? accentColor : (idx === 1 ? secondaryColor : '#cbd5e1');
            screenCtx.fillText(lineObj.text, 36, 280 + idx * 36);

            if (lineObj.isTyping) {
              screenCtx.fillStyle = '#ffffff';
              screenCtx.fillText(lineObj.decryptTail + '█', 36 + screenCtx.measureText(lineObj.text).width, 280 + idx * 36);
            }
          }
        });
      }

      // Right Column: CI/CD & Dev
      if (typeTick >= 250) {
        screenCtx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        screenCtx.fillRect(522, 206, 482, 336);
        screenCtx.strokeStyle = `${primaryColor}30`;
        screenCtx.strokeRect(522, 206, 482, 336);

        screenCtx.fillStyle = primaryColor;
        screenCtx.font = 'bold 20px "Fira Code", monospace';
        screenCtx.fillText('🚀 [02] CI/CD, DEV & AGENTIC AI', 538, 240);

        screenCtx.font = '18px "Fira Code", monospace';
        devLines.forEach((item, idx) => {
          const lineObj = getMatrixTypewritten(item, typeTick, 260 + idx * 24, 1.1);
          if (lineObj.text || lineObj.isTyping) {
            screenCtx.fillStyle = idx === 0 ? accentColor : (idx === 5 ? secondaryColor : '#cbd5e1');
            screenCtx.fillText(lineObj.text, 538, 280 + idx * 36);

            if (lineObj.isTyping) {
              screenCtx.fillStyle = '#ffffff';
              screenCtx.fillText(lineObj.decryptTail + '█', 538 + screenCtx.measureText(lineObj.text).width, 280 + idx * 36);
            }
          }
        });
      }

      // --- SECTION 4: LIVE TELEMETRY RIBBON ---
      if (typeTick >= 430) {
        screenCtx.fillStyle = `${primaryColor}18`;
        screenCtx.fillRect(20, 552, 984, 60);
        screenCtx.strokeStyle = `${primaryColor}40`;
        screenCtx.strokeRect(20, 552, 984, 60);

        screenCtx.fillStyle = accentColor;
        screenCtx.font = 'bold 19px "Fira Code", monospace';
        screenCtx.fillText('● CLUSTER TELEMETRY:', 36, 588);

        const telemetryObj = getMatrixTypewritten('6/6 PODS RUNNING · 99.9% UPTIME · SLA 1.82s · GITOPS SYNCED', typeTick, 440, 1.1);
        if (telemetryObj.text || telemetryObj.isTyping) {
          screenCtx.fillStyle = '#ffffff';
          screenCtx.font = '18px "Fira Code", monospace';
          screenCtx.fillText(telemetryObj.text, 280, 588);

          if (telemetryObj.isTyping) {
            screenCtx.fillStyle = accentColor;
            screenCtx.fillText(telemetryObj.decryptTail + '█', 280 + screenCtx.measureText(telemetryObj.text).width, 588);
          }
        }
      }

      // --- SECTION 5: INTERACTIVE SHELL & ENTER ACTION BAR ---
      if (typeTick >= 500) {
        screenCtx.fillStyle = `${primaryColor}24`;
        screenCtx.fillRect(20, 624, 984, 114);
        screenCtx.strokeStyle = primaryColor;
        screenCtx.lineWidth = 2.5;
        screenCtx.strokeRect(20, 624, 984, 114);

        // Interactive Typing Shell Prompt (Left)
        screenCtx.fillStyle = primaryColor;
        screenCtx.font = 'bold 22px "Fira Code", monospace';
        screenCtx.fillText(`devops@GrayViper:~$ ${shellInputRef.current}`, 40, 666);

        if (Math.floor(tick / 15) % 2 === 0) {
          const textWidth = screenCtx.measureText(`devops@GrayViper:~$ ${shellInputRef.current}`).width;
          screenCtx.fillRect(44 + textWidth, 646, 14, 26);
        }

        // Pulsing Enter Invitation Cue
        if (Math.floor(tick / 18) % 2 === 0) {
          screenCtx.fillStyle = primaryColor;
        } else {
          screenCtx.fillStyle = '#ffffff';
        }
        screenCtx.font = 'bold 23px "Fira Code", monospace';
        screenCtx.fillText('▶ CLICK COMPUTER OR PRESS [ENTER] TO ACCESS FULL PORTFOLIO █', 60, 708);
      }

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

    // 9. Resize Handler with Responsive Aspect Ratio Sizing
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;

      if (camera.aspect > 1.8) {
        camera.fov = 38;
      } else if (camera.aspect < 1.0) {
        camera.fov = 48;
      } else {
        camera.fov = 36;
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

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
        title="Click to enter portfolio (or skip typing), or drag to rotate 3D computer in 360°!"
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
        {/* Replay Typing Animation Button */}
        <button
          onClick={() => restartTypewriterRef.current && restartTypewriterRef.current()}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--terminal-green)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '2px 6px',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700'
          }}
          title="Replay cmatrix Typewriter Sequence"
        >
          <Play size={12} /> Replay
        </button>

        {/* Phosphor Color Selector */}
        <div style={{ display: 'flex', gap: '5px', paddingRight: '6px', borderRight: '1px solid var(--border-subtle)', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '6px' }}>
          {[
            { id: 'green', color: '#00ff66', label: 'Matrix Green' },
            { id: 'amber', color: '#ffb000', label: 'Amber Phosphor' },
            { id: 'cyan', color: '#00f2fe', label: 'Cyan Phosphor' },
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
            color: soundEnabled ? 'var(--terminal-green)' : 'var(--text-dim)',
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
