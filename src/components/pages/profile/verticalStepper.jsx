import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const myTheme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: [
      'Helvetica',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#41254E',
    },
  },
});

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Уровень 1', 'Уровень 2', 'Уровень 3'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Описание 1го уровня.Описание 1го уровня.Описание 1го уровня.Описание 1го уровня.Описание 1го уровня.';
    case 1:
      return 'Описание 2го уровня.';
    case 2:
      return 'Описание 3го уровня';
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
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
      <div className={classes.root} style={{ marginTop: '170px', marginLeft: '400px', transform: 'scale(2)' }}>
        <MuiThemeProvider theme={myTheme}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel><Typography color="primary" style={{ fontWeight: 'bold' }}>{label}</Typography></StepLabel>
                <StepContent>
                  <Typography style={{ fontSize: '8px', marginTop: '-10px', fontWeight: '600' }} color="primary">{getStepContent(index)}</Typography>
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
        </MuiThemeProvider>
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VerticalLinearStepper);
