// src/components/LandingPage.tsx
import React from 'react';
import Section from './Section';
import Header from './Header';
import SearchBar from './SearchBar';

// Placeholder data - replace with your actual project details
const biologyNetworksProjects = [
  {
    name: 'BLANT - Local Network Alignment',
    imageUrl: 'https://via.placeholder.com/180x120.png?text=BLANT+Image', // Replace with actual image path
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    projectUrl: '#blant', // Replace with actual project URL
  },
  {
    name: 'SANA - Global Network Alignment',
    imageUrl: 'https://via.placeholder.com/180x120.png?text=SANA+Image', // Replace with actual image path
    description: 'When we begin to take into account the sheer breadth and undeniable presence of what might be perceived, at least in a general sense, as the full scope of that which is being presented here—regardless of how one chooses to define, interpret, or even simply sit with it—it quickly becomes apparent, in a somewhat nebulous and yet oddly compelling way, that what we are dealing with is not just something to be glanced over or absorbed in passing.',
    projectUrl: '#sana', // Replace with actual project URL
  },
];

const biologyCellTrackingProjects = [
  {
    name: 'Cell Universe',
    imageUrl: 'https://via.placeholder.com/180x120.png?text=Cell+Universe', // Replace with actual image path
    description: 'Considering the nature of the thing in question, which, while not strictly definable, exists in a state of being that suggests accumulation—though not necessarily in the traditional sense—it would not be entirely inaccurate, albeit somewhat premature, to gesture vaguely at the notion that, insofar as notions can be gestured at, this is... potentially, or at least performatively, a lot of information. Probably.',
    projectUrl: '#celluniverse', // Replace with actual project URL
  },
];

const astronomyProjects = [
  // Add astronomy projects here if any, similar to biology projects
  // Example:
  {
    name: 'Galaxy Image Analysis Tool',
    imageUrl: 'https://via.placeholder.com/180x120.png?text=Galaxy+Tool',
    description: 'A tool for analyzing images of galaxies to identify key features and structures.',
    projectUrl: '#galaxytool',
  },
];

const headerLinks = [
    { text: 'Tools', url: '#tools' },
    { text: 'Contact Us', url: '#contact' },
    { text: 'Login/Register', url: '#login' },
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

        <Section title="Biology" projects={biologyCellTrackingProjects} /> {/* Main section title */}
        {/* Subsection for Networks */}
        <Section sectionSubtitle="Networks" projects={biologyNetworksProjects} title="" />
        {/* Subsection for Cell Tracking */}
        <Section sectionSubtitle="Cell Tracking" projects={biologyCellTrackingProjects} title="" />

        {/* Add more sections as needed */}
      </main>
      {/* You can add a Footer component here if needed */}
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