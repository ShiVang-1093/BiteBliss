import React, { useState } from 'react';

const Testimonials = () => {
  const [currentPerson, setCurrentPerson] = useState(0);
  const people = [
    {
      photo:"https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg",
      name: 'Susan Smith',
      profession: 'WEB DEVELOPER',
      description:
        'Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese. Squirty cheese say cheese manchego jarlsberg lancashire taleggio cheese and wine squirty cheese. Babybel pecorino feta macaroni cheese brie queso everyone loves gouda. Cheese and biscuits camembert de normandie fromage fromage macaroni cheese',
    },
    {
      photo:
        "https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg",
      name: 'Anna Grey',
      profession: 'UFC FIGHTER',
      description:
        "I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo",
    },
    {
      photo:
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
      name: 'Branson Cook',
      profession: 'ACTOR',
      description:
        'Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept',
    },
    {
      photo:
        "https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg",
      name: 'Julius Grohn',
      profession: 'PROFESSIONAL CHILD',
      description:
        'Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread.',
    },
  ];

  const slideLeft = () => {
    setCurrentPerson((prevPerson) => (prevPerson === 0 ? people.length - 1 : prevPerson - 1));
  };

  const slideRight = () => {
    setCurrentPerson((prevPerson) => (prevPerson === people.length - 1 ? 0 : prevPerson + 1));
  };

  return (
    <div className=" testimonial-slider mt-[3%] w-full flex flex-col justify-center pb-20">
      <div className="content-wrapper flex flex-col justify-center items-center">
        <h1 className='text-5xl font-bold text-center mb-7 sm:text-4xl sm:font-bold'>Testimonies</h1>
        {/* <div className="blue-line bg-yellow"></div> */}
        <div className="wrapper-for-arrows relative w-[70%] rounded-lg grid place-items-center overflow-hidden">
          <div style={{ opacity: 0 }} className="chicken absolute h-[200px] w-[250px] top-[12%] " ></div>
          <div className=" review-wrap bg-yellow w-full flex flex-col justify-center items-center pt-8">
            {/* <div
              id="imgDiv"
              className="img-div"
              style={{ backgroundImage: people[currentPerson].photo }}
            >
              <img  src={people[currentPerson].photo}></img>
            </div> */}
            <div id="personName" className="person-name text-2xl font-bold mb-5">
              {people[currentPerson].name}
            </div>
            {/* <div id="profession" className="profession">
              {people[currentPerson].profession}
            </div> */}
            <div id="description" className="description text-justify w-[70%] text-coffee text-[15px] leading-8 mb-10">
              {people[currentPerson].description}
            </div>
          </div>
          
          <div style={{ transform: 'rotate(135deg)', WebkitTransform: 'rotate(135deg)' }} className="left-arrow-wrap arrow-wrap absolute top-1/2 left-[5%]">
        <div className="arrow h-7 w-7 border-solid border-coffee border-t-0	border-l-0 border-r-8	border-b-8 transition-transform duration-300 cursor-pointer hover:transition-transform hover:duration-300 hover:transform scale-110" id="leftArrow" onClick={slideLeft}></div>
      </div>
      <div style={{ transform: 'rotate(-45deg)', WebkitTransform: 'rotate(-45deg)' }} className="right-arrow-wrap arrow-wrap absolute top-1/2 right-[5%]">
        <div className="arrow h-7 w-7 border-solid border-coffee border-t-0	border-l-0 border-r-8	border-b-8 transition-transform duration-300 cursor-pointer hover:transition-transform hover:duration-300 hover:transform scale-110" id="rightArrow" onClick={slideRight}></div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
