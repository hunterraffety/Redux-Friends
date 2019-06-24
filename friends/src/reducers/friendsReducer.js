import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions';

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
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingFriends: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: [...state.friends, ...action.payload]
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};
