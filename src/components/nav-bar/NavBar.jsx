import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  AppBar,
  withStyles, Toolbar, Typography, Button,
} from '@material-ui/core';

import { bindActionCreators } from 'redux';
import NavLink from './NavLink';
import { Routes } from '../../app/constants';
import { logOut } from '../../lib/store/action-creators/user';

import styles from './styles';
import AuthModal from '../auth/auth-modal/AuthModal';
import SettingsMogal from '../settings/SettingsMogal';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transparency: 0,
    };

    window.addEventListener('scroll', () => {
      const position = window.scrollY;
      const transparent = position / 100;

      if (position < 100) {
        this.setState({ transparency: transparent > 1 ? 1 : transparent });
      }
    });
  }

  componentDidMount() {
    this.setState({ transparency: window.scrollY / 100 > 1 ? 1 : (window.scrollY / 100) });
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { classes, authenticated, logOut } = this.props;
    const { transparency } = this.state;
    const isGame = window.location.pathname === Routes.GAME;
    const isProfile = window.location.pathname === Routes.PROFILE;
    const buttonsColor = isProfile && transparency < 0.3 ? 'secondary' : 'primary';
    const buttonsVariant = (isProfile && transparency < 0.3) || isGame ? 'contained' : 'outlined';

    if (isGame) {
      return (
        <div>
          <AppBar
            position={isGame ? 'absolute' : 'fixed'}
            className={classes.rootDefault}
          >
            <Toolbar className={classes.toolbarGame}>

              <div>
                {authenticated && (
                <NavLink variant={buttonsVariant} to={Routes.PROFILE} style={{ marginRight: '25px', display: isProfile ? 'none' : 'auto' }} color={buttonsColor}>
                  Профiль
                </NavLink>
                )}

              </div>

            </Toolbar>
          </AppBar>
        </div>
      );
    }

    return (
      <div>
        <AppBar
          position={isGame ? 'absolute' : 'fixed'}
          className={!transparency || isGame ? classes.rootDefault : classes.rootScrolled}
          style={{ background: `rgba(255, 255, 255, ${transparency})` }}
        >
          <Toolbar className={classes.toolbar}>
            <Typography color={transparency > 0.4 || isGame ? 'primary' : 'secondary'} variant="h6" noWrap>
              Cyber Unicorns
            </Typography>

            <div>
              {authenticated && (
              <NavLink variant={buttonsVariant} to={Routes.PROFILE} style={{ marginRight: '25px', display: isProfile ? 'none' : 'auto' }} color={buttonsColor}>
                Профiль
              </NavLink>
              )}

              {!authenticated && <AuthModal /> }

              {authenticated && <SettingsMogal color={buttonsColor} variant={buttonsVariant} />}

              {authenticated && (
              <Button
                variant={buttonsVariant}
                color={buttonsColor}
                size="large"
                onClick={logOut}
              >
              Вийти
              </Button>
              ) }
            </div>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapDispatch = dispatch => bindActionCreators({
  logOut,
}, dispatch);

export default connect(null, mapDispatch)(withStyles(styles)(NavBar));
