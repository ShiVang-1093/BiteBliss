import React, { useState } from "react";
import isLoggedin from "../Auth/isLoggedin";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleForm = async (event) => {
    event.preventDefault();

    // Check if the user is logged in (replace with your actual logic)
    const loggedin = isLoggedin();

    if (loggedin) {
      // If user is logged in, submit the form data to the server
      try {
        const response = await fetch('http://localhost:4000/api/v1/user/contactus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Contact created:', data);
          // Optionally, you can handle success, reset the form, or redirect the user
        } else {
          console.error('Error creating contact:', response.statusText);
          // Handle the error appropriately
        }
      } catch (error) {
        console.error('Error creating contact:', error.message);
        // Handle the error appropriately
      }
    } else {
      
      try {
        const response = await fetch('http://localhost:4000/api/v1/user/contactus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData }), // Include owner's email in the form data
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Contact created:', data);
          // Optionally, you can handle success, reset the form, or redirect the user
        } else {
          console.error('Error creating contact:', response.statusText);
          // Handle the error appropriately
        }
      } catch (error) {
        console.error('Error creating contact:', error.message);
        // Handle the error appropriately
      }
    }

    // Reset the form
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="faq-flex1 flex flex-col items-center justify-center  m-[6%] h-auto w-[88%] bg-yellow shadow-md rounded-2xl">
      <div className="contactus-title font-bold text-3xl text-coffee mt-6">
        REACH OUT TO US...!
      </div>
      <div className="contact-form mt-[3%] pl-4 pr-4 pb-4 rounded-lg">
        <form className="doubt-form ml-[2%] flex flex-row flex-wrap justify-between self-center sm:grid sm:grid-cols-[1fr]">
          <label className="faq-lable flex flex-col basis-[45%] mb-2">
            <div className="faq-field font-bold text-xl leading-[44px]">First name:</div>
            <input
              className="faq-fields p-3 w-full"
              type="fname"
              name="fname"
              onChange={handleChange}
              placeholder="Enter your First name"
              value={formData.fname}
              required
            />
          </label>
          <label className="faq-lable flex flex-col basis-[45%] mb-2">
            <div className="faq-field font-bold text-xl leading-[44px]">Last name:</div>
            <input
              className="faq-fields p-3 w-full"
              type="lname"
              name="lname"
              onChange={handleChange}
              required
              placeholder="Enter your Last name"
              value={formData.lname}
            />
          </label>
          <br />
          <br />
          <label className="faq-lable flex flex-col basis-[45%] mb-2">
            <div className="faq-field font-bold text-xl leading-[44px]">Email:</div>
            <input
              className="faq-fields p-3 w-full"
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="abc@gmail.com"
              value={formData.email}
            />
          </label>
          <label className="faq-lable flex flex-col basis-[45%] mb-2">
            <div className="faq-field font-bold text-xl leading-[44px]">Contact Number:</div>
            <input
              className="faq-fields p-3 w-full"
              type="phone"
              name="phone"
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
              value={formData.phone}
            />
          </label>
          <br />
          <label className="faq-lable flex flex-col basis-[45%] mb-2">
            <div className="faq-field font-bold text-xl leading-[44px]">Message:</div>
            <input
              className="faq-massage p-1 rounded-lg outline-none h-16 w-[213%] sm:w-auto"
              type="message"
              name="message"
              onChange={handleChange}
              required
              value={formData.message}
            />
          </label>
          <br />
          <br />
        </form>
          <button className="sub-btn bg-coffee text-yellow border-none rounded-[60px] px-8 py-4 cursor-pointer ml-[44%] mr-[44%] mt-5 mb-5 hover:scale-110 transition-transform" onClick={handleForm}>
            Submit
          </button>
      </div>
    </div>
  );
}

export default ContactForm;
