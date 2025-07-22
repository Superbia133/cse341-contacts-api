// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initDb } = require('./db/connect');
const contactsRoutes = require('./routes/contacts');
const setupSwagger = require('../swagger');

const app = express();
const PORT = process.env.PORT || 8080;

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

// Root route for basic welcome message
app.get('/', (req, res) => {
  res.send('Contacts API is running. Visit /api/contacts for data or /api-docs for documentation.');
});

// Mount Swagger documentation
setupSwagger(app);

// Mount API routes
app.use('/api/contacts', contactsRoutes);

// Fallback for unrecognized routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found', url: req.originalUrl });
});

// Start server after DB is initialized
initDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(PORT, () => {
      console.log('✅ MongoDB connected');
      console.log(`🚀 Server running on port ${PORT}`);
    });
  }
});
