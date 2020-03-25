import {
  fetchAllCars,
  fetchCarById,
  createCar,
  editCar,
  deleteCar,
} from '../routines';

import { logoutUser } from '../../../../commons/routines';

const initialState = {
  cars: null,
  car: null,
};

export function carsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case fetchAllCars.REQUEST:
      return {
        ...state,
        cars: null,
      };
    case fetchCarById.REQUEST:
      return {
        ...state,
        car: null,
      };
    case fetchAllCars.SUCCESS:
      return {
        ...state,
        cars: payload,
      };
    case fetchCarById.SUCCESS:
      return {
        ...state,
        car: payload,
      };
    case logoutUser.TRIGGER:
      return {
        ...state,
        cars: null,
        car: null,
      };

    default:
      return state;
  }
}
