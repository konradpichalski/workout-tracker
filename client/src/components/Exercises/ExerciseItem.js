import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ExerciseItem = ({ exercisePlan: { name } }) => {
  return <div>{name}</div>;
};

ExerciseItem.propTypes = {
  exercisePlan: PropTypes.object.isRequired,
};

export default ExerciseItem;
