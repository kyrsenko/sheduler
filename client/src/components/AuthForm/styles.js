import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    root: {
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      top: '50%',
      left: '50%',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
    },
    submit: {
      margin: theme.spacing(2, 0, 1),
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.light,
      '&:hover': {
        color: theme.palette.primary.dark,
      },
      '&:active': {
        color: theme.palette.error.main,
      },
    },
  };
});
