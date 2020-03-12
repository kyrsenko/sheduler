import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import { Navbar, Preloader, Notify } from './commons';
import { fetchAuthUser } from './pages/Auth/routines';
import { Routes } from './routing/Routes';

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(fetchAuthUser());
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route component={Routes} />
        </Switch>
        <Preloader />
        <Notify />
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
};

export default App;
