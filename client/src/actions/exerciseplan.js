import {
  GET_EXERCISE_PLANS,
  DELETE_EXERCISE_PLAN,
  GET_EXERCISE_PLAN_BY_ID,
  ADD_NEW_EXERCISE,
  UPDATE_EXERCISE_PLAN,
  UPDATE_CURRENT_EXERCISE_PLAN,
  RESET_CURRENT_EXERCISE_PLAN,
} from './types';
import api from '../utils/api';
import { setAlert } from './alert';

export const getExercisePlans = () => async (dispatch) => {
  try {
    const res = await api.get('/exerciseplan');

    dispatch({
      type: GET_EXERCISE_PLANS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteExercisePlan = (id) => async (dispatch) => {
  try {
    await api.delete(`/exerciseplan/${id}`);

    dispatch({
      type: DELETE_EXERCISE_PLAN,
      payload: id,
    });

    dispatch(setAlert('Exercise plan deleted', 'success'));
  } catch (err) {
    console.error(err);
  }
};

export const getExercisePlanById = (id) => async (dispatch) => {
  try {
    if (id !== 'new') {
      const res = await api.get(`/exerciseplan/${id}`);

      dispatch({
        type: GET_EXERCISE_PLAN_BY_ID,
        payload: res.data,
      });
    } else {
      dispatch({
        type: ADD_NEW_EXERCISE,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const updateCurrentExercisePlan = (exercisePlan) => ({
  type: UPDATE_CURRENT_EXERCISE_PLAN,
  payload: exercisePlan,
});

export const updateExercisePlan = (exercisePlan) => async (dispatch) => {
  try {
    const updatedPath = exercisePlan._id
      ? `/exerciseplan/${exercisePlan._id}`
      : '/exerciseplan';

    const res = await api.post(updatedPath, exercisePlan);

    dispatch({
      type: UPDATE_EXERCISE_PLAN,
      payload: res.data,
    });

    dispatch(setAlert('Exercise plan updated', 'success'));
  } catch (err) {
    console.error(err);
  }
};

export const resetCurrentExercisePlan = () => ({
  type: RESET_CURRENT_EXERCISE_PLAN,
});
