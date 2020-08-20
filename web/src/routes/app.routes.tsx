import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={Dashboard} exact />
    </BrowserRouter>
  )
}

export default AppRoutes;