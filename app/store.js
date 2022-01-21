import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './Redux';

export default createStore(appReducer, applyMiddleware(thunk));
