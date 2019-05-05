import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles, Avatar, Typography, Button, Grid,
} from '@material-ui/core';

import UserProgress from './UserProgress';

import headerImage from '../images/profile_header.png';
import userImage from '../images/user.jpg';
import styles from './profile.styles';

class ProfilePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }

  componentDidMount() {

  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.headerRoot}>
          <img src={headerImage} alt="background" className="img-background" />
        </div>
        <div className={classes.contentRoot}>
          <div className={classes.userInfo}>
            <Avatar src={userImage} className={classes.avatar} />
            <div className={classes.userTextInfo}>
              <Typography variant="h5" className={classes.nickname} gutterBottom color="primary">
                samplenick
              </Typography>
              <Typography variant="h4" className={classes.rank} gutterBottom color="primary">
                СЕРЖАНТ
              </Typography>
              <Typography component="h6" gutterBottom color="primary">
                gun
              </Typography>

              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.gameButton}
              >
                Початы Граты
              </Button>

              <Typography
                gutterBottom
                className={classes.userInfoHeading}
                variant="h6"
                component="h6"
                color="primary"
              >
                про мене
              </Typography>

              <Typography variant="h6" className={classes.additionalUserInfo} component="h6" gutterBottom color="primary">
                ajsgda askdgj
              </Typography>

              <Typography variant="h6" className={classes.additionalUserInfo} component="h6" gutterBottom color="primary">
                aksgdsajs asjkdg
              </Typography>

              <Typography
                gutterBottom
                className={classes.userInfoHeading}
                variant="h6"
                component="h6"
                color="primary"
              >
                подилытыся
              </Typography>

            </div>
            <Grid container direction="row" justify="center" alignItems="stretch" className="progress-bar">
              <Grid
                item
                className={classes.shareButton}
              >
                <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com">
                  <img className="share-button-image" src="https://img.icons8.com/color/48/000000/facebook-circled.png" alt="Facebook" />
                </a>
              </Grid>
              <Grid
                item
                className={classes.shareButton}
              >
                <a href="https://telegram.me/share/url?url=<URL>&text=<TEXT>">
                  <img className="share-button-image" src="https://img.icons8.com/color/48/000000/telegram-app.png" alt="Telegram" />
                </a>
              </Grid>
              <Grid
                item
                className={classes.shareButton}
              >
                <a href="https://twitter.com/share?url=https://simplesharebuttons.com">
                  <img className="share-button-image" src="https://img.icons8.com/color/48/000000/twitter-circled.png" alt="Twitter" />
                </a>
              </Grid>
            </Grid>
          </div>
          <div className={classes.userProgress}>
            <UserProgress />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProfilePage);
