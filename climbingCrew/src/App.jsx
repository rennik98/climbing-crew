import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';

const Footer = () => (
  <footer className="py-10 text-center text-[#5a6d4a] text-sm border-t border-[#3e4d3c] bg-[#1b221a]">
    © 2026 Climbing Crew. Send today. Log today. Better tomorrow.
  </footer>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route 
            path="/login" 
            element={!isLoggedIn ? <LandingPage onLogin={() => setIsLoggedIn(true)} /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <DashboardPage onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" />} 
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}