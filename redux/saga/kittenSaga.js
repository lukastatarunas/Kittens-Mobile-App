import { call, put, takeEvery } from 'redux-saga/effects';

import * as types from '../types';

const apiUrl = `https://api.jsonbin.io/b/600dc2363126bb747e9e6356`;

function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

function* fetchKittens() {
  try {
    const kittens = yield call(getApi);
    yield put({ type: types.GET_KITTENS_SUCCESS, kittens });
  } catch (error) {
    yield put({ type: types.GET_KITTENS_FAILED, message: error.message });
  }
}

function* kittenSaga() {
  yield takeEvery(types.GET_KITTENS_REQUESTED, fetchKittens);
}

export default kittenSaga;
