import { combineReducers } from 'redux';
import applicationsReducer from './applications';

const appReducer = combineReducers({
  applications: applicationsReducer,
});

export default appReducer;
