import styled from 'styled-components';

import { colours, flex } from '../../styles/config';

const { primary, list, textPrimary, textSecondary, backLight } = colours;

export const ListItemContainer = styled.li`
  width: 100%;
  list-style-type: none;
  margin: 2px 0;
  padding: 2px 10px;
  color: ${textSecondary};
  ${flex('row', 'flex-start', 'center')}
  flex-wrap: wrap;
  background: ${list};
`;

export const Selectable = styled.button`
  background: none;
  width: 60%;
  cursor: pointer;
  ${flex('row', 'flex-start', 'center')}
`;

export const ListLabel = styled.span`
  color: ${(props) => (props.active ? textPrimary : textSecondary)};
  font-weight: ${(props) => (props.active ? '600' : '300')};
`;

export const Icon = styled.div`
  background: ${(props) => (props.active ? primary : backLight)};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px 10px 10px 0;
`;

export const ButtonWrapper = styled.div`
  width: 40%;
  ${flex('row', 'flex-end', 'center')}
`;
