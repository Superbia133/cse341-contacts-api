const express = require('express');
const router = express.Router();

const contactsRoutes = require('./contacts');

router.use('/contacts', contactsRoutes); // mounted at /api/contacts

module.exports = router;
