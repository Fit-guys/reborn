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
          style={{ background: `url(${backgroundImage}) center center no-repeat`, backgroundSize: 'cover' }}
          className={classes.firstLook}
        >
          <div className={classes.getStartedRoot}>
            <Typography
              variant="h4"
              color="primary"
              className={classes.getStartedCaption}
            >
              Інформаційний веб-портал для школярів:
              «Інженерія програмного забезпечення»
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
            <Typography
              variant="h4"
              color="secondary"
              style={{
                marginTop: '50px',
              }}
              className={classes.getStartedCaption}
            >
              Хто ми?
            </Typography>
          </div>
          <div className={classes.row}>
            {developers
              .splice(0, 3)
              .map(developer => <DeveloperInfo key={developer.name} {...developer} />)}
          </div>

          <div className={classes.row}>
            {developers.map(developer => <DeveloperInfo key={developer.name} {...developer} />)}
          </div>
        </div>
        <div
          className={`${classes.techWeUse} ${classes.aboutUsRoot}`}
        >
          <div className={classes.row}>
            <Typography
              variant="h4"
              color="primary"
              style={{
                marginTop: '50px',
              }}
              className={classes.getStartedCaption}
            >
              Що ми використовуємо?
            </Typography>
          </div>
          <div className={classes.row}>
            {technologies.splice(0, 3).map(tech => <TechnologyInfo key={tech.name} {...tech} />)}
          </div>

          <div className={classes.row}>
            {technologies.map(tech => <TechnologyInfo key={tech.name} {...tech} />)}
          </div>
        </div>
        <div
          style={{
            background: '#32153a center center no-repeat fixed',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          className={classes.aboutUsRoot}
        >

          <Typography
            variant="h4"
            color="secondary"
            style={{
              marginTop: '50px',
            }}
            className={classes.getStartedCaption}
          >
              Де ми?
          </Typography>
          <div
            dangerouslySetInnerHTML={{ __html: '<div class="mapouter"><div class="gmap_canvas"><iframe width="900" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%D0%9A%D0%B8%D0%B5%D0%B2%20%D0%B1%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD%D0%B0%20%D0%B3%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D0%B8%D1%88%D0%B8%D0%BD%D0%B0%2024&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{position:relative;text-align:right;height:500px;width:900px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:900px;}</style></div>' }}
          />
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
