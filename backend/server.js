const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
const setupSwagger = require('./swagger');
const { initDb } = require('./db/connect');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.send('API is working! Visit /api-docs for Swagger documentation.');
});

// API routes
app.use('/api', routes);

// Swagger documentation
setupSwagger(app);

// Start server after DB init
initDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  }
});
