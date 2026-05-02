import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  SET_CURRENT_USER,
  LOGOUT_USER
} from "../actions/userActions";

const initialState = {
  loading: false,
  users: [],
  currentUser: null, // ✅ important
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

    // ✅ LOGIN
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    // ✅ LOGOUT
    case LOGOUT_USER:
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default userReducer;