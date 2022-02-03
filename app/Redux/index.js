import { combineReducers } from 'redux';
import applicationsReducer from './applications';
import accountReducer from './account';
import votesReducer from './votes';

const appReducer = combineReducers({
  applications: applicationsReducer,
  account: accountReducer,
  votes: votesReducer,
});

export default appReducer;
