import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styled';

const ActionButton = ({ children, handleClick, ...rest }) => (
  <Button onClick={handleClick} {...rest}>
    {children}
  </Button>
);

ActionButton.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default ActionButton;
