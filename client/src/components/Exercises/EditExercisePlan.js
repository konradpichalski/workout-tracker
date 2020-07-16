import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExercisePlanForm from '../Exercises/ExercisePlanForm';

import { getExercisePlanById } from '../../actions/exerciseplan';

import { Container, Header } from '../../styles/shared.styled';

const EditExercisePlan = ({
  match,
  exercisePlan,
  getExercisePlanById,
  isExercisePlanLoading,
}) => {
  const exercisePlanId = match.params.id;

  useEffect(() => {
    getExercisePlanById(exercisePlanId);
  }, [getExercisePlanById, exercisePlanId]);

  if (isExercisePlanLoading) return <div>Loading...</div>;

  return (
    <Fragment>
      <Header>
        {exercisePlanId !== 'new' ? 'Edit ' : 'Add '} exercise plan
      </Header>

      <Container>
        <ExercisePlanForm />
      </Container>
    </Fragment>
  );
};

EditExercisePlan.propTypes = {
  exercisePlan: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getExercisePlanById: PropTypes.func.isRequired,
  isExercisePlanLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ exercisePlan }) => {
  return {
    exercisePlan: exercisePlan.currentExercisePlan,
    isExercisePlanLoading: exercisePlan.loading,
  };
};

export default connect(mapStateToProps, { getExercisePlanById })(
  EditExercisePlan,
);
