/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  withStyles, Avatar, Typography, Button, Grid,
} from '@material-ui/core';
import { getUser } from '../../../lib/store/action-creators/user';

import UserProgress from './UserProgress';

import headerImage from '../images/profile_header.png';
import styles from './profile.styles';
import Api, { Endpoints } from '../../../lib/networking';
import { Routes } from '../../../app/constants';
import Stars from './Stars';

import './index.css';

class ProfilePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    getUser: PropTypes.func.isRequired,
  }

  state = {
    userLoaded: false,
    error: '',
  }

  async componentDidMount() {
    await this.getUser();
    const { user } = this.props;

    if (user.name) {
      this.setState({ userLoaded: true });
    }
  }

  getUser = async () => {
    // eslint-disable-next-line no-shadow
    const { token, getUser } = this.props;
    const json = await Api.get(Endpoints.GET_USER, { Authorization: `Bearer ${token}` });

    const { status, user } = json;

    if (!status) {
      this.setState({ error: json.message });
      return;
    }

    await getUser(user);
  }

  render() {
    const { classes, user } = this.props;
    const { userLoaded, error } = this.state;

    if (error) {
      return error;
    }

    if (!userLoaded) {
      return 'loading';
    }

    return (
      <div className={classes.root}>
        <div className={classes.headerRoot}>
          <img src={headerImage} alt="background" className={classes.backImg} />
        </div>
        <div className={classes.contentRoot}>
          <div className={classes.userInfo}>
            <Avatar
              src="https://png.pngtree.com/element_origin_min_pic/16/05/26/185746d1ababfa9.jpg"
              style={{ background: 'pink' }}
              className={classes.avatar}
            />
            <div className={classes.userTextInfo}>
              <Typography variant="h5" className={classes.nickname} gutterBottom color="primary">
                {user.status}

              </Typography>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              >
                <Stars rank={user.status} />
              </div>

              <Typography variant="h4" className={classes.rank} gutterBottom color="primary">
                {user.name}
              </Typography>

              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.gameButton}
                href={Routes.GAME}
              >
                Почати Гру
              </Button>

              <Typography
                gutterBottom
                className={classes.userInfoHeading}
                variant="h6"
                component="h6"
                color="primary"
              >
                Email
              </Typography>

              <Typography variant="subtitle1" className={classes.additionalUserInfo} component="h6" gutterBottom color="primary">
                {user.email}
              </Typography>

              <Typography
                gutterBottom
                className={classes.userInfoHeading}
                variant="h6"
                component="h6"
                color="primary"
              >
                Результати
              </Typography>

              <Typography variant="h6" className={classes.additionalUserInfo} component="h6" gutterBottom color="primary">
                Total Score:
                {' '}
                {user.totalScore}
              </Typography>

              <Typography variant="h6" className={classes.additionalUserInfo} component="h6" gutterBottom color="primary">
                Time Played:
                {' '}
                {user.totalTime}
              </Typography>

              <Typography
                gutterBottom
                className={classes.userInfoHeading}
                variant="h6"
                component="h6"
                color="primary"
              >
                Подiлитися
              </Typography>

            </div>
            <Grid container direction="row" justify="center" alignItems="stretch" className="progress-bar">
              <Grid
                item
                className={classes.shareButton}
              >
                <a href="http://www.facebook.com/sharer.php?u=http://68.183.223.50:5000/&t=Інформаційний веб-портал для знайомства з IT-спеціальністю «Інженерія програмного забезпечення» за посиланням.">
                  <img className="share-button-image" src="https://img.icons8.com/color/48/000000/facebook-circled.png" alt="Facebook" />
                </a>
              </Grid>
              <Grid
                item
                className={classes.shareButton}
              >
                <a href="https://telegram.me/share/url?url=http://68.183.223.50:5000&text=Інформаційний веб-портал для знайомства з IT-спеціальністю «Інженерія програмного забезпечення» за посиланням.">
                  <img className="share-button-image" src="https://img.icons8.com/color/48/000000/telegram-app.png" alt="Telegram" />
                </a>
              </Grid>
              <Grid
                item
                className={classes.shareButton}
              >
                <a href="https://twitter.com/share?url=http://68.183.223.50:5000/&text=Інформаційний веб-портал для знайомства з IT-спеціальністю «Інженерія програмного забезпечення» за посиланням.">
                  <img className="share-button-image" src="https://img.icons8.com/color/48/000000/twitter-circled.png" alt="Twitter" />
                </a>
              </Grid>
              <Grid
                item
                className={classes.shareButton}
              >
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI('https://github.com/Fit-guys/reborn')}&title=Cyber Unicorns Are Cool !&summary=Інформаційний веб-портал для знайомства з IT-спеціальністю «Інженерія програмного забезпечення» за посиланням.&source='http://68.183.223.50:5000/'`}
                  rel="noopener"
                  target="_blank"
                >
                  <img className="share-button-image" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" alt="Twitter" />
                </a>
              </Grid>
            </Grid>

          </div>
          <div className={classes.userProgress}>
            <UserProgress story={user.story} />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = ({ user }) => ({
  token: user.token,
  user: user.user,
});

const mapDispatch = dispatch => bindActionCreators({
  getUser,
}, dispatch);

export default connect(mapState, mapDispatch)(withStyles(styles)(ProfilePage));
