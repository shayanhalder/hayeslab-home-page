// src/components/ToolsPage.tsx
import React from 'react';
import ProjectCard from './ProjectCard'; // Import ProjectCard
import projects from '../data/projects'; // Import your project data
import '../App.css'; // This page relies on App.css for styling

const ToolsPage: React.FC = () => {
  const networksProjects = projects.filter(p => p.category === 'networks');
  const cellTrackingProjects = projects.filter(p => p.category === 'cell-tracking');
  const otherProjects = projects.filter(p => p.category === 'other');

  return (
    <div className="tools-page">
      <nav className="tools-nav-top">
        {projects.map(project => (
          <a key={project.id} href={project.projectUrl} className="tool-link-top">
            {project.name.split(' - ')[0]}
          </a>
        ))}
      </nav>

      <section className="category-section">
        <h2 className="category-header networks-header">Networks</h2>
        <div className="projects-grid">
          {networksProjects.map(project => (
            <ProjectCard
              key={project.id}
              name={project.name}
              imageUrl={project.imageUrl}
              description={project.description}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </section>

      <section className="category-section">
        <h2 className="category-header cell-tracking-header">Cell Tracking</h2>
        <div className="projects-grid">
          {cellTrackingProjects.map(project => (
            <ProjectCard
              key={project.id}
              name={project.name}
              imageUrl={project.imageUrl}
              description={project.description}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </section>

      <section className="category-section">
        <h2 className="category-header other-header">Other</h2>
        <div className="projects-grid">
          {otherProjects.map(project => (
            <ProjectCard
              key={project.id}
              name={project.name}
              imageUrl={project.imageUrl}
              description={project.description}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;