import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialReviews = [
  {
    id: 1,
    itemName: 'Classic Burger',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80',
    userName: 'John Doe',
    rating: 5,
    review: 'The burger was absolutely delicious! Fresh ingredients and perfectly cooked. Highly recommend it!',
  },
  {
    id: 2,
    itemName: 'Margherita Pizza',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2cd075c3ff6943c0e25f7c?auto=format&fit=crop&q=80',
    userName: 'Jane Smith',
    rating: 4,
    review: 'Great pizza! The crust was thin and crispy, and the toppings were fresh. Will order again!',
  },
  {
    id: 3,
    itemName: 'Sushi Platter',
    userImage: 'https://images.unsplash.com/photo-1531427186611-ecfd6ae2ac34?auto=format&fit=crop&q=80',
    userName: 'Alice Johnson',
    rating: 5,
    review: 'The sushi platter was amazing! Fresh and flavorful. The presentation was beautiful too. Highly recommend!',
  }
];

function ReviewPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    itemName: '',
    userImage: '',
    userName: '',
    rating: 0,
    review: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview({ ...newReview, userImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newReview.itemName &&
      newReview.userImage &&
      newReview.userName &&
      newReview.rating > 0 &&
      newReview.review
    ) {
      const newReviewWithId = {
        ...newReview,
        id: Date.now(), // Generate a unique ID for the new review
      };
      setReviews([...reviews, newReviewWithId]);
      setNewReview({
        itemName: '',
        userImage: '',
        userName: '',
        rating: 0,
        review: ''
      });
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Customer Reviews</h2>
      <div className="row">
        {reviews.map(review => (
          <div key={review.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={review.userImage}
                    alt={review.userName}
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <h6 className="card-subtitle mb-2 text-muted">{review.userName}</h6>
                </div>
                <div className="mb-3">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`badge bg-${index < review.rating ? 'warning' : 'white'} text-dark`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleRatingChange(index + 1)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mb-4">Write a New Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            name="itemName"
            value={newReview.itemName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userImage" className="form-label">Your Profile Photo</label>
          <input
            type="file"
            className="form-control"
            id="userImage"
            name="userImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={newReview.userName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <div>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`badge bg-${index < newReview.rating ? 'warning' : 'white'} text-dark`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleRatingChange(index + 1)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">Your Review</label>
          <textarea
            className="form-control"
            id="review"
            name="review"
            rows="4"
            value={newReview.review}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewPage;