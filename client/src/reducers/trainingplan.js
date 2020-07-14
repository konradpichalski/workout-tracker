import {
  GET_TRAINING_PLANS,
  DELETE_TRAINING_PLAN,
  GET_TRAINING_PLAN_BY_ID,
  ADD_NEW_TRAINING,
} from '../actions/types';

const trainingPlan = {
  name: '',
  exercises: [],
};

const initialState = {
  trainingPlans: [],
  loading: true,
  currentTrainingPlan: trainingPlan,
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
    case GET_TRAINING_PLAN_BY_ID:
      return {
        ...state,
        loading: false,
        currentTrainingPlan: payload,
      };
    case ADD_NEW_TRAINING:
      return {
        ...state,
        loading: false,
        currentTrainingPlan: trainingPlan,
      };
    default:
      return state;
  }
};
