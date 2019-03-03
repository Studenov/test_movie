import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { SearchConnect } from 'components/search';
import { MovieConnect } from 'components/movie';

export const Navigator = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SearchConnect} />
      <Route path="/:id" component={MovieConnect} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);