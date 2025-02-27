import React from 'react';
import { Pizza, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './css/pizza.css';

const menuItems = [
  // ... your existing menuItems array
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Pizza className="pizza-icon" />
            <h1 className="header-title">Italy Pizza Menu</h1>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-card">
              <div className="menu-image-container">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="menu-image"
                />
              </div>
              <div className="menu-content">
                <h3 className="menu-title">{item.name}</h3>
                <p className="menu-description">{item.description}</p>
                <div className="menu-footer">
                  <span className="menu-price">
                    ${item.price.toFixed(2)}
                  </span>
                  <div className="button-group">
                    <Link to="/cart" className="cart-button">
                      <ShoppingCart size={18} />
                      Add to Cart
                    </Link>
                    <Link to="/order" className="order-button">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Italy Pizza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
