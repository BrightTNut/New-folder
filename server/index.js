const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());

const allowedOrigins = ["https://schoolids.vercel.app"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

// Handle preflight requests
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://schoolid-beta.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://tejas:MMs5hc2g3EKnUlNE@cluster0.dkfyse7.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Model
const FormData = require("./Model"); // Assuming your model file is named Model.js

// Routes
app.post("/cards", async (req, res) => {
  try {
    const { name, id, schoolname, dob, phone, classes } = req.body;

    // Check if student already exists
    const existingStudent = await FormData.findOne({ id });

    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student already exists",
      });
    }

    // Create new student entry
    const newStudent = new FormData({
      name,
      id,
      schoolname,
      dob,
      phone,
      classes,
    });

    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error saving form data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/students", async (req, res) => {
  try {
    const students = await FormData.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching student data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
