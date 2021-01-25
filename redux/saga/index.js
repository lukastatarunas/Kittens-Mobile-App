import { all } from 'redux-saga/effects';
import kittenSaga from './kittenSaga';

export default function* rootSaga() {
  yield all([kittenSaga()]);
}
