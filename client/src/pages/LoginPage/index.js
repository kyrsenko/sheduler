import React from 'react';
import { AuthForm } from '../../components';

export const LoginPage = props => {
  const params = {
    path: 'register',
    action: 'Sign In',
    linkMessage: "Don't have an account? Sign Up",
  };

  return <AuthForm {...params}/>;
};
