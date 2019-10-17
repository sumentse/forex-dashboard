import React, { useReducer } from 'react';
import Styled from 'styled-components';
import { grey, green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { reducer, initialState } from './reducer';
import MultiSelect from './components/MultiSelect';
import RangeSelect from './components/RangeSelect';
import { UPDATE_BID, UPDATE_CURRENCY, UPDATE_LP } from './types';

const SideBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = () => {
    // will call an API
    // console.log(state);
  };

  return (
    <SideBarStyles>
      <MultiSelect
        title="Currencies"
        items={['USD', 'EUR', 'AUD', 'TWD']}
        handleAction={payload => dispatch({ type: UPDATE_CURRENCY, payload })}
      />
      <MultiSelect
        title="LP"
        items={['LP1', 'LP2']}
        handleAction={payload => dispatch({ type: UPDATE_LP, payload })}
      />
      <RangeSelect
        type="currency"
        title="Bid Price"
        handleAction={payload => dispatch({ type: UPDATE_BID, payload })}
      />
      <ButtonStyle variant="contained" color="primary" onClick={search}>
        Search
      </ButtonStyle>
    </SideBarStyles>
  );
};

const SideBarStyles = Styled.div`
    background: ${() => grey[200]};
    height: 100%;
`;

const ButtonStyle = Styled(Button)`
    &&{
        background: ${() => green[500]};
        &:hover {
            background: ${() => green[500]};
        }

    }
`;

export default SideBar;
