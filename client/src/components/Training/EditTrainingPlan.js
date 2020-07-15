import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import ExerciseItem from '../Exercises/ExerciseItem';

import { getTrainingPlanById } from '../../actions/trainingplan';

import { Container, Header } from '../../styles/shared.styled';

const EditTrainingPlan = ({
  trainingPlan,
  isTrainingPlanLoading,
  getTrainingPlanById,
  match,
}) => {
  const trainingPlanId = match.params.id;
  const { name, exercises } = trainingPlan;

  useEffect(() => {
    getTrainingPlanById(trainingPlanId);
  }, [getTrainingPlanById, trainingPlanId]);

  if (isTrainingPlanLoading) return <Container>Loading...</Container>;

  return (
    <Fragment>
      <Header>
        {trainingPlanId !== 'new' ? 'Edit ' : 'Add '} training plan
      </Header>

      <Container>
        <Input
          name='name'
          label='Name:'
          value={name}
          onChange={(e) => console.log(e)}
        />

        {exercises.length > 0 &&
          exercises.map((exercisePlan) => (
            <ExerciseItem key={exercisePlan._id} exercisePlan={exercisePlan} />
          ))}
      </Container>

      <Container></Container>
    </Fragment>
  );
};

EditTrainingPlan.propTypes = {
  trainingPlan: PropTypes.object.isRequired,
  getTrainingPlanById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  isTrainingPlanLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ trainingPlan }) => {
  return {
    trainingPlan: trainingPlan.currentTrainingPlan,
    isTrainingPlanLoading: trainingPlan.loading,
  };
};

export default connect(mapStateToProps, { getTrainingPlanById })(
  EditTrainingPlan,
);
