import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const CompanyType = () => {
  const [value, setValue] = React.useState('EURL');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Type</FormLabel>
      <RadioGroup
        aria-label="type"
        name="companyType"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="EURL" control={<Radio />} label="EURL" />
        <FormControlLabel value="SASU" control={<Radio />} label="SASU" />
        <FormControlLabel value="SAS" control={<Radio />} label="SAS" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="Sole trader"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CompanyType;
