import React from 'react';
import { AuthProvider } from './contexts/auth';

import Routes from './routes';

import './assets/global.css'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;