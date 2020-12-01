import {
  GET_ALL_MOVE_OUT_LIST,
  GET_ALL_MOVE_OUT_LIST_IS_LOADING,
} from '../action/types';

const initialState = {
  rooms: [],
  isLoading: false
}

const getMoveOutListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOVE_OUT_LIST:
      return {
        ...state,
        rooms: action.moveOutData,
        isLoading: false
      }
    case GET_ALL_MOVE_OUT_LIST_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }
}

export default getMoveOutListReducer;
