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
    // Use the class name defined in App.css for styling
    <div className="project-display">
      {/* Use the class name for the image as well */}
      <img src={imageUrl} alt={name} className="project-image" />
      <h3 className="project-title">
        {/* Link the title if projectUrl is provided */}
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
  );
};

export default ProjectCard;