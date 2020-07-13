import React from 'react';

import { Button } from './styled';

const ActionButton = ({ children, handleClick, ...rest }) => (
  <Button onClick={handleClick} {...rest}>
    {children}
  </Button>
);

export default ActionButton;
