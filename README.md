🧗‍♂️ Climbing Crew

Track every send, refine your technique, and visualize your climbing journey.

Climbing Crew is a full-stack web application built for climbers who want to track their training progress, manage climbing projects, and analyze performance over time. Whether you’re working on a hard project or logging regular gym sessions, Climbing Crew keeps everything organized in one place.

🚀 Features
🔐 User Authentication

Secure sign up and login system

Authentication handled using JSON Web Tokens (JWT)

📊 Dashboard Overview

View total climbing sessions

Track your highest grade sent

See total training time at a glance

🧗 Project Management

Create and manage climbing projects (routes or boulders)

Log grade, number of attempts, and project status
(In Progress / Sent)

Visualize your completed “send” list

📝 Session Tracking

Log detailed training sessions

Keep a complete history of your workouts and progress

📱 Responsive Design

Fully responsive UI

Optimized for both desktop and mobile using TailwindCSS

🛠️ Tech Stack
Frontend

React

Vite

TailwindCSS

Chart.js / React-Chartjs-2

Lucide React (Icons)

Backend

Node.js

Express.js

MongoDB with Mongoose

JWT (JSON Web Tokens)

⚙️ Installation & Setup

Follow the steps below to run the project locally.

✅ Prerequisites

Node.js installed

MongoDB (local installation or MongoDB Atlas)

📦 1. Clone the Repository
git clone https://github.com/rennik98/climbing-crew.git
cd climbing-crew

🖥️ 2. Backend Setup

Navigate to the server folder and install dependencies:

cd server
npm install


Create a .env file inside the server directory and add the following:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


Start the backend server:

npm start


Or, for development with nodemon:

npm run dev


The backend will run on:

http://localhost:5000

🌐 3. Frontend Setup

Open a new terminal and navigate to the frontend folder:

cd ../climbingCrew
npm install


Start the frontend development server:

npm run dev


The frontend will be available at:

http://localhost:5173

✅ Final Notes

Make sure MongoDB is running before starting the backend

Both frontend and backend must be running simultaneously

This project is ideal for learning full-stack development with the MERN stack
