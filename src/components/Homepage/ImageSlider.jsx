import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Adjust the CSS import path as needed
import i1 from '../images/i1.webp';
import i2 from '../images/i2.webp';
// import i3 from '../images/i3.jpg';
// import i4 from '../images/i4.jpg';

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { image: i1}, // Replace with your food image URL
    { image: i2 }, // Replace with your food image URL
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
