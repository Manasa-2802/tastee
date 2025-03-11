import React, { useState } from 'react';
import { CreditCard, Wallet, Truck, CheckCircle2 } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardType, setCardType] = useState('credit');
  const [upiType, setUpiType] = useState('gpay'); // Default UPI type
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState(''); // Centralized amount state
  const [amountSet, setAmountSet] = useState(false); // Track if amount has been set

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
  };

  const handleUpiTypeChange = (e) => {
    const selectedUpiType = e.target.value;
    setUpiType(selectedUpiType);

    // Redirect to specific URLs based on the selected UPI type
    switch (selectedUpiType) {
      case 'gpay':
        window.location.href = 'https://gpay.google.com';
        break;
      case 'razorpay':
        window.location.href = 'https://razorpay.com';
        break;
      case 'phonepe':
        window.location.href = 'https://phonepe.com';
        break;
      default:
        break;
    }
  };

  const handleAmountChange = (e) => {
    if (!amountSet) {
      setAmount(e.target.value);
    }
  };

  const handleAmountSet = () => {
    setAmountSet(true);
  };

  if (isSuccess) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
        <div className="card text-center p-4 shadow">
          <CheckCircle2
            className="text-success display-4 mb-3"
            style={{ color: 'green', fontWeight: 'bold', fontSize: '4rem' }}
          />
          <h2 className="fw-bold">Payment Successful!</h2>
          <p>Your order has been processed. A confirmation email will be sent shortly.</p>
          <div className="alert alert-success">Order ID: #{Math.random().toString(36).substr(2, 9)}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow w-50">
        <h2 className="fw-bold mb-4">Payment Details</h2>
        
        <div className="btn-group w-100 mb-4" role="group">
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

        {paymentMethod === 'card' && (
          <div>
            <div className="mb-3">
              <label className="form-label">Select Card Type</label>
              <select className="form-select" value={cardType} onChange={(e) => setCardType(e.target.value)}>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" className="form-control" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Expiry Date</label>
                <input type="text" className="form-control" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">CVV</label>
                <input type="text" className="form-control" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
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
          <div className="alert alert-warning">Cash on Delivery is available with an additional charge of ₹40.</div>
        )}

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={handleAmountChange}
            disabled={amountSet}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3" disabled={isProcessing || !amount}>
          {isProcessing ? 'Processing...' : `Pay ${paymentMethod === 'cod' ? '(Cash on Delivery)' : 'Now'}`}
        </button>
      </div>
    </div>
  );
}

export default App;