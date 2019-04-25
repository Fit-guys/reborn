import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './index.css';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import verticalStepper from './verticalStepper';
import Background from '../images/profile.png';
import UserImage from '../images/image.jpg';


const myTheme = createMuiTheme({
  typography: {
    primary: {
      fontSize: 17,
      fontFamily: [
        'Helvetica',
      ].join(','),
    },
    secondary: {
      fontSize: 11,
      fontFamily: [
        'Helvetica',
      ].join(','),
    },
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
        <Grid container spacing={24} className="Grid">
          <img src={Background} alt="background" className="img-background" />
          <Grid container spacing={24} xs={3} direction="column" alignItems="center" className="user-info-container">
            <div className="user-image-container">
              <Avatar src={UserImage} className="user-image" style={{ height: '200px', width: '200px' }} />
            </div>
            <MuiThemeProvider theme={myTheme}>
              <div className="info-container">
                <div className="top-part">
                  <Typography variant="h6" gutterBottom color="primary" style={{ fontWeight: 'bold' }}>
                    samplenick
                  </Typography>
                  <Typography variant="h6" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: 'bold' }}>
                    СЕРЖАНТ
                  </Typography>
                  <Typography component="h6" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: '600' }}>
                    gun
                  </Typography>
                  <Button variant="raised" color="primary" style={{ margin: '10px 0', fontWeight: '600' }}>ПОЧАТИ ГРУ</Button>
                </div>
                <div className="bottom-part">
                  <Typography component="h1" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: 'bold', opacity: '0.5' }}>
                    ПРО МЕНЕ
                    <div className="line" />
                  </Typography>
                  <Typography component="h3" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: 'bold' }}>
                    Name Surname
                  </Typography>
                  <Typography component="h3" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: 'bold' }}>
                    email
                  </Typography>
                  <Typography component="h3" gutterBottom color="primary" style={{ margin: '10px 0', fontWeight: 'bold', opacity: '0.5' }}>
                    РОЗКАЗАТИ ДРУЗЯМ
                    <div className="line" />
                  </Typography>
                </div>
                <div className="links-container">
                  <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com">
                    <img className="share-button-image" src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                  </a>
                  <a href="https://plus.google.com/share?url=https://simplesharebuttons.com">
                    <img className="share-button-image" src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" />
                  </a>
                  <a href="https://twitter.com/share?url=https://simplesharebuttons.com">
                    <img className="share-button-image" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                  </a>
                </div>
              </div>
            </MuiThemeProvider>
          </Grid>
          <Grid item xs={9} className="progress-bar">
            <verticalStepper />
          </Grid>
        </Grid>
      </div>
    );
  }
}
