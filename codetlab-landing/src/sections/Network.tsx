import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  portfolio?: string;
  linkedin?: string;
  status: 'ACTIVE' | 'CORE' | 'RESEARCH';
}

const TEAM_DATA: TeamMember[] = [
  {
    name: 'Jordan Iralde',
    role: 'Full Stack Engineer',
    description: 'Systems design, backend architecture and API development.',
    image: '/team/member1.jpg',
    portfolio: 'https://jordan-iralde-portfolio.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/jordanir/',
    status: 'CORE',
  },
  {
    name: 'Member Two',
    role: 'AI Engineer',
    description: 'LLM integration, RAG pipelines and automation systems.',
    image: '/team/member2.jpg',
    portfolio: 'https://portfolio.com',
    linkedin: 'https://linkedin.com',
    status: 'CORE',
  },
  {
    name: 'Member Three',
    role: 'DevOps / Infra',
    description: 'Cloud infrastructure, CI/CD and distributed systems.',
    image: '/team/member3.jpg',
    portfolio: 'https://portfolio.com',
    linkedin: 'https://linkedin.com',
    status: 'ACTIVE',
  },
];

const Network: React.FC = () => {
  return (
    <div className="wrap" id="network">
      <div className="lbl">Code’t Lab</div>

      <h2 className="stitle">Core Engineering Team</h2>

      <p className="ssub">
        Distributed group of engineers building integrated systems across software, AI and infrastructure.
      </p>

      <div
        style={{
          marginTop: '56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        {TEAM_DATA.map((member, index) => (
          <div
            key={index}
            style={{
              background: 'var(--s1)',
              border: '1px solid var(--bd)',
              borderRadius: 'var(--rl)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {/* IMAGE */}
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '1px solid var(--bd)',
              }}
            />

            {/* NAME + ROLE */}
            <div>
              <div style={{ color: 'var(--t1)', fontWeight: 700 }}>
                {member.name}
              </div>
              <div style={{ color: 'var(--t2)', fontSize: '12px' }}>
                {member.role}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div style={{ color: 'var(--t2)', fontSize: '12.5px', lineHeight: 1.6 }}>
              {member.description}
            </div>

            {/* LINKS */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              {member.portfolio && (
                <a
                  href={member.portfolio}
                  target="_blank"
                  style={{ color: 'var(--ac)', fontSize: '11px', textDecoration: 'none' }}
                >
                  Portfolio
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  style={{ color: 'var(--ac)', fontSize: '11px', textDecoration: 'none' }}
                >
                  LinkedIn
                </a>
              )}
            </div>

            {/* STATUS */}
            <div
              style={{
                fontSize: '10px',
                color: 'var(--ac)',
                letterSpacing: '0.08em',
                fontFamily: 'JetBrains Mono',
              }}
            >
              {member.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;