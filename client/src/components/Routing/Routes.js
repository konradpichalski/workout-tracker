import React from 'react';
import { Switch } from 'react-router-dom';

import Menu from '../Menu/Menu';
import TrainingPlans from '../Training/TrainingPlans';
import PrivateRoute from './PrivateRoute';

import { ComponentContainer, Section } from './styled';

const Routes = () => {
  return (
    <Section>
      <Menu />

      <ComponentContainer>
        <Switch>
          <PrivateRoute exact path='/trainingplans' component={TrainingPlans} />
        </Switch>
      </ComponentContainer>
    </Section>
  );
};

export default Routes;
