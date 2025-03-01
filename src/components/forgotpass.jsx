import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage('Password reset link has been sent to your email.');
      // Here you would typically call an API to send the password reset link
      console.log('Password reset link sent to:', email);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="bg-white rounded shadow p-5">
        <h2 className="mb-4 text-center">Forgot Password</h2>
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-control ${error ? 'is-invalid' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <Link to="/login" className="text-muted">
            Remembered your password? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;