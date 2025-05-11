// src/components/LandingPage.tsx
import React from 'react';
import Section from './Section';
import Header from './Header';
import SearchBar from './SearchBar';
import blantImage from '../assets/blant.jpeg';
import sanaImage from '../assets/SANA.gif';
import cellImage from '../assets/cell-tracking.gif';
import sparcfireImage from '../assets/sparcfire.jpg';

// Placeholder data - replace with your actual project details
const biologyNetworksProjects = [
  {
    name: 'BLANT - Local Network Alignment',
    imageUrl: blantImage, // Replace with actual image path
    description: 'Basic Local Alignment of Network Topology - fast, unbiased statistical graphlet sampling for any graphlet use.',
    projectUrl: 'https://blant.ics.uci.edu/', // Replace with actual project URL
  },
  {
    name: 'SANA - Global Network Alignment',
    imageUrl: sanaImage, // Replace with actual image path
    description: 'The Simulating Annealing Network Aligner (SANA) is designed originally to align protein-protein interaction (PPI) networks, but now is able to align arbitrary undirected graphs, weighted on unweighted. It can produce near-optimal alignments of PPI-sized networks in about an hour, and it has been used to successfully align networks with up to 100,000 nodes and 100 million edges (though those alignments take about a week of CPU to complete).',
    projectUrl: 'https://hayeslab.ics.uci.edu/sana', // Replace with actual project URL
  },
];

const biologyCellTrackingProjects = [
  {
    name: 'Cell Universe',
    imageUrl: cellImage, // Replace with actual image path
    description: 'Tracks the movement of cells from a video source. See the docs directory for our first published paper, also found at https://www.mdpi.com/1999-4893/15/2/51. The Python directory once worked well in 2D, with bacteria-shaped cells. The 3D Python code was experimental, but was abandoned after the umpteenth time it stopped working due to Python\'s inherent instability... at which point we moved to C++.',
    projectUrl: 'https://github.com/waynebhayes/cellviewer?tab=readme-ov-file', // Replace with actual project URL
  },
];

const astronomyProjects = [
  // Add astronomy projects here if any, similar to biology projects
  // Example:
  {
    name: 'Galaxy Image Analysis Tool',
    imageUrl: sparcfireImage,
    description: 'A tool for analyzing images of galaxies to identify key features and structures.',
    projectUrl: 'https://sparcfire.ics.uci.edu/',
  },
];

const headerLinks = [
    { text: 'Tools', url: '#tools' },
    { text: 'Contact Us', url: '#contact' },
];

const LandingPage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement your search logic here
  };

  return (
    <div style={styles.container}>
      <Header labName="Hayes Lab" navLinks={headerLinks} />
      <main style={styles.mainContent}>
        <SearchBar onSearch={handleSearch} placeholder="Search Hayes Lab Tools..." />
        <h1 style={{textAlign: 'center'}}> Biology </h1>
        <Section sectionSubtitle="Networks" projects={biologyNetworksProjects} title="" />
        <Section sectionSubtitle="Cell Tracking" projects={biologyCellTrackingProjects} title="" />
        <h1 style={{textAlign: 'center'}}> Astronomy </h1>
        <Section sectionSubtitle="Galaxy Image Analysis" projects={astronomyProjects} title="" />
      </main>

    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  mainContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
  },
};

export default LandingPage;