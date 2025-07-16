const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId }).toArray();
    if (result.length === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createContact = async (req, res) => {
  try {
    const contact = req.body;
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json({ message: 'Failed to create contact' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const contact = req.body;
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Contact not found or not modified' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId });
    if (response.deletedCount > 0) {
      res.status(200).json({ message: 'Contact deleted' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};
