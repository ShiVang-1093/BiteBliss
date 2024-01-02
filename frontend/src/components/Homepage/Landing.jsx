import React from 'react';
import {useTypewriter} from 'react-simple-typewriter'
// import i1 from '../images/3d_pizza.png';
import i3 from '../images/landing.svg';
import cook from '../images/cook.gif';

const Landing = () => {

  const [type] = useTypewriter({
    words:['BiteBliss'],
    loop:{},
    typeSpeed:200,
    deleteSpeed:200
  })

  return (
    <div className='h-screen flex 3xl:h-[83vh] 2xl:h-[80vh] xl:h-[80vh] relative mb-8'>
      {/* <div className='h-full w-3/12'> */}
         <p className='absolute text-6xl text-coffee font-bold text-center z-10 top-1/4 left-20 xl:left-16 lg:top-[65%] md:text-5xl md:font-bold sm:text-3xl sm:top-[45%] sm:left-8'>Welcome to</p>
         <br></br>
        <span className='absolute text-6xl text-coffee font-bold text-center z-10 top-[37%] left-20 xl:left-16 xl:top-[35%] lg:top-[65%] lg:left-[420px] md:left-[350px]  md:text-5xl md:font-bold sm:top-[45%] sm:left-[210px] sm:text-3xl'>{type}!!!</span> 

       <p className='absolute text-3xl text-coffee font-bold z-10 top-[55%] left-20 2xl:top-[65%] xl:top-3/4 xl:left-16 md:top-3/4 sm:top-[57%] sm:left-8 sm:text-2xl'>Eat your favourite food from your favourite restaurant,</p>
         <br></br>
         <p className='absolute text-3xl text-coffee font-bold z-10 top-[62%] left-20 2xl:top-[74%] xl:top-[81%] xl:left-16 md:top-[85%] sm:top-[68%] sm:left-8 sm:text-2xl '>Explore different Coupen offers</p>

        <button className='absolute px-5 py-4 bg-yellow text-coffee rounded-md text-2xl top-3/4 left-20 mt-4 2xl:top-[85%] xl:left-16 xl:top-[94%] sm:top-[80%] sm:left-[32%] sm:right-[32%]'>Go to Coupens</button>
      

        
      <img src={i3} alt='curve' className='absolute right-0 w-9/12 3xl:h-[83vh] h-[90vh] z-0'></img>
      <img src={cook} alt='food animation' className='absolute top-20 z-10 3xl:h-[57vh] 3xl:w-[57vh] 3xl:right-16 xl:h-[48vh] xl:w-[48vh] md:justify-center md:top-10 md:left-1/2 md:transform md:-translate-x-1/2 sm:top-10 sm:h-[30vh] sm:w-[30vh]'></img>
    </div>
  );
};

export default Landing;





      // <div className='h-[90vh] w-full flex 2xl:h-[75vh] xl:h-[60vh] md:flex-col-reverse'>
      //   <div className='h-5/6 w-4/12 md:w-full'>
      //     <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      //       <span className='text-3xl'>Cumque, minima. Id debitis non tempora tenetur,</span> 
      //       <p className='text-3xl'>modi impedit numquam?</p>
      //   </div>
      //   <div className='h-5/6 w-8/12 md:w-full relative'>
      //     <img src={i3} alt='curve' className="absolute inset-0 w-full h-full object-cover"></img>
      //     <img src={i1} alt='food animation' className="relative z-10 top-8 left-8 w-[32rem] h-[32rem] md:w-60 md:h-60 mx-auto"></img>
      //   </div>
      // </div>



// import React, { useState, useEffect } from 'react';
// import './ImageSlider.css'; 
// import i1 from '../images/i1.webp';
// import i2 from '../images/i2.webp';


// const ImageSlider = () => {
//   const [index, setIndex] = useState(0);
//   const slides = [
//     { image: i1}, 
//     { image: i2 }, 
//     { image: 'https://t3.ftcdn.net/jpg/02/38/10/52/360_F_238105207_2jrGVrP5mtzB0LFYJJoZIrI09xy7wHDp.jpg' }, // Replace with your restaurant image URL
//     { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHP9LVymyj2FgjUF4BU9RabtaGaUZAjqW2tKWyzfyaKFoChOTlQWKNw3eFlyqA1fYokBw&usqp=CAU' }, // Replace with your restaurant image URL
//   ]; 
//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       nextSlide();
//     }, 3000); 

//     return () => {
//       clearInterval(autoSlide);
//     };
//   }, []);

//   return (
//     <div className="slider-container">
//       <div className="slider" style={{ background: slides[index].background }}>
//         <img src={slides[index].image} alt={`Slide ${index}`} />
//       </div>
//       <div className="controls">
//         <span className="left-arrow" onClick={prevSlide}>
//           &#10094;
//         </span>
//         <span className="right-arrow" onClick={nextSlide}>
//           &#10095;
//         </span>
//       </div>
//       <div className="dots">
//         {slides.map((_, dotIndex) => (
//           <span
//             key={dotIndex}
//             className={`dot ${dotIndex === index ? 'active' : ''}`}
//             onClick={() => setIndex(dotIndex)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
