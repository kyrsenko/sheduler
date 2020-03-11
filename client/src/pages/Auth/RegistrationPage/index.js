import React from 'react';
import { AuthForm } from '../../../components';
import { connect } from 'react-redux';
import { createUser } from '../routines';
import { Notify } from '../../../commons';

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
});

export const RegistrationPage = connect(mapStateToProps, { createUser })(
  props => {
    const { createUser, isAuth } = props;

    const params = {
      linkTo: 'login',
      title: 'Sign Up',
      linkText: 'Already have an account? Sign in',
      companyName: true,
      action: createUser,
      isAuth,
    };

    return (
      <>
        {isAuth && <Notify type="success" message="User registered" />}
        <AuthForm {...params} />
      </>
    );
  }
);
