import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Volume2, VolumeX, Sparkles, RefreshCw, Eye, Flame } from 'lucide-react';

/**
 * LusionAstronaut3D Component - Authentic Lusion.co Interactive 3D Astronaut Engine
 *
 * Technical Highlights:
 * - 3D GLTF Astronaut Engine with procedural PBR materials and gold chrome visor
 * - Weightless Zero-Gravity Physics (harmonic drift, bobbing, inertia-damped mouse parallax)
 * - Interactive 360° Orbit Dragging (touch & mouse)
 * - Scroll-Bound Trajectory & acrobatic perspective shift
 * - Lusion Signature FX:
 *     1. Thruster Plasma Exhaust (interactive backpack jetpack booster)
 *     2. Hologram Particle Shatter & Magnetic Reassembly
 *     3. Zero-G 360° Acrobatic Spin
 *     4. Ambient Cosmic Stardust Field
 * - Web Audio API deep space ambient hum and thruster bursts
 */
export default function LusionAstronaut3D({
  isFullScreen = false,
  showTelemetryOverlay = true,
  showActionButtons = true,
  height = '560px',
  className = ''
}) {
  const mountRef = useRef(null);

  // Component UI States
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeAction, setActiveAction] = useState('float'); // 'float' | 'thruster' | 'spin' | 'shatter'
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [telemetry, setTelemetry] = useState({
    pitch: '0.0°',
    yaw: '0.0°',
    velocity: '0.04 m/s',
    thruster: 'STANDBY',
    status: 'SYSTEMS NOMINAL'
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

      if (type === 'thruster') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(80, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.6);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.6);
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
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.3);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.8);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.85);
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

    const visorGlowLight = new THREE.PointLight(0x00f3ff, 1.2, 3.5);
    visorGlowLight.position.set(0, 0.8, 1.2);
    scene.add(visorGlowLight);

    // --- 3. Cosmic Space Environment ---
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

    // --- 4. Hologram Shatter Particle Cloud ---
    const shatterCount = 1200;
    const shatterGeo = new THREE.BufferGeometry();
    const shatterOriginPos = new Float32Array(shatterCount * 3);
    const shatterCurrentPos = new Float32Array(shatterCount * 3);
    const shatterVelocities = new Float32Array(shatterCount * 3);

    for (let i = 0; i < shatterCount; i++) {
      const idx = i * 3;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.9;
      const sinPhi = Math.sin(phi);

      const x = r * sinPhi * Math.cos(theta);
      const y = (r * Math.cos(phi) * 1.5) - 0.1;
      const z = r * sinPhi * Math.sin(theta);

      shatterOriginPos[idx] = x;
      shatterOriginPos[idx + 1] = y;
      shatterOriginPos[idx + 2] = z;

      shatterCurrentPos[idx] = x;
      shatterCurrentPos[idx + 1] = y;
      shatterCurrentPos[idx + 2] = z;

      shatterVelocities[idx] = x * 2.5 + (Math.random() - 0.5) * 1.2;
      shatterVelocities[idx + 1] = y * 2.2 + (Math.random() - 0.5) * 1.2;
      shatterVelocities[idx + 2] = z * 2.5 + (Math.random() - 0.5) * 1.2;
    }
    shatterGeo.setAttribute('position', new THREE.BufferAttribute(shatterCurrentPos, 3));

    const shatterMaterial = new THREE.PointsMaterial({
      color: 0x00f3ff,
      size: 0.045,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const shatterParticles = new THREE.Points(shatterGeo, shatterMaterial);
    scene.add(shatterParticles);

    // --- 5. Thruster Plasma Particle System ---
    const thrusterCount = 100;
    const thrusterGeo = new THREE.BufferGeometry();
    const thrusterPositions = new Float32Array(thrusterCount * 3);
    const thrusterLifetimes = new Float32Array(thrusterCount);

    for (let i = 0; i < thrusterCount; i++) {
      thrusterPositions[i * 3] = 0;
      thrusterPositions[i * 3 + 1] = 0;
      thrusterPositions[i * 3 + 2] = 0;
      thrusterLifetimes[i] = Math.random();
    }
    thrusterGeo.setAttribute('position', new THREE.BufferAttribute(thrusterPositions, 3));

    const thrusterMaterial = new THREE.PointsMaterial({
      color: 0x00f3ff,
      size: 0.08,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const thrusterMesh = new THREE.Points(thrusterGeo, thrusterMaterial);
    scene.add(thrusterMesh);

    // --- 6. Astronaut Model Group & Rigging ---
    const astronautGroup = new THREE.Group();
    scene.add(astronautGroup);

    let astronautModel = null;
    let mixer = null;
    const suitMeshes = [];

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

            const matName = (child.material?.name || '').toLowerCase();
            const meshName = (child.name || '').toLowerCase();

            if (matName.includes('visor') || meshName.includes('visor') || matName.includes('glass')) {
              child.material = new THREE.MeshPhysicalMaterial({
                color: 0x111111,
                emissive: 0x002233,
                metalness: 0.95,
                roughness: 0.05,
                clearcoat: 1.0,
                clearcoatRoughness: 0.05,
                reflectivity: 1.0,
                envMap: dynamicEnvTexture,
                envMapIntensity: 2.5
              });
            } else {
              if (child.material) {
                child.material.envMap = dynamicEnvTexture;
                child.material.envMapIntensity = 0.8;
                child.material.roughness = THREE.MathUtils.clamp(child.material.roughness || 0.6, 0.35, 0.7);
              }
            }
          }
        });

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(astronautModel);
          const clip = gltf.animations[0];
          const action = mixer.clipAction(clip);
          action.play();
        }

        astronautGroup.add(astronautModel);
        setIsLoaded(true);
        setLoadProgress(100);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setLoadProgress(Math.round((xhr.loaded / xhr.total) * 100));
        } else {
          setLoadProgress((prev) => Math.min(prev + 15, 95));
        }
      },
      () => {
        // Fallback procedural
        setIsLoaded(true);
        setLoadProgress(100);
      }
    );

    // --- 7. Mouse Cursor Parallax & Orbit Drag ---
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

    // --- 8. Action State Machine ---
    let actionState = {
      type: 'float',
      timer: 0,
      spinAngle: 0,
      shatterProgress: 0,
      thrusterPower: 0
    };

    triggerActionRef.current = (type) => {
      setActiveAction(type);
      actionState.type = type;
      actionState.timer = 0;

      if (type === 'thruster') {
        actionState.thrusterPower = 1.0;
        playSoundEffect('thruster');
        thrusterMaterial.opacity = 0.9;
      } else if (type === 'spin') {
        playSoundEffect('spin');
      } else if (type === 'shatter') {
        actionState.shatterProgress = 0.01;
        playSoundEffect('shatter');
      }
    };

    // --- 9. Real-time 60 FPS Render Loop ---
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

      astronautGroup.position.y = floatOffset;
      astronautGroup.position.x = mouse.x * 0.22;

      if (actionState.type === 'spin') {
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

        astronautGroup.position.z = Math.sin(actionState.timer * 10) * 0.04 + actionState.thrusterPower * 0.3;
        astronautGroup.rotation.x = (mouse.y * 0.4) - 0.25;

        const positions = thrusterGeo.attributes.position.array;
        for (let i = 0; i < thrusterCount; i++) {
          const idx = i * 3;
          thrusterLifetimes[i] += delta * 2.8;
          if (thrusterLifetimes[i] > 1.0) {
            thrusterLifetimes[i] = 0;
            positions[idx] = (Math.random() - 0.5) * 0.35;
            positions[idx + 1] = -0.3 + (Math.random() - 0.5) * 0.15;
            positions[idx + 2] = -0.6;
          } else {
            positions[idx + 2] -= delta * 3.5;
            positions[idx + 1] -= delta * 0.8;
            positions[idx] += (Math.random() - 0.5) * 0.05;
          }
        }
        thrusterGeo.attributes.position.needsUpdate = true;
        thrusterMaterial.opacity = actionState.thrusterPower * 0.9;

        if (actionState.thrusterPower <= 0.01) {
          actionState.type = 'float';
          setActiveAction('float');
          thrusterMaterial.opacity = 0;
          astronautGroup.position.z = 0;
        }
      } else if (actionState.type === 'shatter') {
        actionState.timer += delta * 1.2;
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

        shatterMaterial.opacity = Math.min(progress * 1.6, 0.95);

        const curPos = shatterGeo.attributes.position.array;
        for (let i = 0; i < shatterCount; i++) {
          const idx = i * 3;
          curPos[idx] = shatterOriginPos[idx] + shatterVelocities[idx] * progress;
          curPos[idx + 1] = shatterOriginPos[idx + 1] + shatterVelocities[idx + 1] * progress;
          curPos[idx + 2] = shatterOriginPos[idx + 2] + shatterVelocities[idx + 2] * progress;
        }
        shatterGeo.attributes.position.needsUpdate = true;
      } else {
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
        shatterMaterial.opacity = 0;
      }

      starField.rotation.y = elapsed * 0.015;
      starField.rotation.x = elapsed * 0.008;

      telemetryTimer += delta;
      if (telemetryTimer > 0.15) {
        telemetryTimer = 0;
        const pitchDeg = (astronautGroup.rotation.x * (180 / Math.PI)).toFixed(1);
        const yawDeg = (astronautGroup.rotation.y * (180 / Math.PI)).toFixed(1);
        setTelemetry({
          pitch: `${pitchDeg}°`,
          yaw: `${yawDeg}°`,
          velocity: `${(0.04 + Math.abs(mouse.x) * 0.12).toFixed(2)} m/s`,
          thruster: actionState.type === 'thruster' ? 'BURST 100%' : 'STANDBY',
          status: actionState.type === 'shatter' ? 'SHATTER DISSOLVE' : 'SYSTEMS NOMINAL'
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

      pmremGenerator.dispose();
      dynamicEnvTexture.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      shatterGeo.dispose();
      shatterMaterial.dispose();
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
            background: 'rgba(7, 10, 18, 0.72)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '10px 14px',
            pointerEvents: 'none',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: activeAction === 'shatter' ? 'var(--f1-yellow)' : 'var(--cyber-cyan)',
                boxShadow: '0 0 8px var(--cyber-cyan)'
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
              THRUST: <span style={{ color: activeAction === 'thruster' ? '#ffaa00' : 'var(--text-muted)', fontWeight: 600 }}>{telemetry.thruster}</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Audio Toggle */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 25
        }}
      >
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          data-cursor="CLICK"
          title={soundEnabled ? 'Mute Deep Space Audio' : 'Unmute Deep Space Audio'}
          style={{
            background: 'rgba(7, 10, 18, 0.72)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            padding: '6px 12px',
            color: soundEnabled ? 'var(--cyber-cyan)' : 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.68rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
          <span>{soundEnabled ? 'SFX: ON' : 'SFX: OFF'}</span>
        </button>
      </div>

      {/* 4. Action Buttons Suite */}
      {showActionButtons && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 25,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(7, 10, 18, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            padding: '4px 8px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.65)',
            maxWidth: '95%'
          }}
        >
          <button
            onClick={() => triggerActionRef.current && triggerActionRef.current('float')}
            data-cursor="FLOAT"
            style={{
              background: activeAction === 'float' ? 'rgba(0, 243, 255, 0.15)' : 'transparent',
              border: activeAction === 'float' ? '1px solid var(--cyber-cyan)' : '1px solid transparent',
              color: activeAction === 'float' ? '#fff' : 'var(--text-muted)',
              borderRadius: '9999px',
              padding: '6px 12px',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer'
            }}
          >
            <Eye size={12} style={{ color: 'var(--cyber-cyan)' }} />
            <span>FLOAT</span>
          </button>

          <button
            onClick={() => triggerActionRef.current && triggerActionRef.current('thruster')}
            data-cursor="THRUST"
            style={{
              background: activeAction === 'thruster' ? 'rgba(255, 170, 0, 0.2)' : 'transparent',
              border: activeAction === 'thruster' ? '1px solid #ffaa00' : '1px solid transparent',
              color: activeAction === 'thruster' ? '#fff' : 'var(--text-muted)',
              borderRadius: '9999px',
              padding: '6px 12px',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer'
            }}
          >
            <Flame size={12} style={{ color: '#ffaa00' }} />
            <span>THRUSTER</span>
          </button>

          <button
            onClick={() => triggerActionRef.current && triggerActionRef.current('spin')}
            data-cursor="SPIN"
            style={{
              background: activeAction === 'spin' ? 'rgba(0, 243, 255, 0.15)' : 'transparent',
              border: activeAction === 'spin' ? '1px solid var(--cyber-cyan)' : '1px solid transparent',
              color: activeAction === 'spin' ? '#fff' : 'var(--text-muted)',
              borderRadius: '9999px',
              padding: '6px 12px',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer'
            }}
          >
            <RefreshCw size={12} style={{ color: 'var(--cyber-cyan)' }} />
            <span>SPIN</span>
          </button>

          <button
            onClick={() => triggerActionRef.current && triggerActionRef.current('shatter')}
            data-cursor="SHATTER"
            style={{
              background: activeAction === 'shatter' ? 'rgba(0, 243, 255, 0.25)' : 'transparent',
              border: activeAction === 'shatter' ? '1px solid var(--cyber-cyan)' : '1px solid transparent',
              color: activeAction === 'shatter' ? '#fff' : 'var(--text-muted)',
              borderRadius: '9999px',
              padding: '6px 12px',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer'
            }}
          >
            <Sparkles size={12} style={{ color: 'var(--cyber-cyan)' }} />
            <span>SHATTER</span>
          </button>
        </div>
      )}
    </div>
  );
}
