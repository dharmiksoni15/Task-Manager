const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://task-manager-virid-kappa.vercel.app",
];

// CORS
app.use(
  cors({
    origin: function (origin, callback) {
      // Postman / browser direct open / same-server requests may have no origin
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// JSON middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Task Manager API is running...");
});

// Routes
app.use("/api/tasks", taskRoutes);

// Database connect
connectDB();

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});