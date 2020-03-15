import axios from 'axios';
import { put, all, takeEvery } from 'redux-saga/effects';
import { setAuthToken } from '../../../../utils';

import {
  fetchAllCars,
  fetchCarById,
  createCar,
  editCar,
  deleteCar,
} from '../routines';
import { loadData, requestErrorData } from '../../../../commons/routines';

function* fetchAllCarsSaga() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    yield put(loadData.request());
    const response = yield axios.get('/api/cars');
    yield put(fetchAllCars.success(response.data));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    // yield put(fetchAllCars.failure());
  } finally {
    yield put(loadData.fulfill());
  }
}

function* fetchCarByIdSaga({ payload }) {
  try {
    yield put(loadData.request());
    const { id, user } = payload;
    const response = yield axios.get(`/api/cars/${id}`, user);
    yield put(fetchCarById.success(response.data));
  } catch (error) {
    const errors = error.response.data.errors;
    yield put(requestErrorData.trigger(errors));
    // yield put(fetchCarById.failure());
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

function* fetchAllCarsWatcherSaga() {
  yield takeEvery(fetchAllCars.TRIGGER, fetchAllCarsSaga);
}

function* fetchCarByIdWatcherSaga() {
  yield takeEvery(fetchCarById.TRIGGER, fetchCarByIdSaga);
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

export function* carsSagas() {
  yield all([
    fetchAllCarsWatcherSaga(),
    fetchCarByIdWatcherSaga(),
    // createStudentWatcherSaga(),
    // editStudentWatcherSaga(),
    // deleteStudentWatcherSaga(),
  ]);
}
