import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles, TextField, Button } from '@material-ui/core';
import { logIn } from '../../lib/store/action-creators/user';

import styles from '../auth/auth.styles';
import Api, { Endpoints } from '../../lib/networking';

class PasswordResetForm extends Component {
  state = {
    passwordConfirm: '',
    password: '',

    error: '',
  }

  validate = () => {
    const { passwordConfirm, password } = this.state;

    if (!passwordConfirm || !password) {
      return 'Ви заповнили не всi поля!';
    }

    if (passwordConfirm !== password) {
      return 'Паролi не спiвпадають';
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
    const { passwordConfirm: login, password } = this.state;
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
    const { passwordConfirm: login, password, error } = this.state;
    const { classes } = this.props;

    return (
      <>

        <TextField
          variant="outlined"
          color="primary"
          type="password"
          className={classes.textField}
          label="Новий Пароль"
          onChange={this.handleFormFieldChange('password')}
          value={password}
        />
        <TextField
          type="password"
          label="Пiдтвердження паролю"
          variant="outlined"
          color="primary"
          className={classes.textField}
          onChange={this.handleFormFieldChange('passwordConfirm')}
          value={login}
        />

        {error && error}

        <Button
          color="primary"
          variant="contained"
          className={classes.submit}
          onClick={this.handleSubmit}
        >
          Змiнити пароль
        </Button>
      </>
    );
  }
}

PasswordResetForm.propTypes = {
  classes: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
};

const StyledLoginForm = withStyles(styles)(PasswordResetForm);

const mapDispatch = dispatch => bindActionCreators({
  logIn,
}, dispatch);

export default connect(null, mapDispatch)(StyledLoginForm);
