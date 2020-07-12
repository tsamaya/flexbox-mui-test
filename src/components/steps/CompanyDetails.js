import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '30ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Business name"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Name"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
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
        <TextField
          label="t1"
          className={classes.textField}
          placeholder="Placeholder"
          margin="dense"
          helperText="Some important text"
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
        <TextField
          label="t4"
          className={classes.textField}
          placeholder="Placeholder"
          margin="dense"
          helperText="Some important text"
        />
      </div>
    </div>
  );
}
