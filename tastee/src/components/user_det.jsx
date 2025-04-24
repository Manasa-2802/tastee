// Receipt.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Receipt = ({ orderDetails = {} }) => {
  const navigate = useNavigate();

  const { orderId, orderDate, totalAmount, items = [] } = orderDetails;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <div className="card-body text-center">
              <h1 className="card-title mb-4">Order Receipt</h1>
              <h3 className="card-text mb-3">Order ID: {orderId || 'N/A'}</h3>
              <p className="card-text mb-3">Order Date: {orderDate || 'N/A'}</p>
              <p className="card-text mb-3">Total Amount: ${totalAmount || 'N/A'}</p>
              <h4 className="card-text mt-4">Items:</h4>
              <ul className="list-group">
                {items.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{item.name}</strong>
                      <p className="mb-0">{item.description}</p>
                    </div>
                    <span className="badge bg-primary rounded-pill">{item.quantity}</span>
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary me-3 mt-3" onClick={() => navigate('/landing')}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;