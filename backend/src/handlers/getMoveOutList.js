module.exports = (db) => {
  return async (request, response) => {
    try {
      // Get all rooms in the db collection converting it to an array
      const getAllMoveOutList = await db.collection('rooms').find().toArray();
      // if collection is empty return this message
      if (getAllMoveOutList.length === 0) return response.status(404).json({
        message: 'Room is yet to be created.'
      })
      // If rooms are found return the payload
      response.status(200).json({
        message: 'Successfully retrieved all rooms',
        data: getAllMoveOutList
        
      })
    } catch (error) {
      // catch and throw errors
      console.error(error)
      return response.status(500).json({
        message: 'Internal server error.'
      });
    }
  }
}