import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Modal,
  Button,
  Paper,
  withStyles,
  Tabs,
  Tab,
} from '@material-ui/core';

import { toggleAuthModal } from '../../../lib/store/action-creators';

import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';

import { Routes } from '../../../app/constants';
import styles from './authModal.styles';
import PasswordForgotForm from '../PasswordForgotForm';

const AuthModal = ({ classes, open, toggle }) => {
  const [activeTab, setActiveTab] = useState(0);

  const redirectToProfile = () => {
    window.location.pathname = Routes.PROFILE;
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        style={{ marginRight: '25px' }}
        onClick={toggle}
      >
        Вхiд
      </Button>
      <Modal
        open={open}
        onClose={toggle}
        classes={{ root: classes.modalRoot }}
      >
        <Paper className={classes.modal}>
          <Tabs
            className={classes.tabs}
            classes={{ indicator: classes.tabIndicator }}
            value={activeTab}
            onChange={(_, value) => { setActiveTab(value); }}
          >
            <Tab label="Вхiд" />
            <Tab label="Pеєстрацiя" />
            <Tab label="Вiдновити пароль" />
          </Tabs>
          <div className={classes.formRoot}>
            {activeTab === 0 && <LoginForm callback={redirectToProfile} />}
            {activeTab === 1 && <SignUpForm callback={redirectToProfile} />}
            {activeTab === 2 && <PasswordForgotForm onSuccess={() => setActiveTab(0)} />}
          </div>
        </Paper>
      </Modal>
    </>
  );
};

AuthModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapState = ({ ui }) => ({
  open: ui.authModalOpen,
});

const mapDispatch = dispatch => bindActionCreators({
  toggle: toggleAuthModal,
}, dispatch);

export default connect(mapState, mapDispatch)(withStyles(styles)(AuthModal));
