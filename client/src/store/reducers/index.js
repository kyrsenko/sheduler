import { combineReducers } from 'redux';
import { authReducer } from '../../pages/Auth/reducers/index';
import { studentsReducer } from '../../pages/Views/StudentsPage/reducers';
import { groupsReducer } from '../../pages/Views/GroupsPage/reducers';
import { instructorsReducer } from '../../pages/Views/InstructorsPage/reducers';
import { carsReducer } from '../../pages/Views/CarsPage/reducers';
import { commonsReducer } from '../../commons/reducers';

export const reducer = combineReducers({
  authReducer,
  commonsReducer,
  studentsReducer,
  groupsReducer,
  instructorsReducer,
  carsReducer
});
