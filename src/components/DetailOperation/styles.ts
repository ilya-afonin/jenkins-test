import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import { TabPanel } from './TabPanel';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(0, auto))',
    gridGap: '0 20px',
    height: "100%",
    overflow: 'auto',
  },

  column: {
    backgroundColor: '#f9f9f9',
    padding: '8px 10px',
    border: '1px solid #046a383b',
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
      fontSize: '14px',
      lineHeight: 1.4
    },
    '& dt ': {
      fontWeight: 600,
      marginRight: '1rem',
    },
    '& dd': {
      margin: 0,
      fontWeight: 700
    },
    '& .MuiCheckbox-root': {
      padding: 0
    }
  }
}))

export const StyledTabs = styled(Tabs)`
  border-bottom: 1px solid #c6c6c6;
`;

export const StyledTab = styled(Tab)`
  font-weight: 600;
  text-transform: none;
`;

export const StyledTabPanel = styled(TabPanel)`
  min-height: 230px;
`;