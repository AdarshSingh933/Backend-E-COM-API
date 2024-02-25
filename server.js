const express = require('express');
const bodyParser = require('body-parser');
const initializeDatabase = require('./config/initializeDatabase');
const transactionRoutes = require('./routes/transactionRoutes');
const statisticRoutes = require('./routes/statisticRoutes');
const chartRoutes = require('./routes/chartRoutes');
const combineApiRoutes = require('./routes/combineApiRoutes');
const dotenv = require('dotenv');

const app = express();

//dotenv config
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/transactions', transactionRoutes);
app.use('/statistics', statisticRoutes);
app.use('/chart', chartRoutes);
app.use('/combineApi', combineApiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Initialize Database
app.get('/initialize-database', async (req, res) => {
  try {
    await initializeDatabase();
    res.status(200).send('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
