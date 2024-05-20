import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Fetch FAQ data from the backend when the component mounts
    fetch('http://localhost:4000/api/v1/user/faqs')
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error('Error fetching FAQ data:', error));
  }, []);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      // If the clicked item is already active, close it
      setActiveIndex(0);
    } else {
      // Otherwise, open the clicked item
      setActiveIndex(index);
    }
  };

  return (
    <div className="mt-[4%] max-w-3xl mr-auto ml-auto p-4 sm:p-7">
      <h1 className="text-4xl font-bold text-center text-coffee mb-[6%]">Frequently asked questions</h1>
      {faqs.map((faq) => (
        <div className="overflow-hidden mb-5 rounded-xl shadow-2xl" key={faq._id}>
          <div className="bg-coffee cursor-pointer flex justify-between items-center p-4"
            onClick={() => handleToggle(faq._id)}>
              <h5 className="text-skin text-lg">{faq.question}</h5>
              <FontAwesomeIcon style={{ transform: activeIndex === faq._id ? 'rotate(180deg)' : '' }} className="text-skin" icon={faChevronDown}/>            
          </div>
          <div className="bg-coffee text-skin pl-4 pb-4 text-lg">
             {activeIndex === faq._id ? `${faq.answer}` : ''}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
