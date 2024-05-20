import React from 'react';
import { useState,useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Coupon = () => {
  const [cartItems, setCartItems] = useState([]);
  const [resdata, setResData] = useState([]);

  // const resdata = [
  //   {
  //     name: "The Gourmet Bistro",
  //     discountOffer: 30,
  //     specialty: "Modern European Cuisine",
  //   },
  //   {
  //       name: "Spice Haven",
  //       discountOffer: 20,
  //       specialty: "Indian Cuisine"
  //     },
  //     {
  //       name: "Sushi Delight",
  //       discountOffer: 25,
  //       specialty: "Japanese Cuisine"
  //     },
  //     {
  //       name: "Gujarati Delights",
  //       discountOffer: 15,
  //       specialty: "Traditional Gujarati Cuisine",
  //     },
  //     {
  //       name: "Spice Paradise",
  //       discountOffer: 10,
  //       specialty: "Spicy Indian Delicacies",
  //     },
  //     {
  //       name: "Heritage Thali House",
  //       discountOffer: 20,
  //       specialty: "Authentic Gujarati Thalis",
  //     },
  //     {
  //       name: "Mango Masti",
  //       discountOffer: 25,
  //       specialty: "Mango-infused Delicacies",
  //     },
  //     {
  //       name: "Golden Dhaba",
  //       discountOffer: 18,
  //       specialty: "Punjabi Flavors",
  //     },
  //     {
  //       name: "Saffron Fusion",
  //       discountOffer: 22,
  //       specialty: "North Indian Fusion",
  //     },
  //     {
  //       name: "Royal Kebab Corner",
  //       discountOffer: 12,
  //       specialty: "Mughlai Kebabs",
  //     },
  //     {
  //       name: "Riverside Retreat",
  //       discountOffer: 30,
  //       specialty: "Scenic Dining by the River",
  //     },
  //     {
  //       name: "Flavors of Gujarat",
  //       discountOffer: 15,
  //       specialty: "Gujarati Delicacies",
  //     },
  //     {
  //       name: "Coastal Spice Lounge",
  //       discountOffer: 20,
  //       specialty: "Coastal Seafood",
  //     },
  //     {
  //       name: "Serenity Sizzlers",
  //       discountOffer: 25,
  //       specialty: "Sizzling Delights",
  //     },
  //     {
  //       name: "Gujarati Grills & Greens",
  //       discountOffer: 18,
  //       specialty: "Grilled Gujarati Cuisine",
  //     },
  //     {
  //       name: "Sunset Bites",
  //       discountOffer: 22,
  //       specialty: "Panoramic Sunset Views",
  //     },
  //     {
  //       name: "Gastronomic Gateway",
  //       discountOffer: 12,
  //       specialty: "International Gastronomy",
  //     },
  //     {
  //       name: "Floral Feast Fine Dining",
  //       discountOffer: 30,
  //       specialty: "Elegant Fine Dining Experience",
  //     },  
  // ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/user/coupons');
        const data = await response.json();
        setResData(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
  
    fetchData();
  }, []);


  const handleAddToCart = (restaurant) => {
    setCartItems((prevCartItems) => [...prevCartItems, restaurant.restaurantName]);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
        {resdata.map((res) => (
          <div key={res.name} className="bg-yellow rounded-lg shadow-md p-4 m-5">
            <h2 className="text-coffee text-2xl font-bold mb-2">{res.restaurantName}</h2>
            <p className="text-coffee text-lg mb-2">{res.discountOffer}% off</p>
            <p className="text-coffee text-sm">{res.speciality}</p>
            <button
              className={`inline-flex items-center px-4 py-2 mt-5 rounded-md font-medium text-coffee bg-green ${
                cartItems.includes(res.restaurantName) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green'
              }`}
              onClick={() => handleAddToCart(res)}
              disabled={cartItems.includes(res.restaurantName)}
            >
              <FaShoppingCart className="mr-2" />
              {cartItems.includes(res.restaurantName) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupon;
