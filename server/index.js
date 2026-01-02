import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// 1. DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 2. DEFINE THE BLUEPRINT (Schema)
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  grade: String,
  status: String
});

// 3. CREATE THE MODEL
const Project = mongoose.model('Project', projectSchema);

app.use(cors());
app.use(express.json());

// 4. UPDATED ROUTE (Fetches from Real Database)
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find(); // Gets all projects from MongoDB
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching from database" });
  }
});

// 5. HELPER ROUTE: Run this once (go to http://localhost:5001/seed) to add sample data to your DB
app.get('/seed', async (req, res) => {
  await Project.deleteMany({}); // Clear old data
  await Project.create([
    { title: "The Overhang Fin", grade: "V6", status: "75% - Stuck on final dyno" },
    { title: "Technical Corner", grade: "5.11d", status: "Projecting - Needs heel hook" }
  ]);
  res.send("Database Seeded!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});