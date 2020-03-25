import {
  fetchAllGroups,
  fetchGroupById,
  // createStudent,
  // editStudent,
  // deleteStudent,
} from '../routines';

import { logoutUser } from '../../../../commons/routines';

const initialState = {
  groups: null,
  group: null,
};

export function groupsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case fetchAllGroups.REQUEST:
      return {
        ...state,
        groups: null,
      };
    case fetchGroupById.REQUEST:
      return {
        ...state,
        group: null,
      };
    case fetchAllGroups.SUCCESS:
      return {
        ...state,
        groups: payload,
      };
    case fetchGroupById.SUCCESS:
      return {
        ...state,
        group: payload,
      };
    case logoutUser.TRIGGER:
      return {
        ...state,
        groups: null,
        group: null,
      };

    default:
      return state;
  }
}
