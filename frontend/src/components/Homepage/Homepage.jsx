import React from 'react'
import Res  from './Res'
import FoodSlider from './FoodSlider'
import FAQ from './FAQ'
import Landing from './Landing'

const Homepage = () => {
  return (
    <div>
      <Landing />
      <Res />
      <FoodSlider />
      <FAQ />
    </div>
  )
}

export default Homepage;