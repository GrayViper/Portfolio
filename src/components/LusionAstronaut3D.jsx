import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Volume2, VolumeX, Play, RefreshCw } from 'lucide-react';

/**
 * LusionAstronaut3D Component - Authentic Lusion.co Interactive 3D Astronaut Engine
 * With Cinematic Deep Space Particle Assembly Sequence & 360 Orbit Simulation
 */
export default function LusionAstronaut3D({
  isFullScreen = false,
  showTelemetryOverlay = true,
  showActionButtons = true,
  height = '560px',
  className = ''
}) {
  const mountRef = useRef(null);
  const recenterRef = useRef(null);

  // Component UI States
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeAction, setActiveAction] = useState('sequence'); // 'sequence' | 'float' | 'thruster' | 'spin' | 'shatter'
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [telemetry, setTelemetry] = useState({
    pitch: '0.0°',
    yaw: '0.0°',
    velocity: '0.04 m/s',
    thruster: 'STANDBY',
    status: 'PARTICLE ASSEMBLY'
  });

  // Audio Context Refs
  const audioCtxRef = useRef(null);

  const playSoundEffect = useCallback((type) => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;

      if (type === 'assemble') {
        // Quantum rising synthesis with resonant harmonic shimmer
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(105, now);
        osc1.frequency.exponentialRampToValueAtTime(780, now + 1.8);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(210, now);
        osc2.frequency.exponentialRampToValueAtTime(1560, now + 1.8);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, now);
        filter.frequency.exponentialRampToValueAtTime(3800, now + 1.7);
        filter.Q.setValueAtTime(3.5, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.35);
        gain.gain.setValueAtTime(0.18, now + 1.4);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 2.0);
        osc2.stop(now + 2.0);
      } else if (type === 'thruster') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.8);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.8);
      } else if (type === 'shatter') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);
        osc.frequency.exponentialRampToValueAtTime(1320, now + 0.6);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.7);
      } else if (type === 'spin') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.4);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.95);
        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 1.0);
      }
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  // Action Triggers exposed to UI
  const triggerActionRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let heightPx = container.clientHeight || 560;

    // --- 1. Three.js Scene, Camera, & Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080e, 0.035);

    const camera = new THREE.PerspectiveCamera(40, width / heightPx, 0.1, 100);
    camera.position.set(0, 0.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- 2. Cinematic Lusion Studio Lighting ---
    const ambientLight = new THREE.AmbientLight(0x1a2436, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00f3ff, 4.5);
    cyanRimLight.position.set(-5, 2, -3);
    scene.add(cyanRimLight);

    const amberRimLight = new THREE.DirectionalLight(0xffaa22, 3.0);
    amberRimLight.position.set(4, -3, -2);
    scene.add(amberRimLight);

    // Dynamic environment map for reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement('canvas');
    envCanvas.width = 512;
    envCanvas.height = 256;
    const envCtx = envCanvas.getContext('2d');
    const envGrad = envCtx.createLinearGradient(0, 0, 512, 256);
    envGrad.addColorStop(0, '#001a33');
    envGrad.addColorStop(0.3, '#00f3ff');
    envGrad.addColorStop(0.7, '#ffaa00');
    envGrad.addColorStop(1, '#1a0033');
    envCtx.fillStyle = envGrad;
    envCtx.fillRect(0, 0, 512, 256);
    const dynamicEnvTexture = new THREE.CanvasTexture(envCanvas);
    dynamicEnvTexture.mapping = THREE.EquirectangularReflectionMapping;

    // --- 3. Soft Particle Canvas Sprites ---
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.25, 'rgba(0, 243, 255, 0.95)');
      grad.addColorStop(0.55, 'rgba(0, 160, 255, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const tex = new THREE.CanvasTexture(canvas);
      return tex;
    };

    const createThrusterTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.25, 'rgba(0, 243, 255, 0.95)');
      grad.addColorStop(0.6, 'rgba(255, 170, 0, 0.6)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const tex = new THREE.CanvasTexture(canvas);
      return tex;
    };

    const particleTexture = createParticleTexture();
    const thrusterTexture = createThrusterTexture();

    // --- 4. Cosmic Space Environment ---
    const starCount = 500;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 16;
      starPositions[i + 1] = (Math.random() - 0.5) * 16;
      starPositions[i + 2] = (Math.random() - 0.5) * 14 - 2;

      const cType = Math.random();
      if (cType > 0.6) {
        starColors[i] = 0.0;
        starColors[i + 1] = 0.95;
        starColors[i + 2] = 1.0;
      } else if (cType > 0.3) {
        starColors[i] = 1.0;
        starColors[i + 1] = 0.75;
        starColors[i + 2] = 0.2;
      } else {
        starColors[i] = 0.9;
        starColors[i + 1] = 0.95;
        starColors[i + 2] = 1.0;
      }
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // --- 5. Shattered Particles & Quantum Assembly Cloud (3,500 particles) ---
    const assembleCount = 3500;
    const assembleGeo = new THREE.BufferGeometry();
    const assembleCurrentPos = new Float32Array(assembleCount * 3);
    const assembleTargetPos = new Float32Array(assembleCount * 3);
    const assembleShatterPos = new Float32Array(assembleCount * 3);
    const assembleColors = new Float32Array(assembleCount * 3);
    const assembleDelays = new Float32Array(assembleCount);
    const assembleCurves = new Float32Array(assembleCount);

    // Seed realistic procedural astronaut silhouette as default targets
    for (let i = 0; i < assembleCount; i++) {
      const idx = i * 3;
      assembleDelays[i] = (i / assembleCount) * 0.45 + Math.random() * 0.15;
      assembleCurves[i] = Math.random() * Math.PI * 2;

      let tx = 0, ty = 0, tz = 0;
      const part = Math.random();

      if (part < 0.22) {
        // Head / Helmet
        const u = Math.random(), v = Math.random();
        const theta = u * 2 * Math.PI;
        const phi = Math.acos(2 * v - 1);
        const r = 0.24 * Math.cbrt(Math.random());
        tx = r * Math.sin(phi) * Math.cos(theta);
        ty = 1.62 + r * Math.cos(phi);
        tz = 0.18 + r * Math.sin(phi) * Math.sin(theta);
      } else if (part < 0.55) {
        // Torso & Life Support Pack
        tx = (Math.random() - 0.5) * 0.6;
        ty = 0.85 + Math.random() * 0.65;
        tz = (Math.random() - 0.5) * 0.45;
      } else if (part < 0.78) {
        // Arms
        const side = Math.random() > 0.5 ? 1 : -1;
        tx = side * (0.32 + Math.random() * 0.35);
        ty = 0.8 + Math.random() * 0.6;
        tz = (Math.random() - 0.5) * 0.25;
      } else {
        // Legs & Boots
        const side = Math.random() > 0.5 ? 1 : -1;
        tx = side * (0.12 + Math.random() * 0.2);
        ty = 0.05 + Math.random() * 0.8;
        tz = (Math.random() - 0.5) * 0.25;
      }

      assembleTargetPos[idx] = tx;
      assembleTargetPos[idx + 1] = ty;
      assembleTargetPos[idx + 2] = tz;

      // Shattered positions: exploded in 3D deep space
      const dist = 2.4 + Math.random() * 3.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const sx = tx + Math.cos(theta) * Math.cos(phi) * dist + (Math.random() - 0.5) * 2.2;
      const sy = ty + Math.sin(phi) * dist + (Math.random() - 0.5) * 2.2;
      const sz = tz + Math.sin(theta) * Math.cos(phi) * dist + (Math.random() - 0.5) * 2.2;

      assembleShatterPos[idx] = sx;
      assembleShatterPos[idx + 1] = sy;
      assembleShatterPos[idx + 2] = sz;

      assembleCurrentPos[idx] = sx;
      assembleCurrentPos[idx + 1] = sy;
      assembleCurrentPos[idx + 2] = sz;

      // Color coding (cyber cyan, neon white, amber thruster/boot accents)
      if (ty > 1.45) {
        assembleColors[idx] = 0.0;
        assembleColors[idx + 1] = 0.95;
        assembleColors[idx + 2] = 1.0;
      } else if (Math.random() > 0.72) {
        assembleColors[idx] = 1.0;
        assembleColors[idx + 1] = 1.0;
        assembleColors[idx + 2] = 1.0;
      } else if (Math.random() > 0.45) {
        assembleColors[idx] = 1.0;
        assembleColors[idx + 1] = 0.7;
        assembleColors[idx + 2] = 0.15;
      } else {
        assembleColors[idx] = 0.0;
        assembleColors[idx + 1] = 0.75;
        assembleColors[idx + 2] = 1.0;
      }
    }

    assembleGeo.setAttribute('position', new THREE.BufferAttribute(assembleCurrentPos, 3));
    assembleGeo.setAttribute('color', new THREE.BufferAttribute(assembleColors, 3));

    const assembleMaterial = new THREE.PointsMaterial({
      size: 0.055,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const assembleMesh = new THREE.Points(assembleGeo, assembleMaterial);
    scene.add(assembleMesh);

    // --- 6. Thruster Plasma Particle System (Twin Jet Backpack Nozzles) ---
    const thrusterCount = 180;
    const thrusterGeo = new THREE.BufferGeometry();
    const thrusterPositions = new Float32Array(thrusterCount * 3);
    const thrusterColors = new Float32Array(thrusterCount * 3);
    const thrusterLifetimes = new Float32Array(thrusterCount);

    for (let i = 0; i < thrusterCount; i++) {
      const idx = i * 3;
      thrusterPositions[idx] = 0;
      thrusterPositions[idx + 1] = 0;
      thrusterPositions[idx + 2] = 0;
      thrusterLifetimes[i] = Math.random();

      if (Math.random() > 0.4) {
        thrusterColors[idx] = 0.0;
        thrusterColors[idx + 1] = 0.95;
        thrusterColors[idx + 2] = 1.0;
      } else {
        thrusterColors[idx] = 1.0;
        thrusterColors[idx + 1] = 0.65;
        thrusterColors[idx + 2] = 0.1;
      }
    }
    thrusterGeo.setAttribute('position', new THREE.BufferAttribute(thrusterPositions, 3));
    thrusterGeo.setAttribute('color', new THREE.BufferAttribute(thrusterColors, 3));

    const thrusterMaterial = new THREE.PointsMaterial({
      size: 0.09,
      map: thrusterTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const thrusterMesh = new THREE.Points(thrusterGeo, thrusterMaterial);
    scene.add(thrusterMesh);

    // --- 7. Astronaut Model Group & Rigging ---
    const astronautGroup = new THREE.Group();
    scene.add(astronautGroup);

    let astronautModel = null;
    let mixer = null;
    const suitMeshes = [];

    // Viewport Intersection Observer: Trigger sequence naturally when user scrolls to astronaut
    let hasPlayedInView = false;
    let isModelReady = false;

    const startSequenceIfReady = () => {
      if (isModelReady && triggerActionRef.current) {
        hasPlayedInView = true;
        triggerActionRef.current('sequence');
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedInView) {
            startSequenceIfReady();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(container);

    // Load Astronaut.glb
    const loader = new GLTFLoader();
    loader.load(
      '/Astronaut.glb',
      (gltf) => {
        astronautModel = gltf.scene;

        const box = new THREE.Box3().setFromObject(astronautModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.4 / maxDim;

        astronautModel.scale.set(scale, scale, scale);
        astronautModel.position.sub(center.multiplyScalar(scale));
        astronautModel.rotation.y = THREE.MathUtils.degToRad(-15);
        astronautModel.rotation.x = THREE.MathUtils.degToRad(5);

        astronautModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            suitMeshes.push(child);

            if (child.material) {
              child.material.envMap = dynamicEnvTexture;
              child.material.envMapIntensity = 0.8;
              child.material.roughness = THREE.MathUtils.clamp(child.material.roughness || 0.6, 0.35, 0.7);
            }
          }
        });

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(astronautModel);
          const clip = gltf.animations[0];
          const action = mixer.clipAction(clip);
          action.play();
        }

        // Sample real 3D mesh vertices to populate particle targets with model accuracy
        astronautModel.updateMatrixWorld(true);
        const allVerts = [];
        const allNorms = [];
        const tempV = new THREE.Vector3();
        const tempN = new THREE.Vector3();

        suitMeshes.forEach((mesh) => {
          const geom = mesh.geometry;
          if (geom && geom.attributes.position) {
            const posAttr = geom.attributes.position;
            const normAttr = geom.attributes.normal;
            const step = Math.max(1, Math.floor(posAttr.count / 650));
            for (let v = 0; v < posAttr.count; v += step) {
              tempV.fromBufferAttribute(posAttr, v);
              tempV.applyMatrix4(mesh.matrixWorld);
              astronautGroup.worldToLocal(tempV);

              if (normAttr) {
                tempN.fromBufferAttribute(normAttr, v);
                tempN.transformDirection(mesh.matrixWorld);
              } else {
                tempN.set(0, 1, 0);
              }
              allVerts.push(tempV.clone());
              allNorms.push(tempN.clone());
            }
          }
        });

        if (allVerts.length > 100) {
          for (let i = 0; i < assembleCount; i++) {
            const vert = allVerts[i % allVerts.length];
            const norm = allNorms[i % allNorms.length];
            const idx = i * 3;

            assembleTargetPos[idx] = vert.x;
            assembleTargetPos[idx + 1] = vert.y;
            assembleTargetPos[idx + 2] = vert.z;

            // Explode outward in 3D deep space for shattered initial state
            const dist = 2.4 + Math.random() * 3.4;
            assembleShatterPos[idx] = vert.x + norm.x * dist + (Math.random() - 0.5) * 2.2;
            assembleShatterPos[idx + 1] = vert.y + norm.y * dist + (Math.random() - 0.5) * 2.2;
            assembleShatterPos[idx + 2] = vert.z + norm.z * dist + (Math.random() - 0.5) * 2.2;

            assembleCurrentPos[idx] = assembleShatterPos[idx];
            assembleCurrentPos[idx + 1] = assembleShatterPos[idx + 1];
            assembleCurrentPos[idx + 2] = assembleShatterPos[idx + 2];
          }
          assembleGeo.attributes.position.needsUpdate = true;
        }

        // Astronaut begins fully made up of shattered particles
        suitMeshes.forEach((mesh) => {
          if (mesh.material) {
            mesh.material.transparent = true;
            mesh.material.opacity = 0;
          }
        });

        astronautGroup.add(astronautModel);
        setIsLoaded(true);
        setLoadProgress(100);

        isModelReady = true;
        const rect = container.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && !hasPlayedInView) {
          hasPlayedInView = true;
          if (triggerActionRef.current) {
            triggerActionRef.current('sequence');
          }
        }
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadProgress(Math.round((xhr.loaded / xhr.total) * 100));
        } else {
          setLoadProgress((prev) => Math.min(prev + 15, 95));
        }
      },
      () => {
        setIsLoaded(true);
        setLoadProgress(100);
      }
    );

    // --- 8. Mouse Cursor Parallax & Orbit Drag ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const drag = {
      isDragging: false,
      startX: 0,
      startY: 0,
      rotX: 0,
      rotY: 0,
      targetRotX: 0,
      targetRotY: 0
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
      const clientY = e.clientY ?? (e.touches ? e.touches[0].clientY : 0);

      mouse.targetX = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((clientY - rect.top) / rect.height) * 2 - 1);

      if (drag.isDragging) {
        const deltaX = clientX - drag.startX;
        const deltaY = clientY - drag.startY;
        drag.targetRotY += deltaX * 0.008;
        drag.targetRotX += deltaY * 0.008;
        drag.startX = clientX;
        drag.startY = clientY;
      }
    };

    const onPointerDown = (e) => {
      drag.isDragging = true;
      drag.startX = e.clientX ?? (e.touches ? e.touches[0].clientX : 0);
      drag.startY = e.clientY ?? (e.touches ? e.touches[0].clientY : 0);
    };

    const onPointerUp = () => {
      drag.isDragging = false;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    recenterRef.current = () => {
      drag.targetRotX = 0;
      drag.targetRotY = 0;
      drag.rotX = 0;
      drag.rotY = 0;
    };

    // --- 9. Action State Machine ---
    let actionState = {
      type: 'sequence',
      timer: 0,
      spinAngle: 0,
      shatterProgress: 0,
      thrusterPower: 0,
      spinSoundPlayed: false,
      thrustSoundPlayed: false
    };

    triggerActionRef.current = (type) => {
      setActiveAction(type);
      actionState.type = type;
      actionState.timer = 0;
      actionState.spinSoundPlayed = false;
      actionState.thrustSoundPlayed = false;

      if (type === 'sequence') {
        playSoundEffect('assemble');
        for (let i = 0; i < assembleCount * 3; i++) {
          assembleCurrentPos[i] = assembleShatterPos[i];
        }
        assembleGeo.attributes.position.needsUpdate = true;
        assembleMaterial.opacity = 0.95;

        suitMeshes.forEach((m) => {
          if (m.material) {
            m.material.transparent = true;
            m.material.opacity = 0;
          }
        });
        astronautGroup.position.z = 0;
      } else if (type === 'thruster') {
        actionState.thrusterPower = 1.0;
        playSoundEffect('thruster');
        thrusterMaterial.opacity = 0.95;
      } else if (type === 'spin') {
        playSoundEffect('spin');
      } else if (type === 'shatter') {
        actionState.shatterProgress = 0.01;
        playSoundEffect('shatter');
      } else if (type === 'float') {
        suitMeshes.forEach((m) => {
          if (m.material) m.material.opacity = 1.0;
        });
        assembleMaterial.opacity = 0;
        thrusterMaterial.opacity = 0;
        astronautGroup.position.z = 0;
      }
    };

    // --- 10. Real-time 60 FPS Render Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();
    let telemetryTimer = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (mixer) {
        mixer.update(delta);
      }

      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      drag.rotX += (drag.targetRotX - drag.rotX) * 0.08;
      drag.rotY += (drag.targetRotY - drag.rotY) * 0.08;

      if (!drag.isDragging) {
        drag.targetRotX *= 0.96;
        drag.targetRotY *= 0.96;
      }

      const floatOffset = Math.sin(elapsed * 1.3) * 0.12;
      const rollOffset = Math.sin(elapsed * 0.8) * 0.08;
      const yawOffset = Math.cos(elapsed * 0.9) * 0.06;

      if (actionState.type === 'sequence') {
        actionState.timer += delta;
        const t = actionState.timer;

        if (t < 2.4) {
          // --- Phase 1: Shattered Particle Assembly ---
          const posArr = assembleGeo.attributes.position.array;
          for (let i = 0; i < assembleCount; i++) {
            const idx = i * 3;
            const delay = assembleDelays[i];
            const p = THREE.MathUtils.clamp((t - delay) / 1.35, 0, 1);
            const ease = 1 - Math.pow(1 - p, 3.5);

            const swirl = (1 - ease) * 0.45;
            const angle = assembleCurves[i] + t * 3.5;

            posArr[idx] = THREE.MathUtils.lerp(assembleShatterPos[idx], assembleTargetPos[idx], ease) + Math.cos(angle) * swirl;
            posArr[idx + 1] = THREE.MathUtils.lerp(assembleShatterPos[idx + 1], assembleTargetPos[idx + 1], ease) + Math.sin(angle) * swirl;
            posArr[idx + 2] = THREE.MathUtils.lerp(assembleShatterPos[idx + 2], assembleTargetPos[idx + 2], ease);
          }
          assembleGeo.attributes.position.needsUpdate = true;

          if (t < 1.8) {
            assembleMaterial.opacity = 0.95;
          } else {
            assembleMaterial.opacity = THREE.MathUtils.clamp((2.4 - t) / 0.6 * 0.95, 0, 0.95);
          }

          if (t < 1.3) {
            suitMeshes.forEach((m) => { if (m.material) m.material.opacity = 0; });
          } else {
            const meshAlpha = THREE.MathUtils.clamp((t - 1.3) / 0.9, 0, 1.0);
            suitMeshes.forEach((m) => {
              if (m.material) {
                m.material.transparent = true;
                m.material.opacity = meshAlpha;
              }
            });
          }

          astronautGroup.position.y = floatOffset;
          astronautGroup.position.x = mouse.x * 0.15;
          astronautGroup.rotation.y = THREE.MathUtils.lerp(astronautGroup.rotation.y, drag.rotY, 0.05);
          astronautGroup.rotation.x = THREE.MathUtils.lerp(astronautGroup.rotation.x, drag.rotX, 0.05);
          astronautGroup.rotation.z = 0;

        } else if (t < 3.8) {
          // --- Phase 2: 360° Orbital Spin ---
          if (!actionState.spinSoundPlayed) {
            actionState.spinSoundPlayed = true;
            playSoundEffect('spin');
          }

          assembleMaterial.opacity = 0;
          suitMeshes.forEach((m) => { if (m.material) m.material.opacity = 1.0; });

          const spinProgress = (t - 2.4) / 1.4;
          const smooth = spinProgress * spinProgress * (3 - 2 * spinProgress);
          const spinAngle = smooth * Math.PI * 2;

          astronautGroup.rotation.y = spinAngle + drag.rotY;
          astronautGroup.rotation.z = Math.sin(spinProgress * Math.PI) * 0.32;
          astronautGroup.rotation.x = Math.sin(spinProgress * Math.PI * 2) * 0.15 + drag.rotX;
          astronautGroup.position.y = floatOffset;
          astronautGroup.position.x = mouse.x * 0.15;

        } else if (t < 5.2) {
          // --- Phase 3: Forward Thruster Boost ---
          if (!actionState.thrustSoundPlayed) {
            actionState.thrustSoundPlayed = true;
            playSoundEffect('thruster');
          }

          const thrustProgress = (t - 3.8) / 1.4;
          let power = 1.0;
          if (thrustProgress < 0.15) power = thrustProgress / 0.15;
          else if (thrustProgress > 0.7) power = (1.0 - thrustProgress) / 0.3;

          astronautGroup.rotation.x = -0.32 * power + drag.rotX;
          astronautGroup.rotation.z = mouse.x * -0.15;
          astronautGroup.rotation.y = drag.rotY;

          astronautGroup.position.z = power * 0.42 + Math.sin(t * 26.0) * 0.02 * power;
          astronautGroup.position.y = floatOffset + power * 0.1;
          astronautGroup.position.x = mouse.x * 0.15;

          const pos = thrusterGeo.attributes.position.array;
          for (let i = 0; i < thrusterCount; i++) {
            const idx = i * 3;
            thrusterLifetimes[i] += delta * 3.8;
            if (thrusterLifetimes[i] > 1.0) {
              thrusterLifetimes[i] = 0;
              const isLeft = (i % 2 === 0);
              pos[idx] = (isLeft ? -0.16 : 0.16) + (Math.random() - 0.5) * 0.08;
              pos[idx + 1] = 0.02 + (Math.random() - 0.5) * 0.08;
              pos[idx + 2] = -0.28;
            } else {
              pos[idx + 2] -= delta * 5.2;
              pos[idx + 1] -= delta * 0.6;
              const isLeft = (i % 2 === 0);
              pos[idx] += (isLeft ? -1 : 1) * delta * 0.2 + (Math.random() - 0.5) * 0.04;
            }
          }
          thrusterGeo.attributes.position.needsUpdate = true;
          thrusterMaterial.opacity = power * 0.95;

        } else {
          // --- Phase 4: Settle into Weightless Floating ---
          actionState.type = 'float';
          setActiveAction('float');
          thrusterMaterial.opacity = 0;
          astronautGroup.position.z = 0;
          suitMeshes.forEach((m) => { if (m.material) m.material.opacity = 1.0; });
        }

      } else if (actionState.type === 'spin') {
        actionState.timer += delta * 4.5;
        actionState.spinAngle = actionState.timer;
        astronautGroup.rotation.y = actionState.spinAngle + drag.rotY;
        astronautGroup.rotation.x = Math.sin(actionState.timer) * 0.3 + drag.rotX;

        if (actionState.timer >= Math.PI * 2) {
          actionState.type = 'float';
          setActiveAction('float');
          actionState.spinAngle = 0;
        }

      } else if (actionState.type === 'thruster') {
        actionState.timer += delta;
        actionState.thrusterPower = Math.max(0, 1.0 - actionState.timer * 0.8);

        astronautGroup.position.z = Math.sin(actionState.timer * 10) * 0.04 + actionState.thrusterPower * 0.35;
        astronautGroup.rotation.x = (mouse.y * 0.4) - 0.25;

        const positions = thrusterGeo.attributes.position.array;
        for (let i = 0; i < thrusterCount; i++) {
          const idx = i * 3;
          thrusterLifetimes[i] += delta * 3.5;
          if (thrusterLifetimes[i] > 1.0) {
            thrusterLifetimes[i] = 0;
            const isLeft = (i % 2 === 0);
            positions[idx] = (isLeft ? -0.16 : 0.16) + (Math.random() - 0.5) * 0.08;
            positions[idx + 1] = 0.02 + (Math.random() - 0.5) * 0.08;
            positions[idx + 2] = -0.28;
          } else {
            positions[idx + 2] -= delta * 4.5;
            positions[idx + 1] -= delta * 0.6;
            positions[idx] += (Math.random() - 0.5) * 0.04;
          }
        }
        thrusterGeo.attributes.position.needsUpdate = true;
        thrusterMaterial.opacity = actionState.thrusterPower * 0.95;

        if (actionState.thrusterPower <= 0.01) {
          actionState.type = 'float';
          setActiveAction('float');
          thrusterMaterial.opacity = 0;
          astronautGroup.position.z = 0;
        }

      } else if (actionState.type === 'shatter') {
        actionState.timer += delta * 1.1;
        const cycle = actionState.timer;
        let progress = 0;
        if (cycle < 1.0) {
          progress = cycle;
        } else if (cycle < 2.2) {
          progress = 1.0 - (cycle - 1.0) / 1.2;
        } else {
          progress = 0;
          actionState.type = 'float';
          setActiveAction('float');
        }

        const suitAlpha = Math.max(0, 1.0 - progress * 1.5);
        suitMeshes.forEach((mesh) => {
          if (mesh.material) {
            mesh.material.transparent = true;
            mesh.material.opacity = suitAlpha;
          }
        });

        assembleMaterial.opacity = Math.min(progress * 1.6, 0.95);

        const curPos = assembleGeo.attributes.position.array;
        for (let i = 0; i < assembleCount; i++) {
          const idx = i * 3;
          curPos[idx] = THREE.MathUtils.lerp(assembleTargetPos[idx], assembleShatterPos[idx], progress);
          curPos[idx + 1] = THREE.MathUtils.lerp(assembleTargetPos[idx + 1], assembleShatterPos[idx + 1], progress);
          curPos[idx + 2] = THREE.MathUtils.lerp(assembleTargetPos[idx + 2], assembleShatterPos[idx + 2], progress);
        }
        assembleGeo.attributes.position.needsUpdate = true;

      } else {
        // --- Float / Interactive State ---
        astronautGroup.position.y = floatOffset;
        astronautGroup.position.x = mouse.x * 0.22;

        astronautGroup.rotation.y = THREE.MathUtils.lerp(
          astronautGroup.rotation.y,
          mouse.x * 0.5 + yawOffset + drag.rotY,
          0.06
        );
        astronautGroup.rotation.x = THREE.MathUtils.lerp(
          astronautGroup.rotation.x,
          -mouse.y * 0.35 + rollOffset + drag.rotX,
          0.06
        );
        astronautGroup.rotation.z = THREE.MathUtils.lerp(
          astronautGroup.rotation.z,
          -mouse.x * 0.2 + rollOffset * 0.5,
          0.06
        );

        suitMeshes.forEach((mesh) => {
          if (mesh.material) {
            mesh.material.opacity = 1.0;
          }
        });
        assembleMaterial.opacity = 0;
        thrusterMaterial.opacity = 0;
      }

      starField.rotation.y = elapsed * 0.015;
      starField.rotation.x = elapsed * 0.008;

      telemetryTimer += delta;
      if (telemetryTimer > 0.12) {
        telemetryTimer = 0;
        const pitchDeg = (astronautGroup.rotation.x * (180 / Math.PI)).toFixed(1);
        const yawDeg = (astronautGroup.rotation.y * (180 / Math.PI)).toFixed(1);

        let currentStatus = 'SYSTEMS NOMINAL';
        let currentThrust = 'STANDBY';

        if (actionState.type === 'sequence') {
          if (actionState.timer < 2.4) {
            const pct = Math.min(100, Math.round((actionState.timer / 2.2) * 100));
            currentStatus = `PARTICLE ASSEMBLY [${pct}%]`;
            currentThrust = 'RECONSTRUCTING';
          } else if (actionState.timer < 3.8) {
            currentStatus = '360° ORBITAL ROLL';
            currentThrust = 'GYRO ROLL';
          } else if (actionState.timer < 5.2) {
            currentStatus = 'HYPERDRIVE THRUST';
            currentThrust = 'BURST 100%';
          }
        } else if (actionState.type === 'thruster') {
          currentStatus = 'PROPULSION ENGAGED';
          currentThrust = 'BURST 100%';
        } else if (actionState.type === 'spin') {
          currentStatus = '360° GYRO ROLL';
          currentThrust = 'GYRO ACTIVE';
        } else if (actionState.type === 'shatter') {
          currentStatus = 'SHATTER DISSOLVE';
          currentThrust = 'DISPERSED';
        }

        setTelemetry({
          pitch: `${pitchDeg}°`,
          yaw: `${yawDeg}°`,
          velocity: `${(0.04 + Math.abs(mouse.x) * 0.12).toFixed(2)} m/s`,
          thruster: currentThrust,
          status: currentStatus
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      heightPx = container.clientHeight || 560;
      camera.aspect = width / heightPx;
      camera.updateProjectionMatrix();
      renderer.setSize(width, heightPx);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      observer.disconnect();

      pmremGenerator.dispose();
      dynamicEnvTexture.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      assembleGeo.dispose();
      assembleMaterial.dispose();
      particleTexture.dispose();
      thrusterTexture.dispose();
      thrusterGeo.dispose();
      thrusterMaterial.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [playSoundEffect]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        overflow: 'hidden',
        cursor: 'grab'
      }}
    >
      {/* 1. Loading HUD Progress Overlay */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, rgba(14, 20, 36, 0.92) 0%, rgba(6, 8, 14, 0.98) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px'
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              border: '2px solid rgba(0, 243, 255, 0.15)',
              borderTopColor: 'var(--cyber-cyan)',
              animation: 'spin 1s linear infinite',
              marginBottom: '14px'
            }}
          />
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--cyber-cyan)',
              letterSpacing: '0.12em',
              fontWeight: 700
            }}
          >
            LUSION 3D ASTRONAUT [{loadProgress}%]
          </div>
        </div>
      )}

      {/* 2. Top-Left: Live Astronaut Telemetry HUD */}
      {showTelemetryOverlay && (
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 25,
            background: 'rgba(7, 10, 18, 0.78)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '10px 14px',
            pointerEvents: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            minWidth: '220px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background:
                  activeAction === 'sequence' || activeAction === 'thruster'
                    ? 'var(--f1-yellow)'
                    : 'var(--cyber-cyan)',
                boxShadow:
                  activeAction === 'sequence' || activeAction === 'thruster'
                    ? '0 0 8px var(--f1-yellow)'
                    : '0 0 8px var(--cyber-cyan)'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '0.08em'
              }}
            >
              ZERO-G TELEMETRY
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '4px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.64rem',
              color: 'var(--text-muted)'
            }}
          >
            <div>
              PITCH: <span style={{ color: '#fff', fontWeight: 600 }}>{telemetry.pitch}</span>
            </div>
            <div>
              YAW: <span style={{ color: '#fff', fontWeight: 600 }}>{telemetry.yaw}</span>
            </div>
            <div>
              DRIFT: <span style={{ color: 'var(--cyber-cyan)', fontWeight: 600 }}>{telemetry.velocity}</span>
            </div>
            <div>
              THRUST: <span style={{ color: activeAction === 'thruster' || activeAction === 'sequence' ? '#ffaa00' : 'var(--text-muted)', fontWeight: 600 }}>{telemetry.thruster}</span>
            </div>
            <div style={{ gridColumn: 'span 2', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '4px', marginTop: '2px' }}>
              STATUS: <span style={{ color: 'var(--cyber-cyan)', fontWeight: 700 }}>{telemetry.status}</span>
            </div>
          </div>
        </div>
      )}

      {/* Minimalist Ambient Controls (Bottom Right Corner) */}
      <div
        style={{
          position: 'absolute',
          right: '20px',
          bottom: '20px',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(7, 10, 18, 0.78)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '6px 12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Replay Sequence Button */}
        <button
          onClick={() => triggerActionRef.current && triggerActionRef.current('sequence')}
          data-cursor="REPLAY"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--cyber-cyan)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '2px 6px',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700',
            letterSpacing: '0.04em'
          }}
          title="Replay Astronaut Sequence (Shattered Particles -> Assemble -> 360 Spin -> Thruster -> Zero-G Float)"
        >
          <Play size={12} fill="var(--cyber-cyan)" /> Replay
        </button>

        {/* Sound Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          data-cursor="CLICK"
          style={{
            background: 'transparent',
            border: 'none',
            borderLeft: '1px solid var(--border-subtle)',
            paddingLeft: '8px',
            color: soundEnabled ? 'var(--cyber-cyan)' : 'var(--text-dim)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '2px'
          }}
          title={soundEnabled ? 'Mute Deep Space Audio' : 'Enable Deep Space Audio'}
        >
          {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
        </button>

        {/* Recenter 3D Orbit View */}
        <button
          onClick={() => recenterRef.current && recenterRef.current()}
          data-cursor="CLICK"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-dim)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '2px'
          }}
          title="Reset Orbit View"
        >
          <RefreshCw size={12} />
        </button>
      </div>
    </div>
  );
}
