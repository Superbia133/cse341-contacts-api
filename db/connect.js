const { MongoClient } = require('mongodb');
let db;

const initDb = async (callback) => {
  if (db) {
    console.log('DB already initialized!');
    return callback(null, db);
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    db = client.db();
    console.log('DB initialized!');
    callback(null, db);
  } catch (err) {
    callback(err);
  }
};

const getDb = () => {
  if (!db) {
    throw Error('Database not initialized');
  }
  return db;
};

module.exports = { initDb, getDb };
