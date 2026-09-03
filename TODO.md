# DevOps & Full-Stack Portfolio Roadmap & TODO (3D Retro Computer & F1 Edition 🏎️💻)

This file outlines the comprehensive roadmap, technical design, and step-by-step checklist for building a world-class DevOps & Cloud Engineer portfolio website for **Chakka Chinni Krishna (@GrayViper)**. It features an interactive **3D Retro Computer** (modeled after the Commodore PET 8296 on edh.dev) combined with a cinematic **F1 Background Video Engine (`f1.mp4`)**.

---

## 🎓 Profile & Persona Target
- **Engineer**: Chakka Chinni Krishna (@GrayViper)
- **Target Roles**: DevOps Engineer / Cloud Infrastructure Engineer / Full-Stack & Agentic AI Specialist
- **Education**: B.Tech CSE at Lovely Professional University (Aug 2024–Present, CGPA 7.2)
- **Specializations**: CI/CD Pipelines, Kubernetes (EKS), Docker, Terraform, Cloud Architecture (AWS), Monitoring (Prometheus/Grafana), Linux & Bash, FastAPI, Next.js, Agentic AI Workflows (Xebia).

---

## 🖥️ 3D Retro Computer Design (edh.dev Commodore PET 8296 Architecture)

1. **Procedural 3D Mesh & Geometry**:
   - **CRT Monitor & Bezel**: Trapezoidal monitor housing with curved CRT front face, realistic plastic and metal roughness, and edge specular highlights.
   - **Main Body & Keyboard**: Wide slanted chassis with individual 3D mechanical keycaps, spacebar, colored action keys, floppy drive bays, and pulsing status LEDs.
   - **Three.js Lighting**: Dynamic 3-point studio lighting + point light from the CRT screen casting real-time colored illumination onto the keyboard deck.

2. **Real-Time Dynamic CRT Screen & Canvas Texture**:
   - High-resolution dynamic 2D canvas texture mapped onto the 3D CRT monitor.
   - CRT shader scanlines, phosphor glow, border framing, and animated blinking cursor (`█`).
   - Live interactive modes:
     - **Mode 1: Telemetry HUD** (DevOps OS boot sequence, AWS EKS 1.30, ArgoCD GitOps, GitHub Actions).
     - **Mode 2: Kubernetes Cluster** (Pod status, container health, node topology).
     - **Mode 3: Live Matrix Logs** (Streaming cloud log metrics and event streams).
     - **Mode 4: System Profile** (Developer biography, B.Tech specs, GitHub repositories).

3. **Interactivity, Physics & Audio**:
   - **Mouse Parallax & Orbit Dragging**: Smooth tracking of cursor position with momentum easing (`lerp`) and optional mouse drag rotation.
   - **Scroll Zoom & Perspective Shift**: Camera smoothly adjusts orbit angle and depth as the visitor scrolls the page.
   - **Synthesized Mechanical Key Clicks**: Web Audio API tactile audio feedback when switching modes or typing.

---

## 🏎️ F1 Cinematic Background Video Engine (`f1.mp4`)

- High-performance fullscreen looping background video with obsidian dark gradient overlay.
- Real-time video playback controls in the navbar (`🏎️ F1 VIDEO: ON/OFF`).
- Dark glassmorphism panels ensuring maximum contrast, legibility, and aesthetics.

---

## 📐 Portfolio Sections & Architecture

1. **Header & Navigation (`Navbar.jsx`)**:
   - CK monogram brand identity with `🟢 SYSTEMS OPERATIONAL` live status indicator.
   - Clean navigation links: `Skills Matrix`, `Projects`, `CLI Console`, `Education`, `Contact`.
   - F1 Video toggle switch + `Hire Me` CTA button.

2. **Hero Section (`Hero.jsx`)**:
   - Headline: *"Automating Infrastructure, Scaling Cloud Systems & Building High-Performance Web Platforms"*.
   - Centerpiece: Interactive **3D Retro Computer** with real-time mouse tilt and screen switcher.
   - Metrics grid: `3+ Prod Apps`, `7.2 B.Tech CGPA @ LPU`, `4+ Certifications`, `99.9% Uptime`.
   - Action links to GitHub, LinkedIn, Email, and Project showcase.

3. **Skills & Tooling Matrix (`Skills.jsx`)**:
   - Filterable tech categories: `Cloud & IaC`, `CI/CD & Linux`, `Full-Stack & APIs`, `Observability & DBs`, `Agentic AI & LLMs`.
   - Interactive cards with proficiency levels, tech badges, and hover accents.

4. **Featured Projects Showcase (`Projects.jsx`)**:
   - **Career_Genie**: AI Job & Scholarship Discovery Platform (React, FastAPI, MongoDB Atlas, JWT Auth).
   - **hi_links**: Scalable Link Management Platform (Next.js, TypeScript, Drizzle ORM, Neon Postgres).
   - **Cura-AI-Health**: AI-Powered Health Assistant (Python Flask, SQLite, Gemini API, Chart.js).
   - Pipeline status badges, architecture summaries, and live GitHub/Demo links.

5. **Interactive DevOps CLI Console (`Terminal.jsx`)**:
   - Custom terminal supporting `help`, `skills`, `projects`, `status`, `certs`, `f1`, `whoami`, `cat resume.txt`, `clear`.
   - One-click interactive command chips.

6. **Education & Certifications (`Certifications.jsx`)**:
   - Featured Xebia Industry Training: Fullstack using Agentic AI.
   - Education timeline (LPU CGPA 7.2, KV NFR Maligaon, St. Basil's Academy).
   - Verified credentials (Python, Database Management, Linux, C).

7. **Contact & Footer (`Contact.jsx` & `Footer.jsx`)**:
   - Contact form with instant transmission feedback and purpose dropdown.
   - One-click copy email (`chakkaanil6@gmail.com`), phone, and social links.
   - Git Commit SHA (`build: v2.0.0-f1-retro`), cluster uptime indicator, and back-to-top button.

---

## 📋 Actionable Checklist

### Phase 1: 3D Retro Computer Enhancement & Architecture (Priority)
- [x] Integrate Three.js 3D engine and procedural Commodore PET 8296 geometry
- [ ] Add enhanced 3D mouse drag orbit controls + touch rotation support
- [ ] Expand CRT screen canvas renderer with typing interactive CLI mode directly on 3D screen
- [ ] Add sound effects toggle and volume modulation for mechanical clicks

### Phase 2: Design System & F1 Backdrop Optimization
- [x] Configure Obsidian & Racing Red / Cyber Cyan palette in `index.css`
- [x] Connect `F1BackgroundVideoEngine` with ambient gradient overlay and toggle switch
- [x] Ensure 60 FPS rendering performance and WebGL context lifecycle cleanup

### Phase 3: Core Sections & Content Polish
- [x] Hero section with 3D Retro Computer centerpiece and stats
- [x] Skills Matrix with DevOps & Full-Stack tool categories
- [x] Featured Projects showcase with pipeline status badges
- [x] Interactive DevOps Terminal with quick command chips
- [x] Education, Xebia Agentic AI training & verified certifications
- [x] Contact form & Technical Footer

### Phase 4: Build Verification & Deployment
- [x] Verify production build with `npm run build`
- [x] Verify Vite dev server execution on port 3000
