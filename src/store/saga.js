import { fork } from 'redux-saga/effects';

import { sagaSearch as search } from './search/saga';

export function* rootSaga() {
  yield fork(search);
}
