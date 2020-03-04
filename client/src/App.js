import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';


// eslint-disable-next-line
import { ThemeProvider } from '@material-ui/styles';
// eslint-disable-next-line
const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

const App = () => (
  <Provider store={store}>
    <Container>
      <div>Hello</div>
    </Container>
  </Provider>
);

export default App;
