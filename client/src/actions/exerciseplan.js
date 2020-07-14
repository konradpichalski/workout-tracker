import { GET_EXERCISE_PLANS, DELETE_EXERCISE_PLAN } from './types';
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
