const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from 'public' directory
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON body

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/userData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB connected Successfully!");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Mongoose Schema and Model
const userSchema = new mongoose.Schema({
  FName: String,
  LName: String,
  Email: String,
  Phone: Number,
  DOB: Date,
  textArea: String,
});

const Users = mongoose.model("Users", userSchema);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/post", async (req, res) => {
  const { FName, LName, Email, Phone, DOB, textArea } = req.body;


  try {
    const user = new Users({
      FName,
      LName,
      Email,
      Phone,
      DOB: new Date(DOB), // Ensure DOB is converted to Date
      textArea,
    });

    await user.save(); // Save user data to MongoDB
    res.status(200).send("Form Submitted Successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("An error occurred while saving data.");
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
