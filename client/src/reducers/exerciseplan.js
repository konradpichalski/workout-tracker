import { GET_EXERCISE_PLANS, DELETE_EXERCISE_PLAN } from '../actions/types';

const initialState = {
  exercisePlans: [],
  loading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EXERCISE_PLANS:
      return {
        ...state,
        loading: false,
        exercisePlans: payload,
      };
    case DELETE_EXERCISE_PLAN:
      return {
        ...state,
        loading: false,
        exercisePlans: state.exercisePlans.filter(
          (trainingPlan) => trainingPlan._id !== payload,
        ),
      };
    default:
      return state;
  }
};
