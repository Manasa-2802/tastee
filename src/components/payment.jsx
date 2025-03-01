import React, { useState } from 'react';
import { CreditCard, Wallet, Truck, AlertCircle, Check } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [upiOption, setUpiOption] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cartAmount, setCartAmount] = useState(100.0); // Example cart amount

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!selectedPayment) {
      newErrors.payment = 'Please select a payment method';
    }

    if (selectedPayment === 'card') {
      if (!cardDetails.number) newErrors.cardNumber = 'Card number is required';
      else if (!/^\d{16}$/.test(cardDetails.number)) newErrors.cardNumber = 'Card number must be 16 digits';
      
      if (!cardDetails.name) newErrors.cardName = 'Cardholder name is required';
      
      if (!cardDetails.expiry) newErrors.cardExpiry = 'Expiry date is required';
      else if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) newErrors.cardExpiry = 'Use MM/YY format';
      
      if (!cardDetails.cvv) newErrors.cardCvv = 'CVV is required';
      else if (!/^\d{3,4}$/.test(cardDetails.cvv)) newErrors.cardCvv = 'CVV must be 3 or 4 digits';
    }

    if (selectedPayment === 'upi' && !upiOption) {
      newErrors.upiOption = 'Please select a UPI provider';
    }

    if (selectedPayment === 'upi' && upiOption && !upiId) {
      newErrors.upiId = 'UPI ID is required';
    } else if (selectedPayment === 'upi' && upiOption && !upiId.includes('@')) {
      newErrors.upiId = 'Please enter a valid UPI ID';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Payment submitted:', {
        method: selectedPayment,
        upiOption,
        cardDetails,
        upiId,
        amount: cartAmount
      });
      setIsSubmitted(true);
    }
  };

  const handlePaymentRedirect = () => {
    if (selectedPayment === 'upi' && upiOption) {
      const paymentUrl = upiOption === 'gpay' ? 'https://pay.google.com' : 'https://phonepe.com';
      window.location.href = paymentUrl;
    } else if (selectedPayment === 'razorpay') {
      // Simulate redirect to Razorpay
      alert('Redirecting to Razorpay...');
    }
  };

  if (isSubmitted) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="bg-white rounded shadow p-5">
          <div className="text-center">
            <div className="bg-success p-3 rounded-circle mb-4">
              <Check className="text-white w-12 h-12" />
            </div>
            <h2 className="mb-2">Payment Successful!</h2>
            <p className="text-muted mb-4">
              Your payment has been processed successfully. Thank you for your order.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setSelectedPayment(null);
                setUpiOption(null);
                setUpiId('');
                setCardDetails({
                  number: '',
                  name: '',
                  expiry: '',
                  cvv: ''
                });
              }}
              className="btn btn-primary"
            >
              Make Another Payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="bg-white rounded shadow p-5">
        <h1 className="h2 mb-4">Payment Gateway</h1>
        
        {errors.payment && (
          <div className="alert alert-danger mb-4" role="alert">
            <AlertCircle className="text-danger mr-2 h-5 w-5" />
            {errors.payment}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h2 className="h4 mb-3">Select Payment Method</h2>
            <div className="row">
              <div className="col-md-6">
                <div 
                  className={`card border-0 shadow-sm p-3 mb-3 cursor-pointer ${selectedPayment === 'card' ? 'bg-light' : ''}`}
                  onClick={() => setSelectedPayment('card')}
                >
                  <div className="d-flex align-items-center">
                    <CreditCard className="text-primary mr-3 h-6 w-6" />
                    <span className="font-weight-bold">Credit/Debit Card</span>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div 
                  className={`card border-0 shadow-sm p-3 mb-3 cursor-pointer ${selectedPayment === 'upi' ? 'bg-light' : ''}`}
                  onClick={() => setSelectedPayment('upi')}
                >
                  <div className="d-flex align-items-center">
                    <Wallet className="text-primary mr-3 h-6 w-6" />
                    <span className="font-weight-bold">UPI Payment</span>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div 
                  className={`card border-0 shadow-sm p-3 mb-3 cursor-pointer ${selectedPayment === 'razorpay' ? 'bg-light' : ''}`}
                  onClick={() => setSelectedPayment('razorpay')}
                >
                  <div className="d-flex align-items-center">
                    <svg 
                      className="h-6 w-6 mr-3" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="4" fill="#072654" />
                      <path d="M7 15.5H17L12.5 7L7 15.5Z" fill="white" />
                    </svg>
                    <span className="font-weight-bold">Razorpay</span>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div 
                  className={`card border-0 shadow-sm p-3 mb-3 cursor-pointer ${selectedPayment === 'cod' ? 'bg-light' : ''}`}
                  onClick={() => setSelectedPayment('cod')}
                >
                  <div className="d-flex align-items-center">
                    <Truck className="text-primary mr-3 h-6 w-6" />
                    <span className="font-weight-bold">Cash on Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {selectedPayment === 'card' && (
            <div className="mb-4">
              <h3 className="h5 mb-3">Card Details</h3>
              
              <div className="form-group mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  name="number"
                  value={cardDetails.number}
                  onChange={handleCardInputChange}
                  placeholder="1234 5678 9012 3456"
                  className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                  maxLength={16}
                />
                {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
              </div>
              
              <div className="form-group mb-3">
                <label className="form-label">Cardholder Name</label>
                <input
                  type="text"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleCardInputChange}
                  placeholder="John Doe"
                  className={`form-control ${errors.cardName ? 'is-invalid' : ''}`}
                />
                {errors.cardName && <div className="invalid-feedback">{errors.cardName}</div>}
              </div>
              
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={handleCardInputChange}
                      placeholder="MM/YY"
                      className={`form-control ${errors.cardExpiry ? 'is-invalid' : ''}`}
                      maxLength={5}
                    />
                    {errors.cardExpiry && <div className="invalid-feedback">{errors.cardExpiry}</div>}
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label className="form-label">CVV</label>
                    <input
                      type="password"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardInputChange}
                      placeholder="123"
                      className={`form-control ${errors.cardCvv ? 'is-invalid' : ''}`}
                      maxLength={4}
                    />
                    {errors.cardCvv && <div className="invalid-feedback">{errors.cardCvv}</div>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedPayment === 'upi' && (
            <div className="mb-4">
              <h3 className="h5 mb-3">UPI Payment</h3>
              
              <div className="form-group mb-3">
                <label className="form-label">Select UPI Provider</label>
                {errors.upiOption && <div className="text-danger">{errors.upiOption}</div>}
                <div className="row">
                  <div className="col-md-6">
                    <div 
                      className={`card border-0 shadow-sm p-3 mb-3 cursor-pointer ${upiOption === 'gpay' ? 'bg-light' : ''}`}
                      onClick={() => setUpiOption('gpay')}
                    >
                      <div className="d-flex align-items-center">
                        <img 
                          src="https://images.unsplash.com/photo-1622637935474-42d797a7e044?auto=format&fit=crop&w=32&h=32&q=80" 
                          alt="Google Pay" 
                          className="h-6 w-6 mr-2"
                        />
                        <span className="font-weight-bold">Google Pay</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div 
                      className={`card border-0 shadow-sm p-3 mb-3 cursor-pointer ${upiOption === 'phonepe' ? 'bg-light' : ''}`}
                      onClick={() => setUpiOption('phonepe')}
                    >
                      <div className="d-flex align-items-center">
                        <div className="h-6 w-6 bg-purple-700 rounded-full d-flex align-items-center justify-content-center mr-2">
                          <span className="text-white text-xs font-weight-bold">P</span>
                        </div>
                        <span className="font-weight-bold">PhonePe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {upiOption && (
                <div className="form-group mb-3">
                  <label className="form-label">UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    className={`form-control ${errors.upiId ? 'is-invalid' : ''}`}
                  />
                  {errors.upiId && <div className="invalid-feedback">{errors.upiId}</div>}
                </div>
              )}
            </div>
          )}

          {selectedPayment === 'razorpay' && (
            <div className="mb-4">
              <h3 className="h5 mb-3">Razorpay</h3>
              <p className="text-muted mb-4">
                You will be redirected to Razorpay's secure payment page to complete your payment.
              </p>
              <div className="alert alert-primary" role="alert">
                This is a secure payment method. Your payment details are encrypted and secure.
              </div>
            </div>
          )}

          {selectedPayment === 'cod' && (
            <div className="mb-4">
              <h3 className="h5 mb-3">Cash on Delivery</h3>
              <p className="text-muted">
                Pay with cash when your order is delivered. Additional COD charges may apply.
              </p>
            </div>
          )}

          <div className="form-group mb-3">
            <label className="form-label">Amount</label>
            <input
              type="text"
              value={cartAmount}
              readOnly
              className="form-control"
            />
          </div>

          <div className="mt-4">
            <button 
              type="submit" 
              className="btn btn-primary w-100"
              onClick={handlePaymentRedirect}
            >
              {selectedPayment === 'cod' ? 'Place Order' : 'Pay Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
