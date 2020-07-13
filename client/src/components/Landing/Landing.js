import React from 'react';

import { LandingContainer, Background, Logo, Header } from './styled';
import { logoSvg } from '../../styles/svgs';

const Landing = () => (
  <LandingContainer>
    <Background />
    <Logo>{logoSvg}</Logo>

    <Header>
      Track your workouts
      <br />
      <strong>in a smart way</strong>
    </Header>
  </LandingContainer>
);

export default Landing;
