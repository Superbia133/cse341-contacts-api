const express = require('express');
const router = express.Router();

const contactsRoutes = require('./contacts');

// Mount the contacts routes at /contacts
router.use('/contacts', contactsRoutes);

// Root-level documentation object
router.get('/', (req, res) => {
  res.json({
    documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs'
  });
});

module.exports = router;
