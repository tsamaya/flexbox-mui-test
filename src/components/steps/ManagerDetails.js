import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import 'moment/locale/fr';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  nameTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40ch',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '30ch',
  },
  birthdayField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignSelf: 'flex-end',
    width: '30ch',
  },
}));

const ManagerDetails = () => {
  const [selectedDate, handleDateChange] = useState(null);

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale={'fr'}>
      <div className={classes.root}>
        <div>
          <TextField
            label="First name"
            placeholder="Placeholder"
            margin="dense"
            className={classes.nameTextField}
          />
          <TextField
            label="Last Name"
            placeholder="Placeholder"
            margin="dense"
            className={classes.nameTextField}
          />
        </div>
        <div>
          <TextField
            label="info"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
          <TextField
            label="info2"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
        </div>
        <div>
          <KeyboardDatePicker
            clearable
            label="Birthday"
            value={selectedDate}
            placeholder="01/01/1990"
            onChange={(date) => handleDateChange(date)}
            className={classes.birthdayField}
            format="DD/MM/YYYY"
          />
          <TextField
            label="t2"
            className={classes.textField}
            placeholder="Placeholder"
            margin="dense"
            helperText="Some important text"
          />
          <TextField
            label="t3"
            className={classes.textField}
            placeholder="Placeholder"
            margin="dense"
            helperText="Some important text"
          />
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default ManagerDetails;
