const mongoose = require('mongoose');
const express = require("express");
const app = express();

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/myprojectdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB!');
});

// Define Schema and Model
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
});
const Project = mongoose.model('Project', ProjectSchema);

// GET route to fetch all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error fetching projects", error });
  }
});

// POST route to submit a new project
app.post('/api/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json({ statusCode: 200, message: "Project saved successfully" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error saving project", error });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("🚀 App listening on port: " + port);
});
