import React from 'react';
import { Switch } from 'react-router-dom';

import Menu from '../Menu/Menu';
import TrainingPlans from '../Training/TrainingPlans';
import EditTrainingPlan from '../Training/EditTrainingPlan';
import ExercisePlans from '../Exercises/ExercisePlans';
import PrivateRoute from './PrivateRoute';

import { ComponentContainer, Section } from './styled';

const Routes = () => {
  return (
    <Section>
      <Menu />

      <ComponentContainer>
        <Switch>
          <PrivateRoute exact path='/trainingplans' component={TrainingPlans} />
          <PrivateRoute
            exact
            path='/trainingplan/:id'
            component={EditTrainingPlan}
          />
          <PrivateRoute exact path='/exercises' component={ExercisePlans} />
        </Switch>
      </ComponentContainer>
    </Section>
  );
};

export default Routes;
