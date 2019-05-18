import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
          label="Логiн"
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

        <Button
          color="primary"
          variant="contained"
          className={classes.submit}
          onClick={this.handleSubmit}
        >
          Увiйти
        </Button>
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
