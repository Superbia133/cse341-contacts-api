const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect'); // ✅ updated path
const contactRoutes = require('./routes/contacts'); // ✅ updated path
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/contacts', contactRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Contacts API!');
});

// Connect to DB and start server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
