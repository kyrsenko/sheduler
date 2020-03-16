import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(3),
  },
}));
