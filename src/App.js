import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import ProductPage from './productpage';
import { CartProvider } from './cardcontext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
