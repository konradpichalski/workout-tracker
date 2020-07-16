import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '../List/ListItem';
import ActionButton from '../ActionButton/ActionButton';

import {
  getExercisePlans,
  deleteExercisePlan,
  resetCurrentExercisePlan,
} from '../../actions/exerciseplan';

import { Container, List, Header, Loading } from '../../styles/shared.styled';
import { menuPlansSvg } from '../../styles/svgs';

const ExercisePlans = ({
  exercisePlans,
  getExercisePlans,
  deleteExercisePlan,
  resetCurrentExercisePlan,
  isLoading,
}) => {
  const [activeItem, setActiveItem] = useState('0');
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    getExercisePlans();
  }, [getExercisePlans]);

  if (redirect !== '') {
    resetCurrentExercisePlan();
    return <Redirect to={redirect} />;
  }

  if (isLoading)
    return (
      <Fragment>
        <Header>Exercises</Header>
        <Loading>Loading...</Loading>
      </Fragment>
    );

  return (
    <Fragment>
      <Header>Exercises</Header>

      <Container>
        <List>
          {exercisePlans.length > 0 &&
            exercisePlans.map((trainingPlan) => {
              const { _id } = trainingPlan;
              const isActive = _id === activeItem;
              return (
                <ListItem
                  key={_id}
                  item={trainingPlan}
                  active={isActive}
                  setActive={setActiveItem}
                  isEditable
                  isDeletable
                  handleEdit={() => setRedirect(`/exerciseplan/${_id}`)}
                  handleDelete={() => deleteExercisePlan(_id)}
                  icon={menuPlansSvg}
                ></ListItem>
              );
            })}
        </List>

        <ActionButton
          primary
          handleClick={() => setRedirect('/exerciseplan/new')}
        >
          Add a new exercise
        </ActionButton>
      </Container>
    </Fragment>
  );
};

ExercisePlans.propTypes = {
  exercisePlans: PropTypes.array.isRequired,
  getExercisePlans: PropTypes.func.isRequired,
  deleteExercisePlan: PropTypes.func.isRequired,
  resetCurrentExercisePlan: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ exercisePlan }) => {
  return {
    exercisePlans: exercisePlan.exercisePlans,
    isLoading: exercisePlan.loading,
  };
};

export default connect(mapStateToProps, {
  getExercisePlans,
  deleteExercisePlan,
  resetCurrentExercisePlan,
})(ExercisePlans);
