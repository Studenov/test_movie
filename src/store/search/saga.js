import { put, takeEvery, call } from 'redux-saga/effects';

import * as TYPES from './types';
import * as ACTIONS from './actions';
import * as API from './helpers/api';

function* createTask({ payload }) {
  const { title } = payload;
  const { data: { Error, ...data } } = yield call(API.searchMovie, title);
  if (typeof Error === 'undefined') {
    yield put(ACTIONS.successSearchMovie(data));
    return;
  }
  yield put(ACTIONS.errorSearchMovie());
}

export function* sagaSearch() {
  yield takeEvery(TYPES.SEARCH_MOVIE, createTask);
}
