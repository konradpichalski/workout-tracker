import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import MenuLink from './MenuLink';
import MenuButton from './MenuButton';

import { Avatar, Name } from './styled';
import {
  menuCalendarSvg,
  menuPlansSvg,
  menuSettingsSvg,
  menuLogoutSvg,
} from '../../styles/svgs';

const MenuElements = ({ user }) => {
  let avatarBlock = '';

  if (user) {
    const { avatar, name } = user;

    avatarBlock = (
      <Fragment>
        <Avatar src={avatar} alt='' />
        <Name>{name}</Name>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {avatarBlock}
      <MenuLink
        itemId='calendar'
        label='calendar'
        link='/calendar'
        icon={menuCalendarSvg}
      />
      <MenuLink
        itemId='plans'
        label='plans'
        link='/plans'
        icon={menuPlansSvg}
      />
      <MenuLink
        itemId='settings'
        label='settings'
        link='/settings'
        icon={menuSettingsSvg}
      />
      <MenuButton itemId='logout' label='logout' icon={menuLogoutSvg} />
    </Fragment>
  );
};

MenuElements.propTypes = {
  screen: PropTypes.string,
  user: PropTypes.object,
};

export default MenuElements;
