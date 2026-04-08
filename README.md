🚀 TaskFlow – MERN Task Manager Application

A full-stack Task Manager Web Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a modern and responsive UI using Tailwind CSS.

This project demonstrates real-world full-stack development, including REST API design, state management, and deployment on cloud platforms.

🌐 Live Demo
Frontend: https://task-manager-virid-kappa.vercel.app
Backend: https://task-manager-xwzj.onrender.com
API Base URL: https://task-manager-xwzj.onrender.com/api/tasks
Repository: https://github.com/dharmiksoni15/Task-Manager
✨ Features
📝 Task Management
Add new tasks
Edit task title (inline editing)
Delete tasks with confirmation
Mark tasks as completed / undo
🔍 Productivity Features
Search tasks (case-insensitive)
Filter tasks:
All
Completed
Pending
Task summary (Total / Completed / Pending)
🎯 User Experience
Toast notifications for actions
Loading spinner for API calls
Fully responsive UI (Tailwind CSS)
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Axios
React Hooks
Backend
Node.js
Express.js
RESTful API
Database
MongoDB Atlas
Mongoose
Deployment
Vercel (Frontend)
Render (Backend)
📁 Project Structure
Task-Manager/
│
├── frontend/        # React frontend
├── backend/         # Node.js + Express backend
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/dharmiksoni15/Task-Manager.git
cd Task-Manager
2️⃣ Backend Setup
cd backend
npm install
npm run dev

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Create .env file:

VITE_API_URL=http://localhost:5000
🔐 Environment Variables
Backend
PORT=5000
MONGO_URI=your_mongodb_uri
Frontend
VITE_API_URL=your_backend_url
🔗 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
⚡ Challenges & Learnings
Handling CORS issues between Vercel and Render
Managing Render free-tier cold start delays
Setting up environment variables in production
Debugging API connection issues after deployment
Structuring backend using MVC architecture
🚀 Future Improvements
Add authentication (JWT)
Add task deadlines & reminders
Implement dark mode
Multi-user support
Performance optimization
📚 Learning Highlights
Full-stack MERN development
REST API integration
CRUD operations with MongoDB
React state management
Deployment and debugging
UI design with Tailwind CSS
👨‍💻 Author

Dharmik Soni

GitHub: https://github.com/dharmiksoni15
LinkedIn: https://www.linkedin.com/in/dharmik-soni-26a557280/
⭐ Support

If you like this project, give it a ⭐ on GitHub!
