import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
