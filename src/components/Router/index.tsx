import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Comic from '../../pages/Comic';
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
      <Route path="/comics/:id" render={(props) => <Comic {...props} />} />
      <Route path="">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
