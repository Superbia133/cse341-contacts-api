const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect');

const getAllContacts = async (req, res) => {
  const db = getDb().db('cse341');
  const contacts = await db.collection('contacts').find().toArray();
  res.status(200).json(contacts);
};

const getSingleContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const db = getDb().db('cse341');
  const contact = await db.collection('contacts').findOne({ _id: contactId });

  if (contact) res.status(200).json(contact);
  else res.status(404).json({ message: 'Contact not found' });
};

const createContact = async (req, res) => {
  const db = getDb().db('cse341');
  const newContact = req.body;

  const result = await db.collection('contacts').insertOne(newContact);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const updateData = req.body;
  const db = getDb().db('cse341');

  const result = await db.collection('contacts').updateOne(
    { _id: contactId },
    { $set: updateData }
  );

  if (result.modifiedCount > 0) res.status(204).send();
  else res.status(404).json({ message: 'Contact not found or no changes made' });
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const db = getDb().db('cse341');

  const result = await db.collection('contacts').deleteOne({ _id: contactId });
  if (result.deletedCount > 0) res.status(200).json({ message: 'Deleted' });
  else res.status(404).json({ message: 'Contact not found' });
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
};
