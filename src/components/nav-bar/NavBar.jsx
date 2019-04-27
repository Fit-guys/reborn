import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar, withStyles, Toolbar,
} from '@material-ui/core';

import NavLink from './NavLink';

import { Routes } from '../../app/constants';

import styles from './styles';

const NavBar = ({ authenticated, classes }) => (
  <div className={classes.rootDefault}>
    <AppBar position="sticky" className={classes.rootDefault}>
      <Toolbar className={classes.toolbar}>

        {authenticated && (
          <NavLink to={Routes.PROFILE}>
            profile
          </NavLink>
        )}

      </Toolbar>
    </AppBar>
  </div>
);

NavBar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);