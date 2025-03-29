import React from 'react';
import { useLocation } from 'react-router-dom';

const Receipt = () => {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || {};

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Receipt</h2>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong>
                  <p className="mb-0">Quantity: {item.quantity}</p>
                </div>
                <span className="badge badge-primary badge-pill">Rs. {parseFloat(item.price.slice(4)) * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mt-3">
            <h4>Total Amount: Rs. {totalAmount}</h4>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-primary">Print Receipt</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;