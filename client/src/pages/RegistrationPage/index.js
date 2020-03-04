import React from 'react';
import { AuthForm } from '../../components';

export const RegistrationPage = props => {
  const params = {
    linkTo: 'login',
    title: 'Sign Up',
    linkText: 'Already have an account? Sign in',
    companyName: true,
  };

  return <AuthForm {...params} />;
};
