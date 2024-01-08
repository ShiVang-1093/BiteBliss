import React from 'react';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Coupon = () => {
  const [cartItems, setCartItems] = useState([]);

  const resdata = [
    {
      name: "The Gourmet Bistro",
      discountOffer: 30,
      specialty: "Modern European Cuisine",
    },
    {
        name: "Spice Haven",
        discountOffer: 20,
        specialty: "Indian Cuisine"
      },
      {
        name: "Sushi Delight",
        discountOffer: 25,
        specialty: "Japanese Cuisine"
      }  ];

  const handleAddToCart = (restaurant) => {
    setCartItems((prevCartItems) => [...prevCartItems, restaurant.name]);
  };

  return (
    <div className="container mx-auto px-4">
      {resdata.map((res) => (
        <div key={res.name} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow rounded-lg shadow-md p-4 m-5">
            <h2 className="text-coffee text-2xl font-bold mb-2">{res.name}</h2>
            <p className="text-coffee text-lg mb-2">{res.discountOffer}% off</p>
            <p className="text-coffee text-sm">{res.specialty}</p>
            <button
              className={`inline-flex items-center px-4 py-2 mt-5 rounded-md font-medium text-coffee bg-green ${
                cartItems.includes(res.name) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green'
              }`}
              onClick={() => handleAddToCart(res)}
              disabled={cartItems.includes(res.name)}
            >
              <FaShoppingCart className="mr-2" />
              {cartItems.includes(res.name) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coupon;
