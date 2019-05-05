import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles, Button, Typography } from '@material-ui/core';
import { toggleAuthModal } from '../../../lib/store/action-creators';

import backgroundImage from '../images/promo2.png';
import developers from './developers';
import technologies from './technologies';
import styles from './landing.styles';
import DeveloperInfo from './DeveloperInfo';
import TechnologyInfo from './TechnologyInfo';

class LandingPage extends Component {
  componentDidMount() {

  }

  render() {
    // eslint-disable-next-line no-shadow
    const { classes, authenticated, toggleAuthModal } = this.props;

    const getStaertedActionProps = authenticated
      ? { href: '/profile' } : { onClick: toggleAuthModal };

    return (
      <div className={classes.root}>
        <div
          style={{ background: `url(${backgroundImage}) center center no-repeat` }}
          className={classes.firstLook}
        >
          <div className={classes.getStartedRoot}>
            <Typography
              variant="h4"
              color="primary"
              className={classes.getStartedCaption}
            >
              тут должен быть красивый текст, но она его ещё не придумала
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="contained"
              className={classes.getStartedButton}
              {...getStaertedActionProps}
            >
              Почати квест
            </Button>
          </div>
        </div>
        <div
          style={{ background: '#32153a center center no-repeat fixed' }}
          className={classes.aboutUsRoot}
        >
          <div className={classes.row}>
            {developers.splice(0, 3).map(developer => <DeveloperInfo {...developer} />)}
          </div>

          <div className={classes.row}>
            {developers.map(developer => <DeveloperInfo {...developer} />)}
          </div>
        </div>
        <div
          className={`${classes.techWeUse} ${classes.aboutUsRoot}`}
        >
          <div className={classes.row}>
            {technologies.splice(0, 3).map(developer => <TechnologyInfo {...developer} />)}
          </div>

          <div className={classes.row}>
            {technologies.map(developer => <TechnologyInfo {...developer} />)}
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
  toggleAuthModal: PropTypes.func.isRequired,
};

const mapState = ({ user }) => ({
  authenticated: user.authenticated,
});

const mapDispatch = dispatch => bindActionCreators({
  toggleAuthModal,
}, dispatch);

export default connect(mapState, mapDispatch)(withStyles(styles)(LandingPage));
