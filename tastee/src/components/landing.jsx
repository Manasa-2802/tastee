


// // LandingPage.js
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/landing.css';
// import { ChefHat, Clock, Star, Truck, ShoppingCart, User } from 'lucide-react';

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const handleUserClick = () => {
//     // Implement your user click logic here
//     navigate('/user-details');
//   };

//   return (
//     <div>
//       {/* Navigation */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <a className="navbar-brand d-flex align-items-center" href="#">
//             <ChefHat className="me-2" size={24} />
//             TasteQuest
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="/landing">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/menu">Menu</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/about">About</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/review">Review</a>
//               </li>
//             </ul>
//           </div>

//           {/* Icons on the right side */}
//           <div className="d-flex align-items-center">
//             <Link to="/cart" className="me-3">
//               <ShoppingCart size={24} />
//             </Link>
//             <a href="/user_det" onClick={handleUserClick} className="me-3">
//               <User size={24} />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-section d-flex align-items-center text-center">
//         <div className="container">
//           <h1 className="display-3 mb-4">Delicious Food Delivered to Your Doorstep</h1>
//           <p className="lead mb-4">Experience the best cuisines from top-rated restaurants in your area</p>
//           <button type="submit" className="btn btn-primary btn-lg me-3">
//             <Link to="/menu" className="text-white">Order now</Link>
//           </button>
//           <button type="submit" className="btn btn-light btn-lg">
//             <Link to="/menu" className="text-dark">View Menu</Link>
//           </button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-5">
//         <div className="container">
//           <h2 className="text-center mb-5">Why Choose Us</h2>
//           <div className="row g-4">
//             <div className="col-md-3">
//               <div className="card feature-card h-100 text-center">
//                 <div className="card-body">
//                   <Star className="mb-3" size={32} />
//                   <h5 className="card-title">Quality Food</h5>
//                   <p className="card-text">We serve only the highest quality ingredients in our dishes.</p>
//                   <Link to="/about" className="btn btn-primary">Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card feature-card h-100 text-center">
//                 <div className="card-body">
//                   <Clock className="mb-3" size={32} />
//                   <h5 className="card-title">Fast Delivery</h5>
//                   <p className="card-text">Quick delivery to your doorstep, hot and fresh.</p>
//                   <Link to="/about" className="btn btn-primary">Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card feature-card h-100 text-center">
//                 <div className="card-body">
//                   <Truck className="mb-3" size={32} />
//                   <h5 className="card-title">Free Shipping</h5>
//                   <p className="card-text">Free delivery on orders above $50 in your area.</p>
//                   <Link to="/about" className="btn btn-primary">Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card feature-card h-100 text-center">
//                 <div className="card-body">
//                   <ChefHat className="mb-3" size={32} />
//                   <h5 className="card-title">Expert Chefs</h5>
//                   <p className="card-text">Our dishes are prepared by experienced chefs.</p>
//                   <Link to="/about" className="btn btn-primary">Read More</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-dark text-light py-4">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h5>TasteQuest</h5>
//               <p>Delivering happiness to your doorstep</p>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-3">
//               <h5>Quick Links</h5>
//               <ul className="list-unstyled">
//                 <li><Link to="/landing" className="text-light">Home</Link></li>
//                 <li><Link to="/menu" className="text-light">Menu</Link></li>
//                 <li><Link to="/about" className="text-light">About Us</Link></li>
//                 <li><Link to="/review" className="text-light">Reviews</Link></li>
//               </ul>
//             </div>
//             <div className="col-md-3">
//               <h5>Navigation</h5>
//               <ul className="list-unstyled">
//                 <li><Link to="/menu" className="text-light">Menu</Link></li>
//                 <li><Link to="/cart" className="text-light">Cart</Link></li>
//                 <li><Link to="/review" className="text-light">Reviews</Link></li>
//               </ul>
//             </div>
//             <div className="col-md-3">
//               <h5>Contact Us</h5>
//               <p>
//                 Phone: <a href="tel:+1234567890" className="text-light">+123 456 7890</a><br />
//                 Email: <a href="mailto:info@tastequest.com" className="text-light">info@tastequest.com</a>
//               </p>
//             </div>
//             <div className="col-md-3">
//               <h5>Follow Us</h5>
//               <ul className="list-unstyled">
//                 <li><a href="https://facebook.com" className="text-light">Facebook</a></li>
//                 <li><a href="https://twitter.com" className="text-light">Twitter</a></li>
//                 <li><a href="https://instagram.com" className="text-light">Instagram</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="row mt-4">
//             <div className="col-md-12 text-center">
//               <p>© 2025 TasteQuest. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/landing.css';
import { ChefHat, Clock, Star, Truck, ShoppingCart, User } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/user-details');
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <ChefHat className="me-2" size={24} />
            TasteQuest
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/landing">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/review">Review</a>
              </li>
            </ul>
          </div>

          {/* Icons on the right side */}
          <div className="d-flex align-items-center">
            <Link to="/cart" className="me-3">
              <ShoppingCart size={24} />
            </Link>
            <a href="/user_det" onClick={handleUserClick} className="me-3">
              <User size={24} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-center">
        <div className="container">
          <h1 className="display-3 mb-4">Delicious Food Delivered to Your Doorstep</h1>
          <p className="lead mb-4">Experience the best cuisines from top-rated restaurants in your area</p>
          <button type="submit" className="btn btn-primary btn-lg me-3">
            <Link to="/menu" className="text-white">Order now</Link>
          </button>
          <button type="submit" className="btn btn-light btn-lg">
            <Link to="/menu" className="text-dark">View Menu</Link>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card feature-card h-100 text-center">
                <div className="card-body">
                  <Star className="mb-3" size={32} />
                  <h5 className="card-title">Quality Food</h5>
                  <p className="card-text">We serve only the highest quality ingredients in our dishes.</p>
                  <Link to="/about" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card feature-card h-100 text-center">
                <div className="card-body">
                  <Clock className="mb-3" size={32} />
                  <h5 className="card-title">Fast Delivery</h5>
                  <p className="card-text">Quick delivery to your doorstep, hot and fresh.</p>
                  <Link to="/about" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card feature-card h-100 text-center">
                <div className="card-body">
                  <Truck className="mb-3" size={32} />
                  <h5 className="card-title">Free Shipping</h5>
                  <p className="card-text">Free delivery on orders above $50 in your area.</p>
                  <Link to="/about" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card feature-card h-100 text-center">
                <div className="card-body">
                  <ChefHat className="mb-3" size={32} />
                  <h5 className="card-title">Expert Chefs</h5>
                  <p className="card-text">Our dishes are prepared by experienced chefs.</p>
                  <Link to="/about" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h5>TasteQuest</h5>
              <p>Delivering happiness to your doorstep</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/landing" className="text-light">Home</Link></li>
                <li><Link to="/menu" className="text-light">Menu</Link></li>
                <li><Link to="/about" className="text-light">About Us</Link></li>
                <li><Link to="/review" className="text-light">Reviews</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Navigation</h5>
              <ul className="list-unstyled">
                <li><Link to="/menu" className="text-light">Menu</Link></li>
                <li><Link to="/cart" className="text-light">Cart</Link></li>
                <li><Link to="/review" className="text-light">Reviews</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p>
                Phone: <a href="tel:+1234567890" className="text-light">+123 456 7890</a><br />
                Email: <a href="mailto:info@tastequest.com" className="text-light">info@tastequest.com</a>
              </p>
            </div>
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="https://facebook.com" className="text-light">Facebook</a></li>
                <li><a href="https://twitter.com" className="text-light">Twitter</a></li>
                <li><a href="https://instagram.com" className="text-light">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <p>© 2025 TasteQuest. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;