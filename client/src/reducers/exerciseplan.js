import {
  GET_EXERCISE_PLANS,
  DELETE_EXERCISE_PLAN,
  GET_EXERCISE_PLAN_BY_ID,
  ADD_NEW_EXERCISE,
  UPDATE_CURRENT_EXERCISE_PLAN,
  UPDATE_EXERCISE_PLAN,
  RESET_CURRENT_EXERCISE_PLAN,
} from '../actions/types';

const newExercisePlan = {
  name: '',
  sets: [
    {
      repRange: {
        from: 0,
        to: 0,
      },
      rest: {
        min: 0,
        sec: 0,
      },
    },
  ],
  description: ' ',
};

const initialState = {
  exercisePlans: [],
  loading: true,
  currentExercisePlan: newExercisePlan,
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
    case UPDATE_CURRENT_EXERCISE_PLAN:
    case GET_EXERCISE_PLAN_BY_ID:
      return {
        ...state,
        loading: false,
        currentExercisePlan: payload,
      };
    case RESET_CURRENT_EXERCISE_PLAN:
    case ADD_NEW_EXERCISE:
      return {
        ...state,
        loading: false,
        currentExercisePlan: newExercisePlan,
      };
    case UPDATE_EXERCISE_PLAN:
      return {
        ...state,
        loading: false,
        exercisePlans: [...state.exercisePlans, payload],
      };
    default:
      return state;
  }
};
