const express = require('express');
const router = express.Router();
const { getDb } = require('../db/connect');
const { ObjectId } = require('mongodb');

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const db = getDb().db('cse341');
    const contacts = await db.collection('contacts').find().toArray();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Server error retrieving contacts' });
  }
});

// GET a single contact by ID
router.get('/:id', async (req, res) => {
  try {
    const db = getDb().db('cse341');
    const contact = await db.collection('contacts').findOne({ _id: new ObjectId(req.params.id) });

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Invalid ID or server error' });
  }
});

module.exports = router;
