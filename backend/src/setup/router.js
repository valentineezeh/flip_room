const Router = require('express').Router;
const createRoom = require('../handlers/createRoom');
const createRoomValidator = require('../validators/createRoom');
const getAllRooms = require('../handlers/getRooms');
const updateRoom = require('../handlers/updateRoom');

module.exports = (app, db) => {
  const router = new Router()

  // base endpoint to welcome user to the application
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Flip Rooms Application.'
  });
});

  // create room endpoint
  router.post('/room', createRoomValidator, createRoom(db));

  // increment the number of room when updating
  router.put('/room/:id', updateRoom(db))

  // get all rooms
  router.get('/rooms', getAllRooms(db));

  app.use(router)
}