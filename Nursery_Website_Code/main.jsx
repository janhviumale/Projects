import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Added Router
import App from '/src/App.jsx';
import './index.css';
import ShopContextProvider from './context/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Wrap the App in Router */}
      <ShopContextProvider>
      <App />
      </ShopContextProvider>
    </Router>
  </React.StrictMode>
);
