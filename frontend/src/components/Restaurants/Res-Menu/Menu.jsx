import React from 'react';
import { useParams } from 'react-router-dom';

const Menu = () => {
  const { restaurantName } = useParams();

  // Replace this with your actual menu data
  const menuData = {
    "The Gourmet Bistro": [
      { item: "Gourmet Pasta", price: "$14.99" },
      { item: "Filet Mignon", price: "$29.99" },
      { item: "Chocolate Fondue", price: "$12.99" },
      { item: "Salmon Risotto", price: "$24.99" },
      { item: "Truffle Pizza", price: "$19.99" },
      { item: "Vegetarian Lasagna", price: "$16.99" },
      { item: "Lobster Bisque", price: "$18.99" },
      { item: "Duck Confit", price: "$26.99" },
      { item: "Tiramisu", price: "$8.99" },
      { item: "Creme Brulee", price: "$9.99" },
      { item: "Mushroom Risotto", price: "$20.99" },
      { item: "Apple Pie", price: "$10.99" },
    ],
    "Spice Haven": [
      { item: "Chicken Curry", price: "$10.99" },
      { item: "Paneer Tikka", price: "$15.99" },
      { item: "Mango Lassi", price: "$5.99" },
      { item: "Butter Chicken", price: "$14.99" },
      { item: "Aloo Gobi", price: "$12.99" },
      { item: "Samosa Chaat", price: "$8.99" },
      { item: "Dal Tadka", price: "$11.99" },
      { item: "Chicken Biryani", price: "$18.99" },
      { item: "Palak Paneer", price: "$13.99" },
      { item: "Naan Bread", price: "$3.99" },
      { item: "Raita", price: "$4.99" },
      { item: "Gulab Jamun", price: "$6.99" },
    ],
    "Sushi Delight": [
      { item: "Dragon Roll", price: "$18.99" },
      { item: "Nigiri Assortment", price: "$22.99" },
      { item: "Green Tea Ice Cream", price: "$6.99" },
      { item: "Spicy Tuna Roll", price: "$16.99" },
      { item: "Salmon Sashimi", price: "$20.99" },
      { item: "Vegetable Tempura", price: "$14.99" },
      { item: "Rainbow Roll", price: "$24.99" },
      { item: "Eel Avocado Roll", price: "$19.99" },
      { item: "Miso Soup", price: "$5.99" },
      { item: "Edamame", price: "$4.99" },
      { item: "California Roll", price: "$15.99" },
      { item: "Matcha Cheesecake", price: "$8.99" },
    ],
  };
  

  const restaurantMenu = menuData[restaurantName] || [];

      return (
        <div className="menu-container m-[5%] w-[90%] flex flex-col items-center justify-around self-center rounded-xl bg-coffee">
          <h1 className="text-center mt-5 mb-10 text-skin text-4xl font-bold">{restaurantName} Menu</h1>
          <div className="menu-items w-full">
            {restaurantMenu.map((item, index) => (
              <div className="flex w-full items-center mb-3 p-4 rounded-xl" key={index}>
                <p className="flex-grow text-skin text-lg font-semibold ml-[4%]">{item.item}</p>
                <p className="text-skin mr-[4%]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

  
  export default Menu;
  
  //   return (
  //     <div className="menu-container m-[5%] w-[90%] flex flex-col items-center justify-around self-center rounded-xl bg-coffee">
  //       <h1 className="text-center mt-5 mb-10 text-skin text-4xl font-bold">{restaurantName} Menu</h1>
  //       <div className="menu-items w-full">
  //         {restaurantMenu.map((item, index) => (
  //           <div className="grid grid-cols-2 md:grid-cols-1 items-center mb-3 p-3 rounded-xl" key={index}>
  //           <p className="flex-grow text-skin text-lg font-semibold">{item.item}</p>
  //             <p className="text-skin">{item.price}</p>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };