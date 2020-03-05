import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { ToastContainer } from 'react-toastify';

// eslint-disable-next-line
import { ThemeProvider } from '@material-ui/styles';
import { LoginPage, RegistrationPage } from './pages';
import { Navbar } from './commons';
import { StudentsPage, GroupsPage, InstructorsPage, CarsPage } from './pages';
// eslint-disable-next-line
const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/students" component={StudentsPage} />
          <Route exact path="/groups" component={GroupsPage} />
          <Route exact path="/instructors" component={InstructorsPage} />
          <Route exact path="/cars" component={CarsPage} />
        </Switch>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </Router>
  </Provider>
);

export default App;
