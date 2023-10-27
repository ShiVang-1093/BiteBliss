import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewAndRating.css'; // Import the CSS file

const ReviewAndRating = () => {
  const ratings = Array(5).fill(0);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(undefined);
  const [review, setReview] = useState('');

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseOver = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(undefined);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rating: ', rating);
    console.log('Review: ', review);
    setReview('');
  };

  return (
    <div className="review-rating-container">
      <h1 className="review-rating-heading">Review and Rating</h1> 
      <div className="star-rating">
        {ratings.map((_, index) => (
          <FaStar
            key={index}
            cursor={'pointer'}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={(rating || hover) > index ? 'yellow' : 'gray'}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="review-input"
          placeholder='Enter your valuable Review'
          value={review}
          onChange={handleReviewChange}
        />
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewAndRating;
