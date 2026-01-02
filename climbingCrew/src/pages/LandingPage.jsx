import { useNavigate } from 'react-router-dom';

const LandingPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onLogin();
    navigate('/dashboard'); 
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
    </div>
  );
};

export default LandingPage;