import * as _axios from 'axios';

let axios = _axios.create({
  headers: {
    contentType: 'application/json',
  }
});

export const _catchAxiosError = (e, onError = false) => {
  let error = {};
  if (e.response === undefined) {
    error.message = 'No Internet Connection';
  } else {
    error = e.response.data.message;
  }
  if (onError) {
    onError(error);
  }
  return error;
};

export { axios };