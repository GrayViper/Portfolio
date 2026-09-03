import React, { useState } from 'react';
import { Play, Pause, Film, FastForward, Volume2, VolumeX } from 'lucide-react';

/**
 * F1VideoSceneBar Component
 * Directly synced to reference video f1.mp4 to jump across key scenes.
 */
export default function F1VideoSceneBar() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const scenes = [
    { time: 1, label: '0:01 Cockpit Telemetry' },
    { time: 6, label: '0:06 Turntable Reveal' },
    { time: 9, label: '0:09 Livery & Sponsors' },
    { time: 16, label: '0:16 Apex Night Track' }
  ];

  const jumpToScene = (timeSec) => {
    const video = document.querySelector('.f1-video-bg');
    if (video) {
      video.currentTime = timeSec;
      video.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    const video = document.querySelector('.f1-video-bg');
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = document.querySelector('.f1-video-bg');
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div style={{
      background: 'rgba(10, 14, 23, 0.9)',
      backdropFilter: 'blur(16px)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '16px',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '28px'
    }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Film size={18} color="var(--f1-red)" />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#fff', fontWeight: '700' }}>
          REFERENCE VIDEO (F1.MP4) SCENE JUMP:
        </span>
      </div>

      {/* Scene Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {scenes.map((scene, idx) => (
          <button
            key={idx}
            onClick={() => jumpToScene(scene.time)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--f1-yellow)',
              borderRadius: '8px',
              padding: '6px 12px',
              fontSize: '0.76rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--f1-red)';
              e.target.style.background = 'rgba(255, 24, 1, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--border-subtle)';
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <FastForward size={12} /> {scene.label}
          </button>
        ))}
      </div>

      {/* Video Audio & Playback Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          onClick={togglePlay}
          style={{
            background: 'rgba(255, 24, 1, 0.15)',
            border: '1px solid var(--f1-red)',
            color: '#fff',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '0.76rem',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          {isPlaying ? 'PAUSE' : 'PLAY'}
        </button>

        <button
          onClick={toggleMute}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: isMuted ? 'var(--text-muted)' : 'var(--f1-yellow)',
            borderRadius: '8px',
            padding: '6px 10px',
            cursor: 'pointer'
          }}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>

    </div>
  );
}
