import LandingPage from './components/LandingPage';
import NotFoundPage from './components/NotFoundPage';
// If you have a global CSS file, import it here
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
  
      </Routes>
    </Router>
    // <div className="App">
    //   <LandingPage />
    // </div>
  );
}

export default App;