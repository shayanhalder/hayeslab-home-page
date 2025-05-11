import React from 'react';
import ProjectCard from './ProjectCard';

interface Project {
  name: string;
  imageUrl: string;
  description: string;
  projectUrl: string;
}

interface SectionProps {
  title: string;
  projects: Project[];
  sectionSubtitle?: string; // For subsections like "Networks"
}

const Section: React.FC<SectionProps> = ({ title, projects, sectionSubtitle }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.mainTitle}>{title}</h2>
      {sectionSubtitle && <h3 style={styles.subTitle}>{sectionSubtitle}</h3>}
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            imageUrl={project.imageUrl}
            description={project.description}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    // marginBottom: '10px',
    paddingBottom: '10px',
    // borderBottom: '1px solid #ccc',
  },
  mainTitle: {
    fontSize: '2rem',
    color: '#222',
    textAlign: 'center',
    marginBottom: '30px',
  },
  subTitle: {
    fontSize: '1.5rem',
    color: '#444',
    marginBottom: '20px',
  },
};

export default Section;