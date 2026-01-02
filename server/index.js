// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows your React app to communicate with this server
app.use(express.json()); // Allows the server to parse JSON bodies

// Sample Route for Climbing Projects
// Based on your README.md data
app.get('/api/projects', (req, res) => {
  const projects = [
    { id: 1, title: "The Overhang Fin", grade: "V6", status: "75% - Stuck on final dyno" },
    { id: 2, title: "Technical Corner", grade: "5.11d", status: "Projecting - Needs heel hook" }
  ];
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});