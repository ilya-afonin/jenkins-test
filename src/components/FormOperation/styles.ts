import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    //width: '100%',
    padding: '15px 10px',
    '& .MuiTextField-root': {
      // display: "flex",
      // flexFlow: "column nowrap",
      margin: theme.spacing(1),
      //width: 200,
    },
    '& .formActions': {
      display: 'flex',
      flexFlow: 'row nowrap',
    },
    '& .formActions button': {
      margin: '8px'
    }
  },
}))