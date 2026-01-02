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


app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});