const Router = require('express').Router;
const createMoveOutEntry = require('../handlers/createMoveOutEntry');
const createRoomValidator = require('../validators/createRoom');
const getAllMoveOutList = require('../handlers/getMoveOutList');
const updateMoveOutList = require('../handlers/updateMoveOutList');

module.exports = (app, db) => {
  const router = new Router()

  // base endpoint to welcome user to the application
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Flip Rooms Application.'
  });
});

  // create room endpoint
  router.post('/move-out-entry', createRoomValidator, createMoveOutEntry(db));

  // increment the number of room when updating
  router.put('/move-out/:id', updateMoveOutList(db))

  // get all rooms
  router.get('/move-out-list', getAllMoveOutList(db));

  app.use(router)
}