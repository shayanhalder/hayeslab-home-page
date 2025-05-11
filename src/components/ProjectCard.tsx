import React from 'react';

interface ProjectCardProps {
  name: string;
  imageUrl: string;
  description: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, imageUrl, description, projectUrl }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.description}>{description}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
          Learn More
        </a>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    display: 'flex',
    marginBottom: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '180px', // Adjust as needed
    height: '120px', // Adjust as needed
    objectFit: 'cover',
  },
  content: {
    padding: '15px',
    flex: 1,
  },
  title: {
    marginTop: '0',
    marginBottom: '10px',
    fontSize: '1.25rem',
    color: '#333',
  },
  description: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default ProjectCard;