import React, { Fragment } from 'react';

import MenuElements from './MenuElements';

import {
  MenuTopBar,
  Logo,
  LogoIcon,
  MenuContainer,
  MenuContainerDesktop,
} from './styled';
import { logoSvg, logoIconSvg } from '../../styles/svgs';

const Menu = () => (
  <Fragment>
    <MenuTopBar>
      <Logo>{logoSvg}</Logo>
      <LogoIcon>{logoIconSvg}</LogoIcon>
      <MenuContainer>
        <MenuElements />
      </MenuContainer>
    </MenuTopBar>

    <MenuContainerDesktop>
      <MenuElements desktop />
    </MenuContainerDesktop>
  </Fragment>
);

export default Menu;
