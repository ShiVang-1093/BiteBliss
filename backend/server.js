const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

const dbconnection = require('./db');

app.use(express.json());

app.use('/res',require('./routes/Restaurant.route'));
app.use('/testi',require('./routes/Testimonial.route'));
app.use('/faq',require('./routes/FAQ.route'));
app.use('/coupons',require('./routes/Coupons.route'));
app.use('/contact',require('./routes/Contact.route'));
app.use('/login',require('./routes/Login.route'));

dbconnection();
app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)} );