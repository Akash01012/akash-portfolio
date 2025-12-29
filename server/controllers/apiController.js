const Api = require('../models/Api');

exports.getAll = async (req, res) => {
  try {
    const apis = await Api.find().sort({ createdAt: -1 });
    res.json(apis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};