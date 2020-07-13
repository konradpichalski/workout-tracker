import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LinkWrapper, Icon, Label } from './styled';

const MenuLink = ({ link, icon, label }) => {
  const location = useLocation().pathname;
  const isActive = link === location ? 'active' : '';

  return (
    <LinkWrapper active={isActive}>
      <Link to={link}>
        <Icon active={isActive}>{icon}</Icon>
        <Label active={isActive}>{label}</Label>
      </Link>
    </LinkWrapper>
  );
};

MenuLink.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuLink;
