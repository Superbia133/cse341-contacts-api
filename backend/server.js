const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const { initDb } = require('./db/connect');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/api', routes); // All routes will be under /api

// Root route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start server after DB is initialized
initDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
