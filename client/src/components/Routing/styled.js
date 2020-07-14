import styled from 'styled-components';

import { desktop, flex } from '../../styles/config';

export const ComponentContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 10px;

  ${desktop} {
    width: calc(100% - 200px);
    max-width: 900px;
  }
`;

export const Section = styled.section`
  ${flex('column', 'flex-start', 'center')}
  max-width: 1100px;
  margin: auto;

  ${desktop} {
    ${flex('row', 'center', 'flex-start')}
    flex-wrap: wrap;
  }
`;
