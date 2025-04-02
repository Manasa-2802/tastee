import React from 'react';

function Receipt({ orderDetails }) {
  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  const { orderId, items, totalAmount, paymentMethod, address } = orderDetails;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Receipt</h2>
      <div className="mb-3">
        <label className="form-label">Order ID</label>
        <input type="text" className="form-control" value={orderId} readOnly />
      </div>
      <div className="mb-3">
        <label className="form-label">Items</label>
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - Quantity: {item.quantity}, Amount: Rs. {item.price}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <label className="form-label">Total Amount</label>
        <input type="text" className="form-control" value={`Rs. ${totalAmount}`} readOnly />
      </div>
      <div className="mb-3">
        <label className="form-label">Payment Method</label>
        <input type="text" className="form-control" value={paymentMethod} readOnly />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea className="form-control" rows="4" value={address} readOnly />
      </div>
    </div>
  );
}

export default Receipt;