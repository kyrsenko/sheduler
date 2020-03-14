import { createRoutine } from 'redux-saga-routines';

export const fetchAllInstructors = createRoutine('FETCH_ALL_INSTRUCTORS');
export const fetchInstructorById = createRoutine('FETCH_INSTRUCTOR_BY_ID');
export const createInstructor = createRoutine('CREATE_INSTRUCTOR');
export const editInstructor = createRoutine('EDIT_INSTRUCTOR');
export const deleteInstructor = createRoutine('DELETE_INSTRUCTOR');

