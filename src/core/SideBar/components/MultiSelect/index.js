import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelect = Styled(Select)`
  width: 12rem;
`;

const MultiSelect = ({ title, items, handleAction }) => {
  const [values, setValues] = useState([]);

  const handleChange = event => {
    setValues(event.target.value);
    handleAction(event.target.value);
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

        <StyledSelect margin="dense" multiple displayEmpty onChange={handleChange} value={values}>
          {buildItems()}
        </StyledSelect>
      </FormControl>
    </div>
  );
};

MultiSelect.defaultProps = {
  items: []
};

MultiSelect.propTypes = {
  title: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string)
};

export default MultiSelect;
