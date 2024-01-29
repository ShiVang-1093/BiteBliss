// Middleware for authentication
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.auth = (req, res, next) => {
    // Check if user is authenticated
    try{
        const token = req.header("Authorization").replace("Bearer ","");
        if(!token){
            return res.status(400).json({
                success:false,
                massage:"token not found",
            });
        }
        //verify token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            req.user = payload;

        }catch(err){
            return res.status(401).json({
                success:false,
                massage:"invalid token",
            })
        }
        next();

    } catch(err){
        return res.status(401).json({
            success:false,
            massage:"something went wrong"
        });
    }
};

// Middleware for role-based authorization

// Middleware for Visitor role authorization
exports.isVisitor = (req,res,next) =>{
    
    try{
        if(req.user.role !== 'Visitor'){
            return res.status(401).json({
                success:false,
                massage:"protected for visitors only",
            })
        };
        next();

    }catch(err){
        return res.status(401).json({
            success:false,
            massage:"role doesn't match",
        })
    }
}

// Middleware for Admin role authorization
exports.isAdmin = (req,res,next) =>{
    
    try{
        if(req.user.role !== 'Admin'){
            return res.status(401).json({
                success:false,
                massage:"protected for Admin only",
            })
        };
        next();
        
    }catch(err){
        return res.status(401).json({
            success:false,
            massage:"Admin role doesn't match",
        })
    }
}

// Middleware for Member role authorization
exports.isMember = (req,res,next) =>{
    
    try{
        if(req.user.role !== 'Member'){
            return res.status(401).json({
                success:false,
                massage:"protected for Members only",
            })
        };
        next();

    }catch(err){
        return res.status(401).json({
            success:false,
            massage:"Member role doesn't match",
        })
    }
}

// Middleware for Restaurant role authorization
exports.isRestaurant = (req,res,next) =>{
    
    try{
        if(req.user.role !== 'Restaurant'){
            return res.status(401).json({
                success:false,
                massage:"protected for Restaurants only",
            })
        };
        next();
        
    }catch(err){
        return res.status(401).json({
            success:false,
            massage:"Restaurants role doesn't match",
        })
    }
}

// Middleware for Salesman role authorization
exports.isSalesman = (req,res,next) =>{
    
    try{
        if(req.user.role !== 'Salesman'){
            return res.status(401).json({
                success:false,
                massage:"protected for Salesman only",
            })
        };
        next();

    }catch(err){
        return res.status(401).json({
            success:false,
            massage:"Salesman role doesn't match",
        })
    }
}
