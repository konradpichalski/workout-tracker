import { GET_TRAINING_PLANS, DELETE_TRAINING_PLAN } from '../actions/types';

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
    case DELETE_TRAINING_PLAN:
      return {
        ...state,
        loading: false,
        trainingPlans: state.trainingPlans.filter(
          (trainingPlan) => trainingPlan._id !== payload,
        ),
      };
    default:
      return state;
  }
};
