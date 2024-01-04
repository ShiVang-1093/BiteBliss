import React, { useState, useEffect, useRef } from 'react';

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
    <div className="fs-container relative overflow-hidden mt-[5%] w-full ">
<style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            50% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
        <h1 className='text-5xl font-bold text-center'> Delicious Food Items</h1>
      <div style={{animation: 'scroll 30s linear infinite',
    animationIterationCount: 'infinite'}} ref={scrollContainerRef} className="scroll-container flex flex-nowrap ">

        {foodItems.map((foodItem, index) => (
          <article key={index} className='w-[300px] mr-5'>
            <div className="wrapper">
              <div className="img mt-12 mb-12">
                {/* Use an image for your food item */}
                <img className='h-full w-full rounded-xl' src={foodItem.image} alt={foodItem.description} />
                <div className='text-center p-3'>{foodItem.description}</div>
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
