import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '8px 5px',
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
    '& .formActions': {
      display: 'flex',
      flexFlow: 'row nowrap',
    },
    '& .formActions button': {
      margin: theme.spacing(1)
    }
  },
}))