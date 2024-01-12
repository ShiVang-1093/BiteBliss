import React from 'react'
// import wow from '../images/Wow.gif';
import chef from '../images/chef.gif';
import { Link } from 'react-router-dom';


const Res = () => {
  return (
    <div className='res-sec relative flex flex-col items-center	text-center p-[2%] 3xl:mt-[10vh] 2xl:mt-[10vh] xl:mt-[10vh] sm:mt-0 bg-yellow'>
        <h1 className='text-5xl mt-4 font-bold sm:text-4xl sm:font-bold'>Experiance the delightness</h1>
        <div className='w-[85%] p-7 mb-5 grid grid-cols-2 gap-8 xl:grid-cols-1'>
            <div className='overflow-hidden	rounded-xl flex xl:justify-center xl:items-center '>
                <img className='w-[80%] h-[95%] max-w-full max-h-full xl:w-[40%] xl:h-full' src={chef} alt=''></img>
            </div>
            <div className='text-justify'>
              <ul className='text-xl list-disc py-5'>
                <li className='py-2'>Go through the restaurant list page where you can easily search for your desired dining destination.</li>
                <li className='py-2'>Buy an exclusive bonus coupons and vouchers.</li>
                <li className='py-2'>This section is your gateway to discovering and savoring the diverse offerings of our featured restaurants.</li>
              </ul>
                {/* <p>To get started, head over to By clicking on a specific restaurant, you'll be seamlessly transported to its menu section. Here, you have the flexibility to make reservations for lunch or dinner, place online food orders, and even unlock exclusive bonus coupons and vouchers for added value. Our aim is to provide you with a delightful dining experience, and this section is your gateway to discovering and savoring the diverse offerings of our featured restaurants. Enjoy your culinary journey!</p> */}
                <p className='text-3xl text-center font-bold text-coffee md:text-2xl'>"Unleash Flavorful Savings: BiteBliss, Where Every Bite Comes with a Delightful Discount!"</p>
            </div>
        </div>
        <Link to='/Coupons' className='absolute bg-coffee text-yellow p-4 rounded-lg bottom-5 right-8 hover:scale-110 transition-transform'>Coupon Offers</Link>
    </div>
  )
}

export default Res;
