import React, { useState } from 'react';
import F1BackgroundVideoEngine from './components/F1BackgroundVideoEngine';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LusionConnectingLine from './components/LusionConnectingLine';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isVideoActive, setIsVideoActive] = useState(true);

  return (
    <div className="portfolio-app-root">
      {/* Full-Screen F1 Cinematic Backdrop Video Engine (f1.mp4) */}
      <F1BackgroundVideoEngine isVideoActive={isVideoActive} />

      {/* Navigation Header with F1 Video Toggle & Minimalist Menu Drawer */}
      <Navbar isVideoActive={isVideoActive} setIsVideoActive={setIsVideoActive} />

      {/* Main Portfolio Sections with Lusion Continuous Spline Architecture */}
      <main style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Lusion Continuous Connecting Spline Line Engine */}
        <LusionConnectingLine />

        <Hero />
        <Skills />
        <Projects />
        <Terminal />
        <Certifications />
        <Contact />
      </main>

      {/* Technical Footer */}
      <Footer />
    </div>
  );
}
