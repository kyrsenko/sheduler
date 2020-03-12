import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    '&:hover': {
      textDecoration: 'none',
    },
    '&:active': {
      textDecoration: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
    '&.active': {
      textDecoration: 'underline',
    },
  },
  nav: {
    // margin: 'auto',
  },
}));
