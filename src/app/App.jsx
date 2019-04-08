import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { PrivateRoute } from '../lib/utils';
import { store, persistor } from '../lib/store/configureStore';

import { routes as Routes } from './constants';

//  @TODO: Setup jest with enzyme
//  @TODO: Configure, disable it for tests

const App = ({ authenticated }) => (
  <ReduxProvider store={store}>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <Router>
        {authenticated && <div>@TODO: app bar</div>}

        <Route
          exact
          path={Routes.SIGN_IN}
          component={<div>@TODO: sign in</div>}
        />

        <PrivateRoute
          exact
          path={Routes.LANDING}
          component={() => <div>@TODO: homepage</div>}
          authenticated={authenticated}
        />

      </Router>
    </PersistGate>
  </ReduxProvider>
);

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default App;
