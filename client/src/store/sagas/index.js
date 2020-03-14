import { all } from 'redux-saga/effects';
import { authSagas } from '../../pages/Auth/sagas';
import { studentsSagas } from '../../pages/Views/StudentsPage/sagas';
import { groupsSagas } from '../../pages/Views/GroupsPage/sagas';
import { instructorsSagas } from '../../pages/Views/InstructorsPage/sagas';
import { carsSagas } from '../../pages/Views/CarsPage/sagas';

export function* rootSaga() {
  yield all([authSagas(), studentsSagas(), groupsSagas(), instructorsSagas(), carsSagas()]);
}
