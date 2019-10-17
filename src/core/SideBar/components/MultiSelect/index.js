import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelect = styled(Select)`
  width: 12rem;
`;

const CurrencyMultiSelect = ({ title, items }) => {
  const [values, setValues] = useState([]);

  const handleChange = event => {
    setValues(event.target.value);
  };

  const buildItems = () => {
    return items.map(item => {
      return (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      );
    });
  };
  return (
    <div>
      <FormControl>
        <InputLabel>{title}</InputLabel>

        <StyledSelect multiple displayEmpty onChange={handleChange} value={values}>
          {buildItems()}
        </StyledSelect>
      </FormControl>
    </div>
  );
};

CurrencyMultiSelect.defaultProps = {
  items: []
};

CurrencyMultiSelect.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string)
};

export default CurrencyMultiSelect;
