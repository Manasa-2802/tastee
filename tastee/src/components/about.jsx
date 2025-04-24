import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div className="about-page">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">TasteQuest</a>
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
                <a className="nav-link active" aria-current="page" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/review">Review</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Why Choose Us Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-3">Quality Food</h3>
              <p>
                At TasteQuest, we pride ourselves on serving only the highest quality ingredients in our dishes. Our commitment to freshness and flavor ensures that every meal is a delightful experience.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="./food.jpg"
                alt="Quality Food"
                className="img-fluid rounded"
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Delivery Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Free Delivery</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="./delivery.jpg"
                alt="Free Delivery"
                className="img-fluid rounded"
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <p>
                Enjoy the convenience of free delivery on all orders . We ensure that your food arrives hot and fresh, right at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Quality in Town Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Best Quality in Town</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                At TasteQuest, we source our ingredients from the finest local suppliers to ensure that every dish is of the highest quality. Our commitment to excellence sets us apart.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="./quality.jpg"
                className="img-fluid rounded"
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Chefs Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Expert Chefs</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="./chefs.jpg"
                alt="Expert Chefs"
                className="img-fluid rounded"
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </div>
            <div className="col-md-6">
              <p>
                Our dishes are prepared by experienced chefs who bring years of culinary expertise to every plate. We ensure that each dish is crafted with care and passion.
              </p>
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

export default About;