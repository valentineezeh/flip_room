const { validateAll } = require('indicative/validator');

module.exports = async (request, response, next) => {
  try {
    await validateAll(request.body, {
      imageUrl: 'required|string',
      address: 'required|string',
      room: 'required|number',
      location: 'required|string',
      lastOccupant: 'required|string',
      balance: 'required|float',
      moveOutDate: 'required|date_format:YYYY-MM-DD'
    })
    return next()
  } catch (error) {
    return response.status(422).json(error)
  }
}