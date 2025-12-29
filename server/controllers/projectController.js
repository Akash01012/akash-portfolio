const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const projects = await Project.find(filter).sort({ featured: -1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).limit(6);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
