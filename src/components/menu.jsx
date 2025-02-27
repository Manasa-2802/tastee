import React from 'react';
import { Menu, ShoppingCart, User2 } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
  const categories = [
    { name: 'Burgers', icon: '🍔' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Sushi', icon: '🍱' },
    { name: 'Salads', icon: '🥗' },
    { name: 'Desserts', icon: '🍰' },
    { name: 'Drinks', icon: '🥤' }
  ];

  return (
    <div className="min-vh-100 bg-white">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-orange-500" href="#">TasteQuest</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Locations</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/review">Review</a>
              </li>
            </ul>
            <div className="d-flex ms-3">
              <User2 className="h-6 w-6 text-gray-600 me-3" />
              <Link to="/pizza" className="text-decoration-none">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section position-relative">
        <img
          className="w-100 vh-50 object-cover"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Food spread"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-4 fw-bold">Delicious Food, Delivered to You Doorstep</h1>
          <p className="lead mb-4">Discover the best food and drinks from our carefully selected restaurants. Order now for a quick delivery to your doorstep.</p>
          {/* <button className="btn btn-lg btn-orange-500">Order Now</button> */}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Categories</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
          {categories.map((category) => (
            <div key={category.name} className="col">
              <div className="card text-center p-4">
                <div className="fs-2">{category.icon}</div>
                <h5 className="card-title">{category.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                        <Link to="/menu1" className="text-white">View Menu</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;