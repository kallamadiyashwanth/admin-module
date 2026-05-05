export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_IS_ADMIN = "SET_IS_ADMIN";
export const LOGOUT_USER = "LOGOUT_USER";


export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const setIsAdmin = (isAdmin) => ({
  type: SET_IS_ADMIN,
  payload: isAdmin
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});