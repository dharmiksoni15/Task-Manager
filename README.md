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
| **Component structure** getting too large | Broke `App.jsx` into 6 focused components and moved all API calls to `src/api/taskApi.js` |
| **MVC architecture** on the backend | Separated logic into `controllers/`, `routes/`, and `models/` — routes only define endpoints |

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
- Component-based architecture and separation of concerns
- MVC pattern implementation on the backend
- Real-world deployment and debugging
- Building responsive UIs with Tailwind CSS

---

## 👨‍💻 Author

**Dharmik Soni**

[![GitHub](https://img.shields.io/badge/GitHub-dharmiksoni15-181717?style=flat-square&logo=github)](https://github.com/dharmiksoni15)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Dharmik_Soni-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/dharmik-soni-26a557280/)

---

> ⭐ If you found this project useful, consider giving it a star on GitHub — it really helps!
