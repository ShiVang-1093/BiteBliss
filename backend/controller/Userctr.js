const Contact = require('../model/Contact');
const Coupon = require('../model/Coupons');
const FAQ = require('../model/FAQ');
const Restaurant = require('../model/Restaurant');
const Testimonial = require('../model/Testimonial');

require('dotenv').config();

// Get all coupons
exports.getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all FAQs
exports.getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
// Get a restaurant by ID
exports.getRestaurantById = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all testimonials
exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


// const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//         user: 'Bitebliss.customercare@gmail.com', 
//         pass: process.env.EMAIL_PASSWORD, 

//     },
// });

exports.createContact = async (req, res) => {
    try {
        const { fname, lname, phone, message } = req.body;

        // Assuming you have user authentication in place and user's email is available in req.user.email
        const userEmail = req.user.email;

        const contact = await Contact.create({ fname, lname, email: userEmail, phone, message });

        // Send email to the owner from the user's email
        // const ownerEmail = 'Bitebliss.customercare@gmail.com'; 
        // const mailOptions = {
        //     from: userEmail, 
        //     to: ownerEmail,
        //     subject: 'New Contact Form Submission',
        //     text: `Name: ${fname} ${lname}\nEmail: ${userEmail}\nPhone: ${phone}\nMessage: ${message}`,
        // };

        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.error('Error sending email:', error);
        //     } else {
        //         console.log('Email sent:', info.response);
        //     }
        // });

        return res.status(201).json({ contact }); // Sending the created contact back in the response
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

