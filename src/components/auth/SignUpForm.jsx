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

  }

  handleSubmit = async () => {
    const error = this.validate();

    if (error) {
      this.setState({ error });
      return;
    }

    // eslint-disable-next-line no-shadow
    const { callback, signUp } = this.props;
    await signUp();

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
          label="Имя корыстувача"
          variant="outlined"
          color="primary"
          className={classes.textField}
          value={username}
        />
        <TextField
          type="text"
          label="Емэйл"
          variant="outlined"
          color="primary"
          className={classes.textField}
          value={email}
        />
        <TextField
          variant="outlined"
          color="primary"
          type="password"
          className={classes.textField}
          label="Пароль"
          value={password}
        />
        <TextField
          type="text"
          label="Грае роль"
          variant="outlined"
          color="primary"
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
          Зарээструватыся
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
