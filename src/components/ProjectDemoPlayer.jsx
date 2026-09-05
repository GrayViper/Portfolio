import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Maximize2, Minimize2, ExternalLink, 
  Github, Sparkles, Activity, Clock, ShieldCheck, Zap
} from 'lucide-react';

export default function ProjectDemoPlayer({ project, brandColor = '#00f2fe' }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const timerRef = useRef(null);
  const totalDuration = 30; // 30 seconds demo duration

  // Define chapter timestamps based on project ID
  const chapters = project.chapters || [
    { time: 0, label: 'System Overview', desc: 'Platform initialization & architecture walkthrough.' },
    { time: 8, label: 'Core Features', desc: 'Interactive feature inspection & pipeline execution.' },
    { time: 16, label: 'Data Telemetry', desc: 'Real-time metrics, analytics & cloud synchronization.' },
    { time: 24, label: 'Production Workflows', desc: 'End-to-end integration and responsive design preview.' }
  ];

  // Determine active chapter based on currentTime
  const activeChapterIndex = chapters.reduce((acc, chap, idx) => {
    return currentTime >= chap.time ? idx : acc;
  }, 0);
  const activeChapter = chapters[activeChapterIndex] || chapters[0];

  // Playback timer tick
  useEffect(() => {
    if (isPlaying) {
      const intervalMs = 100 / playbackSpeed;
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 0.1;
          if (next >= totalDuration) {
            return 0; // Loop seamlessly
          }
          return parseFloat(next.toFixed(1));
        });
      }, intervalMs);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, playbackSpeed]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(parseFloat((pct * totalDuration).toFixed(1)));
  };

  const jumpToChapter = (chapTime) => {
    setCurrentTime(chapTime);
    setIsPlaying(true);
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.5, 2];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  const formatTime = (secs) => {
    const s = Math.floor(secs);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m}:${rem < 10 ? '0' : ''}${rem}`;
  };

  const progressPercent = (currentTime / totalDuration) * 100;

  return (
    <div 
      className={`demo-player-wrapper ${isFullscreen ? 'demo-fullscreen-active' : ''}`}
      style={{
        marginTop: '28px',
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? 0 : 'auto',
        left: isFullscreen ? 0 : 'auto',
        width: isFullscreen ? '100vw' : '100%',
        height: isFullscreen ? '100vh' : 'auto',
        zIndex: isFullscreen ? 99999 : 10,
        background: isFullscreen ? 'rgba(5, 7, 13, 0.95)' : 'transparent',
        backdropFilter: isFullscreen ? 'blur(24px)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isFullscreen ? '30px' : 0,
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: isFullscreen ? '1180px' : '100%',
          background: 'rgba(11, 15, 25, 0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: `1px solid rgba(255, 255, 255, 0.1)`,
          boxShadow: `0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px ${brandColor}18`,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        {/* Top Window Bar */}
        <div 
          style={{
            padding: '12px 18px',
            background: 'rgba(15, 23, 42, 0.75)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          {/* macOS Traffic Dots & Live Rec Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            </div>

            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                padding: '3px 9px',
                borderRadius: '999px',
                fontSize: '0.72rem',
                fontWeight: '700',
                color: '#ef4444',
                letterSpacing: '0.05em'
              }}
            >
              <span 
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#ef4444',
                  animation: isPlaying ? 'pulse 1.2s infinite' : 'none'
                }} 
              />
              ● LIVE DEMO 0:30
            </div>

            <span 
              style={{ 
                fontSize: '0.8rem', 
                color: 'var(--text-dim)', 
                fontFamily: 'monospace',
                fontWeight: '600'
              }}
            >
              {project.demoFile ? project.demoFile.split('/').pop() : `${project.id}_walkthrough.mp4`}
            </span>
          </div>

          {/* Quick Badges & Window Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span 
              style={{
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                color: brandColor,
                background: `${brandColor}15`,
                border: `1px solid ${brandColor}35`,
                padding: '2px 8px',
                borderRadius: '6px',
                fontWeight: '700'
              }}
            >
              HD 1080p · 60fps
            </span>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Theater Mode'}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-dim)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                borderRadius: '6px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
          </div>
        </div>

        {/* Video Canvas / Screen Area */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            maxHeight: isFullscreen ? '70vh' : '440px',
            background: '#040711',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={togglePlay}
        >
          {/* Animated WebP Loop Preview */}
          <img 
            src={project.demoWebp || '/demos/career_genie_30s.webp'}
            alt={`${project.title} 30s Live Demo Walkthrough`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              background: '#060a14',
              filter: isPlaying ? 'brightness(1)' : 'brightness(0.75)',
              transition: 'filter 0.3s ease'
            }}
          />

          {/* Futuristic Subtle Scanline Overlay */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px)',
              opacity: 0.6
            }}
          />

          {/* Pause / Play Center Stamp on Hover */}
          {(isHovered || !isPlaying) && (
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${brandColor}60`,
                boxShadow: `0 0 25px ${brandColor}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {isPlaying ? <Pause size={28} color={brandColor} /> : <Play size={28} color={brandColor} style={{ marginLeft: '3px' }} />}
            </div>
          )}

          {/* HUD Active Chapter Pill (Top Left in Screen) */}
          <div 
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(10, 14, 25, 0.88)',
              backdropFilter: 'blur(14px)',
              border: `1px solid ${brandColor}40`,
              borderRadius: '10px',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
              maxWidth: '85%'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                background: `${brandColor}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: brandColor
              }}
            >
              <Sparkles size={14} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: '800', color: '#fff', letterSpacing: '0.02em' }}>
                {activeChapter.label}
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: '2px', lineHeight: 1.3 }}>
                {activeChapter.desc}
              </div>
            </div>
          </div>

          {/* Telemetry Indicator (Top Right in Screen) */}
          <div 
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(10, 14, 25, 0.88)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.72rem',
              color: '#10b981',
              fontFamily: 'monospace'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            {project.status || 'Live Deployed'}
          </div>
        </div>

        {/* Chapter Quick-Jump Bar */}
        <div 
          style={{
            padding: '10px 18px',
            background: 'rgba(10, 14, 23, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            scrollbarWidth: 'none'
          }}
        >
          <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '4px', whiteSpace: 'nowrap' }}>
            Chapters:
          </span>
          {chapters.map((chap, idx) => {
            const isChapActive = activeChapterIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => jumpToChapter(chap.time)}
                style={{
                  background: isChapActive ? `${brandColor}22` : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${isChapActive ? brandColor : 'rgba(255, 255, 255, 0.08)'}`,
                  color: isChapActive ? '#fff' : 'var(--text-dim)',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  fontSize: '0.72rem',
                  fontWeight: isChapActive ? '700' : '500',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontFamily: 'monospace', color: isChapActive ? brandColor : 'var(--text-dim)', fontSize: '0.66rem' }}>
                  {formatTime(chap.time)}
                </span>
                {chap.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Scrubber & Timeline Progress */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: '8px',
            background: 'rgba(255, 255, 255, 0.08)',
            cursor: 'pointer',
            overflow: 'hidden'
          }}
          onClick={handleSeek}
          title={`Seek demo timeline (${formatTime(currentTime)} / ${formatTime(totalDuration)})`}
        >
          {/* Neon Active Progress */}
          <div 
            style={{
              height: '100%',
              width: `${progressPercent}%`,
              background: `linear-gradient(90deg, ${brandColor}, #3b82f6)`,
              boxShadow: `0 0 10px ${brandColor}`,
              transition: isPlaying ? 'width 0.1s linear' : 'none'
            }}
          />

          {/* Chapter Markers on Timeline */}
          {chapters.map((chap, i) => (
            <div 
              key={i}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${(chap.time / totalDuration) * 100}%`,
                width: '2px',
                background: 'rgba(255, 255, 255, 0.3)',
                pointerEvents: 'none'
              }}
            />
          ))}
        </div>

        {/* Bottom Media Controls Bar */}
        <div 
          style={{
            padding: '12px 20px',
            background: 'rgba(15, 23, 42, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px'
          }}
        >
          {/* Left Controls: Play, Restart, Time readout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={togglePlay}
              style={{
                background: `${brandColor}22`,
                border: `1px solid ${brandColor}55`,
                color: brandColor,
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
            </button>

            <button
              onClick={handleRestart}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-dim)',
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title="Restart Demo from 0:00"
            >
              <RotateCcw size={15} />
            </button>

            {/* Time Indicator */}
            <div 
              style={{
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                fontWeight: '700',
                color: '#fff',
                letterSpacing: '0.04em'
              }}
            >
              <span style={{ color: brandColor }}>{formatTime(currentTime)}</span>
              <span style={{ color: 'var(--text-dim)' }}> / {formatTime(totalDuration)}</span>
            </div>

            {/* Speed Toggle */}
            <button
              onClick={cycleSpeed}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-dim)',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.72rem',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: 'monospace'
              }}
              title="Change playback speed"
            >
              {playbackSpeed}x
            </button>
          </div>

          {/* Right Controls: Direct Launch Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: `linear-gradient(135deg, ${brandColor}, #3b82f6)`,
                  color: '#000',
                  fontWeight: '800',
                  fontSize: '0.78rem',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: `0 0 15px ${brandColor}40`,
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = `0 0 20px ${brandColor}70`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 0 15px ${brandColor}40`;
                }}
              >
                <ExternalLink size={14} />
                Launch Live App
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '0.78rem',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'}
              >
                <Github size={14} />
                Source Code
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
