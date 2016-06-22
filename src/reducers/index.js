import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import asyncActions from './asyncActions';

import checks from './checks';
import user from './user';

export default combineReducers({
  asyncActions,
  checks,
  router,
  user
});