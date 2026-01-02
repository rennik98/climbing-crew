import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// --- LOGIN PAGE COMPONENT ---
const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onLogin();
    navigate('/dashboard'); // Redirect after successful login
  };

  return (
    <div className="min-h-screen w-full bg-[#1b221a] text-[#f1f2e9] flex flex-col font-sans">
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#2d3a2c]/60 backdrop-blur-md border-b border-[#3e4d3c]">
        <span className="text-xl font-bold tracking-tighter text-[#c5d1b3]">🧗 CLIMBING CREW</span>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="max-w-4xl w-full animate-in fade-in duration-700">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
            SEND TODAY. <br />
            <span className="text-[#a4b494]">LOG TODAY.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#9ba88d] mb-12 max-w-2xl mx-auto leading-relaxed">
            Track every send, refine your technique, and visualize your journey to the next grade.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleLoginClick}
              className="w-full sm:w-auto bg-[#7a8d6b] text-[#f1f2e9] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#8ba17a] transition-all shadow-xl"
            >
              Start Your Logbook
            </button>
            <button className="w-full sm:w-auto border-2 border-[#4a5a44] text-[#a4b494] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#2d3a2c] transition-all">
              View Projects
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- DASHBOARD PAGE COMPONENT ---
const DashboardPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full bg-[#1b221a] text-[#f1f2e9] flex flex-col font-sans">
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#2d3a2c]/60 backdrop-blur-md sticky top-0 z-50 border-b border-[#3e4d3c]">
        <span className="text-xl font-bold tracking-tighter text-[#c5d1b3]">🧗 CLIMBING CREW</span>
        <div className="flex items-center gap-4">
          <span className="text-[#a4b494] text-sm font-medium">Welcome back, Climber</span>
          <button 
            onClick={handleLogoutClick}
            className="text-[#6b7c5c] text-sm hover:text-[#a4b494]"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center px-6 py-12">
        <div className="max-w-6xl w-full animate-in fade-in duration-700">
          <header className="mb-12">
            <h2 className="text-4xl font-black text-[#a4b494] mb-2">Climber Dashboard</h2>
            <p className="text-[#9ba88d]">"The best climber is the one having the most fun."</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard label="Max Grade" value="V6 / 5.12a" />
            <StatCard label="Yearly Goal" value="V7 / 5.12c" color="text-[#c5d1b3]" />
            <StatCard label="Current Focus" value="Power Endurance" italic color="text-[#a4b494]" />
          </div>

          <section className="bg-[#2d3a2c]/20 rounded-3xl border border-[#3e4d3c] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-[#a4b494]">📈</span> Active Projects
            </h3>
            <div className="space-y-4">
              <ProjectItem title="The Overhang Fin" status="75% - Stuck on final dyno" grade="V6" />
              <ProjectItem title="Technical Corner" status="Projecting - Needs heel hook" grade="5.11d" />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- HELPER COMPONENTS ---
const StatCard = ({ label, value, color = "", italic = false }) => (
  <div className="bg-[#2d3a2c]/40 p-6 rounded-2xl border border-[#3e4d3c]">
    <p className="text-[#6b7c5c] text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-3xl font-black ${color} ${italic ? 'italic' : ''}`}>{value}</p>
  </div>
);

const ProjectItem = ({ title, status, grade }) => (
  <div className="flex justify-between items-center p-4 bg-[#1b221a] rounded-xl border border-[#3e4d3c]">
    <div>
      <p className="font-bold text-[#f1f2e9]">{title}</p>
      <p className="text-sm text-[#6b7c5c]">Status: {status}</p>
    </div>
    <span className="bg-[#5a6d4a] px-3 py-1 rounded text-xs font-bold uppercase">{grade}</span>
  </div>
);

const Footer = () => (
  <footer className="py-10 text-center text-[#5a6d4a] text-sm border-t border-[#3e4d3c]">
    © 2026 Climbing Crew. Send today. Log today. Better tomorrow.
  </footer>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={!isLoggedIn ? <LoginPage onLogin={() => setIsLoggedIn(true)} /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/dashboard" 
          element={isLoggedIn ? <DashboardPage onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" />} 
        />
        {/* Default route redirects to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}