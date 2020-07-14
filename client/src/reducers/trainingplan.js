import { GET_TRAINING_PLANS } from '../actions/types';

const initialState = {
  trainingPlans: [],
  loading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRAINING_PLANS:
      return {
        ...state,
        loading: false,
        trainingPlans: payload,
      };
    default:
      return state;
  }
};
