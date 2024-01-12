import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("firstname:", formData.firstname);
    console.log("lastname:", formData.lastname);
    console.log("Email:", formData.email);
    console.log("contact:", formData.contactno);
    console.log("Password:", formData.message);

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      contactno: "",
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
              type="firstname"
              name="firstname"
              onChange={handleChange}
              placeholder="Enter your First name"
              value={formData.firstname}
              required
            />
          </label>
          <label className="faq-lable flex flex-col basis-[45%] mb-2">
            <div className="faq-field font-bold text-xl leading-[44px]">Last name:</div>
            <input
              className="faq-fields p-3 w-full"
              type="lastname"
              name="lastname"
              onChange={handleChange}
              required
              placeholder="Enter your Last name"
              value={formData.lastname}
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
              type="contactno"
              name="contactno"
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
              value={formData.contactno}
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
          <button className="sub-btn bg-coffee text-yellow border-none rounded-[60px] px-8 py-4 cursor-pointer ml-[44%] mr-[44%] mt-5 mb-5 hover:scale-110 transition-transform" onClick={handleLogin}>
            Submit
          </button>
      </div>
    </div>
  );
}

export default ContactForm;
