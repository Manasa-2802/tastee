import React from 'react';
import {  ShoppingCart, User2 } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './css/style.css'; // Import the CSS file

function App() {
  const categories = [
    { name: 'Burgers', icon: '🍔' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Chicken', icon: '🐔' }, // Replaced "Sushi" with "Chicken"
    { name: 'Meals', icon: '🍽️' }, // Replaced "Salads" with "Meals"
    { name: 'Desserts', icon: '🍰' },
    { name: 'Drinks', icon: '🥤' }
  ];

  const featuredDishes = [
    {
      id: 1,
      name: 'Classic Burger',
      image: './burger.jpg',
      description: 'A delicious burger with fresh ingredients.',
      // price: '$9.99'
      path :'/burger'
    },
    {
      id: 2,
      name: 'Pizza',
      image: './pizaa.jpg',
      description: 'A classic pizza with tomato sauce, mozzarella, and basil.',
      path : '/pizzaa'
      // price: '$12.99'
    },
    {
      id: 3,
      name: 'Chicken',
      image: './chicken.jpg', // Placeholder for Chicken image
      description: 'Tender and juicy chicken dishes.',
      path : '/chicken'
      // price: '$12.99'
    },
    {
      id: 4,
      name: 'Meals',
      image: './meals.jpg', // Placeholder for Meals image
      description: 'A variety of complete meals.',
      path : '/meals'
      // price: '$12.99'
    },
    {
      id: 5,
      name: 'Dosa',
      image: './dosa.jpg',
      description: 'Variety of Dosa from all over the place',
      path : '/dosa'
      // price: '$12.99'
    },
    {
      id: 6,
      name: 'Paneer Plaza',
      image: './panner.jpg',
      description: 'Explore the world of paneer.',
      path :'/paneer'
      // price: '$12.99'
    },
    {
      id: 7,
      name: 'Mushroommm...',
      image: './mushroom.jpg',
      description: 'A room with no door that serves our tongue with a rich flavour',
      path :'/mush'  // price: '$12.99'
    },
    // {
    //   id: 8,
    //   name: 'Non-Veg Section',
    //   image: './chicken.jpg',
    //   description: 'Mouth Watering variety of dishes',

    //   // price: '$12.99'
    // },
    {
      id: 9,
      name: 'Roti',
      image: './roti.jpg',
      description: 'Roties are must',
      path : '/roti'
      // price: '$12.99'
    },
    {
      id: 10,
      name: 'Desserts',
      image: './ice.jpg',
      description: 'A must thing after a meal',
      path : '/dessert'
      // price: '$12.99'
    },
    {
      id: 11,
      name: 'Drinks',
      image: './juice.jpg',
      description: 'A perfect choice for summer.',
      // price: '$14.99'
    }
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
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/review">Review</a>
              </li>
            </ul>
            <div className="d-flex ms-3">
              <User2 className="h-6 w-6 text-gray-600 me-3" />
              <Link to="/cart" className="text-decoration-none">
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
          <h1 className="display-4 fw-bold">Delicious Food, Delivered to Your Doorstep</h1>
          <p className="lead mb-4">Discover the best food and drinks from our carefully selected restaurants. Order now for a quick delivery to your doorstep.</p>
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
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="col">
                <div className="card shadow-sm">
                  <div className="image-container">
                    <img
                      className="card-img-top"
                      src={dish.image}
                      alt={dish.name}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{dish.name}</h5>
                    <p className="card-text">{dish.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-orange-500 fw-bold">{dish.price}</span>
                      <button type="submit" className="btn btn-primary">
                      <Link to={dish.path} className="btn btn-primary">View Menu</Link> </button>
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