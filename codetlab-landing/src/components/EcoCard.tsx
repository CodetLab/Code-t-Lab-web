import React from 'react';

interface EcoCardProps {
  id: string;
  title: string;
  description: string;
  chipText: string;
  icon: React.ReactNode;
}

const EcoCard: React.FC<EcoCardProps> = ({ id, title, description, chipText, icon }) => {
  return (
    <div className="eco-card">
      <div className="eco-top">
        <div className="eco-icon">{icon}</div>
        <span className="eco-id">{id}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="eco-chip">{chipText}</span>
    </div>
  );
};

export default EcoCard;