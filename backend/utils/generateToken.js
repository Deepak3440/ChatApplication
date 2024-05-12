const jwt=require('jsonwebtoken');
const JWT_SECRET="DHDNDddwu";
const NODE_ENV='development';

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},JWT_SECRET,{
        expiresIn:'30d'
    });

    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 *1000,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV!=='development'
    })
}
module.exports=generateTokenAndSetCookie;