import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from '@/page/Auth/Login';

import MainRouter from './mainRouter';

const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/">
        <MainRouter />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
