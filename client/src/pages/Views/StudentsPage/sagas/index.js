import axios from 'axios';
import { put, all, takeEvery } from 'redux-saga/effects';
import { setAuthToken } from '../../../../utils';

import {
  fetchAllStudents,
  fetchStudentById,
  createStudent,
  editStudent,
  deleteStudent,
} from '../routines';
import { loadData, requestErrorData } from '../../../../commons/routines';

function* fetchAllStudentsSaga() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    yield put(loadData.request());
    const response = yield axios.get('/api/students');
    yield put(fetchAllStudents.success(response.data));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    // yield put(fetchAllStudents.failure());
  } finally {
    yield put(loadData.fulfill());
  }
}

function* fetchStudentByIdSaga({ payload }) {
  try {
    yield put(loadData.request());
    const{id, user} = payload
    const response = yield axios.get(`/api/students/${id}`, user);
    yield put(fetchStudentById.success(response.data));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    // yield put(fetchStudentById.failure());
  } finally {
    yield put(loadData.fulfill());
  }
}

function* createStudentSaga({ payload }) {
  try {
    // yield put(loadData.request());
    // const response = yield axios.post('/api/users', payload);
    // const { token } = response.data;
    // localStorage.setItem('token', token);
    // yield put(createUser.success({ token }));
    // yield put(fetchAuthUser());
  } catch (error) {
    // const errors = error.response.data.errors;
    // yield put(requestErrorData.trigger(errors));
    // yield put(createUser.failure());
    // yield put(loadData.fulfill());
  } finally {
  }
}

function* editStudentSaga({ payload }) {
  try {
    // yield put(loadData.request());
    // const response = yield axios.post('/api/users', payload);
    // const { token } = response.data;
    // localStorage.setItem('token', token);
    // yield put(createUser.success({ token }));
    // yield put(fetchAuthUser());
  } catch (error) {
    // const errors = error.response.data.errors;
    // yield put(requestErrorData.trigger(errors));
    // yield put(createUser.failure());
    // yield put(loadData.fulfill());
  } finally {
  }
}

function* deleteStudentSaga({ payload }) {
  try {
    // yield put(loadData.request());
    // const response = yield axios.post('/api/users', payload);
    // const { token } = response.data;
    // localStorage.setItem('token', token);
    // yield put(createUser.success({ token }));
    // yield put(fetchAuthUser());
  } catch (error) {
    // const errors = error.response.data.errors;
    // yield put(requestErrorData.trigger(errors));
    // yield put(createUser.failure());
    // yield put(loadData.fulfill());
  } finally {
  }
}

function* fetchAllStudentsWatcherSaga() {
  yield takeEvery(fetchAllStudents.TRIGGER, fetchAllStudentsSaga);
}

function* fetchStudentByIdWatcherSaga() {
  yield takeEvery(fetchStudentById.TRIGGER, fetchStudentByIdSaga);
}

function* createStudentWatcherSaga() {
  yield takeEvery(createStudent.TRIGGER, createStudentSaga);
}

function* editStudentWatcherSaga() {
  yield takeEvery(editStudent.TRIGGER, editStudentSaga);
}

function* deleteStudentWatcherSaga() {
  yield takeEvery(deleteStudent.TRIGGER, deleteStudentSaga);
}

export function* studentsSagas() {
  yield all([
    fetchAllStudentsWatcherSaga(),
    fetchStudentByIdWatcherSaga(),
    createStudentWatcherSaga(),
    editStudentWatcherSaga(),
    deleteStudentWatcherSaga(),
  ]);
}
