// src/components/LandingPage.tsx

import React from 'react';
import '../App.css'; // For basic styling like centering

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Hayes Lab</h1>
      <p>
        The Hayes Lab at the University of California, Irvine primarily conducts research in “Computational Science,” which is the application of computers to solve scientific problems. Current projects include but are not limited to: 
        <ul>
          <li>
            Computational methods of graph theory applied to biological networks in protein-protein interaction networks
          </li>
          <li>
            Cell tracking algorithms
          </li>
          <li>
            Analysis of images of galaxies in astrophysics
          </li>
          <li>
            Human pose estimation with machine learning
          </li>
        </ul>

        This website contains all of our publicly available tools such as SANA, BLANT, SparcFire, and more. We also provide a REST API for some of our tools to automate job submissions, but this will require you to create an account. Navigate to the <a href="/tools">tools</a> section to learn more.
        <br /><br />
        If you are interested in joining the lab as a student researcher, more details are available at <a href="https://ics.uci.edu/~wayne/research/students/" target="_blank">https://ics.uci.edu/~wayne/research/students/.</a> </p>
    </div>
  );
};

export default LandingPage;