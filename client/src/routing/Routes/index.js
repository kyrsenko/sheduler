import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute';
import {
  StudentsPage,
  GroupsPage,
  GroupDetailsPage,
  InstructorsPage,
  CarsPage,
  LoginPage,
  RegistrationPage,
  StudentDetailsPage,
  StudentCreatePage,
  InstructorCreatePage,
  InstructorDetailsPage,
  GroupCreatePage,
  CarCreatePage,
  CarDetailsPage,
} from '../../pages';
import { Details, Edit } from '../../components';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/groups" />
      </Route>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/registration" component={RegistrationPage} />
      <PrivateRoute exact path="/students" component={StudentsPage} />
      <PrivateRoute
        exact
        path="/students/create"
        component={StudentCreatePage}
      />
      <PrivateRoute exact path="/students/:id" component={StudentDetailsPage} />
      <PrivateRoute exact path="/students/edit/:id" component={Edit} />
      <PrivateRoute exact path="/groups" component={GroupsPage} />
      <PrivateRoute exact path="/groups/create" component={GroupCreatePage} />
      <PrivateRoute exact path="/groups/:id" component={GroupDetailsPage} />
      <PrivateRoute exact path="/groups/edit/:id" component={Edit} />
      <PrivateRoute exact path="/instructors" component={InstructorsPage} />
      <PrivateRoute
        exact
        path="/instructors/create"
        component={InstructorCreatePage}
      />
      <PrivateRoute
        exact
        path="/instructors/:id"
        component={InstructorDetailsPage}
      />
      <PrivateRoute exact path="/instructors/edit/:id" component={Edit} />
      <PrivateRoute exact path="/cars" component={CarsPage} />
      <PrivateRoute exact path="/cars/create" component={CarCreatePage} />
      <PrivateRoute exact path="/cars/:id" component={CarDetailsPage} />
      <PrivateRoute exact path="/cars/edit/:id" component={Edit} />
    </Switch>
  );
};
