import React from 'react'

const Res = () => {
  return (
    <div className='res-sec relative flex flex-col items-center	text-center p-[2%] 3xl:mt-[10vh] 2xl:mt-[10vh] xl:mt-[10vh] sm:mt-0 bg-green'>
        <h1 className='text-5xl font-bold'>Experiance the delightness</h1>
        <div className='w-[90%] p-7 grid grid-cols-2 gap-8 xl:grid-cols-1'>
            <div className='overflow-hidden	rounded-xl flex xl:justify-center xl:items-center '>
                <img className='w-auto h-auto max-w-full max-h-full' src='https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.webp?b=1&s=170667a&w=0&k=20&c=P3jIQq8gVqlXjd4kP2OrXYyzqEXSWCwwYtwrd81psDY=' alt=''></img>
            </div>
            <div className='res-info text-2xl text-justify'>
                <p>To get started, head over to the restaurant list page where you can easily search for your desired dining destination.By clicking on a specific restaurant, you'll be seamlessly transported to its menu section. Here, you have the flexibility to make reservations for lunch or dinner, place online food orders, and even unlock exclusive bonus coupons and vouchers for added value. Our aim is to provide you with a delightful dining experience, and this section is your gateway to discovering and savoring the diverse offerings of our featured restaurants. Enjoy your culinary journey!</p>
            </div>
        </div>
    </div>
  )
}

export default Res;
