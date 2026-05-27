import React from 'react';
import EcoCard from '../components/EcoCard';
import type { EcoModule } from '../types';

const ECO_MODULES: EcoModule[] = [
  {
    id: 'MOD::01',
    title: 'Software Engineering',
    description:
      'Full-stack systems architecture, API design, distributed systems, and scalable application development across web and backend.',
    chipText: 'CORE MODULE',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },

  {
    id: 'MOD::02',
    title: 'AI Solutions',
    description:
      'Language model integration, intelligent automation pipelines, RAG systems, and AI-powered product development at scale.',
    chipText: 'CORE MODULE',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },

  {
    id: 'MOD::03',
    title: 'Infrastructure',
    description:
      'Cloud architecture, containerized deployments, CI/CD pipelines, monitoring systems, and end-to-end DevOps engineering.',
    chipText: 'ACTIVE',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12H3m9-9v2m0 14v2M6.34 6.34L4.93 4.93m12.73 12.73 1.41 1.41M19 12h2M6.34 17.66l-1.41 1.41M17.66 6.34l1.41-1.41" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },

  {
    id: 'MOD::04',
    title: 'Automation',
    description:
      'Workflow automation, robotic process automation, scheduled systems, intelligent data pipelines, and event-driven architectures.',
    chipText: 'ACTIVE',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 9.75L16.25 12 14 14.25m-4.5 0L7.25 12 9.5 9.75M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },

  {
    id: 'MOD::05',
    title: 'Institutional Platforms',
    description:
      'Digital transformation for organizations, enterprise integrations, institutional dashboards, and mission-critical operational tools.',
    chipText: 'ACTIVE',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" />
      </svg>
    ),
  },

  {
    id: 'MOD::06',
    title: 'Media Growth',
    description:
      'Digital content strategy, growth engineering, audience platforms, analytics systems, and programmatic media infrastructure.',
    chipText: 'ACTIVE',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75z" />
      </svg>
    ),
  },

  {
    id: 'MOD::07',
    title: 'Research',
    description:
      'Experimental AI systems, emerging technology prototyping, internal tooling research, and long-horizon infrastructure exploration.',
    chipText: 'ONGOING',
    icon: (
      <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" />
      </svg>
    ),
  },
];
const Ecosystem: React.FC = () => {
  const inView = true;

  return (
    <div className="wrap" id="ecosystem">
      <div className="lbl">Ecosystem</div>
      <h2 className={`stitle rv ${inView ? "in" : ""}`}>
        Operational Divisions
      </h2>
      <p className={`ssub rv ${inView ? "in" : ""}`}>
        Seven specialized modules forming a unified engineering ecosystem.
      </p>

      <div className="eco-grid">
        {ECO_MODULES.map((mod) => (
          <EcoCard
            key={mod.id}
            id={mod.id}
            title={mod.title}
            description={mod.description}
            chipText={mod.chipText}
            icon={mod.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Ecosystem;