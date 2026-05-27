import React from 'react';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types';

const PROJECTS_DATA: Project[] = [
  {
    category: 'PLATFORM // INTELLIGENCE',
    status: 'LIVE',
    title: 'Blackbox.cc',
    description: 'AI-powered coding assistant and developer intelligence platform. Integrates large language model capabilities directly into the development workflow for real-time code assistance.',
    tags: ['Next.js', 'Python', 'LLM', 'TypeScript', 'Redis'],
  },
  {
    category: 'INSTITUTIONAL // WEB',
    status: 'LIVE',
    title: 'Foro Iberoamericano de Gastronomía',
    description: 'Institutional digital platform for the Ibero-American gastronomy forum. Custom CMS architecture, multilingual support, and full media infrastructure.',
    tags: ['Next.js', 'PostgreSQL', 'Docker', 'i18n', 'CDN'],
  },
  {
    category: 'INTERNAL // TOOLING',
    status: 'DEV',
    title: 'Lab OS',
    description: "Internal operating system for Code't Lab. Project management, resource allocation, internal APIs, and ecosystem coordination tooling running on dedicated infrastructure.",
    tags: ['FastAPI', 'PostgreSQL', 'React', 'Docker', 'Redis'],
  },
];

const Projects: React.FC = () => {
    const inView = true;
  return (
    <div className="wrap" id="projects">
      <div className="lbl">Infrastructure</div>
      <h2 className={`stitle rv ${inView ? "in" : ""}`}>
        Active Projects
      </h2>
      <p className={`ssub rv ${inView ? "in" : ""}`}>
        Production systems, experimental modules, and infrastructure platforms operating at various stages of deployment.
      </p>

      <div className="proj-grid">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={index}
            category={project.category}
            status={project.status}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;