const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
require("dotenv").config();

exports.signup = async(req,res) =>{

    try{
        const {fname,lname,email,password,role} =req.body; 
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
            fname,
            lname,
            email,
            password:hashedPassword,
            role,
        })

        return res.status(201).json({
            success:true,
            massage:"user created successfully",
            // data:newUser,
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