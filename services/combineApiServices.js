const axios = require('axios');
const { getBarChartData, getPieChartData } = require('./chartServices');
const { getTransactions } = require('./transactionServices');
const { getStatistics } = require('./statisticServices');

exports.fetchAndCombineData = async (month) => {
  try {
    // Fetch data from individual APIs
    const transactionsData = await getTransactions(month);
    const statisticsData = await getStatistics(month);
    const barChartData = await getBarChartData(month);
    const pieChartData = await getPieChartData(month);

    // Combine the responses into a single object
    const combinedData = {
      transactions: transactionsData,
      statistics: statisticsData,
      chart: {
        barChart: barChartData,
        pieChart: pieChartData
      }
    };

    return combinedData;
  } catch (error) {
    throw error;
  }
};
