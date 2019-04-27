import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './index.css';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import VerticalStepper from './VerticalStepper';
import Background from '../images/profile.png';
import UserImage from '../images/image.jpg';


const myTheme1 = createMuiTheme({
  typography: {
    fontSize: 17,
    fontFamily: [
      'Helvetica',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#41254E',
    },
  },
});

const myTheme2 = createMuiTheme({
  typography: {
    fontSize: 15,
    fontFamily: [
      'Helvetica',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#41254E',
    },
  },
});

export default class ProfilePage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <img src={Background} alt="background" className="img-background" />
        <Grid container spacing={24} className="grid-container" direction="row" alignItems="center" justify="flex-start">
          <Grid container spacing={12} xs={3} className="info-container" direction="column" alignItems="center" justify="flex-start" style={{ marginLeft: '20px', marginTop: '-125px' }}>
            <Avatar src={UserImage} className="user-image" style={{ height: '200px', width: '200px' }} />
            <MuiThemeProvider theme={myTheme1}>
              <Grid item>
                <div className="top-part">
                  <Typography variant="h6" gutterBottom color="primary" style={{ fontWeight: 'bold', marginTop: '30px' }}>
                    samplenick
                  </Typography>
                  <Typography variant="h6" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: 'bold' }}>
                    СЕРЖАНТ
                  </Typography>
                  <Typography component="h6" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: '600' }}>
                    gun
                  </Typography>
                  <Button variant="raised" color="primary" style={{ margin: '10px 0', fontWeight: '600', width: '200px' }}>ПОЧАТИ ГРУ</Button>
                </div>
                <MuiThemeProvider theme={myTheme2}>
                  <Grid direction="column" alignItems="center" justify="space-between">
                    <Grid container direction="column" alignItems="flex-start" justify="space-between">
                      <Grid container width="100%">
                        <Grid item>
                          <Typography component="h3" gutterBottom color="primary" style={{ margin: '20px 0', opacity: '0.5' }}>
                            ПРО МЕНЕ
                          </Typography>
                        </Grid>
                        <Grid item>
                          <div className="line" style={{ width: '190px' }} />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography component="h3" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: 'bold', opacity: '0.8' }}>
                        Name Surname
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="h3" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: 'bold', opacity: '0.8' }}>
                        email
                      </Typography>
                    </Grid>
                    <Grid container>
                      <Grid item>
                        <Typography component="h3" gutterBottom color="primary" style={{ margin: '20px 0', opacity: '0.5' }}>
                          РОЗКАЗАТИ ДРУЗЯМ
                        </Typography>
                      </Grid>
                      <Grid item>
                        <div className="line" />
                      </Grid>
                    </Grid>
                  </Grid>
                </MuiThemeProvider>
                <Grid container direction="row" justify="space-between" alignItems="stretch" className="progress-bar">
                  <Grid item>
                    <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com">
                      <img className="share-button-image" src="https://img.icons8.com/color/48/000000/facebook-circled.png" alt="Facebook" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://telegram.me/share/url?url=<URL>&text=<TEXT>">
                      <img className="share-button-image" src="https://img.icons8.com/color/48/000000/telegram-app.png" alt="Telegram" />
                    </a>
                  </Grid>
                  <Grid item>
                    <a href="https://twitter.com/share?url=https://simplesharebuttons.com">
                      <img className="share-button-image" src="https://img.icons8.com/color/48/000000/twitter-circled.png" alt="Twitter" />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </MuiThemeProvider>
          </Grid>
          <Grid item xs={8} className="progress-bar">
            <VerticalStepper />
          </Grid>
        </Grid>
      </div>
    );
  }
}
