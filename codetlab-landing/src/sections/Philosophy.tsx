import React from 'react';

interface Pillar {
  num: string;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    num: '01',
    title: 'Deterministic Execution',
    description: 'We build systems that reduce variance. Predictable infrastructure, explicit state management, and rigorous type safety over magic frameworks.',
  },
  {
    num: '02',
    title: 'Modular Decoupling',
    description: 'Every division operates as an independent node. High cohesion, low coupling. If one module goes offline, the ecosystem stands resilient.',
  },
  {
    num: '03',
    title: 'AI Native Workflows',
    description: 'Artificial intelligence is not patched into our products; it is baked into our development pipelines, operational routing, and core software fabrics.',
  },
];

const Philosophy: React.FC = () => {
    const inView = true;
  return (
    <div className="wrap" id="philosophy">
      <div className="lbl">Core Principles</div>
      <h2 className={`stitle rv ${inView ? "in" : ""}`}>
        Our Philosophy
      </h2>
      <p className={`ssub rv ${inView ? "in" : ""}`}>
        Architectural paradigms guiding our decisions, codebases, and systems design.
      </p>

      {/* Reutilizamos una estructura limpia de grid compatible con el layout */}
      <div className="eco-grid" style={{ marginTop: '56px' }}>
        {PILLARS.map((pillar) => (
          <div key={pillar.num} className="eco-card">
            <div className="eco-top">
              <span className="mono" style={{ color: 'var(--ac)', fontSize: '12px', fontWeight: 500 }}>
                // {pillar.num}
              </span>
            </div>
            <h3 style={{ fontSize: '19px', marginTop: '10px' }}>{pillar.title}</h3>
            <p style={{ marginTop: '8px' }}>{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Philosophy;