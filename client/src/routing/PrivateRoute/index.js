import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
});

export const PrivateRoute = connect(mapStateToProps)(
  ({ component: Component, isAuth, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuth || localStorage.token ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
);
