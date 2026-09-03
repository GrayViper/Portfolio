import React, { useState } from 'react';
import { Cpu, Server, Terminal, Shield, Database, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'cloud', label: 'Cloud & IaC' },
    { id: 'cicd', label: 'CI/CD & Linux' },
    { id: 'dev', label: 'Full-Stack & APIs' },
    { id: 'data', label: 'Observability & DBs' },
    { id: 'ai', label: 'Agentic AI & LLMs' }
  ];

  const skillItems = [
    // Cloud & IaC
    { name: 'Kubernetes', cat: 'cloud', level: '85%', icon: '☸️', desc: 'AWS EKS clusters, Pod scheduling, Helm charts, ingress controllers, rolling updates', tag: 'Orchestration' },
    { name: 'Docker', cat: 'cloud', level: '92%', icon: '🐳', desc: 'Multi-stage Dockerfiles, image optimization, Trivy security scans, container networks', tag: 'Containers' },
    { name: 'AWS Cloud', cat: 'cloud', level: '84%', icon: '☁️', desc: 'EKS, EC2, S3, IAM policies, VPC networking, CloudWatch metrics & auto-scaling', tag: 'Cloud' },
    { name: 'Terraform', cat: 'cloud', level: '82%', icon: '🏗️', desc: 'Infrastructure as Code, modular configurations, remote S3 state & DynamoDB locking', tag: 'IaC' },

    // CI/CD & Linux
    { name: 'GitHub Actions', cat: 'cicd', level: '90%', icon: '⚡', desc: 'Automated CI/CD workflows, linting, unit testing, container build & deploy pipelines', tag: 'CI/CD' },
    { name: 'Linux & Shell Scripting', cat: 'cicd', level: '88%', icon: '🐧', desc: 'Bash scripting, system administration, process management, cron automation & permissions', tag: 'OS & Scripting' },
    { name: 'Git & GitOps', cat: 'cicd', level: '90%', icon: '🐙', desc: 'Git branching models, PR workflows, ArgoCD continuous delivery & commit hygiene', tag: 'GitOps' },
    { name: 'Postman', cat: 'cicd', level: '88%', icon: '📮', desc: 'API testing, automated collection runs, webhook integration & endpoint mocking', tag: 'Testing' },

    // Full-Stack & APIs
    { name: 'FastAPI', cat: 'dev', level: '88%', icon: '🚀', desc: 'High-performance async Python REST APIs, Pydantic data validation & JWT auth', tag: 'Backend' },
    { name: 'Python', cat: 'dev', level: '90%', icon: '🐍', desc: 'Automation scripting, backend engineering, data modeling & AI integrations', tag: 'Language' },
    { name: 'React', cat: 'dev', level: '92%', icon: '⚛️', desc: 'Vite, hooks, component architecture, responsive UI & state management', tag: 'Frontend' },
    { name: 'Next.js', cat: 'dev', level: '85%', icon: '▲', desc: 'App Router, server-side rendering, API routes, TypeScript & Vercel deployment', tag: 'Full-Stack' },
    { name: 'TypeScript', cat: 'dev', level: '84%', icon: '🔷', desc: 'Type-safe full-stack engineering with Next.js and Drizzle ORM schemas', tag: 'Type-Safety' },
    { name: 'Flask', cat: 'dev', level: '82%', icon: '🌶️', desc: 'Python microservice backends, SQLite/MongoDB models, Jinja templating & auth', tag: 'Microservices' },
    { name: 'C++', cat: 'dev', level: '80%', icon: '⚡', desc: 'Object-oriented programming, data structures, algorithm efficiency & memory handling', tag: 'Core' },

    // Observability & DBs
    { name: 'Prometheus & Grafana', cat: 'data', level: '82%', icon: '📊', desc: 'Cluster metric scraping, telemetry dashboards, threshold alerts & monitoring', tag: 'Observability' },
    { name: 'MongoDB Atlas', cat: 'data', level: '86%', icon: '🍃', desc: 'NoSQL document schema design, Atlas cloud clusters, aggregation pipelines', tag: 'NoSQL' },
    { name: 'PostgreSQL & MySQL', cat: 'data', level: '82%', icon: '🐬', desc: 'Relational DB design, SQL queries, Drizzle ORM migrations & connection pooling', tag: 'RDBMS' },

    // Agentic AI & Tools
    { name: 'Agentic AI Workflows', cat: 'ai', level: '88%', icon: '🤖', desc: 'Xebia industry training: designing multi-agent AI execution loops & LLM pipelines', tag: 'Agentic AI' },
    { name: 'Gemini API & LLMs', cat: 'ai', level: '86%', icon: '✨', desc: 'Context-augmented prompts, health diagnostics, structured JSON schemas & chat flows', tag: 'GenAI' },
    { name: 'Vercel & Render', cat: 'ai', level: '90%', icon: '▲', desc: 'Serverless deployment, edge functions, GitHub auto-deploy & environment config', tag: 'Cloud Deploy' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(s => s.cat === activeCategory);

  return (
    <section id="skills" style={{ padding: '100px 0' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag section-tag-cyan" style={{ marginBottom: '14px' }}>
            ⚡ DEVOPS &amp; CLOUD INFRASTRUCTURE MATRIX
          </span>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '900', letterSpacing: '-0.03em' }}>
            Technical <span className="gradient-text">Skills &amp; Tooling</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '10px', fontSize: '0.96rem', maxWidth: '540px', margin: '10px auto 0' }}>
            Engineered for high-availability cloud systems, containerization, CI/CD pipelines &amp; full-stack platforms
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id
                  ? 'linear-gradient(135deg, var(--web-red) 0%, var(--web-red-dark) 100%)'
                  : 'rgba(255,255,255,0.04)',
                color: activeCategory === cat.id ? '#ffffff' : 'var(--text-dim)',
                border: `1px solid ${activeCategory === cat.id ? 'var(--web-red)' : 'var(--border-subtle)'}`,
                padding: '8px 20px', borderRadius: '10px',
                fontSize: '0.84rem', fontWeight: '700',
                cursor: 'pointer', transition: 'all 0.2s ease',
                fontFamily: 'var(--font-body)',
                boxShadow: activeCategory === cat.id ? '0 4px 18px var(--web-red-glow)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '18px'
        }}>
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="glass-card-web" style={{ padding: '22px' }}>
              
              {/* Header: Icon + Title + Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontSize: '1.4rem', width: '40px', height: '40px',
                    background: 'rgba(255,42,95,0.1)', border: '1px solid rgba(255,42,95,0.25)',
                    borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>{skill.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '1.02rem', fontWeight: '800', color: '#fff' }}>{skill.name}</h3>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--cyber-cyan)' }}>
                      {skill.tag}
                    </span>
                  </div>
                </div>

                <span style={{
                  fontSize: '0.74rem', fontFamily: 'var(--font-mono)',
                  color: 'var(--terminal-green)', fontWeight: '700',
                  background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
                  padding: '2px 8px', borderRadius: '6px'
                }}>
                  {skill.level}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: '1.6', marginBottom: '16px', minHeight: '44px' }}>
                {skill.desc}
              </p>

              {/* Glowing Progress Bar */}
              <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: skill.level,
                  background: 'linear-gradient(90deg, var(--web-red) 0%, var(--cyber-cyan) 100%)',
                  borderRadius: '2px',
                  boxShadow: '0 0 8px var(--web-red-glow)'
                }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
