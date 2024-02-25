// initializeDatabase.js

const mysql = require('mysql2/promise');
const dbConfig = require('./dbConfig');
const axios = require('axios');

const initializeDatabase = async () => {
    try {
        // Connect to MySQL database
        const connection = await mysql.createConnection(dbConfig);

        // Fetch data from third-party API
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data;

        // Initialize database with seed data
        await connection.query('CREATE TABLE IF NOT EXISTS transactions (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description TEXT, price DECIMAL(10, 2), dateOfSale DATE)');
        await connection.query('TRUNCATE TABLE transactions');
        for (const transaction of transactions) {
            await connection.query('INSERT INTO transactions (title, description, price, dateOfSale) VALUES (?, ?, ?, ?)', [transaction.title, transaction.description, transaction.price, transaction.dateOfSale]);
        }

        // Close database connection
        await connection.end();

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error; // Rethrow error to handle it elsewhere
    }
};

module.exports = initializeDatabase;
