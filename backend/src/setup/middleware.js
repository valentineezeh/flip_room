const Cors = require('cors');
const BodyParser = require('body-parser');

// set up the middleware that will be used by th app
module.exports = (app) => {
  app.use(BodyParser.json());

  // only localhost:4000 can make request to this api
  app.use(Cors({
    origin: ['http://localhost:4000']
  }))
}