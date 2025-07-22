// backend/routes/contacts.js
const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

// Swagger tags
/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Contact management
 */

// GET all contacts
router.get('/', contactsController.getAllContacts);

// GET contact by ID
router.get('/:id', contactsController.getContactById);

// POST new contact
router.post('/', contactsController.createContact);

// PUT (update) contact
router.put('/:id', contactsController.updateContact);

// DELETE contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
