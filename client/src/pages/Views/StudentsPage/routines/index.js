import { createRoutine } from 'redux-saga-routines';

export const fetchAllStudents = createRoutine('FETCH_ALL_STUDENTS');
export const fetchStudentById = createRoutine('FETCH_STUDENT_BY_ID');
export const createStudent = createRoutine('CREATE_STUDENT');
export const editStudent = createRoutine('EDIT_STUDENT');
export const deleteStudent = createRoutine('DELETE_STUDENT');

