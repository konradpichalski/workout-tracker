import styled from 'styled-components';

import { colours, flex, desktop } from '../../styles/config';
const { textSecondary, backDark, primary } = colours;

export const MenuTopBar = styled.div`
  width: 100%;
  ${flex('row', 'flex-start', 'center')}
  border-bottom: 2px solid ${backDark};
  display: inline-flex;
`;

export const MenuContainer = styled.div`
  height: 52px;
  width: calc(100% - 52px);
  ${flex('row', 'flex-end', 'center')}
  display: inline-flex;
  vertical-align: top;

  ${desktop} {
    display: none;
  }
`;

export const MenuContainerDesktop = styled.div`
  display: none;

  ${desktop} {
    width: 190px;
    height: 100%;
    ${flex('column', 'center', 'center')}
  }
`;

export const Avatar = styled.img`
  display: none;

  ${desktop} {
    display: block;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    margin-top: 2rem;
  }
`;

export const Name = styled.p`
  display: none;

  ${desktop} {
    display: block;
    color: ${textSecondary};
    margin-bottom: 3rem;
    font-size: 0.8rem;
  }
`;

export const Logo = styled.div`
  display: none;
  width: 190px;
  border-right: 2px solid ${backDark};
  padding: 10px;

  svg {
    width: 100%;
    height: 100%;

    .st0 {
      enable-background: new;
    }

    .st1 {
      fill: #fff;
    }
  }

  ${desktop} {
    display: flex;
  }
`;

export const LogoIcon = styled.div`
  height: 50px;
  width: 50px;
  border-right: 2px solid ${backDark};
  padding: 10px;
  ${flex('column', 'center', 'center')}

  svg {
    width: 100%;
    height: 100%;

    .st0 {
      enable-background: new;
    }

    .st1 {
      fill: #fff;
    }
  }

  ${desktop} {
    display: none;
  }
`;

export const LinkWrapper = styled.div`
  width: 50px;
  cursor: pointer;
  height: 100%;
  ${flex('row', 'center', 'center')}
  background: ${(props) => props.active === 'active' && backDark};
  border-top: ${(props) =>
    props.active === 'active'
      ? `3px solid ${primary}`
      : '3px solid transparent'};

  ${desktop} {
    width: 100%;
    height: 45px;
    border: none;
    ${flex('row', 'flex-start', 'center')}
    border-left: ${(props) =>
      props.active === 'active'
        ? `3px solid ${primary}`
        : '3px solid transparent'};

    a {
      width: 100%;
      height: 100%;
      ${flex('row', 'flex-start', 'center')}
    }
  }
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 5px;

  svg {
    width: 100%;
    height: 100%;

    .st0 {
      fill: ${(props) => (props.active === 'active' ? primary : textSecondary)};
    }
  }

  ${desktop} {
    margin: 0 10px;
  }
`;

export const Label = styled.div`
  color: ${(props) => (props.active === 'active' ? primary : textSecondary)};
  display: none;
  font-size: 0.9rem;

  ${desktop} {
    display: flex;
  }
`;
