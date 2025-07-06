const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./backend/db/connect'); // ✅ fixed path
const contactRoutes = require('./backend/routes/contacts'); // ✅ fixed path
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/contacts', contactRoutes);

// Optional root route
app.get('/', (req, res) => {
  res.send('Welcome to the Contacts API!');
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
