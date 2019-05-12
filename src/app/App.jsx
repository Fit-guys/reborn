import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute } from '../lib/utils';
import { LandingPage, ProfilePage } from '../components/pages';

import { Routes } from './constants';
import NavBar from '../components/nav-bar/NavBar';
import Game from '../components/pages/game/Game';

const App = ({ authenticated }) => (
  <Router>
    <NavBar authenticated={authenticated} />

    <Route
      exact
      path={Routes.LANDING}
      component={LandingPage}
    />

    <PrivateRoute
      exact
      path={Routes.PROFILE}
      component={ProfilePage}
      authenticated={authenticated}
    />

    <PrivateRoute
      exact
      path={Routes.GAME}
      component={Game}
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
