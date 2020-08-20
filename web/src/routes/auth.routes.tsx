import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from '../pages/Signin';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={SignIn} exact />
    </BrowserRouter>
  )
}

export default AuthRoutes;