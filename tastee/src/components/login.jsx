import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState(''); // State for the selected role
  const [passwordStrength, setPasswordStrength] = useState(''); // State for password strength feedback
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/login',
        {
          username,
          password,
        }
      );

      if (response.data.message === 'Login successful') {
        // Save user and token to localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        navigate('/landing'); // Redirect to landing/dashboard
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isStrongPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    );
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (isStrongPassword(newPassword)) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Weak');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: '600px', width: '100%' }}
      >
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? (
                <i
                  className="bi bi-eye-slash"
                  style={{ fontSize: '1.5rem' }}
                ></i>
              ) : (
                <i className="bi bi-eye" style={{ fontSize: '1.5rem' }}></i>
              )}
            </span>
            <small className="form-text text-muted">
              Password must be at least 8 characters long and include uppercase
              and lowercase letters, numbers, and special characters.
            </small>
            <div className="mt-2">
              <strong>Password Strength: </strong>
              <span
                className={
                  passwordStrength === 'Strong' ? 'text-success' : 'text-danger'
                }
              >
                {passwordStrength}
              </span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              id="role"
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <div className="text-center mt-3">
            <Link to="/register" className="text-muted">
              Don't have an account? Register
            </Link>
          </div>
          <div className="text-center mt-3">
            <Link to="/forgotpass" className="text-muted">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
