const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initDb } = require('./db/connect');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

// Root test route to prevent "Cannot GET /"
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Routes
const routes = require('./routes');
app.use('/', routes);

// Initialize DB and start server
initDb((err) => {
  if (err) {
    console.error('Failed to initialize database', err);
    process.exit(1);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
