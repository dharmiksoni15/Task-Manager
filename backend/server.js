const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB=require("./config/db");
const taskRoutes=require("./routes/taskRoutes");

const app = express();

// Connect Database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks",taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Task Manager API is running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
