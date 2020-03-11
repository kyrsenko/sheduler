import { createRoutine } from 'redux-saga-routines';

export const authUser = createRoutine('AUTH_USER');
export const createUser = createRoutine('CREATE_USER');
export const fetchAuthUser = createRoutine('FETCH_AUTH_USER');

