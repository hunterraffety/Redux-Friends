import { axiosWithAuth } from '../utils/axiosWithAuth';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

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
    .catch(err => console.log(err.response));
};
