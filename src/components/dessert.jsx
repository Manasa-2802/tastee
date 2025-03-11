import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/pizza.css'; // Ensure the CSS file is correctly named

const menuData = [
  { id: 1, name: 'Strawberry Shortcake', price: 'Rs. 50', image: './ds1.jpg' },
  { id: 2, name: 'Dessert Waffels', price: 'Rs. 65', image: './ds2.jpg' },
  { id: 3, name: 'Rasberry Mousse cups', price: 'Rs. 70', image: './s3.jpg' },
  { id: 4, name: 'Chocolate Pudding', price: 'Rs. 79', image: './ds3.jpg' },
  { id: 5, name: 'Louise Slice', price: 'Rs. 65', image: './ds5.jpg' },
  { id: 6, name: 'Fruit Custard', price: 'Rs. 75', image: './ds6.jpg' },
   { id: 7, name: 'Peppermint IceCream', price: 'Rs. 90', image: './dss.jpg' },
//   { id: 8, name: 'Mushroom Sandwiches', price: 'Rs. 139', image: './ms.jpg' },
//   { id: 9, name: 'Grilledd Mushroom', price: 'Rs. 120', image: './mg.jpg' },
//   { id: 10, name: 'Tandoori Paneer', price: 'Rs. 289', image: './pp10.jpg' },
//   { id: 11, name: 'Roasted Paneer', price: 'Rs. 205', image: './p121.jpg' },
//   { id: 12, name: 'Paneer Malai Tikka', price: 'Rs. 210', image: './pp12.jpg' },
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