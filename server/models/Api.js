const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema({
  name: String,
  description: String,
  endpoint: String,
  methods: [String],
  githubUrl: String
}, { timestamps: true });

module.exports = mongoose.model('api', ApiSchema);
