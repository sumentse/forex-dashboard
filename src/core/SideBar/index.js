import React from 'react';
import Styled from 'styled-components';
import grey from '@material-ui/core/colors/grey';
import MultiSelect from './components/MultiSelect';

const SideBarStyles = Styled.div`
    background: ${() => grey[200]};
`;

const SideBar = () => {
  return (
    <SideBarStyles>
      <MultiSelect title="Currencies" items={['USD', 'EUR']} />
      <MultiSelect title="LP" items={['LP1', 'LP2']} />
    </SideBarStyles>
  );
};

export default SideBar;
