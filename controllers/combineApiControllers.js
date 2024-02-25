const combinedService = require('../services/combineApiServices');

exports.getCombinedData = async (req, res) => {
  try {
    // Call the combined service function to fetch and combine data
    const combinedData = await combinedService.fetchAndCombineData();

    // Send the combined data as a JSON response
    res.json(combinedData);
  } catch (error) {
    console.error('Error fetching combined data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
