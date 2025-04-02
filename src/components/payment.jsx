import React, { useState } from 'react';
import { CreditCard, Wallet, Truck, CheckCircle2 } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Receipt from './receipt'; // Import the Receipt component

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const totalAmount = location.state?.totalAmount || 0;
  const [paymentMethod, setPaymentMethod] = useState(''); // Initially no payment method selected
  const [cardType, setCardType] = useState('credit');
  const [upiType, setUpiType] = useState('gpay'); // Default UPI type
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('Karnataka'); // Set default state to Karnataka
  const [errors, setErrors] = useState({});

  const validateCardDetails = () => {
    const newErrors = {};
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/; // MM/yyyy format
    const cvvRegex = /^\d{3}$/;

    if (!cardNumberRegex.test(cardNumber)) {
      newErrors.cardNumber = 'Invalid card number. Please enter a 16-digit number.';
    }

    if (!expiryDateRegex.test(expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date. Please use the format MM/yyyy.';
    }

    if (!cvvRegex.test(cvv)) {
      newErrors.cvv = 'Invalid CVV. Please enter a 3-digit number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentMethod === 'card' && !validateCardDetails()) {
      return;
    }

    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
    navigate('/receipt', { state: { orderId: Math.random().toString(36).substr(2, 9), items: location.state.cartItems, totalAmount: totalAmount } });
  };

  const handleUpiTypeChange = (e) => {
    const selectedUpiType = e.target.value;
    setUpiType(selectedUpiType);
  };

  if (isSuccess) {
    return (
      <Receipt orderDetails={{ orderId: '12345', items: location.state.cartItems, totalAmount: totalAmount }} />
    );
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow w-50">
        <h2 className="fw-bold mb-4">Payment</h2>
        
        <div className="mb-4">
          <label className="form-label">Select Payment Method</label>
          <div className="btn-group w-100" role="group">
            <button className={`btn btn-outline-primary ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
              <CreditCard className="me-2" /> Card
            </button>
            <button className={`btn btn-outline-primary ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
              <Wallet className="me-2" /> UPI
            </button>
            <button className={`btn btn-outline-primary ${paymentMethod === 'cod' ? 'active' : ''}`} onClick={() => setPaymentMethod('cod')}>
              <Truck className="me-2" /> COD
            </button>
          </div>
        </div>

        {paymentMethod && (
          <form onSubmit={handleSubmit}>
            <h3 className="fw-bold mb-3">Address</h3>
            <div className="mb-3">
              <label className="form-label">Street</label>
              <input type="text" className="form-control" value={street} onChange={(e) => setStreet(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">House Number</label>
              <input type="text" className="form-control" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Pincode</label>
              <input type="text" className="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">State</label>
              <input type="text" className="form-control" value={state} readOnly />
            </div>

            {paymentMethod === 'card' && (
              <div>
                <div className="mb-3">
                  <label className="form-label">Select Card Type</label>
                  <select className="form-select" value={cardType} onChange={(e) => setCardType(e.target.value)} required>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    maxLength={16}
                  />
                  {errors.cardNumber && <div className="text-danger">{errors.cardNumber}</div>}
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                      placeholder="MM/yyyy"
                    />
                    {errors.expiryDate && <div className="text-danger">{errors.expiryDate}</div>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                      maxLength={3}
                    />
                    {errors.cvv && <div className="text-danger">{errors.cvv}</div>}
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div>
                <div className="mb-3">
                  <label className="form-label">Select UPI Method</label>
                  <div>
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="upiType"
                        value="gpay"
                        checked={upiType === 'gpay'}
                        onChange={handleUpiTypeChange}
                        required
                      />
                      Google Pay
                    </label>
                    <label className="radio-inline me-3">
                      <input
                        type="radio"
                        name="upiType"
                        value="razorpay"
                        checked={upiType === 'razorpay'}
                        onChange={handleUpiTypeChange}
                        required
                      />
                      Razorpay
                    </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="upiType"
                        value="phonepe"
                        checked={upiType === 'phonepe'}
                        onChange={handleUpiTypeChange}
                        required
                      />
                      PhonePe
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">UPI ID</label>
                  <input type="text" className="form-control" value={upiId} onChange={(e) => setUpiId(e.target.value)} required />
                </div>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="alert alert-warning">Free COD</div>
            )}

            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-control"
                value={totalAmount}
                required
                disabled
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : `Pay Now`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Payment;