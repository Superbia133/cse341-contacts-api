const { getDb } = require('../db/connect');
const { ObjectId } = require('mongodb');

const collection = 'contacts';

const getAllContacts = async (req, res) => {
  const db = getDb().db();
  const results = await db.collection(collection).find().toArray();
  res.json(results);
};

const getContactById = async (req, res) => {
  const db = getDb().db();
  const contact = await db.collection(collection).findOne({ _id: new ObjectId(req.params.id) });
  if (!contact) return res.status(404).json({ message: 'Contact not found' });
  res.json(contact);
};

const createContact = async (req, res) => {
  const db = getDb().db();
  const contact = req.body;
  const result = await db.collection(collection).insertOne(contact);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const db = getDb().db();
  const result = await db
    .collection(collection)
    .replaceOne({ _id: new ObjectId(req.params.id) }, req.body);
  if (result.modifiedCount === 0) return res.status(404).json({ message: 'Contact not found' });
  res.json({ message: 'Contact updated' });
};

const deleteContact = async (req, res) => {
  const db = getDb().db();
  const result = await db.collection(collection).deleteOne({ _id: new ObjectId(req.params.id) });
  if (result.deletedCount === 0) return res.status(404).json({ message: 'Contact not found' });
  res.json({ message: 'Contact deleted' });
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};
