// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Register from './components/register';
import Login from './components/login';
import Menu from './components/menu';
import Review from './components/review';
import Pizza from './components/pizza';
import Menu1 from './components/menu1';
import Cart from './components/cart';
import FoodDeliveryApp from './components/landing';
import About from './components/about';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/landing" element={<FoodDeliveryApp />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/review" element={<Review />} />
            <Route path="/pizza" element={<Pizza />} />
            <Route path="/menu1" element={<Menu1 />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;