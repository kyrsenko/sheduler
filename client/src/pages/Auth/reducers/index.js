import { authUser, fetchAuthUser, createUser } from '../routines';
import { logoutUser } from '../../../commons/routines';

const initialState = {
  user: null,
  isAuth: false,
  token: localStorage.getItem('token'),
};

export function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case authUser.SUCCESS:
    case fetchAuthUser.SUCCESS:
    case createUser.SUCCESS:
      return {
        ...state,
        ...payload,
        isAuth: true,
      };
    case authUser.FAILURE:
    case fetchAuthUser.FAILURE:
    case createUser.FAILURE:
    case logoutUser.TRIGGER:
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
}
