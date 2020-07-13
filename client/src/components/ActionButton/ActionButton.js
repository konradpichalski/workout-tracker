import React from 'react';

import { Button } from './styled';

const ActionButton = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

export default ActionButton;
