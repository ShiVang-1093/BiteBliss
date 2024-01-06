import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

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
    <div className="review-rating-container flex flex-col m-5 items-center ">
      <h1 className="review-rating-heading text-4xl text-center text-coffee font-bold mb-5">Review and Rating</h1> 
      <div className="star-rating flex justify-center">
        {ratings.map((_, index) => (
          <FaStar
          className='mr-2 text-4xl'
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
          className="review-input w-full h-[10rem] mb-5 p-2 rounded-xl border-solid border-coffee"
          placeholder='Enter your valuable Review'
          value={review}
          onChange={handleReviewChange}
        />
        <button className="mt-4 cursor-pointer rounded-2xl pt-4 pb-4 pl-7 pr-7 bg-coffee text-yellow text-xl hover:transition-transform scale-100">Submit</button>
      </form>
    </div>
  );
};

export default ReviewAndRating;
