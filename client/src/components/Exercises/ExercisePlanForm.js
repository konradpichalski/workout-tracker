import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ExercisePlanSets from './ExercisePlanSets';
import Input from '../Input/Input';
import TextBox from '../TextBox/TextBox';
import ActionButton from '../ActionButton/ActionButton';

import {
  updateCurrentExercisePlan,
  updateExercisePlan,
} from '../../actions/exerciseplan';

import { Label } from '../../styles/shared.styled';

const ExercisePlanForm = ({
  exercisePlan,
  updateCurrentExercisePlan,
  updateExercisePlan,
  handleClose,
}) => {
  const { name, description, sets } = exercisePlan;

  return (
    <Fragment>
      <Input
        name='name'
        label='Name:'
        value={name}
        onChange={(e) =>
          updateCurrentExercisePlan({ ...exercisePlan, name: e.target.value })
        }
      />

      <TextBox
        name='description'
        label='Description:'
        value={description}
        onChange={(e) =>
          updateCurrentExercisePlan({
            ...exercisePlan,
            description: e.target.value,
          })
        }
      />

      <Label>Sets:</Label>

      <ExercisePlanSets
        sets={sets}
        handleAddSet={() =>
          updateCurrentExercisePlan({
            ...exercisePlan,
            sets: [
              ...sets,
              { repRange: { from: 0, to: 0 }, rest: { min: 0, sec: 0 } },
            ],
          })
        }
        handleSetChange={(e, num, type) =>
          updateCurrentExercisePlan({
            ...exercisePlan,
            sets: sets.map((set, setNum) => {
              if (num === setNum) {
                return {
                  ...set,
                  [type]: {
                    ...set[type],
                    [e.target.name]: e.target.value,
                  },
                };
              } else return set;
            }),
          })
        }
        handleRemoveSet={(num) => {
          sets.splice(num, 1);
          updateCurrentExercisePlan({
            ...exercisePlan,
          });
        }}
      />

      {exercisePlan.name !== '' && (
        <ActionButton
          primary
          handleClick={() => {
            handleClose && handleClose();
            updateExercisePlan(exercisePlan);
          }}
        >
          Save exercise
        </ActionButton>
      )}
    </Fragment>
  );
};

ExercisePlanForm.propTypes = {
  exercisePlan: PropTypes.object.isRequired,
  updateCurrentExercisePlan: PropTypes.func.isRequired,
  updateExercisePlan: PropTypes.func.isRequired,
  handleClose: PropTypes.func,
};

const mapStateToProps = ({ exercisePlan }) => {
  return {
    exercisePlan: exercisePlan.currentExercisePlan,
  };
};

export default connect(mapStateToProps, {
  updateCurrentExercisePlan,
  updateExercisePlan,
})(ExercisePlanForm);
