// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

const menuData = [
  { id: 1, name: 'Chicken Pattty Burger', price: 'Rs. 120', image: './b1.jpg' },
  { id: 2, name: 'Ultimate Veg Burger', price: 'Rs. 119', image: './bv1.jpg' },
  { id: 2, name: 'Paneer  Burger', price: 'Rs. 169', image: './bv2.jpg' },
  { id: 2, name: 'Smoked Pallet Grill Burger', price: 'Rs. 189', image: './b2.jpg' },
  { id: 1, name: 'Bacon Chhese Burger', price: 'Rs. 210', image: './b3.jpg' },
  { id: 2, name: 'Fully Loaded Oats Burger', price: 'Rs. 249', image: './bl.jpg' },
  // Add more menu items as needed
];

const Menu = () => {
  const { addToCart, cartItems } = useCart(); // Destructure cartItems to get the count

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="mb-4">Our Menu</h1>
          <Link to="/cart" className="btn btn-primary mb-4">
            Go to Cart
          </Link>
        </div>
      </div>
      <div className="row">
        {menuData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-success" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="position-fixed top-0 end-0 mt-3 me-3">
        <Link to="/cart" className="text-decoration-none">
          <FaShoppingCart size={30} color="black" />
          <span className="badge bg-secondary position-absolute top-0 start-100 translate-middle badge rounded-pill">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;