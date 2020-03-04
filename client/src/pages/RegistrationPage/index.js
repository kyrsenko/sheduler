import React from 'react';
import { AuthForm } from '../../components';

export const RegistrationPage = props => {
  const params = {
    path: 'login',
    action: 'Sign Up',
    linkMessage: 'Already have an account? Sign in',
  };

  return <AuthForm {...params} />;
};
