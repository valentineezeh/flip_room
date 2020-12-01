const Express = require('express');
const setupMiddleware = require('./setup/middleware');
const setupDatabase = require('./setup/database');
const config = require('./config');
const setupRouter = require('./setup/router');

const app = Express();

// set up body parser
setupMiddleware(app);

const start = async () => {
  // set up database connection
  const db = await setupDatabase();

  // set up router
  setupRouter(app, db)
  
  app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
  })
}

start().catch(console.error);