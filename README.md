# 🧗‍♂️ Climbing Crew

**Track every send, refine your technique, and visualize your climbing journey.**

Climbing Crew is a full-stack web application built for climbers who want to track their training progress, manage climbing projects, and analyze performance over time. Whether you’re working on a hard project or logging regular gym sessions, Climbing Crew keeps everything organized in one place.

---

## 🚀 Features

### 🔐 User Authentication
- Secure sign up and login system
- Authentication using JSON Web Tokens (JWT)

### 📊 Dashboard Overview
- Total climbing sessions
- Highest grade sent
- Total training time

### 🧗 Project Management
- Create and manage climbing projects (routes or boulders)
- Log grade, attempts, and project status  
  *(In Progress / Sent)*
- View your completed “send” list

### 📝 Session Tracking
- Log detailed training sessions
- Maintain a complete workout history

### 📱 Responsive Design
- Mobile and desktop friendly
- Styled with TailwindCSS

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- TailwindCSS
- Chart.js / React-Chartjs-2
- Lucide React (Icons)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## ⚙️ Installation & Setup

### ✅ Prerequisites
- Node.js installed
- MongoDB (local or MongoDB Atlas)

---

### 📦 1. Clone the Repository

```bash
git clone https://github.com/rennik98/climbing-crew.git
cd climbing-crew
```
🖥️ 2. Backend Setup

Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a .env file in the server folder:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```
npm start
```

Or run in development mode:
```
npm run dev
```

Backend runs at:
```
http://localhost:5000
```
🌐 3. Frontend Setup

Open a new terminal and navigate to the frontend folder:
```
cd ../climbingCrew
npm install
```

Start the frontend development server:
```
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```
✅ Notes

Ensure MongoDB is running before starting the backend

Run both frontend and backend at the same time

Built with the MERN stack for learning and real-world use
