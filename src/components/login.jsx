import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState(''); // State for the selected role
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password || !role) {
      setError('Please fill in all fields');
      return;
    }
    setError('');

    // Simulate role check (you should replace this with your actual authentication logic)
    const userRole = checkUserRole(email, password, role);

    if (userRole === 'admin') {
      navigate('/admin'); // Redirect to admin page
    } else if (userRole === 'user') {
      navigate('/landing'); // Redirect to landing page
    } else {
      setError('Invalid credentials');
    }
  };

  // Simulate role check function (replace with your actual logic)
  const checkUserRole = (email, password, role) => {
    // Example: Check if the email is 'admin@example.com' and password is 'admin123'
    if (email === 'admin@example.com' && password === 'admin123' && role === 'admin') {
      return 'admin';
    } else if (email === 'user@gmail.com' && password === '123' && role === 'user') {
      return 'user';
    }
    return null; // Invalid credentials
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px' }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? (
                <i className="bi bi-eye-slash" style={{ fontSize: '1.5rem' }}></i>
              ) : (
                <i className="bi bi-eye" style={{ fontSize: '1.5rem' }}></i>
              )}
            </span>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
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
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <div className="text-center mt-3">
            <Link to="/register" className="text-muted">Don't have an account? Register</Link>
          </div>
          <div className="text-center mt-3">
            <Link to="/forgot-password" className="text-muted">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;