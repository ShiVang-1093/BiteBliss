import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentPerson, setCurrentPerson] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/user/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const dotClick = (index) => {
    setCurrentPerson(index);
  };

  // const slideLeft = () => {
  //   setCurrentPerson((prevPerson) => (prevPerson === 0 ? testimonials.length - 1 : prevPerson - 1));
  // };

  // const slideRight = () => {
  //   setCurrentPerson((prevPerson) => (prevPerson === testimonials.length - 1 ? 0 : prevPerson + 1));
  // };

    return (
      <div className="testimonial-slider mt-[3%] w-full flex flex-col justify-center pb-20">
        <div className="content-wrapper flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-center mb-7 sm:text-4xl sm:font-bold">Testimonies</h1>
          <div className="wrapper-for-dots relative w-[70%] rounded-lg grid place-items-center overflow-hidden">
            <div className="review-wrap bg-yellow w-full flex flex-col justify-center items-center pt-8">
              <div id="personName" className="person-name text-2xl font-bold mb-5">
                {testimonials[currentPerson]?.name}
              </div>
              <div id="description" className="description text-justify w-[70%] text-coffee text-[15px] leading-8 mb-8">
                " {testimonials[currentPerson]?.content} "
              </div>
              <div className="dots mt-2 mb-8 flex">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`dot cursor-pointer w-4 h-4 mx-2 rounded-full ${index === currentPerson ? 'bg-coffee' : 'border-2 border-coffee'}`}
                    onClick={() => dotClick(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );


};

export default Testimonials;
