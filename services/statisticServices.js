// statisticsServices.js

const mysql = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');
const statisticUtil = require('../utils/statisticUtils');

exports.getStatistics = async (month) => {
  try {
    // Connect to MySQL database
    const connection = await mysql.createConnection(dbConfig);

    // Query to calculate statistics
    const totalSaleAmount = await statisticUtil.getTotalSaleAmount(connection, month);
    const totalSoldItems = await statisticUtil.getTotalSoldItems(connection, month);
    const totalNotSoldItems = await statisticUtil.getTotalNotSoldItems(connection, month);

    // Close database connection
    await connection.end();

    // Return statistics
    return {
      month: parseInt(month),
      totalSaleAmount,
      totalSoldItems,
      totalNotSoldItems
    };
  } catch (error) {
    throw error;
  }
};
