import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Landing from './components/Landing/Landing';
import Routes from './components/Routing/Routes';

import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import { GlobalStyle, AppScreen } from './styles/config';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />

        <Switch>
          <Route exact path='/'>
            <AppScreen>
              <Landing />
              <Login />
            </AppScreen>
          </Route>

          <Route exact path='/register'>
            <AppScreen>
              <Landing />
              <Register />
            </AppScreen>
          </Route>

          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
