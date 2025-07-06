const express = require('express');
const router = express.Router(); // ✅ Use Express's built-in Router

const contactsController = require('../controllers/contacts'); // Adjust path if needed

// Route to get all contacts
router.get('/', contactsController.getAll);

// Route to get a single contact by ID
router.get('/:id', contactsController.getSingle);

module.exports = router;
