import styled from 'styled-components';

import { colours } from '../../styles/config';

const { primary, textPrimary } = colours;

export const ButtonChip = styled.button`
  cursor: pointer;
  background: ${primary};
  color: ${textPrimary};
  border-radius: 35px;
  height: 35px;
  padding: 10px 20px;
  margin: 5px 10px 5px 0;
`;
