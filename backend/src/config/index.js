const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost/flip-room',
  port: process.env.PORT || '4000',
}