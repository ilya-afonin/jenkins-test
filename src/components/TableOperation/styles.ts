import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  pagination: {
    '& .MuiToolbar-root': {
      minHeight: '35px',
      justifyContent: 'center',
      '& .MuiTablePagination-spacer': {
        flex: 0,
      },
      '& .MuiButtonBase-root': {
        padding: '2px',
      },
    },
  },
});
