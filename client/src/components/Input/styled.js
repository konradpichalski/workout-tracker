import styled from 'styled-components';

import { flex, colours } from '../../styles/config';

const { primary, backDark, backLight } = colours;

export const InputContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  ${flex('column', 'center', 'flex-start')}
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 200;
  margin-bottom: 5px;
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 5px 0;
  border-radius: 4px;
  background: ${backDark};
  border: 1px solid ${backLight};
  outline: none;
  color: ${primary};

  &:focus {
    border: 1px solid ${primary};
  }
`;
