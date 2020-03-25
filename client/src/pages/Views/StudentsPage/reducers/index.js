import {
  fetchAllStudents,
  fetchStudentById,
  createStudent,
  editStudent,
  deleteStudent,
} from '../routines';

import { logoutUser } from '../../../../commons/routines';

const initialState = {
  students: null,
  student: null,
};

export function studentsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case fetchAllStudents.REQUEST:
      return {
        ...state,
        students: null,
      };
    case fetchStudentById.REQUEST:
      return {
        ...state,
        student: null,
      };
    case fetchAllStudents.SUCCESS:
      return {
        ...state,
        students: payload,
      };
    case fetchStudentById.SUCCESS:
      return {
        ...state,
        student: payload,
      };
    case logoutUser.TRIGGER:
      return {
        ...state,
        students: null,
        student: null,
      };

    default:
      return state;
  }
}
