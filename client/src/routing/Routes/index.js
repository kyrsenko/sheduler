import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute';
import {
  StudentsPage,
  GroupsPage,
  InstructorsPage,
  CarsPage,
  LoginPage,
  RegistrationPage,
} from '../../pages';
import { Details, Edit } from '../../components';

export const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={LoginPage} /> */}
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/registration" component={RegistrationPage} />
      <PrivateRoute exact path="/students" component={StudentsPage} />
      <PrivateRoute exact path="/students/:id" component={Details} />
      <PrivateRoute exact path="/students/edit/:id" component={Edit} />
      <PrivateRoute exact path="/groups" component={GroupsPage} />
      <PrivateRoute exact path="/groups/:id" component={Details} />
      <PrivateRoute exact path="/groups/edit/:id" component={Edit} />
      <PrivateRoute exact path="/instructors" component={InstructorsPage} />
      <PrivateRoute exact path="/instructors/:id" component={Details} />
      <PrivateRoute exact path="/instructors/edit/:id" component={Edit} />
      <PrivateRoute exact path="/cars" component={CarsPage} />
      <PrivateRoute exact path="/cars/:id" component={Details} />
      <PrivateRoute exact path="/cars/edit/:id" component={Edit} />
    </Switch>
  );
};
