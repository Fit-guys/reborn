import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  withStyles, TextField, Button, Divider, List,
} from '@material-ui/core';
import { logIn } from '../../lib/store/action-creators/user';

import styles from '../auth/auth.styles';
import Api, { Endpoints } from '../../lib/networking';
import ResetProgressButton from './ResetProgressButton';

class PasswordResetForm extends Component {
  state = {
    passwordConfirm: '',
    password: '',

    error: '',
    status: '',
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
    const { password } = this.state;
    const { token } = this.props;
    const json = await Api.put(Endpoints.PASS_CHANGE, {
      newPassword: password,
    }, {
      Authorization: `Bearer ${token}`,
    });

    if (!json.status) {
      this.setState({ error: json.message });
      return;
    }

    // eslint-disable-next-line no-shadow
    this.setState({ status: 'done' });
  }

  render() {
    const {
      passwordConfirm, password, error, status,
    } = this.state;
    const { classes } = this.props;

    return (
      <>
        <List style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
        }}
        >
          <Button
            value="contained"
            href={Api.URL + Endpoints.STATS}
            download
            style={{
              backgroundColor: '#250E2B',
              color: 'white',
              margin: '10px 20px',
            }}
          >
            Статистика
          </Button>
          <Divider />

          <ResetProgressButton />
          <Divider />
        </List>
        { status === 'done' && 'Пароль успiшно змiнено.'}
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
          value={passwordConfirm}
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
  token: PropTypes.string.isRequired,
};

const StyledLoginForm = withStyles(styles)(PasswordResetForm);

const mapDispatch = dispatch => bindActionCreators({
  logIn,
}, dispatch);

const mapState = ({ user: { token } }) => ({ token });

export default connect(mapState, mapDispatch)(StyledLoginForm);
