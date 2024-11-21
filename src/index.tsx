import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css'
import { UserProvider } from './contexts/UserContext';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  );
} else {
  console.error('No root element found');
}