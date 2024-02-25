// chartRoutes.js

const express = require('express');
const router = express.Router();
const chartController = require('../controllers/chartControllers');

// Define routes
router.get('/', chartController.getBarChartData);

//pie-chart routes
router.get('/pie-chart',chartController.getPieChartData);


module.exports = router;
