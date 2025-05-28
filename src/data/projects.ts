// src/data/projects.ts

interface Project {
  id: string;
  category: 'networks' | 'cell-tracking' | 'other';
  name: string;      // Changed from 'title' to 'name'
  imageUrl: string;  // Changed from 'image' to 'imageUrl'
  description: string;
  projectUrl: string; // Changed from 'link' to 'projectUrl'
}

const projects: Project[] = [
  {
    id: 'sana',
    category: 'networks',
    name: 'SANA - Global Network Alignment',
    imageUrl: '/assets/SANA.gif',
    description: 'The Simulating Annealing Network Aligner (SANA) is designed originally to align protein-protein interaction (PPI) networks, but now is able to align arbitrary undirected graphs, weighted on unweighted. It can produce near-optimal alignments of PPI-sized networks in about an hour, and it has been used to successfully align networks with up to 100,000 nodes and 100 million edges (though those alignments take about a week of CPU to complete).',
    projectUrl: '/sana', // Placeholder link
  },
  {
    id: 'blant',
    category: 'networks',
    name: 'BLANT - Local Network Alignment',
    imageUrl: '/assets/blant.jpeg',
    description: 'Basic Local Alignment of Network Topology - fast, unbiased statistical graphlet sampling for any graphlet use.',
    projectUrl: '#blant', // Placeholder link
  },
  {
    id: 'cell-universe',
    category: 'cell-tracking',
    name: 'Cell Universe',
    imageUrl: '/assets/cell-tracking.gif',
    description: 'Tracks the movement of cells from a video source. See the docs directory for our first published paper, also found at https://www.mbp.com/1999-4803/16/251. The Python directory once worked well in 2D, with bacteria-shaped cells. The 3D Python code was experimental, but was abandoned after the complexity time it elapsed working due to Python\'s inherent scalability, at which point we moved to C++.',
    projectUrl: '#cell-universe',
  },
  {
    id: 'sahap',
    category: 'other',
    name: 'SAHap',
    imageUrl: '/assets/placeholder-image.png',
    description: 'Description for SAHap goes here.',
    projectUrl: '#sahap',
  },
  {
    id: 'sparcfire',
    category: 'other',
    name: 'SpArcFIRe',
    imageUrl: '/assets/sparcfire.jpg',
    description: 'Description for SpArcFIRe goes here.',
    projectUrl: '#sparcfire',
  },
  {
    id: 'pidentify',
    category: 'other',
    name: 'Pidentify',
    imageUrl: '/assets/placeholder-image.png',
    description: 'Description for Pidentify goes here.',
    projectUrl: '#pidentify',
  },
  {
    id: 'gowild',
    category: 'other',
    name: 'GoWild',
    imageUrl: '/assets/placeholder-image.png',
    description: 'Description for GoWild goes here.',
    projectUrl: '#gowild',
  },
  {
    id: 'netgo',
    category: 'other',
    name: 'NetGO',
    imageUrl: '/assets/placeholder-image.png',
    description: 'Description for NetGO goes here.',
    projectUrl: '#netgo',
  },
  {
    id: 'adaptable-sigmoids',
    category: 'other',
    name: 'Adaptable-Sigmoids',
    imageUrl: '/assets/placeholder-image.png',
    description: 'Description for Adaptable-Sigmoids goes here.',
    projectUrl: '#adaptable-sigmoids',
  },
];

export default projects;