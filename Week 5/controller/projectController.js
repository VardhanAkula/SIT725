const Project = require('../model/projectModel');

// GET all projects
async function getProjects(req, res) {
  try {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error fetching projects", error });
  }
}

// POST new project
async function addProject(req, res) {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json({ statusCode: 200, message: "Project saved successfully" });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "Error saving project", error });
  }
}

module.exports = {
  getProjects,
  addProject
};
