import {
  GET_TRAINING_PLANS,
  DELETE_TRAINING_PLAN,
  GET_TRAINING_PLAN_BY_ID,
  ADD_NEW_TRAINING,
  UPDATE_CURRENT_TRAINING_PLAN,
  UPDATE_TRAINING_PLAN,
  RESET_CURRENT_TRAINING_PLAN,
} from './types';
import api from '../utils/api';
import { setAlert } from './alert';

export const getTrainingPlans = () => async (dispatch) => {
  try {
    const res = await api.get('/trainingplan');

    dispatch({
      type: GET_TRAINING_PLANS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteTrainingPlan = (id) => async (dispatch) => {
  try {
    await api.delete(`/trainingplan/${id}`);

    dispatch({
      type: DELETE_TRAINING_PLAN,
      payload: id,
    });

    dispatch(setAlert('Training plan deleted', 'success'));
  } catch (err) {
    console.error(err);
  }
};

export const getTrainingPlanById = (id) => async (dispatch) => {
  try {
    if (id !== 'new') {
      const res = await api.get(`/trainingplan/${id}`);

      dispatch({
        type: GET_TRAINING_PLAN_BY_ID,
        payload: res.data,
      });
    } else {
      dispatch({
        type: ADD_NEW_TRAINING,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const updateTrainingPlan = (trainingPlan) => async (dispatch) => {
  try {
    const updatePath = trainingPlan._id
      ? `/trainingplan/${trainingPlan._id}`
      : '/trainingplan';

    const res = await api.post(updatePath, trainingPlan);

    dispatch({
      type: UPDATE_TRAINING_PLAN,
      payload: res.data,
    });

    dispatch(setAlert('Training plan updated', 'success'));
  } catch (err) {
    console.error(err);
  }
};

export const updateCurrentTrainingPlans = (trainingPlan) => ({
  type: UPDATE_CURRENT_TRAINING_PLAN,
  payload: trainingPlan,
});

export const resetCurrentTrainingPlan = () => ({
  type: RESET_CURRENT_TRAINING_PLAN,
});
