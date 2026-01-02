import { useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard';
import ProjectItem from '../components/ProjectItem';

export default function DashboardPage({ onLogout, projects, loading }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full bg-[#1b221a] text-[#f1f2e9] flex flex-col font-sans">
      
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#2d3a2c]/60 backdrop-blur-md sticky top-0 z-50 border-b border-[#3e4d3c]">
        <span className="text-xl font-bold tracking-tighter text-[#c5d1b3]">
          🧗 CLIMBING CREW
        </span>
        <div className="flex items-center gap-4">
          <span className="text-[#a4b494] text-sm font-medium">
            Welcome back, Climber
          </span>
          <button
            onClick={handleLogoutClick}
            className="text-[#6b7c5c] text-sm hover:text-[#a4b494]"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-grow flex flex-col items-center px-6 py-12">
        <div className="max-w-6xl w-full animate-in fade-in duration-700">
          
          {/* Header */}
          <header className="mb-12">
            <h2 className="text-4xl font-black text-[#a4b494] mb-2">
              Climber Dashboard
            </h2>
            <p className="text-[#9ba88d]">
              "The best climber is the one having the most fun."
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <StatCard label="Max Grade" value="V6 / 5.12a" />
            <StatCard
              label="Yearly Goal"
              value="V7 / 5.12c"
              color="text-[#c5d1b3]"
            />
            <StatCard
              label="Current Focus"
              value="Power Endurance"
              italic
              color="text-[#a4b494]"
            />
          </div>

          {/* Projects */}
          <section className="bg-[#2d3a2c]/20 rounded-3xl border border-[#3e4d3c] p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-[#a4b494]">📈</span> Active Projects
            </h3>

            <div className="space-y-4">
              {loading ? (
                <p className="text-[#6b7c5c]">
                  Loading projects from server...
                </p>
              ) : (
                projects.map(project => (
                  <ProjectItem
                    key={project.id}
                    title={project.title}
                    status={project.status}
                    grade={project.grade}
                  />
                ))
              )}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
