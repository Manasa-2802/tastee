import React from 'react';
import { ChefHat, Clock, Star, Truck, ShoppingCart, User } from 'lucide-react'; 
import { Link } from 'react-router-dom'; // Import necessary icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './css/landing.css';

function App() {
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
            <a href="#" className="me-3">
              <ShoppingCart size={24} />
            </a>
            <a href="#">
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

      {/* Featured Dishes */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Popular Dishes</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="col">
                <div className="card shadow-sm">
                  <img
                    className="card-img-top"
                    src={`https://images.unsplash.com/photo-151${5543543000 + item}?auto=format&fit=crop&q=80`}
                    alt="Food"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Special Dish {item}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-orange-500 fw-bold">$12.99</span>
                      <button type="submit" className="btn btn-primary">
                        <Link to="/menu1" className="text-white">View Items</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card feature-card h-100 text-center">
                <div className="card-body">
                  <Clock className="mb-3" size={32} />
                  <h5 className="card-title">Fast Delivery</h5>
                  <p className="card-text">Quick delivery to your doorstep, hot and fresh.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card feature-card h-100 text-center">
                <div className="card-body">
                  <Truck className="mb-3" size={32} />
                  <h5 className="card-title">Free Shipping</h5>
                  <p className="card-text">Free delivery on orders above $50 in your area.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card feature-card h-100 text-center">
                <div className="card-body">
                  <ChefHat className="mb-3" size={32} />
                  <h5 className="card-title">Expert Chefs</h5>
                  <p className="card-text">Our dishes are prepared by experienced chefs.</p>
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
            <div className="col-md-6">
              <h5>TasteQuest</h5>
              <p>Delivering happiness to your doorstep</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>© 2025 TasteQuest. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;