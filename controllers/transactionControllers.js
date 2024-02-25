// transactionController.js

const transactionService = require('../services/transactionServices');

exports.getTransactions = async (req, res) => {
  try {
    const { page, perPage, search } = req.query;
    const transactions = await transactionService.getTransactions(page, perPage, search);
    res.json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
