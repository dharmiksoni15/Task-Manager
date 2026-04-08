# ✅ TaskFlow — MERN Stack Task Manager

> A clean, responsive, full-stack Task Manager built with the MERN stack. Manage your daily tasks with ease — add, edit, delete, filter, and search tasks in real time with a polished UI.

[![Live Demo](https://img.shields.io/badge/Frontend-Vercel-black?style=flat-square&logo=vercel)](https://task-manager-virid-kappa.vercel.app)
[![API Status](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat-square&logo=render)](https://task-manager-xwzj.onrender.com)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## 🌐 Live Demo

| Service | URL |
|--------|-----|
| 🖥️ Frontend | [task-manager-virid-kappa.vercel.app](https://task-manager-virid-kappa.vercel.app) |
| ⚙️ Backend API | [task-manager-xwzj.onrender.com/api/tasks](https://task-manager-xwzj.onrender.com/api/tasks) |
| 📦 Repository | [github.com/dharmiksoni15/Task-Manager](https://github.com/dharmiksoni15/Task-Manager) |

---

## ✨ Features

### 📝 Task Management
- ➕ Add new tasks instantly from the input bar
- ✏️ Inline editing — edit task titles without any modal
- 🗑️ Delete tasks with confirmation
- ✅ Mark tasks as completed / undo completion

### 🔍 Productivity
- 🔎 Case-insensitive live search across all tasks
- 🔽 Filter tasks by: **All / Completed / Pending**
- 📊 Task summary showing Total, Completed, and Pending counts

### 🎯 User Experience
- 🔔 Toast notifications for every action
- ⏳ Loading spinner during API calls
- 📱 Fully responsive UI built with Tailwind CSS

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js, Tailwind CSS, Axios, React Hooks |
| **Backend** | Node.js, Express.js, REST API |
| **Database** | MongoDB Atlas, Mongoose |
| **Deployment** | Vercel (Frontend), Render (Backend) |

---

## 📁 Project Structure

```
Task-Manager/
│
├── frontend/                  # React application
│   ├── public/
│   └── src/
│       ├── components/        # Reusable UI components
│       ├── App.jsx
│       └── main.jsx
│
├── backend/                   # Express REST API
│   ├── controllers/           # Route logic (MVC)
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API route definitions
│   ├── .env                   # Environment variables
│   └── index.js               # Server entry point
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/dharmiksoni15/Task-Manager.git
cd Task-Manager
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file inside `/frontend`:

```env
VITE_API_URL=http://localhost:5000
```

---

## 🔐 Environment Variables

### Backend — `backend/.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskflow
```

### Frontend — `frontend/.env`

```env
VITE_API_URL=https://task-manager-xwzj.onrender.com
```

---

## 📡 API Endpoints

Base URL: `https://task-manager-xwzj.onrender.com/api/tasks`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Fetch all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update a task by ID |
| `DELETE` | `/api/tasks/:id` | Delete a task by ID |

**Example — Create Task**

```json
POST /api/tasks
{
  "title": "Build the README file"
}
```

**Response**

```json
{
  "_id": "664abc123...",
  "title": "Build the README file",
  "completed": false,
  "createdAt": "2025-04-08T10:00:00.000Z"
}
```

---

## ⚡ Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| **CORS errors** between Vercel and Render | Configured `cors` middleware in Express with the Vercel URL as the allowed origin |
| **Render cold start delays** on free tier | Added a loading spinner on the frontend to handle the initial API delay gracefully |
| **Environment variables** not loading in production | Added all required env vars via Render & Vercel dashboard settings |
| **API connection issues** after deployment | Switched from `localhost` to the production URL using `VITE_API_URL` in `.env` |
| **MVC architecture** setup | Separated logic into `controllers/`, `routes/`, and `models/` folders for clean, scalable code |

---

## 🚀 Future Improvements

- [ ] 🔐 User authentication with JWT (login / signup)
- [ ] 📅 Task deadlines and priority levels
- [ ] 🌙 Dark mode toggle
- [ ] 👥 Multi-user support
- [ ] 🔔 Email or push notification reminders
- [ ] 📊 Analytics dashboard with completion trends

---

## 📚 Key Learnings

- Full-stack MERN development from scratch
- Designing and consuming a RESTful API
- CRUD operations with MongoDB & Mongoose
- React state management using hooks
- Real-world deployment and debugging
- Building responsive UIs with Tailwind CSS

---

## 👨‍💻 Author

**Dharmik Soni**

[![GitHub](https://img.shields.io/badge/GitHub-dharmiksoni15-181717?style=flat-square&logo=github)](https://github.com/dharmiksoni15)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Dharmik_Soni-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/dharmik-soni-26a557280/)

---

> ⭐ If you found this project useful, consider giving it a star on GitHub — it really helps!
