import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../actions/userActions";

// API
const fetchUsersApi = () =>
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => data.users);

// WORKER: FETCH USERS
function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

// OPTIONAL: LOGIN SIDE EFFECT (for logging/debug/future API)
// function* loginSaga(action) {
//   try {
//     console.log("User logged in:", action.payload);
//     // Future: API call, token storage, etc.
//   } catch (error) {
//     console.log("Login error:", error);
//   }
// }

// WATCHERS
export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}

// export function* watchLogin() {
//   yield takeLatest(SET_CURRENT_USER, loginSaga);
// }