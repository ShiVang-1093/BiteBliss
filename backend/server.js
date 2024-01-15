const express=require('express');
const app = express();

// require('dotenv').config();
// const PORT = process.env.PORT || 5000;
const dbconnection = require('./db');

app.use(express.json());

// app.use('/api',require('./routes/post_route'));

dbconnection(); //database connection
app.listen(3000,()=>{console.log("server started")} );