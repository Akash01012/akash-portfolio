const Experience = require('../models/Experience');

const getAllExperience = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ createdAt: -1 });
    res.status(200).json(experience);  // send array directly
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllExperience,
}