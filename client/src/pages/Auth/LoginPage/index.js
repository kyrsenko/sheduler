import React from 'react';
import { AuthForm } from '../../../components';
import { connect } from 'react-redux';
import { authUser } from '../routines';

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
});

export const LoginPage = connect(mapStateToProps, { authUser })(({ authUser, isAuth }) => {
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
