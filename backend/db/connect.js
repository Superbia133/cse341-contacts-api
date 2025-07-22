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
      // ✅ Explicitly connect to 'cse341' database
      _db = client.db('cse341');
      console.log('✅ Database initialized and connected to cse341');
      callback(null, _db);
    })
    .catch((err) => {
      console.error('❌ Failed to connect to database:', err);
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
