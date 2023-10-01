import React from 'react'
import './Restaurants.css'

const Restaurants = () => {
  const resdata = [
      {
        image: "https://example.com/restaurant1.jpg",
        name: "The Gourmet Bistro",
        description: "The Gourmet Bistro is an elegant and cozy restaurant located in the heart of the city. We offer a fine dining experience with a focus on modern European cuisine. Our menu features a variety of dishes made from locally sourced, seasonal ingredients. Whether you're looking for a romantic dinner or a special celebration, The Gourmet Bistro is the perfect choice.",
        specialty: "Modern European Cuisine"
      },
      {
        image: "https://example.com/restaurant2.jpg",
        name: "Spice Haven",
        description: "Spice Haven is a vibrant and colorful restaurant that brings the flavors of India to your table. Our menu is a journey through the diverse and rich culinary traditions of India, from spicy curries to tandoori delights. We use authentic spices and ingredients to create an unforgettable dining experience.",
        specialty: "Indian Cuisine"
      },
      {
        image: "https://example.com/restaurant3.jpg",
        name: "Sushi Delight",
        description: "Sushi Delight is your destination for the freshest and most delicious sushi in town. Our skilled chefs craft each sushi roll with precision and care. Whether you're a sushi aficionado or trying it for the first time, Sushi Delight guarantees a delightful experience.",
        specialty: "Japanese Cuisine"
      }
    ];

  return (
    <div className='restaurants'>
      <h1>Browse through Restaurants</h1>
        {resdata.map((restaurant, index) => (
      <div className='res-list'>
          <div className='rest-img' key={index}>
            <img src={restaurant.image} alt={restaurant.name} />
          </div>
          <div className='rest-content'>
            <br/>
            <h2>{restaurant.name}</h2>
            <br/>
            <p>{restaurant.description}</p>
            <br/>
            <p><strong>Specialty:</strong> {restaurant.specialty}</p>
          </div>
          <br/>
      </div>
        ))}
    </div>
  )
}

export default Restaurants