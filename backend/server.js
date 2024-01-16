const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

const dbconnection = require('./db');

app.use(express.json());

app.use('/app',require('./routes/Restaurant.route'));

dbconnection();
app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)} );