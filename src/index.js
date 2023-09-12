import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { WContextProvider } from './context/WContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WContextProvider>
  </React.StrictMode>
);


