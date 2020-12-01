module.exports = (db) => {
  return async (request, response) => {
    try {
      // get the id from the request params
      const { id } = request.params;

      // Find and update the room by increasing the room number by 1 and adding a new column 'updateAt date' to the table
      const updateRoom = await db.collection('rooms').findOneAndUpdate(
        {_id: id},
        {
          $inc: {'room': 1},
          $set: {updateAt: new Date()}
        },
        { new: true }
      );

      // if no room is found throw this error that room does not exist
      if (!updateRoom.value) return response.status(404).json({
        message: 'Room does not exist'
      });

      // if everything goes as plan throw a success message and the updated payload
      response.status(200).json({
        message: 'Room update was successful.',
        data: updateRoom.value
      })
    } catch (error) {
      // Catch errors
      console.error(error)
      return response.status(500).json({
        message: 'Internal server error.'
      });
    }
  }
}