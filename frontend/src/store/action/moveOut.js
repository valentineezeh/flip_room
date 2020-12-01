import toastr from 'toastr';
import { axios, _catchAxiosError } from '../../services/axios';
import { BASE_URL } from '../../services/config';
import {
  GET_ALL_MOVE_OUT_LIST,
  GET_ALL_MOVE_OUT_LIST_IS_LOADING,
} from './types';

const getMoveOutList = moveOutData => ({
  type: GET_ALL_MOVE_OUT_LIST,
  moveOutData
});

const getMoveOutListIsLoading = () => ({
  type: GET_ALL_MOVE_OUT_LIST_IS_LOADING
});

export const getAllMoveOutList = (onError = false) => async dispatch => {
  try {
    dispatch(getMoveOutListIsLoading());
    const response = await axios({
      method: 'get',
      url: `${BASE_URL}/move-out-list`
    });
    const { data } = response.data;
    dispatch(getMoveOutList(data));
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
      url: `${BASE_URL}/move-out/${id}`,
    })
    const { message } = response.data;
    dispatch(getAllMoveOutList())
    toastr.success(message)
  } catch(error) {
    const reportError = await _catchAxiosError(error, onError);
    toastr.error(reportError);
    throw error
  }
}