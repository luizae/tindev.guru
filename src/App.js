import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import './assets/scss/index.scss';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  );
};

export default App;
