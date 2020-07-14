import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';

import ListItem from '../List/ListItem';

import { getExercisePlans } from '../../actions/exerciseplan';

import { Container, List, Header } from '../../styles/shared.styled';

const ExercisePlans = ({ exercisePlans, getExercisePlans }) => {
  const [activeItem, setActiveItem] = useState('0');

  useEffect(() => {
    getExercisePlans();
  }, [getExercisePlans]);

  return (
    <Fragment>
      <Header>Exercises</Header>

      <Container>
        <List>
          {exercisePlans.length > 0 &&
            exercisePlans.map((trainingPlan) => {
              const isActive = trainingPlan._id === activeItem;
              return (
                <ListItem
                  key={trainingPlan._id}
                  item={trainingPlan}
                  active={isActive}
                  setActive={setActiveItem}
                  isEditable
                  isDeletable
                ></ListItem>
              );
            })}
        </List>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = ({ exercisePlan }) => {
  return {
    exercisePlans: exercisePlan.exercisePlans,
  };
};

export default connect(mapStateToProps, { getExercisePlans })(ExercisePlans);
