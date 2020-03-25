import axios from 'axios';
import { put, all, takeEvery } from 'redux-saga/effects';

import {
  fetchAllGroups,
  fetchGroupById,
  createGroup,
  editGroup,
  deleteGroup,
} from '../routines';
import { loadData, requestErrorData } from '../../../../commons/routines';

function* fetchAllGroupsSaga() {
  try {
    yield put(loadData.request());
    yield put(fetchAllGroups.request());
    const response = yield axios.get('/api/groups');
    yield put(fetchAllGroups.success(response.data));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    yield put(fetchAllGroups.failure());
  } finally {
    yield put(loadData.fulfill());
  }
}

function* fetchGroupByIdSaga({ payload }) {
  try {
    yield put(loadData.request());
    yield put(fetchGroupById.request());
    const { id } = payload;
    const response = yield axios.get(`/api/groups/${id}`);
    yield put(fetchGroupById.success(response.data));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    // yield put(fetchStudentById.failure());
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

function* fetchAllGroupsWatcherSaga() {
  yield takeEvery(fetchAllGroups.TRIGGER, fetchAllGroupsSaga);
}

function* fetchGroupByIdWatcherSaga() {
  yield takeEvery(fetchGroupById.TRIGGER, fetchGroupByIdSaga);
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

export function* groupsSagas() {
  yield all([
    fetchAllGroupsWatcherSaga(),
    fetchGroupByIdWatcherSaga(),
    // createStudentWatcherSaga(),
    // editStudentWatcherSaga(),
    // deleteStudentWatcherSaga(),
  ]);
}
