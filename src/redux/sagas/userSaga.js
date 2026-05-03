import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../actions/userActions";

const fetchUsersApi = () =>
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => data.users);

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}