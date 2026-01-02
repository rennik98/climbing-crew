const API_BASE_URL = 'http://localhost:5001/api';

export async function fetchProjects() {
  const response = await fetch(`${API_BASE_URL}/projects`);

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  return response.json();
}
