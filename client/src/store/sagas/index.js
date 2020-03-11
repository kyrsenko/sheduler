import { all } from 'redux-saga/effects';
import { authSagas } from '../../pages/Auth/sagas';

export function* rootSaga() {
  yield all([authSagas()]);
}
