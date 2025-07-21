// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { initDb } = require('./db/connect');
const routes = require('./routes');
const setupSwagger = require('../swagger');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);
setupSwagger(app); // Mounts Swagger at /api-docs

app.get('/', (req, res) => {
  res.send('API is running. Visit /api-docs for documentation.');
});

initDb((err) => {
  if (err) {
    console.error('❌ Failed to connect to database:', err);
  } else {
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  }
});
