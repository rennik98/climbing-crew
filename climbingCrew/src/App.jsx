import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#1b221a] text-[#f1f2e9] flex flex-col font-sans">
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#2d3a2c]/60 backdrop-blur-md sticky top-0 z-50 border-b border-[#3e4d3c]">
        <span className="text-xl font-bold tracking-tighter text-[#c5d1b3]">🧗 CLIMBING CREW</span>
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-[#a4b494] text-sm font-medium">Welcome back, Climber</span>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="text-[#6b7c5c] text-sm hover:text-[#a4b494]"
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={handleLogin}
            className="bg-[#5a6d4a] hover:bg-[#6b8258] text-[#f1f2e9] text-sm px-5 py-2 rounded-md font-medium transition-colors"
          >
            Login
          </button>
        )}
      </nav>

      <main className="flex-grow flex flex-col items-center px-6 py-12">
        {isLoggedIn ? (
          /* --- LOGGED IN DASHBOARD --- */
          <div className="max-w-6xl w-full animate-in fade-in duration-700">
            <header className="mb-12">
              <h2 className="text-4xl font-black text-[#a4b494] mb-2">Climber Dashboard</h2>
              <p className="text-[#9ba88d]">"The best climber is the one having the most fun."</p>
            </header>

            {/* Stats Grid moved here after login */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#2d3a2c]/40 p-6 rounded-2xl border border-[#3e4d3c]">
                <p className="text-[#6b7c5c] text-xs font-bold uppercase tracking-widest mb-1">Max Grade</p>
                <p className="text-3xl font-black">V6 / 5.12a</p>
              </div>
              <div className="bg-[#2d3a2c]/40 p-6 rounded-2xl border border-[#3e4d3c]">
                <p className="text-[#6b7c5c] text-xs font-bold uppercase tracking-widest mb-1">Yearly Goal</p>
                <p className="text-3xl font-black text-[#c5d1b3]">V7 / 5.12c</p>
              </div>
              <div className="bg-[#2d3a2c]/40 p-6 rounded-2xl border border-[#3e4d3c]">
                <p className="text-[#6b7c5c] text-xs font-bold uppercase tracking-widest mb-1">Current Focus</p>
                <p className="text-3xl font-black italic text-[#a4b494]">Power Endurance</p>
              </div>
            </div>

            {/* Project List from README.md */}
            <section className="bg-[#2d3a2c]/20 rounded-3xl border border-[#3e4d3c] p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-[#a4b494]">📈</span> Active Projects
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-[#1b221a] rounded-xl border border-[#3e4d3c]">
                  <div>
                    <p className="font-bold text-[#f1f2e9]">The Overhang Fin</p>
                    <p className="text-sm text-[#6b7c5c]">Status: 75% - Stuck on final dyno</p>
                  </div>
                  <span className="bg-[#5a6d4a] px-3 py-1 rounded text-xs font-bold uppercase">V6</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#1b221a] rounded-xl border border-[#3e4d3c]">
                  <div>
                    <p className="font-bold text-[#f1f2e9]">Technical Corner</p>
                    <p className="text-sm text-[#6b7c5c]">Status: Projecting - Needs heel hook</p>
                  </div>
                  <span className="bg-[#5a6d4a] px-3 py-1 rounded text-xs font-bold uppercase">5.11d</span>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* --- PUBLIC LANDING PAGE --- */
          <div className="max-w-4xl w-full py-12 text-center flex flex-col items-center justify-center flex-grow">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
              SEND TODAY. <br />
              <span className="text-[#a4b494]">LOG TODAY.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#9ba88d] mb-12 max-w-2xl mx-auto leading-relaxed">
              Track every send, refine your technique, and visualize your journey to the next grade.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleLogin}
                className="w-full sm:w-auto bg-[#7a8d6b] text-[#f1f2e9] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#8ba17a] transition-all shadow-xl"
              >
                Start Your Logbook
              </button>
              <button className="w-full sm:w-auto border-2 border-[#4a5a44] text-[#a4b494] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#2d3a2c] transition-all">
                View Projects
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="py-10 text-center text-[#5a6d4a] text-sm border-t border-[#3e4d3c]">
        © 2026 Climbing Crew. Send today. Log today. Better tomorrow.
      </footer>
    </div>
  );
}