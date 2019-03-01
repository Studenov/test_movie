import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { SearchConnect } from 'components/search';

export const Navigator = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SearchConnect} />
      <Route path="/movie/:id" component={SearchConnect} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);