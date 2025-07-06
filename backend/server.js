const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { initDb } = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Route handlers
const routes = require('./routes');
app.use('/api', routes);

// Start server after DB connection
initDb((err) => {
  if (err) {
    console.error('Failed to connect to the database', err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
