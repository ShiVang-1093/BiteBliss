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
    <div className="faq-flex1 m-[3%] flex flex-col items-center justify-center h-[80vh] bg-yellow shadow-md rounded-2xl">
      <div className="contactus-title font-bold text-3xl text-coffee mb-[2%] mt-[2%]">
        REACH OUT TO US...!
      </div>
      <div className="contact-form p-4 rounded-lg">
        <form className="doubt-form flex flex-row flex-wrap justify-between self-center sm:grid sm:grid-cols-[1fr]">
          <label className="faq-lable flex flex-col basis-[45%] m-2">
            <div className="faq-field font-bold text-xl">First name:</div>
            <input
              className="faq-fields"
              type="firstname"
              name="firstname"
              onChange={handleChange}
              placeholder="Enter your First name"
              value={formData.firstname}
              required
            />
          </label>
          <label className="faq-lable flex flex-col basis-[45%] m-2">
            <div className="faq-field font-bold text-xl">Last name:</div>
            <input
              className="faq-fields"
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
          <label className="faq-lable flex flex-col basis-[45%] m-2">
            <div className="faq-field font-bold text-xl">Email:</div>
            <input
              className="faq-fields"
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="abc@gmail.com"
              value={formData.email}
            />
          </label>
          <label className="faq-lable flex flex-col basis-[45%] m-2">
            <div className="faq-field font-bold text-xl">Contact Number:</div>
            <input
              className="faq-fields"
              type="contactno"
              name="contactno"
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
              value={formData.contactno}
            />
          </label>
          <br />
          <label className="faq-lable flex flex-col basis-[45%] m-2">
            <div className="faq-field font-bold text-xl">Message:</div>
            <input
              className="faq-massage"
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
          <button className="sub-btn bg-blue-500 text-white border-none rounded-full px-4 py-2 cursor-pointer ml-44 mr-44 self-start mt-10" onClick={handleLogin}>
            Submit
          </button>
      </div>
    </div>
  );
}

export default ContactForm;
