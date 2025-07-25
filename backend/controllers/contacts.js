// backend/db/connect.js
const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }

  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client.db('cse341'); // ✅ explicitly select the correct database
      console.log('✅ Database initialized: cse341');
      callback(null, _db);
    })
    .catch((err) => {
      console.error('❌ Failed to initialize database:', err);
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('❌ Database not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb
};
