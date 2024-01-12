import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      header: "What is Lorem Ipsum?",
      text: "Lorem Ipsum is simply dummy text...",
    },
    {
      id: 2,
      header: "Where does it come from?",
      text: "It is a long established fact...",
    },
    {
      id: 3,
      header: "Why do we use it?",
      text: "Contrary to popular belief...",
    },
    {
      id: 4,
      header: "Where can I get some?",
      text: "There are many variations of passages...",
    }
  ];

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
        <div className="overflow-hidden mb-5 rounded-xl shadow-2xl" key={faq.id}>
          <div className="bg-coffee cursor-pointer flex justify-between items-center p-4"
            onClick={() => handleToggle(faq.id)}>
              <h5 className="text-skin text-lg">{faq.header}</h5>
              <FontAwesomeIcon style={{ transform: activeIndex === faq.id ? 'rotate(180deg)' : '' }} className="text-skin" icon={faChevronDown}/>            
          </div>
          <div className="bg-coffee text-skin pl-4 pb-4 text-lg">
             {activeIndex === faq.id ? `${faq.text}` : ''}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
