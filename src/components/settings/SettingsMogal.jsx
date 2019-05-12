import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  Button,
  Paper,
  withStyles,
  Tabs,
  Tab,
} from '@material-ui/core';
import PasswordResetForm from './PasswordResetForm';
import FeedBackForm from './FeedBackForm';

import styles from '../auth/auth-modal/authModal.styles';

const SettingsModal = ({ classes, color, variant }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button
        variant={variant}
        color={color}
        size="large"
        style={{ marginRight: '25px' }}
        onClick={toggle}
      >
        Налаштування
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
            <Tab label="Налаштування" />
            <Tab label="Залишити вiдгук" />
          </Tabs>
          <div className={classes.formRoot}>
            {activeTab === 0 && <PasswordResetForm callback={toggle} />}
            {activeTab === 1 && <FeedBackForm callback={toggle} />}
          </div>
        </Paper>
      </Modal>
    </>
  );
};

SettingsModal.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default withStyles(styles)(SettingsModal);
