import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '../List/ListItem';

import {
  getTrainingPlans,
  deleteTrainingPlan,
  resetCurrentTrainingPlan,
} from '../../actions/trainingplan';

import { Container, List, Header, Loading } from '../../styles/shared.styled';
import { menuPlansSvg } from '../../styles/svgs';
import ActionButton from '../ActionButton/ActionButton';

const TrainingPlans = ({
  trainingPlans,
  getTrainingPlans,
  deleteTrainingPlan,
  resetCurrentTrainingPlan,
  isLoading,
}) => {
  const [activeItem, setActiveItem] = useState('0');
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    getTrainingPlans();
  }, [getTrainingPlans]);

  if (redirect !== '') {
    resetCurrentTrainingPlan();
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
      <Header>Training Plans</Header>

      <Container>
        <List>
          {trainingPlans.length > 0 &&
            trainingPlans.map((trainingPlan) => {
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
                  handleEdit={() => setRedirect(`/trainingplan/${_id}`)}
                  handleDelete={() => deleteTrainingPlan(_id)}
                  icon={menuPlansSvg}
                ></ListItem>
              );
            })}
        </List>

        <ActionButton
          primary
          handleClick={() => setRedirect('/trainingplan/new')}
        >
          Add a new training plan
        </ActionButton>
      </Container>
    </Fragment>
  );
};

TrainingPlans.propTypes = {
  trainingPlans: PropTypes.array.isRequired,
  getTrainingPlans: PropTypes.func.isRequired,
  deleteTrainingPlan: PropTypes.func.isRequired,
  resetCurrentTrainingPlan: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ trainingPlan }) => {
  return {
    trainingPlans: trainingPlan.trainingPlans,
    isLoading: trainingPlan.loading,
  };
};

export default connect(mapStateToProps, {
  getTrainingPlans,
  deleteTrainingPlan,
  resetCurrentTrainingPlan,
})(TrainingPlans);
