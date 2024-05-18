const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const passport = require('passport');
require("dotenv").config();

exports.signup = async(req,res) =>{

    try{
        const {uname,email,password,role} =req.body; 
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                massage:"user already exist",
            })
        }

        // if (password !== confirm_password) {
        //     return res.status(400).json({ msg: 'Password does not match' });
        // }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                massage:"error in hashing password",
             })
        }

        const newUser = await User.create({
            uname,
            email,
            password:hashedPassword,
            role,
        })

        return res.status(201).json({
            success:true,
            massage:"user created successfully",
        })
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            massage:"User can't be registered, error in signup",
        })
    }
}

exports.login = async(req,res) =>{

    try{
        //fetch
        const {email,password} = req.body;

        //validation
        if(!email || !password){
            return res.status(400).json({
                success:false,
                massage:"Please enter all fields",
            })
        }

        //check for registered user
        let registeredUser = await User.findOne({email});

        if(!registeredUser){
            return res.status(401).json({
                success:false,
                massage:"User does not exist",
            })
        }

        //verify password and generate token 

        const payload = {
            email:registeredUser.email,
            id:registeredUser._id,
            role:registeredUser.role
        }

        const isPasswordCorrect = await bcrypt.compare(password,registeredUser.password);
       
        if(isPasswordCorrect){
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiresIn:"2h"}
            )
            
            registeredUser = registeredUser.toObject();
            registeredUser.token = token;
            registeredUser.password=undefined;
            
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }            

            //send cookie in response: name,value,options
            return res.cookie("token",token,options).status(200).json({
                success:true,
                massage:"User logged in successfully",
                token,
                registeredUser,
            })  
        }
        else{
            return res.status(403).json({
                success:false,
                massage:"Invalid credentials",
            });
        }

    } 
    catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            massage:"User can't be logged in, error in login",
        })
    }
}

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.serializeUser((user, done)=> {
    done(null, user);
  });
  
passport.deserializeUser((user, done)=> {
    done(null, user);
  });

// exports.getUser = async (req, res) => {
//     try {
//         // Access the user ID from the authenticated request
//         const userId = req.user.id;

//         // Find the user in the database
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }

//         return res.status(200).json(user);
//     } catch (error) {
//         console.error('Error retrieving user:', error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// };

// exports.updateUser = async (req, res) => {
//     try {
//         // Access the user ID from the authenticated request
//         const userId = req.user.id;

//         // Find the user in the database
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }

//         req.body.isAdmin = user.isAdmin;

//         const result = await User.findByIdAndUpdate(
//             userId,
//             req.body,
//             { new: true }
//         );

//         return res.status(200).json(result);
//     } catch (error) {
//         console.error('Error updating user:', error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// };