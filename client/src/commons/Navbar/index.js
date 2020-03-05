import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { useStyles } from './styles';

export const Navbar = props => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Groups
            </Link>
            <NavLink
              variant="button"
              color="textPrimary"
              to='/students'
              className={classes.link}
            >
              Students
            </NavLink>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              instructors
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Cars
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
