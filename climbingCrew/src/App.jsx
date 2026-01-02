import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { fetchProjects } from './api/projectsApi';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoading(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setProjects([]);
  };

  useEffect(() => {
    if (!isLoggedIn) return;

    fetchProjects()
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Connection Error:', err);
        setLoading(false);
      });
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onLogin={handleLogin} />}
      />

      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <DashboardPage
              onLogout={handleLogout}
              projects={projects}
              loading={loading}
            />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
