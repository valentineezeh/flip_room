const { v4 } = require('uuid');

module.exports = (db) => {
  return async (request, response) => {
    try {
      // Get user request after passing through the validation function
      const {
        imageUrl,
        address,
        room,
        location,
        lastOccupant,
        balance,
        moveOutDate
      } = request.body;
      // Prepare the data to be send to the db
      const data = {
        _id: v4(),
        createdAt: new Date(),
        image: imageUrl,
        address: address,
        room: room,
        location: location,
        lastOccupant: lastOccupant,
        uuid: v4(),
        balance: balance,
        moveOutDate: moveOutDate
      }
      // Save data to the database
      const createMoveOutEntry = await db.collection('rooms').insertOne(data);

      // If successful send a response to the user
      response.status(201).json({
        message: 'Room was successfully created',
        data: createMoveOutEntry.ops[0]
      })
    } catch (error) {
      // Catch and throw error that occurs
      console.error(error)
      return response.status(500).json({
        message: 'Internal server error.'
      });
    }
  }
}