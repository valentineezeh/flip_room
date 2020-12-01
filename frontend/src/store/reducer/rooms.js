import { GET_ALL_ROOMS, GET_ALL_ROOMS_IS_LOADING } from '../action/types';

const initialState = {
  rooms: [],
  isLoading: false
}

const getRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
        rooms: action.roomsData,
        isLoading: false
      }
    case GET_ALL_ROOMS_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }
}

export default getRoomReducer;
