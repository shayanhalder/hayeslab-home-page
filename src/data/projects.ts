// src/data/projects.ts

interface Project {
  id: string;
  category: 'human-pose-recognition' | 'networks' | 'cell-tracking' | 'haplotype-assembly' | 'galaxies' | 'classifiers-pvalues';
  name: string;
  imageUrl: string;
  description: string;
  projectUrl: string;
}

const projects: Project[] = [

  // Human Pose Recognition
  {
    id: 'pose prediction',
    category: 'human-pose-recognition',
    name: 'Pose Prediction',
    imageUrl: '',
    description: '',
    projectUrl: '', // Placeholder link
  },
  {
    id: 'posebench3D',
    category: 'human-pose-recognition',
    name: 'PoseBench3D',
    imageUrl: '',
    description: '',
    projectUrl: '', // Placeholder link
  },
  {
    id: 'part segmentation',
    category: 'human-pose-recognition',
    name: 'Part Segmentation',
    imageUrl: '',
    description: '',
    projectUrl: '', // Placeholder link
  },
  {
    id: 'unrealpose dataset',
    category: 'human-pose-recognition',
    name: 'UnrealPose Dataset',
    imageUrl: '',
    description: '',
    projectUrl: '', // Placeholder link
  },

  // Network analysis tools
  {
    id: 'global network alignment', // sana
    category: 'networks',
    name: 'Global Network Alignment',
    imageUrl: '/assets/SANA.gif',
    description: 'The Simulating Annealing Network Aligner (SANA) is designed originally to align protein-protein interaction (PPI) networks, but now is able to align arbitrary undirected graphs, weighted on unweighted. It can produce near-optimal alignments of PPI-sized networks in about an hour, and it has been used to successfully align networks with up to 100,000 nodes and 100 million edges (though those alignments take about a week of CPU to complete).',
    projectUrl: '/sana', // Placeholder link
  },
  {
    id: 'local network alignment', // blant
    category: 'networks',
    name: 'Local Network Alignment',
    imageUrl: '/assets/blant.jpeg',
    description: 'Basic Local Alignment of Network Topology - fast, unbiased statistical graphlet sampling for any graphlet use.',
    projectUrl: 'https://github.com/waynebhayes/BLANT', // Placeholder link
  },
  {
    id: 'link prediction', //blant
    category: 'networks',
    name: 'Link Prediction',
    imageUrl: '',
    description: '',
    projectUrl: '', // Placeholder link
  },
  {
    id: 'community detection', //blant
    category: 'networks',
    name: 'Community Detection',
    imageUrl: '',
    description: '',
    projectUrl: '', // Placeholder link
  },

  // Cell tracking
  {
    id: 'cell-universe',
    category: 'cell-tracking',
    name: 'Cell Universe',
    imageUrl: '/assets/cell-tracking.gif',
    description: 'Tracks the movement of cells from a video source. See the docs directory for our first published paper, also found at https://www.mbp.com/1999-4803/16/251. The Python directory once worked well in 2D, with bacteria-shaped cells. The 3D Python code was experimental, but was abandoned after the complexity time it elapsed working due to Python\'s inherent scalability, at which point we moved to C++.',
    projectUrl: 'https://github.com/waynebhayes/CellUniverse',
  },

  // Haplotype Assembly
  {
    id: 'sahap',
    category: 'haplotype-assembly',
    name: 'SAHap',
    imageUrl: '/assets/placeholder-image.png',
    description: 'Description for SAHap goes here.',
    projectUrl: 'https://github.com/waynebhayes/SAHap',
  },

  // Galaxy Analysis
  {
    id: 'sparcfire',
    category: 'galaxies',
    name: 'SpArcFIRe',
    imageUrl: '/assets/sparcfire.jpg',
    description: 'Description for SpArcFIRe goes here.',
    projectUrl: 'https://github.com/waynebhayes/SpArcFiRe',
  },

  // classifiers-pvalues
  {
    id: 'pidentify',
    category: 'classifiers-pvalues',
    name: 'Classifiers with p-values',
    imageUrl: '/assets/placeholder-image.png',
    description: 'Description for Pidentify goes here.',
    projectUrl: 'https://github.com/waynebhayes/Pidentify',
  },
];

export default projects;