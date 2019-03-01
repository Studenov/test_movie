import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import { rootSaga } from './saga';
import { searchReducer } from './search/reducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  search: searchReducer
});

const middleware = applyMiddleware(sagaMiddleware, createLogger({ collapsed: true }));

export const store = createStore(reducer, middleware);

sagaMiddleware.run(rootSaga);
