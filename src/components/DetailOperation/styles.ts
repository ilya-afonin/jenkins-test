import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import { TabPanel } from './TabPanel';
import styled from 'styled-components';

export const StyledTabs = styled(Tabs)`
  border-bottom: 1px solid #c6c6c6;
`;

export const StyledTab = styled(Tab)`
  font-weight: 600;
  text-transform: none;
`;

export const StyledTabPanel = styled(TabPanel)`
  min-height: 185px;
`;

export const useStyles = makeStyles((theme: Theme) => createStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(0, auto))',
    gridGap: '0 6px',
    // display: 'flex',
    // flexFlow: 'row wrap'
  },

  card: {
    backgroundColor: '#f9f9f9',
    padding: '6px 10px',
    border: '1px solid #046a383b',
    // marginRight: '20px',
    '& > div': {
      width: '48%',
      float: 'left',
      '&:first-child': {
        marginRight: '4%'
      }
    },
    '& dl': {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: 'center',
      margin: "0",
      lineHeight: 1.4,
      fontSize: '0.75rem'
    },
    '& dt ': {
      fontWeight: 600,
      marginRight: '1rem',
    },
    '& dd': {
      margin: 0,
      fontWeight: 700,
      display: 'flex'
    },
    '& .MuiCheckbox-root': {
      padding: 0
    }
  }
}))