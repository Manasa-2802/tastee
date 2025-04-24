import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/pizza.css'; // Ensure the CSS file is correctly named

const menuData = [
  { id: 1, name: 'Butter Dosa ', price: 'Rs. 129', image: './d1.jpg' },
  { id: 2, name: 'Paper Dosa', price: 'Rs. 99', image: './d2.jpg' },
  { id: 3, name: 'Masala Dosa', price: 'Rs. 89', image: './d3.jpg' },
  { id: 4, name: 'Paneer Dosa', price: 'Rs. 119', image: './d4.jpg' },
  { id: 5, name: 'Mulbagala Dosa', price: 'Rs. 105', image: './d5.jpeg' },
  { id: 6, name: 'Ghee Pudi Dosa', price: 'Rs. 129', image: './d6.jpg' },
  { id: 7, name: 'Set Dosa', price: 'Rs. 110', image: './d7.jpg' },
  { id: 8, name: 'Onion Dosa', price: 'Rs. 79', image: './d8.jpg' },
//   { id: 3, name: 'Chicken Ghee Roast', price: 'Rs. 289', image: './cg.jpg' },
//   { id: 4, name: 'Chciken Sharvarma', price: 'Rs. 149', image: './cs.jpg' },
//   { id: 5, name: 'Lollipop', price: 'Rs. 255', image: './cll.jpg' },
//   { id: 6, name: 'Chciken Popcorn', price: 'Rs. 110', image: './cp.jpg' },
//   // Add more menu items as needed
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