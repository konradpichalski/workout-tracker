import { GET_TRAINING_PLANS, DELETE_TRAINING_PLAN } from './types';
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
