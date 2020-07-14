import { combineReducers } from 'redux';

import auth from './auth';
import alert from './alert';
import trainingPlan from './trainingplan';

export default combineReducers({
  auth,
  alert,
  trainingPlan,
});
