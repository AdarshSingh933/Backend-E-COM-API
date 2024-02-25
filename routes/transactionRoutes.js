// transactionRoutes.js

const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionControllers');

// Define routes
router.get('/', transactionController.getTransactions);

module.exports = router;
