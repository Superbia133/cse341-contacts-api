const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./db/connect');
const contactRoutes = require('./routes/contacts');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/contacts', contactRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
    });
  }
});
