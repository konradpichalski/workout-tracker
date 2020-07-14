import { combineReducers } from 'redux';

import auth from './auth';
import alert from './alert';
import trainingPlan from './trainingplan';
import exercisePlan from './exerciseplan';

export default combineReducers({
  auth,
  alert,
  trainingPlan,
  exercisePlan,
});
