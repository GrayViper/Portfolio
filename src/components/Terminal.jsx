import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';

export default function Terminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '🏁 CHINNI KRISHNA // DEVOPS & AGENTIC AI CONTROL PLANE v3.2 [Linux x86_64]' },
    { type: 'system', text: 'Engineer: @GrayViper (github.com/GrayViper) • B.Tech CSE @ Lovely Professional University' },
    { type: 'info', text: 'Type "help", "skills", "projects", "status", or click the quick command chips below.' }
  ]);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `devops@GrayViper:~$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE DEVOPS CLI COMMANDS:
  • help           - Display this manual
  • skills         - Output Cloud, CI/CD, Container & Full-Stack tooling
  • projects       - Output production GrayViper GitHub repositories
  • status         - Perform real-time cluster health & connectivity diagnostic
  • certs          - Output B.Tech degree, Xebia training & credentials
  • f1             - Display telemetry vehicle & pipeline metrics
  • whoami         - Print engineer profile summary
  • cat resume.txt - Print complete developer bio & contact info
  • clear          - Clear terminal history`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'cyan',
          text: `[DEVOPS & CLOUD INFRASTRUCTURE TELEMETRY]
  Orchestration: Kubernetes (AWS EKS 1.30), Docker, Docker Compose
  IaC & Cloud:   Terraform, AWS (EC2, S3, IAM, VPC), CloudWatch
  CI/CD & Linux: GitHub Actions, GitOps / ArgoCD, Linux (Bash), Postman
  Full-Stack:    FastAPI, Python, React, Next.js, TypeScript, Flask, C++
  Data & Alerts: Prometheus, Grafana, MongoDB Atlas, PostgreSQL, MySQL
  Agentic AI:    Google Gemini API, Xebia Agentic AI Workflows, Antigravity`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'green',
          text: `[FEATURED GRAYVIPER REPOSITORIES]
  1. GrayViper/Carrier_Genie (June 2026)
     └─ Full-stack job & scholarship discovery (React, FastAPI, MongoDB Atlas, JWT Auth)
  2. GrayViper/hi_links (May 2026)
     └─ Scalable link manager (Next.js, TypeScript, Drizzle ORM, Neon Postgres)
  3. GrayViper/cura-ai-health (Aug 2026) → https://cura-ai-health.vercel.app
     └─ AI health assistant (Python, Flask, SQLite, Gemini API, Chart.js)`
        });
        break;

      case 'status':
        newHistory.push({
          type: 'green',
          text: `[CLUSTER & SYSTEM DIAGNOSTIC]
  ✔ GitHub Profile: github.com/GrayViper (Connected)
  ✔ LinkedIn: linkedin.com/in/chinni-krishna8 (Active)
  ✔ Email: chakkaanil6@gmail.com
  ✔ Mobile: +91 8135839393
  ✔ AWS EKS Cluster: Online (v1.30)
  ✔ ArgoCD GitOps: Synced (1.82s SLA)
  ✔ CI/CD Pipelines: 99.9% Passing
  ✔ Role Status: Open for Internships & Full-Time DevOps Roles 🏁`
        });
        break;

      case 'f1':
        newHistory.push({
          type: 'red',
          text: `[F1 TELEMETRY METRICS]
  🏎️ Top Speed: 328 km/h | DRS: OPEN
  ⚙️ Pitstop Pipeline: 1.82s Automated Deploy
  ⚡ Telemetry Feed: Real-time Prometheus Scraping`
        });
        break;

      case 'certs':
        newHistory.push({
          type: 'output',
          text: `[EDUCATION & CREDENTIALS]
  🎓 B.Tech CSE — Lovely Professional University, Phagwara (Aug 2024 – Present) CGPA: 7.2
  🏫 Intermediate (XII) — Kendriya Vidyalaya NFR Maligaon, Guwahati (2022-2024) 84%
  📚 Matriculation (X) — St. Basil's Academy, Nagaon (June 2022) 80%
  🤖 Xebia Industry Training — Fullstack using Agentic AI (Jun-Jul 2026)
  🐍 Python: Basics to Advance — Edtechniketan (July 2026)
  🗄️  Database Management — Infosys Springboard (June 2026)
  🐧 Linux & Shell Scripting — Skillera (March 2025)
  💻 Introduction to C — Udemy (January 2025)`
        });
        break;

      case 'whoami':
      case 'cat resume.txt':
        newHistory.push({
          type: 'output',
          text: `[ENGINEER PROFILE - CHAKKA CHINNI KRISHNA]
Name:     Chakka Chinni Krishna
Handle:   @GrayViper
GitHub:   https://github.com/GrayViper
LinkedIn: https://www.linkedin.com/in/chinni-krishna8
Email:    chakkaanil6@gmail.com
Mobile:   +91 8135839393
Edu:      B.Tech CSE @ Lovely Professional University (Aug 2024–Present) | CGPA: 7.2
Role:     DevOps Engineer | Full-Stack & Agentic AI Specialist
Summary:  Automating cloud infrastructure with Docker, Kubernetes, Terraform, and GitHub Actions;
          building scalable REST APIs with FastAPI and Next.js, and implementing Agentic AI loops.`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmdStr}". Type "help" or click command buttons.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section id="terminal" style={{ padding: '80px 0' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tag section-tag-green" style={{ marginBottom: '14px' }}>
            💻 INTERACTIVE CLI PLAYGROUND
          </span>
          <h2 style={{ fontSize: '2.6rem', fontWeight: '900', letterSpacing: '-0.03em' }}>
            DevOps <span className="gradient-text">Terminal Engine</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', marginTop: '10px', fontSize: '0.96rem' }}>
            Test commands, inspect cluster status &amp; explore system telemetry in real time
          </p>
        </div>

        {/* Main Terminal Window */}
        <div className="glass-card-web" style={{ padding: '24px', maxWidth: '950px', margin: '0 auto' }}>
          
          {/* Top Window Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '14px',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--f1-red)', boxShadow: '0 0 8px var(--f1-red)' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--f1-yellow)', boxShadow: '0 0 8px var(--f1-yellow)' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.84rem', 
                color: 'var(--text-muted)', 
                marginLeft: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <TerminalIcon size={14} color="var(--cyber-cyan)" /> devops@GrayViper:~/control-plane
              </span>
            </div>

            <a
              href="https://github.com/GrayViper"
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                padding: '3px 12px',
                borderRadius: '9999px',
                background: 'rgba(255, 24, 1, 0.12)',
                color: 'var(--f1-red)',
                border: '1px solid rgba(255, 24, 1, 0.3)',
                fontWeight: '700',
                textDecoration: 'none'
              }}
            >
              @GrayViper ↗
            </a>
          </div>

          {/* Terminal Screen Body */}
          <div style={{
            background: '#040711',
            borderRadius: '14px',
            border: '1px solid rgba(255, 24, 1, 0.2)',
            padding: '20px',
            marginTop: '16px',
            minHeight: '280px',
            maxHeight: '360px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            lineHeight: '1.65'
          }}>
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '6px', whiteSpace: 'pre-wrap' }}>
                {item.type === 'user' && (
                  <span style={{ color: 'var(--cyber-cyan)', fontWeight: '700' }}>{item.text}</span>
                )}
                {item.type === 'system' && (
                  <span style={{ color: 'var(--text-dim)' }}>{item.text}</span>
                )}
                {item.type === 'info' && (
                  <span style={{ color: 'var(--text-muted)' }}>{item.text}</span>
                )}
                {item.type === 'cyan' && (
                  <span style={{ color: 'var(--cyber-cyan)' }}>{item.text}</span>
                )}
                {item.type === 'green' && (
                  <span style={{ color: '#10b981' }}>{item.text}</span>
                )}
                {item.type === 'red' && (
                  <span style={{ color: 'var(--f1-red)', fontWeight: 'bold' }}>{item.text}</span>
                )}
                {item.type === 'output' && (
                  <span style={{ color: 'var(--text-main)' }}>{item.text}</span>
                )}
                {item.type === 'error' && (
                  <span style={{ color: '#ef4444' }}>{item.text}</span>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Command Input Form */}
          <form onSubmit={handleFormSubmit} style={{ marginTop: '14px', display: 'flex', gap: '10px' }}>
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              background: '#040711',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '0 14px'
            }}>
              <span style={{ color: 'var(--f1-red)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                devops@GrayViper:~$
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command ('help', 'skills', 'status', 'projects', 'f1')..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  padding: '12px 8px'
                }}
              />
            </div>
            <button
              type="submit"
              data-cursor="RUN"
              className="btn-primary"
              style={{ padding: '0 22px', fontSize: '0.84rem', borderRadius: '12px' }}
            >
              <Play size={14} /> Run
            </button>
          </form>

          {/* Quick-Run Interactive Command Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Quick Commands:
            </span>
            {['skills', 'projects', 'status', 'f1', 'certs', 'whoami', 'clear'].map((cmd) => (
              <button
                key={cmd}
                data-cursor="EXEC"
                onClick={() => executeCommand(cmd)}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--cyber-cyan)',
                  borderRadius: '8px',
                  padding: '5px 12px',
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--f1-red)';
                  e.target.style.background = 'rgba(255, 24, 1, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border-subtle)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
              >
                {cmd}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
