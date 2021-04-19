import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import { logicMiddleware } from './logic';

const store = createStore(
  rootReducer,
  applyMiddleware(logicMiddleware)
);

export default store;