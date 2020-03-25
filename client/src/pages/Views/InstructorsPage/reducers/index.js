import {
  fetchAllInstructors,
  fetchInstructorById,
  createInstructor,
  editInstructor,
  deleteInstructor,
} from '../routines';

import { logoutUser } from '../../../../commons/routines';

const initialState = {
  instructors: null,
  instructor: null,
};

export function instructorsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case fetchAllInstructors.REQUEST:
      return {
        ...state,
        instructors: null,
      };
    case fetchInstructorById.REQUEST:
      return {
        ...state,
        instructor: null,
      };
    case fetchAllInstructors.SUCCESS:
      return {
        ...state,
        instructors: payload,
      };
    case fetchInstructorById.SUCCESS:
      return {
        ...state,
        instructor: payload,
      };
    case logoutUser.TRIGGER:
      return {
        ...state,
        instructors: null,
        instructor: null,
      };

    default:
      return state;
  }
}
