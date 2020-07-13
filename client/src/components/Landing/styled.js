import styled from 'styled-components';

import { flex, desktop, colours } from '../../styles/config';

const { textPrimary } = colours;

export const LandingContainer = styled.div`
  min-height: 400px;
  padding: 2rem;
  ${flex('column', 'center', 'center')}
  text-align: center;

  ${desktop} {
    height: 100%;
    width: 60%;
    align-items: flex-start;
    text-align: left;
    padding: 4rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: 10;
  opacity: 0.1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('landing-page-back.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Logo = styled.div`
  width: 240px;
  margin-bottom: 3rem;

  svg {
    width: 100%;
    height: 100%;

    .st0 {
      enable-background: new;
    }

    .st1 {
      fill: #fff;
    }
  }

  ${desktop} {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }
`;

export const Header = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  color: ${textPrimary};
`;
