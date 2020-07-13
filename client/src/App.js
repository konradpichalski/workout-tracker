import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';

import store from './store';

import { GlobalStyle } from './styles/config';

const App = () => (
  <Provider store={store}><Router>
    <GlobalStyle />
    <Fragment>
      <Menu />

      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Fragment>
  </Router>
  </Provider>
);

export default App;
