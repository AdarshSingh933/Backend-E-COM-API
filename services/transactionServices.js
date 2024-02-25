// transactionService.js

const mysql = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');
const transactionUtil = require('../utils/transactionUtils');

exports.getTransactions = async (page = 1, perPage = 10, search = '') => {
  const offset = (page - 1) * perPage;
  const limit = parseInt(perPage);

  const connection = await mysql.createConnection(dbConfig);
  let query = 'SELECT * FROM transactions';
  let countQuery = 'SELECT COUNT(*) AS totalCount FROM transactions';

  if (search) {
    query += ' WHERE title LIKE ? OR description LIKE ? OR price LIKE ?';
    countQuery += ' WHERE title LIKE ? OR description LIKE ? OR price LIKE ?';
  }

  query += ' LIMIT ? OFFSET ?';

  const [rows] = await connection.query(query, [
    `%${search}%`,
    `%${search}%`,
    `%${search}%`,
    limit,
    offset
  ]);

  const [countResult] = await connection.query(countQuery, [`%${search}%`, `%${search}%`, `%${search}%`]);
  const totalCount = countResult[0].totalCount;
  const totalPages = Math.ceil(totalCount / perPage);

  await connection.end();

  return {
    page: parseInt(page),
    perPage: parseInt(perPage),
    totalCount,
    totalPages,
    data: rows
  };
};
