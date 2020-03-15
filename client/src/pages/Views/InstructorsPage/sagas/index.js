import axios from 'axios';
import { put, all, takeEvery } from 'redux-saga/effects';
import { setAuthToken } from '../../../../utils';

import {
  fetchAllInstructors,
  fetchInstructorById,
  createInstructor,
  editInstructor,
  deleteInstructor,
} from '../routines';
import { loadData, requestErrorData } from '../../../../commons/routines';

function* fetchAllInstructorsSaga({ payload }) {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    yield put(loadData.request());
    const response = yield axios.get('/api/instructors', payload);
    yield put(fetchAllInstructors.success(response.data));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    // yield put(fetchAllInstructors.failure());
  } finally {
    yield put(loadData.fulfill());
  }
}

function* fetchInstructorByIdSaga({ payload }) {
  try {
    yield put(loadData.request());
    const { id, user } = payload;
    const response = yield axios.get(`/api/instructors/${id}`, user);
    yield put(fetchInstructorById.success(response.data));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    // yield put(fetchInstructorById.failure());
  } finally {
    yield put(loadData.fulfill());
  }
}

// function* createStudentSaga({ payload }) {
//   try {
//     // yield put(loadData.request());
//     // const response = yield axios.post('/api/users', payload);
//     // const { token } = response.data;
//     // localStorage.setItem('token', token);
//     // yield put(createUser.success({ token }));
//     // yield put(fetchAuthUser());
//   } catch (error) {
//     // const errors = error.response.data.errors;
//     // yield put(requestErrorData.trigger(errors));
//     // yield put(createUser.failure());
//     // yield put(loadData.fulfill());
//   } finally {
//   }
// }

// function* editStudentSaga({ payload }) {
//   try {
//     // yield put(loadData.request());
//     // const response = yield axios.post('/api/users', payload);
//     // const { token } = response.data;
//     // localStorage.setItem('token', token);
//     // yield put(createUser.success({ token }));
//     // yield put(fetchAuthUser());
//   } catch (error) {
//     // const errors = error.response.data.errors;
//     // yield put(requestErrorData.trigger(errors));
//     // yield put(createUser.failure());
//     // yield put(loadData.fulfill());
//   } finally {
//   }
// }

// function* deleteStudentSaga({ payload }) {
//   try {
//     // yield put(loadData.request());
//     // const response = yield axios.post('/api/users', payload);
//     // const { token } = response.data;
//     // localStorage.setItem('token', token);
//     // yield put(createUser.success({ token }));
//     // yield put(fetchAuthUser());
//   } catch (error) {
//     // const errors = error.response.data.errors;
//     // yield put(requestErrorData.trigger(errors));
//     // yield put(createUser.failure());
//     // yield put(loadData.fulfill());
//   } finally {
//   }
// }

function* fetchAllInstructorsWatcherSaga() {
  yield takeEvery(fetchAllInstructors.TRIGGER, fetchAllInstructorsSaga);
}

function* fetchInstructorByIdWatcherSaga() {
  yield takeEvery(fetchInstructorById.TRIGGER, fetchInstructorByIdSaga);
}

// function* createStudentWatcherSaga() {
//   yield takeEvery(createStudent.TRIGGER, createStudentSaga);
// }

// function* editStudentWatcherSaga() {
//   yield takeEvery(editStudent.TRIGGER, editStudentSaga);
// }

// function* deleteStudentWatcherSaga() {
//   yield takeEvery(deleteStudent.TRIGGER, deleteStudentSaga);
// }

export function* instructorsSagas() {
  yield all([
    fetchAllInstructorsWatcherSaga(),
    fetchInstructorByIdWatcherSaga(),
    // createStudentWatcherSaga(),
    // editStudentWatcherSaga(),
    // deleteStudentWatcherSaga(),
  ]);
}
