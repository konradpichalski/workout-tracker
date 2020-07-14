import React from 'react';

import ListItem from '../List/ListItem';

import { Container, List, Header } from '../../styles/shared.styled';

const TrainingPlans = () => (
  <div>
    <Header>Training Plans</Header>

    <Container>
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </Container>
  </div>
);

export default TrainingPlans;
