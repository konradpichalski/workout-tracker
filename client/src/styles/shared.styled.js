import styled from 'styled-components';

import { colours, shadow, flex } from './config';

const { primary, textPrimary, backLight } = colours;

export const Paragraph = styled.p`
  color: ${textPrimary};

  a {
    color: ${primary};
    text-transform: uppercase;
    text-decoration: none;
  }
`;

export const Header = styled.h2`
  color: ${textPrimary};
  font-weight: 300;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  background: ${backLight};
  box-shadow: ${shadow};
  ${flex('column', 'flex-start', 'flex-start')}
  margin: 2px 0;
  padding: ${(props) =>
    props.paddingBottom ? '10px 10px 100px 10px' : '10px'};
  border-radius: 2px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const Loading = Container;

export const Label = styled.p`
  color: ${textPrimary};
  font-size: 0.9rem;
`;
