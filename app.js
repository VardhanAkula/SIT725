const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectdb')
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Mongoose Schema and Model BEFORE routes
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
});
const Project = mongoose.model('Project', ProjectSchema);

// Now define your routes using Project model

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (error) {
    console.error("GET /api/projects error:", error);
    res.status(500).json({ statusCode: 500, message: "Error fetching projects", error: error.message });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json({ statusCode: 200, message: "Project saved successfully" });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    res.status(500).json({ statusCode: 500, message: "Error saving project", error: error.message });
  }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 App listening on port: ${port}`);
});
