import { axiosWithAuth } from '../utils/axiosWithAuth';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGGING_IN });
  return axiosWithAuth()
    .post('/login', creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.error });
    });
};

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axiosWithAuth()
    .get('/friends')
    .then(res => {
      console.log(`asasdadsasd`, res.data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
    });
};
