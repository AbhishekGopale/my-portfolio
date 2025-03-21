import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      {/* Navbar that will appear on all pages */}
      <Navbar />
      
      <div className="content">
        <Routes>
          {/* Routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
