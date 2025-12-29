const express = require('express');
const { getProjects, getFeaturedProjects } = require('../controllers/projectController');
const router = express.Router();

router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);

module.exports = router;
