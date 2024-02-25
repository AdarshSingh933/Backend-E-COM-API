// statisticsController.js

const statisticsService = require('../services/statisticServices');

exports.getStatistics = async (req, res) => {
  try {
    const { month } = req.query;
    const statistics = await statisticsService.getStatistics(month);
    res.json(statistics);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
