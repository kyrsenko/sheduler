import { createRoutine } from 'redux-saga-routines';

export const fetchAllCars = createRoutine('FETCH_ALL_CARS');
export const fetchCarById = createRoutine('FETCH_CAR_BY_ID');
export const createCar = createRoutine('CREATE_CAR');
export const editCar = createRoutine('EDIT_CAR');
export const deleteCar = createRoutine('DELETE_CAR');
