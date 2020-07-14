import styled from 'styled-components';

import { colours } from '../../styles/config';

const { primary, textPrimary, textSecondary, backLight } = colours;

export const Button = styled.button`
  color: ${(props) => (props.primary ? textPrimary : textSecondary)};
  cursor: pointer;
  background: ${(props) => (props.primary ? primary : backLight)};
  padding: 8px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  width: ${(props) => props.fullWidth && '100%'};
  margin: 10px;
`;
