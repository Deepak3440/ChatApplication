const jwt=require('jsonwebtoken');
const JWT_SECRET="DHDNDddwu";
const User = require('./../models/usermodel');

const protectRoute= async (req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"unauthorized: no token provided"})

        }

        const decoded=jwt.verify(token,JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"unauthorized: invalid token"})

        }
        const user=await User.findById(decoded.userId).select('-password');
        if(!user){
            return res.status(401).json({error:"user not found"})


        }
        req.user=user;
        next();


    }
    catch(err){
        console.log("Error in protectRoute control", err.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports=protectRoute;