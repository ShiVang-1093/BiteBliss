import React, { useState } from 'react'
import r1 from '../Res-list/r1.jpg';
import r2 from '../Res-list/r2.jpeg';
import r3 from '../Res-list/r3.jpg';
import { useNavigate } from 'react-router-dom';
  

const Restaurants = () => {
    
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurant) => {

    navigate(`/menu/${restaurant.name}`);
  };
  const resdata = [
      {
        image: r1,
        name: "The Gourmet Bistro",
        description: "The Gourmet Bistro is an elegant and cozy restaurant located in the heart of the city. We offer a fine dining experience with a focus on modern European cuisine. Our menu features a variety of dishes made from locally sourced, seasonal ingredients. Whether you're looking for a romantic dinner or a special celebration, The Gourmet Bistro is the perfect choice.",
        specialty: "Modern European Cuisine"
      },
      {
        image: r2,
        name: "Spice Haven",
        description: "Spice Haven is a vibrant and colorful restaurant that brings the flavors of India to your table. Our menu is a journey through the diverse and rich culinary traditions of India, from spicy curries to tandoori delights. We use authentic spices and ingredients to create an unforgettable dining experience.",
        specialty: "Indian Cuisine"
      },
      {
        image: r3,
        name: "Sushi Delight",
        description: "Sushi Delight is your destination for the freshest and most delicious sushi in town. Our skilled chefs craft each sushi roll with precision and care. Whether you're a sushi aficionado or trying it for the first time, Sushi Delight guarantees a delightful experience.",
        specialty: "Japanese Cuisine"
      }
    ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleFilter = (event) => {
    setFilterTerm(event.target.value);
  }

  const filteredData = resdata.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) && (filterTerm === '' || restaurant.specialty === filterTerm);
  });

  return (
    <div className='restaurants bg-yellow m-[5%] w-[90%] flex flex-col flex-wrap justify-around self-center rounded-xl shadow-2xl '>
      <h1 className='text-center mt-5 mb-5 text-coffee text-4xl font-bold'>Browse through Restaurants</h1>
      <div className='search-filter flex m-[2%] w-[90%] self-center justify-between'>
        <input className='w-[60%] p-3 ml-[3%] rounded-lg border-none shadow-2xl' type='text' placeholder='Search by name' value={searchTerm} onChange={handleSearch} />
        <select className='w-1/4 p-3 mr-[3%] rounded-lg border-none shadow-2xl' value={filterTerm} onChange={handleFilter}>
          <option value=''>Filter by specialty</option>
          <option value='Modern European Cuisine'>Modern European Cuisine</option>
          <option value='Indian Cuisine'>Indian Cuisine</option>
          <option value='Japanese Cuisine'>Japanese Cuisine</option>
        </select>
      </div>
      {filteredData.map((restaurant, index) => (
        <div className='res-list grid grid-cols-[1fr,2fr] m-[2%] w-[86%] rounded-xl self-center bg-coffee shadow-[3xl] sm:grid-cols-[1fr] cursor-pointer' key={index} onClick={() => handleRestaurantClick(restaurant)}>
          <div className='rest-img w-full flex h-auto p-5 rounded-2xl object-cover hover:opacity-80'>
            <img className='self-center justify-center' src={restaurant.image} alt={restaurant.name} />
          </div>
          <div className='rest-content text-justify rounded-[10%] pr-[3%] w-full text-skin'>
            <br/>
            <h2 className='text-skin text-xl font-semibold'>{restaurant.name}</h2>
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

export default Restaurants;

