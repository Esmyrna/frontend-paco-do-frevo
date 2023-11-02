import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoute from './App';
import { GloblaStyle } from './GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GloblaStyle />
    <AppRoute />
  </React.StrictMode>
);