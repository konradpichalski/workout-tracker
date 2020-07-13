import styled from 'styled-components';

import { colours } from './config';

const { primary, textPrimary } = colours;

export const Paragraph = styled.p`
  color: ${textPrimary};

  a {
    color: ${primary};
    text-transform: uppercase;
    text-decoration: none;
  }
`;
