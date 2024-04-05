// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
// @ts-ignore
import App from './App.tsx';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
