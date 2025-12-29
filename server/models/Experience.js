const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  duration: String,
  description: [String],
  technologies: [String],
  location: String
}, { timestamps: true });

module.exports = mongoose.model('experience', ExperienceSchema);
