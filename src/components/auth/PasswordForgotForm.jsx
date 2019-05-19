import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Button, withStyles, Typography,
} from '@material-ui/core';

import styles from './auth.styles';
import Api, { Endpoints } from '../../lib/networking';

function PasswordForgotForm({ classes, onSuccess }) {
  const [error, setError] = useState('');
  const [login, setLogin] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassowrd] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [userToken, setUserToken] = useState('');

  const [step, setStep] = useState('email');

  function handleTextFieldChange(setter) {
    return function handler(event) {
      const { value } = event.target;
      setter(value);
    };
  }

  async function handleSubmitEmail() {
    const json = await Api.post(Endpoints.PASS_FORGOT, {
      email: login,
    });

    if (!json.status) {
      setError(json.message);
      return;
    }

    setStep('code');
  }

  async function handleSubmitCode() {
    const json = await Api.post(Endpoints.CHECK_PASS_CODE, {
      email: login,
      code,
    });

    if (!json.status) {
      setError(json.message);
      return;
    }

    setUserToken(json.userToken);
    setStep('password');
  }

  async function handleSubmitNewPassword() {
    const json = await Api.put(Endpoints.PASS_CHANGE, {
      newPassword: password,
    }, {
      Authorization: `Bearer ${userToken}`,
    });

    if (!json.status) {
      setError(json.message);
      return;
    }

    // eslint-disable-next-line no-shadow
    setStep('done');
    setTimeout(() => {
      onSuccess();
    }, 3000);
  }

  if (step === 'done') {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">Пароль успiшно змiнено !</Typography>
      </div>
    );
  }

  if (step === 'code') {
    return (
      <>
        <Typography variant="subtitle1">
          На ваш емейл було вiдправлено код для змiни пароля
        </Typography>

        <TextField
          type="text"
          label="Код"
          variant="outlined"
          color="primary"
          className={classes.textField}
          onChange={handleTextFieldChange(setCode)}
          value={code}
        />

        {error && error}

        <Button
          color="primary"
          variant="contained"
          className={classes.submit}
          onClick={handleSubmitCode}
        >
          Пiдтвердити код
        </Button>
      </>
    );
  }

  if (step === 'password') {
    return (
      <>
        <Typography variant="subtitle1">
          Новий пароль
        </Typography>


        <TextField
          type="text"
          label="Пароль"
          variant="outlined"
          color="primary"
          className={classes.textField}
          onChange={handleTextFieldChange(setPassowrd)}
          value={password}
        />

        <TextField
          type="text"
          label="Пiдтвердження пароля"
          variant="outlined"
          color="primary"
          className={classes.textField}
          onChange={handleTextFieldChange(setPassConfirm)}
          value={passConfirm}
        />

        {error && error}

        <Button
          color="primary"
          variant="contained"
          className={classes.submit}
          onClick={handleSubmitNewPassword}
        >
          Змiнити пароль
        </Button>
      </>
    );
  }

  return (
    <>
      <TextField
        type="text"
        label="E-mail"
        variant="outlined"
        color="primary"
        className={classes.textField}
        onChange={handleTextFieldChange(setLogin)}
        value={login}
      />

      {error && error}

      <Button
        color="primary"
        variant="contained"
        className={classes.submit}
        onClick={handleSubmitEmail}
      >
        Надiслати код
      </Button>
    </>
  );
}

PasswordForgotForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired,
};
export default withStyles(styles)(PasswordForgotForm);
