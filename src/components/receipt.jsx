import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Receipt = ({ orderDetails = {} }) => {
  const { orderId, items = [], totalAmount, paymentType } = orderDetails;

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow w-50">
        <div className="text-center">
          <CheckCircle2 className="text-success mb-3" size={50} />
          <h2 className="fw-bold mb-4">Order Confirmed</h2>
        </div>
        <div className="mb-4">
          <h3 className="fw-bold mb-3">Order Summary</h3>
          <p><strong>Order ID:</strong> {orderId || "N/A"}</p>
          <p><strong>Payment Type:</strong> {paymentType || "N/A"}</p>
          <p><strong>Total Amount:</strong> Rs. {totalAmount || 0}</p>
        </div>
        <div className="mb-4">
          <h3 className="fw-bold mb-3">Items Ordered</h3>
          {items.length > 0 ? (
            <ul className="list-group">
              {items.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong>
                    <p className="mb-0">Quantity: {item.quantity}</p>
                  </div>
                  <span className="badge bg-primary rounded-pill">Rs. {item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No items ordered.</p>
          )}
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={() => window.print()}>
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
