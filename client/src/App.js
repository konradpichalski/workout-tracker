import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Landing from './components/Landing/Landing';

import store from './store';

import { GlobalStyle, AppScreen } from './styles/config';

const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <AppScreen>
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={Register} />
      </AppScreen>
    </Router>
  </Provider>
);

export default App;
