import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import GoogleLogin from 'react-google-login';

import { withStyles, TextField, Button } from '@material-ui/core';
import { logIn } from '../../lib/store/action-creators/user';

import styles from './auth.styles';
import Api, { Endpoints } from '../../lib/networking';

class LoginForm extends Component {
  state = {
    login: '',
    password: '',

    error: '',
  }

  validate = () => {
    const { login, password } = this.state;

    if (!login || !password) {
      return 'Дiдько! Якесь поле пусте.';
    }

    return null;
  }

  handleFormFieldChange = name => (event) => {
    const { value } = event.target;
    this.setState({ [name]: value });
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const error = this.validate();

    if (error) {
      this.setState({ error });
      return;
    }
    const { login, password } = this.state;
    const json = await Api.post(Endpoints.USER_LOGIN, {
      email: login,
      password,
    });

    if (!json.status) {
      this.setState({ error: json.message });
      return;
    }

    // eslint-disable-next-line no-shadow
    const { logIn, callback } = this.props;
    const { expiresIn, userToken } = json;
    await logIn(userToken, expiresIn);
    callback();
  }

  render() {
    const { login, password, error } = this.state;
    const { classes } = this.props;

    return (
      <>
        <TextField
          type="text"
          label="E-mail"
          variant="outlined"
          color="primary"
          className={classes.textField}
          onChange={this.handleFormFieldChange('login')}
          value={login}
        />
        <TextField
          variant="outlined"
          color="primary"
          type="password"
          className={classes.textField}
          label="Пароль"
          onChange={this.handleFormFieldChange('password')}
          value={password}
        />

        {error && error}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            margin: '10px',
          }}
        >
          <Button
            color="primary"
            variant="contained"
            style={{ width: '192px', height: 43 }}
            // className={classes.submit}
            onClick={this.handleSubmit}
          >
          Увiйти
          </Button>
          {/* <GoogleLogin
            style={{ width: '100%' }}
            clientId="408703587374-7hg6oot1d2r4dv2rokkdeeid0t1u4rql.apps.googleusercontent.com"
            scope="https://www.googleapis.com/auth/drive.metadata.readonly"
            redirectUri="/"
            buttonText="Увiйти через Google"
            theme="dark"
            onSuccess={console.log}
            onFailure={console.log}
          /> */}
        </div>
      </>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
};

const StyledLoginForm = withStyles(styles)(LoginForm);

const mapDispatch = dispatch => bindActionCreators({
  logIn,
}, dispatch);

export default connect(null, mapDispatch)(StyledLoginForm);
