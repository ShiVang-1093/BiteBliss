import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: Number(),
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
    // Perform login logic here
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
    <div className="faq-flex1">
      <div className="contactus-title">REACH OUT TO US...!</div>
      <div className="contact-form">
        <form className="doubt-form">
          <label className="faq-lable">
            <div className="faq-field">First name:</div>
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
          <label className="faq-lable">
            <div className="faq-field">Last name:</div>
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
          <label className="faq-lable">
            <div className="faq-field">Email:</div>
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
          <label className="faq-lable">
            <div className="faq-field">Contact Number:</div>
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
          <label className="faq-lable">
            <div className="faq-field">Message:</div>
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
          <button className="sub-btn" onClick={handleLogin}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
