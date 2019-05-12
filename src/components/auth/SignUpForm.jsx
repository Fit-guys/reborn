import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  withStyles,
  TextField,
  Button,
} from '@material-ui/core';

import { signUp } from '../../lib/store/action-creators/user';

import styles from './auth.styles';
import Api, { Endpoints } from '../../lib/networking';

class SignUpForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passConfirm: '',

    error: '',
  }

  handleFormFieldChange = name => (event) => {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  validate = () => {
    const {
      username, email, password, passConfirm,
    } = this.state;
    if (!passConfirm || !password || !email || !username) {
      return 'Ви заповнили не всi поля!';
    }

    if (passConfirm !== password) {
      return 'Паролi не спiвпадають';
    }

    return null;
  }

  handleSubmit = async () => {
    const error = this.validate();

    if (error) {
      this.setState({ error });
      return;
    }
    const { username, email, password } = this.state;
    const json = await Api.post(Endpoints.USER_REGISTER, {
      name: username,
      email,
      password,
    });

    if (!json.status) {
      this.setState({ error: 'error' });
      return;
    }

    // eslint-disable-next-line no-shadow
    const { signUp, callback } = this.props;
    const { expiresIn, userToken } = json;
    await signUp(userToken, expiresIn);
    callback();
  }

  render() {
    const {
      username, email, password, passConfirm, error,
    } = this.state;
    const { classes } = this.props;
    return (
      <>
        <TextField
          type="text"
          label="Им'я користувача"
          variant="outlined"
          color="primary"
          onChange={this.handleFormFieldChange('username')}
          className={classes.textField}
          value={username}
        />
        <TextField
          type="text"
          label="Емейл"
          variant="outlined"
          color="primary"
          onChange={this.handleFormFieldChange('email')}
          className={classes.textField}
          value={email}
        />
        <TextField
          variant="outlined"
          color="primary"
          type="password"
          onChange={this.handleFormFieldChange('password')}
          className={classes.textField}
          label="Пароль"
          value={password}
        />
        <TextField
          type="password"
          label="Пiдтвердження паролю"
          variant="outlined"
          color="primary"
          onChange={this.handleFormFieldChange('passConfirm')}
          className={classes.textField}
          value={passConfirm}
        />

        {error && error}

        <Button
          color="primary"
          variant="contained"
          className={classes.submit}
          onClick={this.handleSubmit}
        >
          Зареєструватися
        </Button>
      </>
    );
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

const StyledSignUpForm = withStyles(styles)(SignUpForm);

const mapDispatch = dispatch => bindActionCreators({
  signUp,
}, dispatch);

export default connect(null, mapDispatch)(StyledSignUpForm);
