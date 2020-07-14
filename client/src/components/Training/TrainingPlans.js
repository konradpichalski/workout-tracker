import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';

import ListItem from '../List/ListItem';

import { getTrainingPlans } from '../../actions/trainingplan';

import { Container, List, Header } from '../../styles/shared.styled';

const TrainingPlans = ({ trainingPlans, getTrainingPlans }) => {
  const [activeItem, setActiveItem] = useState('0');

  useEffect(() => {
    getTrainingPlans();
  }, [getTrainingPlans]);

  console.log(trainingPlans, activeItem);

  return (
    <Fragment>
      <Header>Training Plans</Header>

      <Container>
        <List>
          {trainingPlans.length > 0 &&
            trainingPlans.map((trainingPlan) => {
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

const mapStateToProps = ({ trainingPlan }) => {
  return {
    trainingPlans: trainingPlan.trainingPlans,
  };
};

export default connect(mapStateToProps, { getTrainingPlans })(TrainingPlans);
