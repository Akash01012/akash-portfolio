const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, enum: ['fullstack', 'ai', 'api'], required: true },
  description: String,
  techStack: [String],
  liveUrl: String,
  githubUrl: String,
  image: String,
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('project',projectSchema);
