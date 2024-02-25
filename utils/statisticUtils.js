// statisticsUtil.js

exports.getTotalSaleAmount = async (connection, month) => {
    const [rows] = await connection.query('SELECT SUM(price) AS totalSaleAmount FROM transactions WHERE MONTH(dateOfSale) = ?', [month]);
    return parseFloat(rows[0].totalSaleAmount);
  };
  
  exports.getTotalSoldItems = async (connection, month) => {
    const [rows] = await connection.query('SELECT COUNT(*) AS totalSoldItems FROM transactions WHERE MONTH(dateOfSale) = ?', [month]);
    return parseInt(rows[0].totalSoldItems);
  };
  
  exports.getTotalNotSoldItems = async (connection, month) => {
    const [rows] = await connection.query('SELECT COUNT(*) AS totalNotSoldItems FROM transactions WHERE MONTH(dateOfSale) = ? AND price = 0', [month]);
    return parseInt(rows[0].totalNotSoldItems);
  };
  