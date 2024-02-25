// statisticsRoutes.js

const express = require('express');
const router = express.Router();
const statisticController = require('../controllers/statisticControllers');

// Define routes
router.get('/', statisticController.getStatistics);

module.exports = router;
