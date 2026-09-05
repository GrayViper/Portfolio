import React, { useState } from 'react';
import { Github, ExternalLink, CheckCircle, Activity, Layers, Server, ShieldCheck, Terminal as TerminalIcon, Film, Play } from 'lucide-react';
import ProjectDemoPlayer from './ProjectDemoPlayer';

export default function Projects() {
  const projects = [
    {
      id: 'career-genie',
      title: 'Career_Genie',
      subtitle: 'AI Job & Scholarship Discovery Platform',
      date: 'June 2026',
      status: 'Live on Vercel & Render',
      statusColor: '#10b981',
      pipeline: 'CI/CD Passed · Docker Ready',
      summary: 'Full-stack web platform using React and Vite, integrating high-performance async REST APIs for job, internship, and scholarship discovery. Powered by FastAPI backend with MongoDB Atlas cloud database and JWT auth.',
      tags: ['React', 'FastAPI', 'MongoDB Atlas', 'Vercel', 'Render', 'JWT Auth', 'CI/CD'],
      highlights: [
        'Automated REST API integration for real-time job & scholarship discovery',
        'JWT-based secure authentication & personalized application tracking',
        'Multi-stage Docker deployment pipeline with Render backend & Vercel frontend'
      ],
      githubUrl: 'https://github.com/GrayViper/Carrier_Genie',
      demoUrl: 'https://carrier-genie.vercel.app',
      demoWebp: '/demos/career_genie_30s.webp',
      demoFile: 'career_genie_walkthrough_30s.mp4',
      chapters: [
        { time: 0, label: 'Hero & AI Resume Match', desc: 'Context-aware resume analysis with 98% match precision and ATS optimization.' },
        { time: 8, label: 'Automated Job Feed', desc: 'Real-time aggregated tech jobs, internships & direct application links.' },
        { time: 16, label: 'Scholarship Intelligence', desc: 'Automated discovery for merit-based fellowships and financial awards.' },
        { time: 24, label: 'Living Profile & Tracker', desc: 'Dynamic profile syncing live with FastAPI and MongoDB Atlas.' }
      ]
    },
    {
      id: 'hi-links',
      title: 'hi_links',
      subtitle: 'Scalable Full-Stack Link Management System',
      date: 'May 2026',
      status: 'Repository & Docs',
      statusColor: '#00f2fe',
      pipeline: 'Next.js SSR · Neon Postgres · Drizzle',
      summary: 'High-performance scalable web application built with Next.js, TypeScript, Drizzle ORM, and Neon PostgreSQL for structured link management, analytics, and instant sharing.',
      tags: ['Next.js', 'TypeScript', 'Drizzle ORM', 'Neon Postgres', 'Vercel', 'Tailwind'],
      highlights: [
        'Type-safe database operations with Drizzle ORM & serverless Postgres',
        'Optimized server-side rendering (SSR) and edge-cached static pages',
        'Automated Vercel CI/CD deployment on every GitHub repository push'
      ],
      githubUrl: 'https://github.com/GrayViper/hi_links',
      demoUrl: null,
      demoWebp: '/demos/hi_links_30s.webp',
      demoFile: 'hi_links_management_demo_30s.mp4',
      chapters: [
        { time: 0, label: 'SaaS Link Management Console', desc: 'Next.js SSR powered link shortener with custom slug creation and alias routing.' },
        { time: 9, label: 'Dynamic QR Code Engine', desc: 'Automated vector SVG & PNG QR code generator with brand styling.' },
        { time: 17, label: 'Real-time Click Telemetry', desc: 'Global geo click heatmaps, device breakdowns & Drizzle ORM analytics.' },
        { time: 24, label: 'Neon Postgres & Edge Caching', desc: 'Serverless PostgreSQL pipeline achieving 99.4% Vercel Edge cache hit rate.' }
      ]
    },
    {
      id: 'cura-ai-health',
      title: 'Cura-AI-Health',
      subtitle: 'AI-Powered Health Assistant & Diagnostic System',
      date: 'August 2026',
      status: 'Live on GitHub Pages',
      statusColor: '#ff2a5f',
      pipeline: 'Gemini 1.5 API · Flask · Chart.js',
      summary: 'Full-stack AI health assistant application using Python Flask, SQLite, and Google Gemini API — providing real-time symptom analysis, interactive nutrition planning, and mental wellness tracking.',
      tags: ['Python', 'Flask', 'Gemini API', 'SQLite', 'Chart.js', 'Bootstrap', 'GitHub Pages'],
      highlights: [
        'Context-aware symptom analysis & personalized diet generation via Gemini API',
        'Crisis keyword detection, automated health risk alerts & Chart.js dashboards',
        'Role-based authentication, admin dashboard, guest mode & session storage'
      ],
      githubUrl: 'https://github.com/GrayViper/cura-ai-health',
      demoUrl: 'https://grayviper.github.io/cura-ai-health/',
      demoWebp: '/demos/cura_ai_30s.webp',
      demoFile: 'cura_ai_clinical_demo_30s.mp4',
      chapters: [
        { time: 0, label: 'Clinical Diagnostic Overview', desc: 'Instant patient triage, vitals dashboard, and real-time medical alert indicators.' },
        { time: 8, label: 'Report OCR & PDF Extraction', desc: 'Automated extraction of lab results, CBC counts, and metabolic panel values.' },
        { time: 16, label: 'Gemini 1.5 Symptom Engine', desc: 'Differential diagnosis powered by multimodal medical AI prompting.' },
        { time: 24, label: 'Interactive Telemetry & Chat', desc: 'Dynamic Chart.js biomarker trends and empathetic AI wellness companion.' }
      ]
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag" style={{ marginBottom: '14px' }}>
            🚀 PRODUCTION SYSTEMS &amp; REPOSITORIES
          </span>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '900', letterSpacing: '-0.03em' }}>
            Featured <span className="gradient-text">DevOps Projects</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '10px', fontSize: '0.96rem' }}>
            Architected and deployed by <a href="https://github.com/GrayViper" target="_blank" rel="noreferrer" style={{ color: 'var(--cyber-cyan)', textDecoration: 'none', fontWeight: '700' }}>github.com/GrayViper</a>
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '26px'
        }}>
          {projects.map((project) => (
            <div key={project.id} className="glass-card-web" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>

              {/* Top Accent Gradient Bar */}
              <div style={{
                height: '3px',
                background: `linear-gradient(90deg, ${project.statusColor}, var(--web-red))`,
                marginBottom: '20px', marginLeft: '-28px', marginRight: '-28px', marginTop: '-28px',
                borderRadius: '20px 20px 0 0'
              }} />

              {/* Status Header + Pipeline Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: '700',
                  color: project.statusColor, background: `${project.statusColor}18`,
                  border: `1px solid ${project.statusColor}44`, padding: '3px 10px', borderRadius: '9999px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: project.statusColor, display: 'inline-block' }} />
                  {project.status}
                </span>

                <span style={{
                  fontSize: '0.70rem', fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)', background: 'rgba(255,255,255,0.04)',
                  padding: '3px 8px', borderRadius: '6px', border: '1px solid var(--border-subtle)'
                }}>
                  {project.date}
                </span>
              </div>

              {/* Pipeline Tag */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--cyber-cyan)',
                background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.2)',
                padding: '4px 10px', borderRadius: '8px', marginBottom: '14px'
              }}>
                <Activity size={13} color="var(--cyber-cyan)" />
                <span>{project.pipeline}</span>
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--web-red)', fontWeight: '600', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                {project.subtitle}
              </p>

              {/* Summary */}
              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: '1.65', marginBottom: '18px' }}>
                {project.summary}
              </p>

              {/* Architecture Highlights */}
              <div style={{ marginBottom: '18px', flex: 1 }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <CheckCircle size={14} color="var(--terminal-green)" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {project.tags.map((t, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.72rem', fontFamily: 'var(--font-mono)',
                    padding: '3px 9px', borderRadius: '6px',
                    background: 'rgba(255,42,95,0.08)', border: '1px solid rgba(255,42,95,0.2)',
                    color: 'var(--text-muted)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* 30-Second Live Demo Video Walkthrough */}
              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: '800', color: '#fff', letterSpacing: '0.02em' }}>
                    <Film size={14} color={project.statusColor} />
                    <span>30s Speedrun Demo Walkthrough</span>
                  </div>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: project.statusColor, background: `${project.statusColor}18`, padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>
                    0:30 Preview
                  </span>
                </div>

                <ProjectDemoPlayer project={project} brandColor={project.statusColor} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
