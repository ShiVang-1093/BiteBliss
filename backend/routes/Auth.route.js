const express = require('express');
const router = express.Router();

const {login,signup} = require('../controller/Auth.ctr');
const{auth,isAdmin,isRestaurant,isVisitor,isMember,isSalesman} = require('../middlewares/Auth.mid');


// login signup
router.post('/login', login);
router.post('/signup', signup);

//protected route
router.get("/auth", auth , (req, res) => {
    return res.status(200).json({
        success:true,
        massage:"you are authenticated",
    });
});
router.get('/visitor',auth,isVisitor,(req,res)=>{
    return res.status(200).json({
        success:true,
        massage:"you are a visitor",
    });
})
router.get('/admin',auth,isAdmin,(req,res)=>{
    return res.status(200).json({
        success:true,
        massage:"you are a admin",
    });
})
router.get('/member',auth,isMember,(req,res)=>{
    return res.status(200).json({
        success:true,
        massage:"you are a member",
    });
})
router.get('/restaurant',auth,isRestaurant,(req,res)=>{
    return res.status(200).json({
        success:true,
        massage:"you are a restaurant",
    });
})
router.get('/salesman',auth,isSalesman,(req,res)=>{
    return res.status(200).json({
        success:true,
        massage:"you are a salesman",
    });
})

module.exports = router;
