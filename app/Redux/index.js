import { combineReducers } from 'redux';
import applicationsReducer from './applications';
import votesReducer from './votes';
import accountReducer from './account';

const appReducer = combineReducers({
  applications: applicationsReducer,
  votes: votesReducer,
  account: accountReducer,
});

export default appReducer;
