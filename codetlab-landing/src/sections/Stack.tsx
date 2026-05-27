import React from 'react';

interface StackGroup {
  category: string;
  tools: string[];
}

const STACK_DATA: StackGroup[] = [
  { category: 'LANGUAGES', tools: ['TypeScript', 'Python', 'Go', 'Rust', 'SQL'] },
  { category: 'BACKEND // RUNTIME', tools: ['Node.js', 'FastAPI', 'Next.js API', 'Docker', 'Bun'] },
  { category: 'DATA // STORAGE', tools: ['PostgreSQL', 'Redis', 'Vector DBs', 'Supabase'] },
  { category: 'INFRASTRUCTURE', tools: ['AWS', 'Vercel', 'Linux Nodes', 'GitHub Actions', 'Cloudflare'] },
];

const Stack: React.FC = () => {
    const inView = true;
  return (
    <div className="wrap" id="stack">
      <div className="lbl">Capabilities</div>
      <h2 className={`stitle rv ${inView ? "in" : ""}`}>
        Technical Stack
      </h2>
      <p className={`ssub rv ${inView ? "in" : ""}`}>
        Battle-tested technologies selected for production reliability, horizontal scaling, and developer velocity.
      </p>

      <div className="proj-grid">
        {STACK_DATA.map((group, index) => (
          <div key={index} className="proj-card" style={{ padding: '24px' }}>
            <div className="proj-head" style={{ marginBottom: '14px' }}>
              <span className="proj-cat" style={{ color: 'var(--ac)' }}>{group.category}</span>
            </div>
            <div className="tags" style={{ marginTop: '12px' }}>
              {group.tools.map((tool, idx) => (
                <span key={idx} className="tag" style={{ background: 'var(--s2)', padding: '5px 10px' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;