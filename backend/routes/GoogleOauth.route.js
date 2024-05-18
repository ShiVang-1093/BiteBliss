const express = require('express');
const router = express.Router();

require('../controller/GoogleOauth');

const passport = require('passport');
const session = require('express-session');
const app = express();

app.use(
    session({
        secret: 'bitebliss064shivang1093', 
        resave: false,
        saveUninitialized: true,
        cookie:{secure:false}
    })
);

app.use(passport.initialize());
app.use(passport.session());


//google auth
router.get('/google',
  passport.authenticate('google', { scope:[ 'email' ,'profile' ] }
));

router.get('/google/callback',
    passport.authenticate( 'google', {
        successRedirect: process.env.FURL,
        failureRedirect: "http://localhost:3000/Login"
}));
// router.get('/', (req, res) => {
//     if(req.user){
//         res.status(200).json({
//             success:true,
//             massage:"You are authenticated",
//         });
//         let name = req.user.displayName;
//         console.log(name);
//     }else{
//         res.status(400).json({
//             success:false,
//             massage:"You are not authenticated",
//         });
    
//     }
// });

// router.get('/google/failure', (req, res) => {
//     res.status(400).json({
//         success:false,
//         massage:"Google authentication failed",
//     });
// });

module.exports = router;
