import { GET_TRAINING_PLANS } from './types';
import api from '../utils/api';

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
