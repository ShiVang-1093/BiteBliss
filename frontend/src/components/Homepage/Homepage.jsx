import React from 'react'
import Res  from './Res'
import FoodSlider from './FoodSlider'
import Landing from './Landing'
import Testimonials from './Testimonial'

const Homepage = () => {
  return (
    <div>
      <Landing />
      <Res />
      <FoodSlider />
      <Testimonials/>
    </div>
  )
}

export default Homepage;