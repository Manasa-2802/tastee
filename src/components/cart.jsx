import React from 'react';
import { useCart } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const navigate = useNavigate();

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.slice(4)) * item.quantity, 0);
  };

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { totalAmount: getTotalAmount(), cartItems: cartItems } });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link to="/menu" className="btn btn-primary">
            Back to Menu
          </Link>
        </div>
      ) : (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Items</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} className="img-fluid" style={{ width: '100px', height: '100px' }} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button className="btn btn-secondary btn-sm" onClick={() => decrementQuantity(item.id)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-secondary btn-sm" onClick={() => incrementQuantity(item.id)}>+</button>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="mt-4">Total Amount: Rs. {getTotalAmount()}</h3>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/menu" className="btn btn-primary">
              Back to Menu
            </Link>
            <button className="btn btn-success" onClick={handleProceedToPayment}>
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;