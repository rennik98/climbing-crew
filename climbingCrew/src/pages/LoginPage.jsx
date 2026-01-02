import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#1b221a] text-[#f1f2e9] flex items-center justify-center font-sans">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          SEND TODAY. <br />
          <span className="text-[#a4b494]">LOG TODAY.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#9ba88d] mb-12">
          Track every send, refine your technique, and visualize your journey to the next grade.
        </p>
        <button
          onClick={handleLogin}
          className="bg-[#7a8d6b] px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#8ba17a]"
        >
          Start Your Logbook
        </button>
      </div>
    </div>
  );
}
