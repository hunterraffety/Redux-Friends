import { LOGGING_IN, LOGIN_SUCCESS } from '../actions';

const initialState = {
  deletingFriend: false,
  error: '',
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        error: '',
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false
      };
    default:
      return state;
  }
};
