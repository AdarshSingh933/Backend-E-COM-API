// chartController.js
const chartService = require('../services/chartServices');


exports.getBarChartData = async (req, res) => {
  try {
    const { month } = req.query;
    const barChartData = await chartService.getBarChartData(month);
    res.json(barChartData);
  } catch (error) {
    console.error('Error fetching bar chart data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getPieChartData = async (req, res) => {
  try {
    const { month } = req.query;
    const pieChartData = await chartService.getPieChartData(month);
    res.json(pieChartData);
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

