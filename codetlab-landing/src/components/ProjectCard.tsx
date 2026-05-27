import React from 'react';
import type { ProjectStatus } from '../types/index';

interface TagProps {
  text: string;
}

// Subcomponente interno para los tags
const Tag: React.FC<TagProps> = ({ text }) => (
  <span className="tag">{text}</span>
);

interface ProjectCardProps {
  category: string;
  status: ProjectStatus;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  status,
  title,
  description,
  tags,
}) => {
  // Mapeo seguro con TypeScript para las clases CSS de los estados
  const badgeClasses: Record<ProjectStatus, string> = {
    LIVE: 'badge-live',
    DEV: 'badge-dev',
    RESEARCH: 'badge-rsrch',
  };

  return (
    <div className="proj-card">
      <div className="proj-head">
        <span className="proj-cat">{category}</span>
        <span className={`badge ${badgeClasses[status] || 'badge-dev'}`}>
          <span className="badge-dot"></span>
          {status}
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;