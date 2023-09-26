import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Adjust the CSS import path as needed

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { image: 'https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.webp?b=1&s=170667a&w=0&k=20&c=P3jIQq8gVqlXjd4kP2OrXYyzqEXSWCwwYtwrd81psDY=' }, // Replace with your food image URL
    { image: 'https://cdn.pixabay.com/photo/2014/05/23/23/17/dessert-352475_640.jpg' }, // Replace with your food image URL
    { image: 'https://t3.ftcdn.net/jpg/02/38/10/52/360_F_238105207_2jrGVrP5mtzB0LFYJJoZIrI09xy7wHDp.jpg' }, // Replace with your restaurant image URL
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHP9LVymyj2FgjUF4BU9RabtaGaUZAjqW2tKWyzfyaKFoChOTlQWKNw3eFlyqA1fYokBw&usqp=CAU' }, // Replace with your restaurant image URL
  ]; 
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" style={{ background: slides[index].background }}>
        <img src={slides[index].image} alt={`Slide ${index}`} />
      </div>
      <div className="controls">
        <span className="left-arrow" onClick={prevSlide}>
          &#10094;
        </span>
        <span className="right-arrow" onClick={nextSlide}>
          &#10095;
        </span>
      </div>
      <div className="dots">
        {slides.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${dotIndex === index ? 'active' : ''}`}
            onClick={() => setIndex(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
