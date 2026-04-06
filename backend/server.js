const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Task Manager API is running...");
});

// Port

const PORT = process.env.PORT || 5000;

// Start server

app.listen(PORT, () => {
  console.log(`Server is running on por ${Ptouch ORT}`);
});
