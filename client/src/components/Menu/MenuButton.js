import React from 'react';
import PropTypes from 'prop-types';

import { LinkWrapper, Icon, Label } from './styled';

const MenuButton = ({ icon, label, handleClick }) => {
  return (
    <LinkWrapper onClick={handleClick}>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </LinkWrapper>
  );
};

MenuButton.propTypes = {
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default MenuButton;
