import React from 'react';
import { AuthForm } from '../../../components';
import { connect } from 'react-redux';
import { authUser } from '../routines';
const mapStateToProps = state => ({
  loading: state.commonsReducer.loading,
  errors: state.commonsReducer.errors,
  token: state.authReducer.token,
  user: state.authReducer.user,
  isAuth: state.authReducer.isAuth,
});

export const LoginPage = connect(mapStateToProps, { authUser })(props => {
  const { authUser, isAuth } = props;

  const params = {
    linkTo: 'registration',
    title: 'Sign In',
    linkText: "Don't have an account? Sign Up",
    action: authUser,
    isAuth,
  };

  return (
    <>
      <AuthForm {...params} />
    </>
  );
});
