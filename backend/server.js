const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const { initDb } = require('./db/connect');

const port = process.env.PORT || 3000;

app
  .use(cors())
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
  });

// === Import and Use Your Routes ===
const routes = require('./routes');
app.use('/', routes);

// === Connect to Database and Start Server ===
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
