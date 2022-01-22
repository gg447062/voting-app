import { combineReducers } from 'redux';
import applicationsReducer from './applications';
import votesReducer from './votes';

const appReducer = combineReducers({
  applications: applicationsReducer,
  votes: votesReducer,
});

export default appReducer;
