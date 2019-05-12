import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles, TextField, Button } from '@material-ui/core';

import styles from '../auth/auth.styles';
import Api, { Endpoints } from '../../lib/networking';

class PasswordResetForm extends Component {
  state = {
    feedback: '',

    error: '',
  }

  validate = () => {
    const { feedback } = this.state;

    if (!feedback) {
      return 'Дiдько! Це поле не повинно бути пустим.';
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
    const { feedback, error } = this.state;
    const { classes } = this.props;

    return (
      <>

        <TextField
          variant="outlined"
          color="primary"
          type="textarea"
          className={classes.textField}
          label="Пароль"
          onChange={this.handleFormFieldChange('feedback')}
          value={feedback}
        />

        {error && error}

        <Button
          color="primary"
          variant="contained"
          className={classes.submit}
          onClick={this.handleSubmit}
        >
          Увiйты
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

export default StyledLoginForm;
