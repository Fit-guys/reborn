import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  withStyles, TextField, Button, Typography,
} from '@material-ui/core';

import styles from '../auth/auth.styles';
import Api, { Endpoints } from '../../lib/networking';

class PasswordResetForm extends Component {
  state = {
    feedback: '',
    name: '',

    error: '',
    done: false,
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

    const { feedback, name } = this.state;
    const { email } = this.props;

    const json = await Api.post(Endpoints.FEEDBACK, {
      email,
      name,
      text: feedback,
    });

    if (!json.status) {
      this.setState({ error: json.message });
      return;
    }

    this.setState({ done: true });
  }

  render() {
    const {
      feedback, name, error, done,
    } = this.state;
    const { classes } = this.props;

    if (done) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">Thank You !</Typography>
        </div>
      );
    }

    return (
      <>

        <TextField
          variant="outlined"
          color="primary"
          type="text"
          className={classes.textField}
          label="Ваше iмя"
          onChange={this.handleFormFieldChange('name')}
          value={name}
        />
        <TextField
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          className={classes.textField}
          label="Вiдгук"
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
          Надiслати
        </Button>
      </>
    );
  }
}

PasswordResetForm.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
};

const mapState = ({ user: { user: { email } } }) => ({ email });

const StyledLoginForm = withStyles(styles)(PasswordResetForm);

export default connect(mapState)(StyledLoginForm);
