import toastr from 'toastr';
import { axios, _catchAxiosError } from '../../services/axios';
import { BASE_URL } from '../../services/config';
import {
  GET_ALL_ROOMS,
  GET_ALL_ROOMS_IS_LOADING,
} from './types';

const getRooms = roomsData => ({
  type: GET_ALL_ROOMS,
  roomsData
});

const getRoomsIsLoading = () => ({
  type: GET_ALL_ROOMS_IS_LOADING
});

export const getAllRooms = (onError = false) => async dispatch => {
  try {
    dispatch(getRoomsIsLoading());
    const response = await axios({
      method: 'get',
      url: `${BASE_URL}/rooms`
    });
    const { data } = response.data;
    dispatch(getRooms(data));
  } catch(error) {
    const reportError = await _catchAxiosError(error, onError);
    toastr.error(reportError);
    throw error
  }
}

export const flipRoomRequest = (id, onError = false) => async dispatch => {
  try {
    const response = await axios({
      method: 'put',
      url: `${BASE_URL}/room/${id}`,
    })
    const { message } = response.data;
    dispatch(getAllRooms())
    toastr.success(message)
  } catch(error) {
    const reportError = await _catchAxiosError(error, onError);
    toastr.error(reportError);
    throw error
  }
}