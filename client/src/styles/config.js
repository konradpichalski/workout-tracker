import styled, { createGlobalStyle } from 'styled-components';

// variables
export const colours = {
  primary: '#1f8efa',
  light: '#657d95',
  textPrimary: '#fff',
  textSecondary: '#879aac',
  back: '#232e42',
  backDark: '#21293c',
  backLight: '#2f3b53',
  list: '#253147',
  warning: '#ffaa4f',
  error: '#ee423e',
  success: '#06c985',
};

export const shadow = `0px 6px 6px 0px rgba(21,33,56,0.5)`;

// shortcuts
export const flex = (dir, justify, align) => {
  return `display: flex;
  flex-direction: ${dir};
  justify-content: ${justify};
  align-items: ${align};`;
};

export const desktop = `@media only screen and (min-width: 900px)`;

// global style at the end to use the variables etc
export const GlobalStyle = createGlobalStyle`
  body, html {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    background-color: ${colours.back};

  }

  div, button, ul, li {
    position: relative;
    box-sizing: border-box;
  }

  button {
    outline: none;
    border: none;
  }

  #root {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export const AppScreen = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  ${flex('row', 'flex-start', 'center')}
`;
