import { createRoutine } from 'redux-saga-routines';

export const loadData = createRoutine('LOAD_DATA');
export const requestErrorData = createRoutine('REQUEST_ERROR_DATA');
export const clearErrors = createRoutine('CLEAR_ERRORS');
export const logoutUser = createRoutine('LOGOUT_USER');
