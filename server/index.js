import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; // Added mongoose

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// 1. CONNECT TO MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 2. DEFINE PROJECT SCHEMA & MODEL
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  grade: String,
  status: String
});
const Project = mongoose.model('Project', projectSchema);

// MIDDLEWARE
app.use(cors()); 
app.use(express.json());

// 3. API ROUTE (Fetches from MongoDB)
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching from database" });
  }
});

// 4. SEED ROUTE (Visit http://localhost:5001/seed once to add data)
app.get('/seed', async (req, res) => {
  try {
    await Project.deleteMany({});
    await Project.create([
      { title: "The Overhang Fin", grade: "V6", status: "75% - Stuck on final dyno" },
      { title: "Technical Corner", grade: "5.11d", status: "Projecting - Needs heel hook" }
    ]);
    res.send("Database Seeded!");
  } catch (err) {
    res.status(500).send("Error seeding database");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});