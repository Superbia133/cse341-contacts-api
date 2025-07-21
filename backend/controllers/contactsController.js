// backend/controllers/contactsController.js
const { getDb } = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
  const db = getDb();
  const contacts = await db.collection('contacts').find().toArray();
  res.status(200).json(contacts);
};

const getContactById = async (req, res) => {
  const db = getDb();
  const contact = await db.collection('contacts').findOne({ _id: new ObjectId(req.params.id) });
  res.status(200).json(contact);
};

const createContact = async (req, res) => {
  const db = getDb();
  const contact = req.body;
  const result = await db.collection('contacts').insertOne(contact);
  res.status(201).json({ id: result.insertedId });
};

const updateContact = async (req, res) => {
  const db = getDb();
  const id = new ObjectId(req.params.id);
  const result = await db.collection('contacts').replaceOne({ _id: id }, req.body);
  res.status(204).send();
};

const deleteContact = async (req, res) => {
  const db = getDb();
  const id = new ObjectId(req.params.id);
  await db.collection('contacts').deleteOne({ _id: id });
  res.status(204).send();
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};
