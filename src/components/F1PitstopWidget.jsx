import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function F1PitstopWidget() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="f1-pitstop-fixed">
      <button
        onClick={scrollToTop}
        className="f1-pitstop-badge"
        title="Back to top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
