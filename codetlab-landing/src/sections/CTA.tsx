import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="wrap" id="cta" style={{ textAlign: 'center', padding: '160px 20px' }}>
      <div className="hero-pill" style={{ margin: '0 auto 32px' }}>
        <span className="status-live" style={{ background: 'var(--ac)', boxShadow: '0 0 8px var(--ac)' }}></span>
        INITIALIZE CONNECTION
      </div>
      
      <h2 className="stitle" style={{ fontSize: 'clamp(32px, 5vw, 64px)', marginBottom: '24px' }}>
        Ready to Enter the Lab?
      </h2>
      
      <p className="ssub" style={{ margin: '0 auto 40px' }}>
        Let's discuss systems architecture, AI deployment, or infrastructure scaling for your organization.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <a href="mailto:hello@codetlab.cc" className="btn-p">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Establish Contact
        </a>
      </div>

      <div className="mono" style={{ color: 'var(--t3)', fontSize: '11px', marginTop: '64px' }}>
        © {new Date().getFullYear()} Code't Lab. All systems operational.
      </div>
    </div>
  );
};

export default CTA;