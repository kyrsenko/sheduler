import React, { useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { logoutUser } from '../routines';
import store from '../../store';

import { useStyles } from './styles';

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  user: state.authReducer.user,
});

export const Navbar = connect(mapStateToProps, { logoutUser })(
  ({ logoutUser, isAuth, user }) => {
    const classes = useStyles();
    let history = useHistory();
    useEffect(() => {
      user ? (document.title = user.name) : (document.title = 'Company name');
    }, [user]);
    return isAuth || localStorage.token ? (
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
              {user ? user.name : 'Company name'}
            </Typography>
            <nav className={classes.nav}>
              <Link
                component={NavLink}
                to="/groups"
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Groups
              </Link>
              <Link
                component={NavLink}
                variant="button"
                color="textPrimary"
                href="#"
                to="/students"
                className={classes.link}
              >
                Students
              </Link>
              <Link
                component={NavLink}
                to="/instructors"
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                instructors
              </Link>
              <Link
                component={NavLink}
                to="/cars"
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
              onClick={() => {
                store.dispatch(logoutUser());
                history.push('/login');
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </>
    ) : null;
  }
);
