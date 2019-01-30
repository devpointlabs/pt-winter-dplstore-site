import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from './providers/AuthProvider';
import { initMiddleware, } from 'devise-axios';
import { ProductProvider } from './providers/ProductProvider';

initMiddleware();


ReactDOM.render(
  <AuthProvider>
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);

