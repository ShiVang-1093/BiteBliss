import React, { useState, useEffect, useRef } from 'react';
import './FoodSlider.css'; // Import your CSS file

const FoodSlider = () => {
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const foodItems = [
    {image:'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name:"Burger", 
      price:"$10", 
      description: "Burger with fries"},

      {image:'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name:"Burger", 
      price:"$10", 
      description: "Burger with fries"},

      {image:'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name:"Burger", 
      price:"$10", 
      description: "Burger with fries"},

      {image:'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name:"Burger", 
      price:"$10", 
      description: "Burger with fries"},

      {image:'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name:"Burger", 
      price:"$10", 
      description: "Burger with fries"},

      {image:'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name:"Burger", 
      price:"$10", 
      description: "Burger with fries"},
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    let interval;

    function scroll() {
      if (!isScrollingPaused) {
        const first = scrollContainer.querySelector('article');

        if (!isElementInViewport(first)) {
          scrollContainer.appendChild(first);
          scrollContainer.scrollTo(
            scrollContainer.scrollLeft - first.offsetWidth,0);
        }
        if (scrollContainer.scrollLeft !== scrollWidth) {
          scrollContainer.scrollTo(scrollContainer.scrollLeft + 1, 0);
        }
      }
    }

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.right > 0;
    }

    scrollContainer.addEventListener('mouseenter', () => setIsScrollingPaused(true));
    scrollContainer.addEventListener('mouseleave', () => setIsScrollingPaused(false));

    // Start scrolling on load
    interval = setInterval(scroll, 15);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [isScrollingPaused]);

  return (
    <div className="fs-container">
        <h1>Delicious Food Items</h1>
      <div id="infiniteScroll--left" ref={scrollContainerRef} className="scroll-container">
        {foodItems.map((foodItem, index) => (
          <article key={index}>
            <div className="wrapper">
              <div className="img">
                {/* Use an image for your food item */}
                <img src={foodItem.image} alt={foodItem.description} />
              </div>
              {/* <div className="content">
                <div>{foodItem.price}</div>
                <div>{foodItem.description}</div>
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FoodSlider;
