import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Input from '../Input/Input';
import ActionButton from '../ActionButton/ActionButton';
import ExerciseList from '../Exercises/ExerciseList';
import SelectList from '../SelectList/SelectList';

import {
  getTrainingPlanById,
  updateCurrentTrainingPlans,
  updateTrainingPlan,
} from '../../actions/trainingplan';

import { Container, Header, Label } from '../../styles/shared.styled';

const EditTrainingPlan = ({
  trainingPlan,
  isTrainingPlanLoading,
  getTrainingPlanById,
  updateCurrentTrainingPlans,
  updateTrainingPlan,
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
          onChange={(e) =>
            updateCurrentTrainingPlans({
              ...trainingPlan,
              name: e.target.value,
            })
          }
        />

        {exercises.length > 0 && <Label>Exercises:</Label>}

        {exercises.length > 0 && (
          <ExerciseList
            exercises={exercises}
            handleDelete={(id) =>
              updateCurrentTrainingPlans({
                ...trainingPlan,
                exercises: exercises.filter((exercise) => exercise._id !== id),
              })
            }
          />
        )}

        {exercises.length > 0 && trainingPlan.name !== '' && (
          <ActionButton
            primary
            handleClick={() => updateTrainingPlan(trainingPlan)}
          >
            Save
          </ActionButton>
        )}
      </Container>

      <SelectList
        handleAddExercisePlan={(newExercise) => {
          const { name, sets } = newExercise;

          updateCurrentTrainingPlans({
            ...trainingPlan,
            exercises: [...exercises, { _id: uuidv4(), name, sets }],
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
  updateTrainingPlan: PropTypes.func.isRequired,
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
  updateTrainingPlan,
})(EditTrainingPlan);
