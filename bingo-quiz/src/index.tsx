import React from 'react';
import ReactDOM from 'react-dom/client';
import BingoMain from './BingoMain';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BingoMain />
  </React.StrictMode>
);
