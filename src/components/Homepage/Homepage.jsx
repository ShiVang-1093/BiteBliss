import React from 'react'
import ImageSlider from './ImageSlider'
import Res  from './Res'
import FoodSlider from './FoodSlider'
import FAQ from './FAQ'

const Homepage = () => {
  return (
    <div>
      <ImageSlider />
      <Res />
      <FoodSlider />
      <FAQ />
    </div>
  )
}

export default Homepage;