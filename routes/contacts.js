const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contactsController');

// Route to get all contacts
router.get('/', contactsController.getAllContacts);

// Route to get a single contact by ID
router.get('/:id', contactsController.getSingleContact);

module.exports = router;
