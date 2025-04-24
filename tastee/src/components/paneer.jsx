import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/pizza.css'; // Ensure the CSS file is correctly named

const menuData = [
  { id: 1, name: 'Palak Paneer ', price: 'Rs. 249', image: './pp1.jpg' },
  { id: 2, name: 'Paneer Butter Masala', price: 'Rs. 249', image: './pp2.jpg' },
  { id: 3, name: 'Paneer 65', price: 'Rs. 219', image: './pp3.jpg' },
  { id: 4, name: 'Paneer Biryani', price: 'Rs. 189', image: './pp4.jpg' },
  { id: 5, name: 'Paneer Manchurian', price: 'Rs. 255', image: './pp5.jpg' },
  { id: 6, name: 'Matar Paneer', price: 'Rs. 215', image: './pp6.jpg' },
  { id: 7, name: 'BBQ Paneer', price: 'Rs. 229', image: './pp7.jpg' },
  { id: 8, name: 'Paneer Tikka', price: 'Rs. 219', image: './pp8.jpg' },
  { id: 9, name: 'Paneer Kathi Roll', price: 'Rs. 119', image: './pp9.jpg' },
  { id: 10, name: 'Tandoori Paneer', price: 'Rs. 289', image: './pp10.jpg' },
  { id: 11, name: 'Roasted Paneer', price: 'Rs. 205', image: './p121.jpg' },
  { id: 12, name: 'Paneer Malai Tikka', price: 'Rs. 210', image: './pp12.jpg' },
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
              <img src={item.image} className="card-img-top menu-image" alt={item.name} />
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