import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

import CompanyType from './steps/CompanyType';
import CompanyDetails from './steps/CompanyDetails';
import ManagerDetails from './steps/ManagerDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: 1,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const getSteps = () => {
  return [
    'Select company type',
    'Comapny details',
    'Manager details',
    'Review',
  ];
};

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <CompanyType />;
    case 1:
      return <CompanyDetails />;
    case 2:
      return <ManagerDetails />;
    case 3:
      return "All good, let's check your inputs";
    default:
      return 'Unknown stepIndex';
  }
};

const MyStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Paper elevation={3}>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
            </Paper>
            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </div>
        ) : (
          <div>
            <Paper elevation={3}>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </Paper>

            <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyStepper;
