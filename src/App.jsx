import React, { useState, useEffect } from 'react';
import F1BackgroundVideoEngine from './components/F1BackgroundVideoEngine';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAstronaut from './components/AboutAstronaut';
import LusionConnectingLine from './components/LusionConnectingLine';
import LusionWaterRipples from './components/LusionWaterRipples';
import LusionCursor from './components/LusionCursor';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isVideoActive, setIsVideoActive] = useState(true);

  useEffect(() => {
    // Prevent browser from restoring scroll position on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Clear any hash to always show the hero landing page on refresh
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Immediately scroll to landing page top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Handle edge case where browser attempts delayed scroll restoration
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);

    const handleBeforeUnload = () => {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Full-Screen F1 Cinematic Backdrop Video Engine (f1.mp4) */}
      <F1BackgroundVideoEngine isVideoActive={isVideoActive} />

      {/* Lusion.co Custom Magnetic Cursor & Physics Engine */}
      <LusionCursor />

      {/* Lusion.co Interactive Liquid Water Surface Ripple Engine */}
      <LusionWaterRipples />

      {/* Navigation Header with F1 Video Toggle & Minimalist Menu Drawer */}
      <Navbar isVideoActive={isVideoActive} setIsVideoActive={setIsVideoActive} />

      {/* Main Portfolio Sections with Lusion Continuous Spline Architecture */}
      <main style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Lusion Continuous Connecting Spline Line Engine */}
        <LusionConnectingLine />

        {/* Hero Landing Stage: Authentic 3D Commodore PET 8296 Computer */}
        <Hero />

        {/* About Me & Let's Work Together: 3D Interactive Lusion Astronaut Animation */}
        <AboutAstronaut />

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
