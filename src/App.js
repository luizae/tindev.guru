import React from 'react';
import SnackbarProvider from 'react-simple-snackbar';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import './assets/scss/index.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <SnackbarProvider>{renderRoutes(routes)}</SnackbarProvider>
    </Router>
  );
};

export default App;
