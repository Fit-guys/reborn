import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
  Typography,
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Button,
  Paper,
} from '@material-ui/core';

import styles from './userProgress.styles';
import StepIcon from './StepIcon';

function getSteps() {
  return ['Уровень 1', 'Уровень 2', 'Уровень 3', 'Уровень 4', 'Уровень 5', 'Уровень 6'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    case 1:
      return 'Описание 2го уровня.';
    case 2:
      return 'Описание 3го уровня';
    case 3:
      return 'Описание 3го уровня';
    case 4:
      return 'Описание 3го уровня';
    case 5:
      return 'Описание 3го уровня';
    case 6:
      return 'Описание 3го уровня';
    case 7:
      return 'Описание 3го уровня';
    default:
      return 'Unknown step';
  }
}

class UserProgress extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical" connector={null}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={StepIcon}
                StepIconProps={{ text: String(index) }}
                classes={{ iconContainer: classes.stepIconContainer }}
              >
                <Typography
                  color="primary"
                  variant="h5"
                  style={{ fontWeight: 'bold', padding: '20px' }}
                >
                  {label}
                </Typography>
              </StepLabel>
              <StepContent style={{
                marginLeft: '30px', marginTop: '0px', padding: '0px  0px 20px 80px', borderWidth: '10px',
              }}
              >
                <Typography variant="h6" color="primary">{getStepContent(index)}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

UserProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProgress);
