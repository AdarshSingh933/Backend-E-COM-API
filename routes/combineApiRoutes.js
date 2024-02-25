const express = require('express');
const router = express.Router();
const combinedController = require('../controllers/combineApiControllers');

// Define route
router.get('/', combinedController.getCombinedData);

module.exports = router;
