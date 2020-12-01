const Mongodb = require('mongodb');
const config = require('../config');

module.exports = async () => {
  const client = new Mongodb.MongoClient(config.databaseUrl, {
    useUnifiedTopology: true
  })

  await client.connect();
  return client.db();
}