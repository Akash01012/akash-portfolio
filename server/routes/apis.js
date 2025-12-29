const express = require('express');
const { getAll } = require('../controllers/apiController');
const router = express.Router();

router.get('/', getAll);


module.exports = router;
