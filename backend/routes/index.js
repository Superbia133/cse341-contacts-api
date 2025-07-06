const express = require('express');
const router = express.Router();

// Import individual route files here
const contactsRoutes = require('./contacts'); // Adjust filename if needed

// Use routes
router.use('/contacts', contactsRoutes); // This means: /api/contacts

module.exports = router;
