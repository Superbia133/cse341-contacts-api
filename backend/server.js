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

// ✅ Enable CORS
app.use(cors());

// ✅ Manually set headers (Swagger UI needs these on Render)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Mount routes and Swagger
app.use('/api', routes);
setupSwagger(app);

// ✅ Base route
app.get('/', (req, res) => {
  res.send('API is running. Visit /api-docs for documentation.');
});

// ✅ Initialize DB before server starts
initDb((err) => {
  if (err) {
    console.error('❌ Failed to connect to database:', err);
  } else {
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  }
});
