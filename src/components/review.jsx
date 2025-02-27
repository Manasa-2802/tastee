import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/review.css";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Review Submitted!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
        <h2 className="mb-3">How was the item?</h2>
        
        <div className="star-rating mb-3">
          {[...Array(5)].map((_, index) => {
            index += 1;
            return (
              <span
                key={index}
                className={`star ${index <= (hover || rating) ? "text-warning" : "text-muted"}`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                style={{ cursor: "pointer", fontSize: "1.5rem", marginRight: "5px" }}
              >
                ★
              </span>
            );
          })}
          <span
            className="text-primary ms-3"
            style={{ cursor: "pointer" }}
            onClick={() => setRating(0)}
          >
            Clear
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Write a review</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="What should other customers know?"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <button type="button" className="btn btn-outline-secondary w-100">
              📷 Share a video or photo
            </button>
          </div>

          <div className="mb-3">
            <label className="form-label">Title your review</label>
            <input
              type="text"
              className="form-control"
              placeholder="What's most important to know?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">What's your public name?</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 fw-bold">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
