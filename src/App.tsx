//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage'; // Import the existing LandingPage
import ToolsPage from './components/ToolsPage'; // Keep the ToolsPage component
import './App.css'; // Main App styles
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Route for the landing page */}
            <Route path="/" element={<LandingPage />} />
            {/* Route for the tools page */}
            <Route path="/tools" element={<ToolsPage />} />
            {/* You can add more routes here if needed in the future */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;