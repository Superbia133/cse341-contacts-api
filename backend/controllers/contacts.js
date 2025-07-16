const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

// GET all contacts
router.get('/', contactsController.getAllContacts);

// GET a single contact by ID
router.get('/:id', contactsController.getSingleContact);

// POST a new contact
router.post('/', contactsController.createContact);

// PUT (update) an existing contact
router.put('/:id', contactsController.updateContact);

// DELETE a contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
