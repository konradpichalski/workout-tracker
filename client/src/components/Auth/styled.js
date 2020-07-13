import styled from 'styled-components';

import { flex, desktop, colours } from '../../styles/config';

const { textPrimary } = colours;

export const AuthContainer = styled.div`
  ${flex('column', 'center', 'center')}
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 20px;
  color: ${textPrimary};
`;

export const Logo = styled.div`
  display: none;
  width: 50px;
  margin: 3rem;

  ${desktop} {
    display: block;
  }
`;

export const Header2 = styled.h2`
  font-weight: 300;
`;

export const Form = styled.form`
  width: 100%;
  ${flex('column', 'center', 'center')}
`;

export const LoginForm = styled.form``;
