import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalContainer,
  ModalBackdrop,
  ModalContent,
  ButtonClose,
} from './styled';

const Modal = ({ children, isOpened, handleClose }) => {
  if (isOpened) {
    return (
      <ModalContainer>
        <ModalBackdrop />
        <ModalContent>
          {children}
          <ButtonClose onClick={handleClose}>x</ButtonClose>
        </ModalContent>
      </ModalContainer>
    );
  }

  return null;
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  isOpened: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
