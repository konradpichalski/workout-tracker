import styled from 'styled-components';
import { colours, shadow } from '../../styles/config';

export const { textPrimary } = colours;

export const AlertContainer = styled.div`
  position: fixed;
  z-index: 99;
  bottom: 10px;
  left: 20px;
  max-width: calc(100% - 40px);
`;

export const AlertMsg = styled.div`
  color: ${textPrimary};
  max-width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: ${(props) => colours[props.status]};
  box-shadow: ${shadow};
  margin: 2px 0;
`;
