import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './Redux';

const middleware = [thunk, createLogger({ collapsed: true })];

export default createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
