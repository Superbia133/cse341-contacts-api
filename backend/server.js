const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { initDb } = require('./db/connect');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Base test route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Import and use routes
const routes = require('./routes');
app.use('/api', routes);

// Connect to DB then start server
initDb((err) => {
  if (err) {
    console.error('Database initialization failed:', err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
