import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './routes/index.tsx';
import GlobalStyles from './layout/styles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <MainRouter />
  </React.StrictMode>
);
