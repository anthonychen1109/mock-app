import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './main';
import Account from './account';
import Signup from '../containers/signup';
import Signin from '../containers/signin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/account' component={Account} />
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      <Route exact path='/' component={Main} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
