import axios from 'axios';
import { put, all, takeEvery } from 'redux-saga/effects';
import { setAuthToken } from '../../../utils';
import { authUser, fetchAuthUser, createUser } from '../routines';
import { loadData, requestErrorData } from '../../../commons/routines';

function* authUserSaga({ payload }) {
  try {
    yield put(loadData.request());
    const response = yield axios.post('/api/auth', payload);
    const { token } = response.data;
    localStorage.setItem('token', token);

    yield put(authUser.success({ token }));
    yield put(fetchAuthUser());
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    yield put(fetchAuthUser.failure());
    yield put(loadData.fulfill());
  } finally {
  }
}

function* fetchAuthUserSaga() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    yield put(loadData.request());
    const response = yield axios.get('/api/auth');
    yield put(fetchAuthUser.success({ user: response.data }));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    yield put(fetchAuthUser.failure());
  } finally {
    yield put(loadData.fulfill());
  }
}

function* createUserSaga({ payload }) {
  try {
    yield put(loadData.request());
    const response = yield axios.post('/api/users', payload);
    const { token } = response.data;
    localStorage.setItem('token', token);

    yield put(createUser.success({ token }));
    yield put(fetchAuthUser());
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    yield put(createUser.failure());
    yield put(loadData.fulfill());
  } finally {
  }
}

function* authUserWatcherSaga() {
  yield takeEvery(authUser.TRIGGER, authUserSaga);
}

function* fetchAuthUsertWatcherSaga() {
  yield takeEvery(fetchAuthUser.TRIGGER, fetchAuthUserSaga);
}

function* createUserWatcherSaga() {
  yield takeEvery(createUser.TRIGGER, createUserSaga);
}

export function* authSagas() {
  yield all([
    authUserWatcherSaga(),
    fetchAuthUsertWatcherSaga(),
    createUserWatcherSaga(),
  ]);
}
