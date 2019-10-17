import React, { useState, useEffect } from 'react';
import { TextField, InputLabel } from '@material-ui/core';
import PropTypes from 'prop-types';

const RangeSelect = ({ title, handleAction }) => {
  const [values, setValues] = useState({
    min: '',
    max: ''
  });

  useEffect(() => {
    handleAction(values);
  }, [values]);

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    <div>
      <InputLabel>{title}</InputLabel>
      <TextField label="Min" onChange={handleChange('min')} margin="none" />
      <TextField label="Max" onChange={handleChange('max')} margin="none" />
    </div>
  );
};

RangeSelect.propTypes = {
  title: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired
};

export default RangeSelect;
