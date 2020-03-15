import { createRoutine } from 'redux-saga-routines';

export const fetchAllGroups = createRoutine('FETCH_ALL_GROUPS');
export const fetchGroupById = createRoutine('FETCH_GROUP_BY_ID');
export const createGroup = createRoutine('CREATE_GROUP');
export const editGroup = createRoutine('EDIT_GROUP');
export const deleteGroup = createRoutine('DELETE_GROUP');

