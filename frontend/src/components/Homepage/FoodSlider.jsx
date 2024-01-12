import React, { useState, useEffect, useRef, useMemo } from 'react';
import sl1 from '../images/slide1.jpg';
import sl2 from '../images/slide2.jpg';
import sl4 from '../images/slide4.jpg';
import sl5 from '../images/slide5.jpeg';
import sl6 from '../images/slide6.jpeg';
import { Link } from 'react-router-dom';

const FoodSlider = () => {
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const foodItems = useMemo(() => [
    {
      id: 1,
      image: sl1,
      name: 'Paneer Tikka',
    },
    {
      id: 2,
      image: sl2,
      name: 'Masala Dosa',
    },
    {
      id: 4,
      image: sl4,
      name: 'Aloo Gobi',
    },
    {
      id: 5,
      image: sl5,
      name: 'Chana Masala',
    },
    {
      id: 6,
      image: sl6,
      name: 'Vegetable Biryani',
    }
  ], []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let interval;

    function scroll() {
      if (!isScrollingPaused) {
        const itemWidth = scrollContainer.querySelector('article').offsetWidth;

        if (scrollContainer.scrollLeft % itemWidth === 0) {
          scrollContainer.scrollTo(scrollContainer.scrollLeft + 1, 0);
        }

        if (scrollContainer.scrollLeft >= itemWidth * (foodItems.length + 1)) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }

    // Start scrolling on load
    interval = setInterval(scroll, 15);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [isScrollingPaused, foodItems]);

  return (
    <div className="fs-container relative overflow-hidden mt-[5%] w-full">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <h1 className='text-5xl font-bold text-center'>Delicious Food Items</h1>
      <div
        onMouseEnter={() => setIsScrollingPaused(true)}
        onMouseLeave={() => setIsScrollingPaused(false)}
        style={{
          animation: 'scroll 30s linear infinite',
          animationIterationCount: 'infinite',
        }}
        ref={scrollContainerRef}
        className="scroll-container flex flex-nowrap "
      >
        {foodItems.map((foodItem, index) => (
          <article key={index} className='mr-8'>
              <div className="my-12">
                <Link to='/Restaurants'>
                <img className='cursor-pointer h-[28vh] w-[400px] rounded-xl xl:h-[18vh] xl:w-full md:w-[240px]' src={foodItem.image} alt={foodItem.name} />
                </Link>
                <div className='text-center p-3 font-medium text-2xl'>{foodItem.name}</div>
              </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FoodSlider;
