import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MenuLink from './MenuLink';
import MenuButton from './MenuButton';

import { logout } from '../../actions/auth';

import { Avatar, Name } from './styled';
import {
  menuCalendarSvg,
  menuPlansSvg,
  menuSettingsSvg,
  menuLogoutSvg,
} from '../../styles/svgs';

const MenuElements = ({ user, logout }) => {
  let avatarBlock = '';

  console.log(user);

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
        itemId='trainingplans'
        label='training plans'
        link='/trainingplans'
        icon={menuPlansSvg}
      />

      <MenuLink
        itemId='exercises'
        label='exercises'
        link='/exercises'
        icon={menuPlansSvg}
      />

      <MenuLink
        itemId='settings'
        label='settings'
        link='/settings'
        icon={menuSettingsSvg}
      />

      <MenuButton
        itemId='logout'
        label='logout'
        icon={menuLogoutSvg}
        handleClick={logout}
      />
    </Fragment>
  );
};

MenuElements.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};

export default connect(mapStateToProps, { logout })(MenuElements);
