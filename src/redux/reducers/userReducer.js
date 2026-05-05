import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_CURRENT_USER,
  SET_IS_ADMIN,
  LOGOUT_USER
} from "../actions/userActions";

const initialState = {
  loading: false,
  users: [],
  currentUser: null,
  isAdmin: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    case SET_IS_ADMIN:
      return { ...state, isAdmin: action.payload };

    case LOGOUT_USER:
      return { ...state, currentUser: null, isAdmin: false };

    default:
      return state;
  }
};

export default userReducer;