import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { Routes } from '../../app/constants';

const PrivateRoute = ({
  component, exact = false, path, authenticated,
}) => (
  <Route
    exact={exact}
    path={path}
    render={props => (authenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect
        to={{
          pathname: Routes.SIGN_IN,
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
  exact: PropTypes.bool,
  location: PropTypes.object,
};

PrivateRoute.defaultProps = {
  exact: false,
  location: {},
};

export default PrivateRoute;
