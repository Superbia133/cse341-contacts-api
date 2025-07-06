const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./cse341-ww-student-code-w01-2-team-frontendStart/backend/db/connect');
const contactRoutes = require('./cse341-ww-student-code-w01-2-team-frontendStart/backend/routes/contacts');

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
