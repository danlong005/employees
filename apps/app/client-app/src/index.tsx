import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Error");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
