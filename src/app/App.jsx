import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute } from '../lib/utils';
import { LandingPage, ProfilePage } from '../components/pages';
import GameMap from '../components/game';

import { routes as Routes } from './constants';

const App = ({ authenticated }) => (
  <Router>
    {authenticated && <div />}

    <Route
      exact
      path="/"
      component={GameMap}
    />

    <PrivateRoute
      exact
      path={Routes.PROFILE}
      component={ProfilePage}
      authenticated={authenticated}
    />

    <PrivateRoute
      exact
      path={Routes.LANDING}
      component={LandingPage}
      authenticated={authenticated}
    />

  </Router>
);

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapState = ({ user }) => ({
  authenticated: user.authenticated,
});

export default connect(mapState)(App);
