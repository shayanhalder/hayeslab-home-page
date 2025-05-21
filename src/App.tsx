//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage'; // Import the existing LandingPage
import ToolsPage from './components/ToolsPage'; // Keep the ToolsPage component
import './App.css'; // Main App styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Route for the landing page */}
            <Route path="/" element={<LandingPage />} />
            {/* Route for the tools page */}
            <Route path="/tools" element={<ToolsPage />} />
            {/* You can add more routes here if needed in the future */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;