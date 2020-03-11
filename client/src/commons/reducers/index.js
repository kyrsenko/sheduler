import { loadData, requestErrorData } from '../routines';

const initialState = {
  loading: false,
  errors: null,
};

export function commonsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case loadData.REQUEST:
      return {
        ...state,
        loading: true,
        errors: null,
      };

    case loadData.FULFILL:
      return {
        ...state,
        loading: false,
        errors: null,
      };

    case requestErrorData.TRIGGER:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
