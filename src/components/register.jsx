// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
// import { Card } from "react-bootstrap";
// import axios from "axios"; // Use ES6 import syntax

// function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [address, setAddress] = useState(""); // Added state for address
//   const [gender, setGender] = useState(""); // Added state for gender
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Function to check password strength
//   const isStrongPassword = (password) => {
//     const regex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regex.test(password);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     if (!isStrongPassword(password)) {
//       setError(
//         "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
//       );
//       return;
//     }
//     setError("");
//     // Handle registration logic here, like sending data to a server
//     console.log("Registering with", {
//       username,
//       email,
//       password,
//       address,
//       gender,
//     });

//     axios
//       .post("http://localhost:5000/register", {
//         username,
//         email,
//         password,
//         address,
//         gender,
//       })
//       .then(function (response) {
//         console.log(response);
//         // Redirect to the login page after successful registration
//         navigate("/login");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div
//         className="card p-4 shadow-sm"
//         style={{ maxWidth: "600px", width: "100%" }}
//       >
//         {" "}
//         {/* Increased maxWidth and set width to 100% */}
//         <h2 className="text-center mb-4 text-primary">Create Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               className="form-control"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="form-control"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your password"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="address" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               className="form-control"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter your address"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="gender" className="form-label">
//               Gender
//             </label>
//             <select
//               id="gender"
//               className="form-control"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <button type="submit" className="btn btn-success w-100">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isStrongPassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!isStrongPassword(password)) {
      setError(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }
    setError('');
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/register',
        {
          username,
          email,
          password,
          address,
          gender,
        }
      );
      console.log(response);
      if (response.status === 201) {
        navigate('/');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: '600px', width: '100%' }}
      >
        <h2 className="text-center mb-4 text-primary">Create Account</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
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
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
