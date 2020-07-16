import styled from 'styled-components';

import { colours } from '../../styles/config';

const { back, backLight, textSecondary } = colours;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${back};
  opacity: 0.7;
`;

export const ModalContent = styled.div`
  margin: 10% auto 0;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background: ${backLight};
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  background: ${textSecondary};
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 50%;
  color: ${backLight};
`;
