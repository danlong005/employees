import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './components';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Error");

const root = ReactDOM.createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
