import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);

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
    },
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      // If the clicked item is already active, close it
      setActiveIndex(null);
    } else {
      // Otherwise, open the clicked item
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      {faqs.map((faq) => (
        <div className="faq-item" key={faq.id}>
          <div
            className={`faq-header ${activeIndex === faq.id ? "active" : ""}`}
            onClick={() => handleToggle(faq.id)}>
              <h5>{faq.header}</h5>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            {activeIndex === faq.id && (
              <div className="faq-content">
                <p>{faq.text}</p>
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
