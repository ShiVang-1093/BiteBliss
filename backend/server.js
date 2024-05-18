const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');


const cookieSession = require('cookie-session');
const passportStrategy = require('./controller/GoogleOauth');

app.use(
    cookieSession({
        name: 'bitebliss-session',
        keys: ['biteblisssession'],
        maxAge: 24 * 60 * 60 * 100,
    })
)

require('dotenv').config();
const PORT = process.env.PORT;

const dbconnection = require('./db');

// const flash = require('connect-flash');

app.use(express.json());
app.use(cors(
    {
        origin:process.env.FURL,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    }
));
app.use(cookieParser());

const passport = require('passport');
// const session = require('express-session');
// const app = express();

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//     session({
//         secret: 'bitebliss shivang1093', 
//         resave: false,
//         saveUninitialized: true,
//         cookie:{secure:false}
//     })
// );
app.use('/auth',require('./routes/GoogleOauth.route'));


app.use('/user',require('./routes/Auth.route'));
app.use('/api/v1/user',require('./routes/Userroute'));
app.use('/api/v1/admin',require('./routes/Adminroute'));
// app.use('/res',require('./routes/User routes/Restaurant.route'));
// app.use('/coupons',require('./routes/User routes/Coupons.route'));
// app.use('/faq',require('./routes/User routes/FAQ.route'));
// app.use('/contact',require('./routes/User routes/Contact.route'));

dbconnection();
app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)} );