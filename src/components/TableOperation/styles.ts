import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  pagination: {
    '& .MuiToolbar-root': {
      minHeight: '35px',
      '& .MTablePaginationInner-root-388': {
        paddingRight: '15px',
        '& span .MuiButtonBase-root': {
          padding: '2px',
        },
      },
    },
  },
});
