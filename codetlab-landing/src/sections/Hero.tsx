import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Puedes inicializar tu contexto de renderizado aquí:
    // const ctx = canvas.getContext('2d');
    // ... tu lógica de inicialización o redimensionamiento
  }, []);

  return (
    <section id="hero">
      <canvas id="hero-canvas" ref={canvasRef}></canvas>
      <div className="hero-content">
        <div className="hero-pill">
          <span className="status-live"></span>
          SYSTEM.STATUS: OPERATIONAL
          <span style={{ opacity: 0.3 }}>|</span>
          v0.0.1
        </div>
        <h1 className="hero-title">
          Engineering the<br />
          <span className="hl">Infrastructure</span><br />
          of Modern Systems
        </h1>
        <p className="hero-sub">
          A modular ecosystem of AI systems, software architecture,
          digital infrastructure, and automation platforms. Built for scale.
        </p>
        <div className="hero-ctas">
          <a href="#ecosystem" className="btn-p">
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            Explore Ecosystem
          </a>
          <a href="#projects" className="btn-g">
            View Projects
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-term">
        <span className="ac">$</span> code-lab --modules <span className="ac">7</span> --status <span className="ac">active</span> --env <span className="ac">production</span>
      </div>
      <div className="scroll-hint">SCROLL</div>
    </section>
  );
};

export default Hero;