// src/components/ProjectCard.tsx 

import React from 'react';
import '../App.css';

interface ProjectCardProps {
  name: string; // Corresponds to title in our data
  imageUrl: string; // Corresponds to image in our data
  description: string;
  projectUrl: string; // Corresponds to link in our data
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, imageUrl, description, projectUrl }) => {
  return (
    <div className="project-row">
      {
        imageUrl && (
          <div className="project-image-container">
            <img src={imageUrl} alt={name} className="project-image" />
          </div>
        )
      }
      <div className="project-content">
        <h3 className="project-title">
          {projectUrl ? (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link-title">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <p className="project-description">{description}</p>
        
      </div>
      
    </div>
  );
};

export default ProjectCard;