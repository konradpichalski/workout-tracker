import styled from 'styled-components';

import { colours, flex } from '../../styles/config';

const { primary, textPrimary, textSecondary, list, back } = colours;

export const ExerciseItemContainer = styled.div`
  width: 100%;
  background: ${list};
  padding: 10px;
  margin: 2px 0;
  ${flex('column', 'flex-start', 'flex-start')}
`;

export const ContainerTop = styled.div`
  width: 100%;
  ${flex('row', 'flex-start', 'center')}
`;

export const Icon = styled.div`
  background: ${primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  ${flex('column', 'center', 'center')}

  svg {
    width: 60%;
    height: 60%;

    .st0 {
      fill: #fff;
    }
  }
`;

export const Label = styled.h3`
  color: ${textSecondary};
  font-weight: 600;
  font-size: 0.8rem;
`;

export const Table = styled.table`
  font-size: 0.8rem;
  padding: 10px;
  padding-left: ${(props) => (props.noPadding ? '0' : '40px')};
`;

export const THeader = styled.thead`
  color: ${textSecondary};
`;

export const TBody = styled.tbody`
  color: ${textPrimary};
`;

export const TH = styled.th`
  font-weight: 300;
  padding: ${(props) => (props.padding ? '0.2rem 0.7rem' : '0 0.7rem')};
  text-align: left;
  vertical-align: center;
`;

export const DeleteButton = styled.button`
  ${flex('row', 'center', 'center')}
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${primary};
  color: #fff;
  ${(props) => props.right && 'margin-left: auto;'};
`;

export const SetsContainer = styled.div`
  width: 100%;
  background: ${back};
  margin-bottom: 1rem;

  ${flex('column', 'flex-start', 'flex-start')};
`;
