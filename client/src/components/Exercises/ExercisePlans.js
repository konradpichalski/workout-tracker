import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '../List/ListItem';

import {
  getExercisePlans,
  deleteExercisePlan,
} from '../../actions/exerciseplan';

import { Container, List, Header } from '../../styles/shared.styled';

const ExercisePlans = ({
  exercisePlans,
  getExercisePlans,
  deleteExercisePlan,
}) => {
  const [activeItem, setActiveItem] = useState('0');
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    getExercisePlans();
  }, [getExercisePlans]);

  if (redirect !== '') return <Redirect to={redirect} />;

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
                ></ListItem>
              );
            })}
        </List>
      </Container>
    </Fragment>
  );
};

ExercisePlans.propTypes = {
  exercisePlans: PropTypes.array.isRequired,
  getExercisePlans: PropTypes.func.isRequired,
  deleteExercisePlan: PropTypes.func.isRequired,
};

const mapStateToProps = ({ exercisePlan }) => {
  return {
    exercisePlans: exercisePlan.exercisePlans,
  };
};

export default connect(mapStateToProps, {
  getExercisePlans,
  deleteExercisePlan,
})(ExercisePlans);
