import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import ExerciseItem from '../Exercises/ExerciseItem';
import SelectList from '../SelectList/SelectList';

import {
  getTrainingPlanById,
  updateCurrentTrainingPlans,
} from '../../actions/trainingplan';

import { Container, Header, Label } from '../../styles/shared.styled';

const EditTrainingPlan = ({
  trainingPlan,
  isTrainingPlanLoading,
  getTrainingPlanById,
  updateCurrentTrainingPlans,
  match,
}) => {
  const trainingPlanId = match.params.id;
  const { name, exercises } = trainingPlan;

  useEffect(() => {
    getTrainingPlanById(trainingPlanId);
  }, [getTrainingPlanById, trainingPlanId]);

  const renderExerciseList = () =>
    exercises.map((exercisePlan, index) => (
      <ExerciseItem
        key={exercisePlan._id + index}
        exercisePlan={exercisePlan}
        isDeletable={true}
        handleDelete={() =>
          updateCurrentTrainingPlans({
            ...trainingPlan,
            exercises: exercises.filter(
              (exercise) => exercise._id !== exercisePlan._id,
            ),
          })
        }
      />
    ));

  console.log(exercises);

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

        {exercises.length > 0 && <Label>Exercises:</Label>}

        {exercises.length > 0 && renderExerciseList()}
      </Container>

      <SelectList
        handleAddExercisePlan={(newExercise) => {
          updateCurrentTrainingPlans({
            ...trainingPlan,
            exercises: [...exercises, newExercise],
          });
        }}
      />
    </Fragment>
  );
};

EditTrainingPlan.propTypes = {
  trainingPlan: PropTypes.object.isRequired,
  getTrainingPlanById: PropTypes.func.isRequired,
  updateCurrentTrainingPlans: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  isTrainingPlanLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ trainingPlan }) => {
  return {
    trainingPlan: trainingPlan.currentTrainingPlan,
    isTrainingPlanLoading: trainingPlan.loading,
  };
};

export default connect(mapStateToProps, {
  getTrainingPlanById,
  updateCurrentTrainingPlans,
})(EditTrainingPlan);
