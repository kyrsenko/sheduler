import React from 'react';
import { AuthForm } from '../../components';

export const LoginPage = props => {
  const params = {
    linkTo: 'register',
    title: 'Sign In',
    linkText: "Don't have an account? Sign Up",
  };

  return <AuthForm {...params}/>;
};
