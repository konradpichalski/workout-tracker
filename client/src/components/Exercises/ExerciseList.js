import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ExerciseItem from '../Exercises/ExerciseItem';

const ExerciseList = ({ exercises, handleDelete }) => {
  return (
    <Fragment>
      {exercises.map((exercisePlan, index) => {
        const { _id } = exercisePlan;

        return (
          <ExerciseItem
            key={_id + index}
            exercisePlan={exercisePlan}
            isDeletable={true}
            handleDelete={() => handleDelete(_id)}
          />
        );
      })}
    </Fragment>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired,
};

export default ExerciseList;
