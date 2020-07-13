import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import { GlobalStyle } from './styles/config';

const App = () => (
  <Router>
    <GlobalStyle />
    <Fragment>
      <Menu />

      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
