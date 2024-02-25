// chartService.js

const mysql = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');

exports.getBarChartData = async (month) => {
  try {
    // Connect to MySQL database
    const connection = await mysql.createConnection(dbConfig);

   // Query to calculate number of items in each price range
   const priceRanges = [
    { min: 0, max: 100 },
    { min: 101, max: 200 },
    { min: 201, max: 300 },
    { min: 301, max: 400 },
    { min: 401, max: 500 },
    { min: 501, max: 600 },
    { min: 601, max: 700 },
    { min: 701, max: 800 },
    { min: 801, max: 900 },
    { min: 901, max: Infinity } // For prices above 900
  ];

  const barChartData = [];

  for (const range of priceRanges) {
    const [rows] = await connection.query('SELECT COUNT(*) AS itemCount FROM transactions WHERE MONTH(dateOfSale) = ? AND price >= ? AND price <= ?', [month, range.min, range.max]);
    const itemCount = rows[0].itemCount;
    barChartData.push({ priceRange: `${range.min}-${range.max}`, itemCount });
  }

    // Close database connection
    await connection.end();

    // Return bar chart data
    return barChartData;
  } catch (error) {
    throw error;
  }
};


exports.getPieChartData = async (month) => {
  try {
    // Connect to MySQL database
    const connection = await mysql.createConnection(dbConfig);

    // Query to find unique categories and count of items in each category for the selected month
    const [rows] = await connection.query('SELECT category, COUNT(*) AS itemCount FROM transactions WHERE MONTH(dateOfSale) = ? GROUP BY category', [month]);
    const pieChartData = rows.map(row => ({ category: row.category, itemCount: row.itemCount }));

    // Close database connection
    await connection.end();

    // Return pie chart data
    return pieChartData;
  } catch (error) {
    throw error;
  }
};