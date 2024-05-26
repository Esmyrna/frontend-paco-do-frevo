import React from 'react';
import ReactDOM from 'react-dom/client';
// Importe o GlobalProvider
import AppRoute from './App';
import { GloblaStyle } from './GlobalStyle';
import { GlobalProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GloblaStyle />
    {/* Envolve o AppRoute com o GlobalProvider */}
    <GlobalProvider>
      <AppRoute />
    </GlobalProvider>
  </React.StrictMode>
);
